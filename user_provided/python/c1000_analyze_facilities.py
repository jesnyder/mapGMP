import codecs
import datetime
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


def consolidate_address():
    """
    list addresses
    """

    df_provided = retrieve_df('address_provided')

    #try:
    df_consolidated = retrieve_df('address_consolidated')
    df_consolidated = df_provided.append(df_consolidated)
    df_consolidated.drop_duplicates(subset ="Legal Name",
                     keep = False, inplace = True)

    #except:
    """
    df_consolidated = df_provided
    df_consolidated = df_consolidated.sort_values(by = "Legal Name")
    """

    df_consolidated = reset_df(df_consolidated)
    df_consolidated.to_csv(retrieve_path('address_consolidated'))


def lookup_address(df):
    """

    """
    addresses_provided = retrieve_df('address_provided')
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

    df_original = df
    len_original = len(list(df_original['Legal Name']))

    for name in list(df_original['Legal Name']):

        for term in retrieve_list('facilites_terms_to_remove'):

            if term in name:
                print('name found ' + str(name) + ' due to ' + str(term))
                df = df[df['Legal Name'] != name]
                len_scrubbed = len(list(df['Legal Name']))
                print(str() + ' original / ' + str(len_scrubbed) + ' scrubbed / ' + str(len_original - len_scrubbed) + ' removed' )
                continue

    assert len_original > len_scrubbed
    #df = reset_df(df)
    return(df)
