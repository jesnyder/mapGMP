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
import requests
import pandas as pd
import plotly
from plotly.tools import FigureFactory as ff
import shutil


from admin import reset_df
from admin import retrieve_list
from admin import retrieve_path
from map_maker import lookup_gps


def main():
    """
    visualize map data in an interactive form

    Tasks:
        1. Download us county geojson file and save
           to user_provided/geojson
        2. Download CDC stats to user_provided/cdc_stats
        3. Coregister county geojson with cdc statistics
           and save as a .js file that declares a unqiue
           variable equal to a geojson dataset defining the
           counties geometry and cdc statistics with a heatmap color

        5. Geolocate FDA sites: Lookup GPS locations of
        FDA Inspection Sites: Create js file with a unique
        variable set equal to a a geoj
    """

    print("running main")

    # coregister county geojson with cdc stats
    js_cdc_stats()

    # create js var from geojson
    js_fda()

    print("completed main")


def calculate_rgb_color(value, values, type):
    """
    return a json readable rgb value as a string
    """

    inc = (max(values) - value)/(max(values) - min(values))
    assert inc >= 0 and inc <= 1
    inc = 255*inc

    mods = [0, 1, 0.5]
    if type == 'Arthritis-Crude Prevalence':
        mods = [0, 1, 0.75]

    # determine the rgb values
    r = int(255 - inc*mods[0])
    g = int(255 - inc*mods[1])
    b = int(255 - inc*mods[2])

    color_str = str('rgb( ' + str(r) + ' , ' +  str(g) + ' , ' + str(b) + ' )')
    return(color_str)


def js_cdc_stats():
    """
    coregister geojson defining us counties with cdc data
    use CountyFIDs to match cdc data to counties
    assign a value and color to each county
    save as a .js file defining a variable
    """

    for file in os.listdir(retrieve_path('geojson_src')):

        print('file = ' + str(file))

        # find counties file
        if 'counties' not in str(file): continue

        file_src = os.path.join(retrieve_path('geojson_src'), file)
        f = open(file_src, encoding='latin-1')
        us_counties = json.load(f)
        f.close()

        # add 'CountyFIPS' field
        for i in range(len(us_counties['features'])):

            county = us_counties['features'][i]['properties']
            countyFIDS = str(county['STATE']) + str(county['COUNTY'])
            us_counties['features'][i]['properties']['countyFIDS'] = countyFIDS
            #print('countyFIDS = ' + str(countyFIDS))

            # open cdc statistics as a dataframe
            df = pd.read_csv(retrieve_path('cdc_df'))
            df_countyFIDS = df[df['CountyFIPS'] == int(countyFIDS)]

            if len(list(df_countyFIDS['Arthritis-Crude Prevalence'])) > 0:
                Arthritis_Crude_Prevalence = list(df_countyFIDS['Arthritis-Crude Prevalence'])[0]
                rgb_color = calculate_rgb_color(Arthritis_Crude_Prevalence, list(df['Arthritis-Crude Prevalence']),'Arthritis-Crude Prevalence')

            else:
                print('countyFIDS = ' + str(countyFIDS))
                Arthritis_Crude_Prevalence = 'unavailable'
                rgb_color = 'rgb(255, 255, 255)'

            stat_dict = {'value': Arthritis_Crude_Prevalence, 'color': rgb_color}
            us_counties['features'][i]['properties']['Arthritis-Crude Prevalence'] = stat_dict
            df = pd.DataFrame()
            df_countyFIDS = pd.DataFrame()


        # set geojson equal to a unique variable
        # save as a .js file in docs
        file_dst = retrieve_path('cdc_js')
        with open(file_dst, "w") as f:
            f.write('var cdc_stats = ')
            json.dump(us_counties, f, indent = 1)
        f.close()


def js_fda():
    """
    save a .js file that declares a unique variable
    which is geojson feature list of points
    geolocated fda inspection sites
    scrub the data to remove fertility clinics and doctor offices
    """

    # read in fda inspection list
    # downloaded from FDA Data Portal
    df = pd.read_csv(retrieve_path('fda_src'))
    len_original = len(list(df['Legal Name']))
    print('original len = ' + str(len_original))

    df = df.drop_duplicates(subset=['FEI Number'], keep='first')
    len_original = len(list(df['Legal Name']))
    print('original len = ' + str(len_original))

    # remove facilities flagged to ignore
    df = scrub_fda(df)
    len_scrubbed = len(list(df['Legal Name']))
    print('scrubbed len = ' + str(len_scrubbed))

    # geolocate facility
    df = geolocate_fda(df)
    len_geolocated = len(list(df['Legal Name']))
    print('geolocated  len = ' + str(len_geolocated))

    # convert facilites to geojson
    # save as a .js declaring facility geojson
    # as a unique variable
    geojson_fda(df)


def scrub_fda(df):
    """
    Remove facilities of a certain name
    """

    counter = 0
    df_original = df
    len_original = len(list(df_original['Legal Name']))

    # remove sites flagged in the file as ignore
    if 'Ignore' in df.columns:
        df = df[df.Ignore != 'yes']

    #del df['Fiscal Year']
    df = df.drop_duplicates(subset=['FEI Number'], keep='first')

    # remove un-used columns
    for remove_col in retrieve_list('fda_cols_to_remove'):
        if remove_col in df.columns:
            del df[remove_col]

    for i in range(len(list(df_original['Legal Name']))):

        name = list(df_original['Legal Name'])[i]

        for term in retrieve_list('facilites_terms_to_remove'):

            if str(term) in str(name):
                #print('name found ' + str(name) + ' due to ' + str(term))
                df = df[df['Legal Name'] != name]
                len_scrubbed = len(list(df['Legal Name']))
                df_original.at[i,'Ignore'] = 'yes'

                # print to console progress
                if len_original - len_scrubbed > counter:
                    print(str(len_original) + ' original / ' + str(len_scrubbed) + ' scrubbed / ' + str(len_original - len_scrubbed) + ' removed' )
                    counter = int(counter + 100)

                continue

    assert len_original > len_scrubbed
    print(str(len_original) + ' original / ' + str(len_scrubbed) + ' scrubbed / ' + str(len_original - len_scrubbed) + ' removed' )

    df = df.drop_duplicates(keep='first')
    df = reset_df(df)

    df_original.to_csv(retrieve_path('fda_scrub'))
    return(df)


def geolocate_fda(df):
    """
    For each facility
    Build an address
    Then lookup latitude and longitude
    using OpenStreetMaps
    Add a latitude and longitude columns to the df
    Pass back the df
    """

    print('df = ')
    print(df)

    print('df.columns = ')
    print(df.columns)

    for col in ['lat', 'lon', 'display']:
        df[col] = [0]*len(list(df['Legal Name']))

    counter = 0
    for i in range(len(list(df['Legal Name']))):

        #print('i = ' +str(i))
        #print('len(list(df[Legal Name])) = ' +str(len(list(df['Legal Name']))))

        # occasionally report progress geolocating facilities
        if counter < i:
            print(str(round(i/len(list(df['Legal Name']))*100,3)) + ' % complete. found ' + str(i) + ' facilities geolocated.')
            counter = counter + 100

        """
        print('df = ')
        print(df)

        print('df.columns = ')
        print(df.columns)

        print('list(df[\'Legal Name\']) = ')
        print(list(df['Legal Name']))
        """

        name = list(df['Legal Name'])[i]

        """
        # see if the location has already been saved
        try:
            df_ref = pd.read_csv(retrieve_path('fda_geotagged'))
            df_ref = df_ref[df_ref['Legal Name'] == name]
            df.loc[i, 'lat'] = list(df_ref['lat'])[0]
            df.loc[i, 'lon'] = list(df_ref['lon'])[0]
            continue
        except:
            df_ref_name = []
        """


        # try the full address
        address = str(list(df['Legal Name'])[i]) + ' '
        address = address + ' ' +  str(list(df['City'])[i])
        address = address + ' ' +  str(list(df['State'])[i])
        address = address + ' ' +  str(list(df['Zip'])[i])
        address = address + ' ' +  str(list(df['Country/Area'])[i])
        lat, lon, display = lookup_gps(address)

        # if the fill address does not return coordinates
        # lookup without the legal name
        if lat == 0:
            address = str(list(df['City'])[i])
            address = address + ' ' +  str(list(df['State'])[i])
            address = address + ' ' +  str(list(df['Zip'])[i])
            address = address + ' ' +  str(list(df['Country/Area'])[i])
            lat, lon, display = lookup_gps(address)

        if lat == 0:
            address = str(list(df['City'])[i])
            address = address + ' ' +  str(list(df['State'])[i])
            address = address + ' ' +  str(list(df['Country/Area'])[i])
            lat, lon, display = lookup_gps(address)

        if lat == 0:
            address = str(list(df['City'])[i])
            address = address + ' ' +  str(list(df['Country/Area'])[i])
            lat, lon, display = lookup_gps(address)

        if lat == 0:
            address = str(list(df['Country/Area'])[i])
            lat, lon, display = lookup_gps(address)

        if lat == 0:
            address = str(list(df['City'])[i])
            lat, lon, display = lookup_gps(address)


        #print('str(lat) = ')
        #print(str(lat))

        df.loc[i, 'lat'] = lat
        df.loc[i, 'lon'] = lon
        df.loc[i, 'display'] = str(display)


        df.to_csv(retrieve_path('fda_geotagged'))

    df = df[df['lat'] != 0]
    return(df)


def geojson_fda(df):
    """
    save a .js file that declares a unique variable
    equal to the geojson describing all the facilities
    as a unqie point feature
    """

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
        property_key = ["name", "address", "website", "city", "state"]
        property_dict = dict.fromkeys(property_key, 0)
        property_dict['name'] = list(df['Legal Name'])[i]
        property_dict['address'] = list(df['display'])[i]
        property_dict['website'] = list(df['Website'])[i]
        property_dict['city'] = list(df['City'])[i]
        property_dict['state'] = list(df['State'])[i]
        facility_dict['properties'] = property_dict

        # set each facility's geometry
        geo_key = ["type", "coordinates"]
        geo_dict = dict.fromkeys(geo_key, 0)
        geo_dict["type"] = "Point"
        geo_dict["coordinates"] = [lon , lat]
        facility_dict['geometry'] = geo_dict

        # append the facility to the list of facilities
        fac_dict['features'].append(facility_dict)


    # create a .js file that declares
    # a unique variable as the geojson
    file_dst = retrieve_path('fda_js')
    with open(file_dst, "w") as f:
        f.write('var facilityData = ' + '\n')
        json.dump(fac_dict, f, indent = 1)
    f.close()


if __name__ == "__main__":
    main()
