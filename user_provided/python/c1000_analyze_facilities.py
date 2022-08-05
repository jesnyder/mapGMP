import codecs
import datetime
import json
import math
import matplotlib as mpl
from matplotlib import cm
import matplotlib.pyplot as plt
from matplotlib.colors import LinearSegmentedColormap
import numpy as np
import os
from random import random
import pandas as pd
import plotly
from plotly.tools import FigureFactory as ff
import shutil

from c0001_admin import display_df
from c0001_admin import list_unique
from c0001_admin import reset_df
from c0001_admin import retrieve_df
from c0001_admin import retrieve_list
from c0001_admin import retrieve_path
from c0001_admin import retrieve_ref
from c0001_admin import str_list
from c0001_admin import unique_dfcol

from c0002_funcs import normalize_list
from c0002_funcs import size_list
from c0002_funcs import list_types

from map_maker import lookup_gps


def analyze_facilities():
    """
    generate html and javascript
    """

    """
    # retrieve and scrub fda inspection data
    df = retrieve_df('source_fda')
    display_df('df', df)

    # remove un-used columns
    for remove_col in retrieve_list('fda_cols_to_remove'):
        del df[remove_col]

    # remove facility types
    df = df.drop_duplicates()
    df = scrub_facilites(df)
    display_df('df', df)

    consolidate_address()
    lookup_address(df)
    """

    geojson_address()


def consolidate_address():
    """
    list addresses
    """

    df_provided = retrieve_df('address_provided')

    try:
        df_consolidated = retrieve_df('address_consolidated')
        df_consolidated = df_provided.append(df_consolidated)
        # consider the first as original and drop second
        # https://www.geeksforgeeks.org/python-pandas-dataframe-drop_duplicates/
        df_consolidated.drop_duplicates(subset ="Legal Name",
                     keep = first, inplace = True)

    except:
        df_consolidated = df_provided
        df_consolidated = df_consolidated.sort_values(by = "Legal Name")

    df_consolidated = reset_df(df_consolidated)
    df_consolidated.to_csv(retrieve_path('address_consolidated'))


def geojson_address():
    """

    """

    df = pd.read_csv(retrieve_path('address_facilities'))
    del df['Unnamed: 0']
    display_df('df', df)


    new_key = ["type", "features"]
    fac_dict = dict.fromkeys(new_key, 0)

    fac_dict["type"] = "FeatureCollection"
    fac_dict["features"] = []

    for i in range(len(list(df['Legal Name']))):

        lat = list(df['lat'])[i]
        lon = list(df['lon'])[i]

        # set each facility major keys
        new_key2 = ["type", "properties", "geometry"]
        facility_dict = dict.fromkeys(new_key2, 0)
        facility_dict['type'] = "Feature"

        # set each facility's properties
        property_key = ["name", "address"]
        property_dict = dict.fromkeys(property_key, 0)
        property_dict['name'] = list(df['Legal Name'])[i]
        property_dict['address'] = list(df['display'])[i]
        facility_dict['properties'] = property_dict

        # set each facility's geometry
        geo_key = ["type", "coordinates"]
        geo_dict = dict.fromkeys(geo_key, 0)
        geo_dict["type"] = "Point"
        geo_dict["coordinates"] = [lat , lon]
        facility_dict['geometry'] = geo_dict

        # append the facility to the list of facilities
        fac_dict['features'].append(facility_dict)


    file_dst = retrieve_path('geojson_facility')
    with open(file_dst, "w") as f:
        json.dump(fac_dict, f, indent = 1)
    f.close()

    file_dst = retrieve_path('js_facility')
    with open(file_dst, "w") as f:
        f.write('var facilitiyList = ' + '\n')
        json.dump(fac_dict, f, indent = 1)
    f.close()


def lookup_address(df):
    """
    use open street maps
    find lat and lon for the address
    remove any address not found from df
    """
    addresses_provided = retrieve_df('address_consolidated')
    #display_df('addresses_provided', addresses_provided)

    names = list(df['Legal Name'])
    cities = list(df['City'])
    states = list(df['State'])
    zips = list(df['Zip'])

    lats, lons, displays, addresses = [], [], [], []
    for i in range(len(zips)):

        print(str(round(100*i/len(zips),3)) + ' % complete. '  + str(i) + ' out of ' + str(len(zips)))

        address = str(zips[i])  + ' , '
        address = address + str(cities[i]) + ' , '
        address = address + str(states[i])

        address_specific = addresses_provided[addresses_provided['Legal Name'] == names[i] ]
        #display_df('address_specific', address_specific)

        if len(list(address_specific['lat'])) > 0:
            lat = list(address_specific['lat'])[0]
            lon = list(address_specific['lon'])[0]
            display = list(address_specific['display'])[0]
            print('address found for: ' + names[i])

        else:
            lat, lon, display = lookup_gps(address)
            print('address looked up for: ' + names[i])

        lats.append(lat)
        lons.append(lon)
        displays.append(display)
        addresses.append(address)

    df['lat'] = lats
    df['lon'] = lons
    df['display'] = displays
    df['address'] = addresses

    df = df[df['lat'] != 0]
    df = reset_df(df)
    df.to_csv(retrieve_path('address_facilities'))
    display_df('df', df)


def scrub_facilites(df):
    """
    Remove facilities of a certain name
    """

    counter = 0

    df_original = df
    len_original = len(list(df_original['Legal Name']))

    for name in list(df_original['Legal Name']):

        for term in retrieve_list('facilites_terms_to_remove'):

            if term in name:
                #print('name found ' + str(name) + ' due to ' + str(term))
                df = df[df['Legal Name'] != name]
                len_scrubbed = len(list(df['Legal Name']))

                # print to console progress
                if len_original - len_scrubbed > counter:
                    print(str(len_original) + ' original / ' + str(len_scrubbed) + ' scrubbed / ' + str(len_original - len_scrubbed) + ' removed' )
                    counter = int(counter + 100)

                continue

    assert len_original > len_scrubbed
    print(str(len_original) + ' original / ' + str(len_scrubbed) + ' scrubbed / ' + str(len_original - len_scrubbed) + ' removed' )
    #df = reset_df(df)
    return(df)
