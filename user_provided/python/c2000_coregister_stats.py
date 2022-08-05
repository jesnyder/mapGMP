import codecs
import datetime
from geojsonio import display
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

from c0001_admin import color_rgb_str
from c0001_admin import display_df
from c0001_admin import list_unique
from c0001_admin import reset_df
from c0001_admin import retrieve_df
from c0001_admin import retrieve_list
from c0001_admin import retrieve_path
from c0001_admin import retrieve_ref
from c0001_admin import rgb_to_hexcolorcode
from c0001_admin import str_list
from c0001_admin import unique_dfcol

from c0002_funcs import normalize_list
from c0002_funcs import size_list
from c0002_funcs import list_types


def coregister_stats():
    """
    coregister CDC statistics
    """

    print('beginning coregister_stats')

    # retrieve and scrub fda inspection data
    cdc_stats_folder = retrieve_path('cdc_stats')
    print('cdc_stats_folder = ' + str(cdc_stats_folder))
    for file in os.listdir(cdc_stats_folder):

        if '.csv' not in file: continue

        cdc_stats_file = os.path.join(cdc_stats_folder, file)
        print('cdc_stats_file = ' + str(cdc_stats_file))
        df = retrieve_df(cdc_stats_file)
        #display_df('df', df)

        # colormap requires bins
        define_bins(df)

        # describe the color
        # add color column
        # save as a dataframe
        df = add_color(df)
        display_df('df', df)


        us_counties_file = retrieve_path('us_counties_geojson')
        with open(us_counties_file, encoding='latin-1') as f:
            contents = f.read()
            #print(contents)

        f = open(us_counties_file, encoding='latin-1')
        #data = json.load(f)
        # load in the file contents
        us_counties = json.load(f)
        f.close()

        # check the type
        # could be conversions to python values
        print('type(us_counties) = ' + str(type(us_counties)))

        """
        # access keys
        test_value = type(us_counties['type'])
        print('test_value = ')
        print(test_value)

        test_value = us_counties['type']
        print('test_value = ')
        print(test_value)

        test_value = type(us_counties['features'])
        print('test_value = ')
        print(test_value)
        """

        us_counties_mod = us_counties
        for i in range(len(us_counties_mod['features'])):

            county = us_counties_mod['features'][i]

            #print(type(value))
            #print(value)

            #print('type(value) = ' + str(type(value)))

            geo_id = county['properties']['GEO_ID']
            #print(type(geo_id))
            #print('geo_id = ' + str(geo_id))

            county_name = county['properties']['NAME']
            #print(type(county_name))
            print('county_name = ' + str(county_name))

            state = str(county['properties']['STATE'])
            print('state = ' + state)


            countyFIPS = str(county['properties']['STATE'] + county['properties']['COUNTY'])
            countyFIPS_dict = {"CountyFIPS" : countyFIPS}
            us_counties_mod['features'][i]['properties'].update(countyFIPS_dict)
            print('countyFIPS = ' + str(countyFIPS))

            df_countyFIPS = df[df['CountyFIPS'] == int(countyFIPS)]
            print('df_countyFIPS = ')
            print(df_countyFIPS)

            if len(list(df_countyFIPS['State'])) == 0: continue

            for col in df_countyFIPS.columns:

                if 'Prevalence' in col:

                    col_value_list = list(df_countyFIPS[col])
                    col_value = col_value_list[0]
                    value_dict = countyFIPS_dict = {col : col_value}
                    col_name = col.replace(' ', '')
                    col_name = col_name.replace('-', '')
                    us_counties_mod['features'][i]['properties'].update(value_dict)

                    # convert rgb value to json readable
                    color_value_list = list(df_countyFIPS['color'])
                    color_rgb = color_rgb_str(color_value_list[0])
                    value_dict = countyFIPS_dict = {'Color' : color_rgb}
                    us_counties_mod['features'][i]['properties'].update(value_dict)


                    state_label = str(county['properties']['LSAD'])
                    county_label = str(county['properties']['NAME'])
                    map_label = str(state_label + ' , ' + county_label)
                    value_dict = countyFIPS_dict = {'Maplabel' : map_label}
                    us_counties_mod['features'][i]['properties'].update(value_dict)

                    # print the color
                    color = us_counties_mod['features'][i]['properties']['Color']
                    print('Color = ' + str(color_rgb))

            # modified json
            #us_counties_mod = value
            #print(us_counties_mod)

        # save
        with open(retrieve_path('us_counties_mod'), 'w') as f:
            json.dump(us_counties_mod, f, indent = 2)
        f.close()


        # check countyFIPS properly saved
        for value in us_counties_mod['features']:

            #print('type(value) = ' + str(type(value)))
            countyFIPS = value['properties']['CountyFIPS']
            #print(type(countyFIPS))
            #print('countyFIPS = ' + str(countyFIPS))

    print('completed coregister_stats')


def add_color(df):
    """
    add color
    """
    cols = df.columns
    col = cols[-1]
    nums = list(df[col])
    bins_file = os.path.join(retrieve_path('bins'), col + '.csv')
    print('bins_file = ' + str(bins_file))

    df_bins = pd.read_csv(bins_file)
    df_bins_cols = df_bins.columns
    bins = list(df_bins[df_bins_cols[1]])
    print(define_bins)

    colors = []
    for num in nums:

        i = (num-min(nums)) / (max(nums)-min(nums))
        i = round(i,4)
        c1 = 1
        c2 = 1-i
        c3 = 1
        color = [c1, c2, c3]
        colors.append(color)

    df['color'] = colors
    cols = df.columns
    col = cols[-2]
    df_file = os.path.join(retrieve_path('cdc_stats_color'), col + '.csv')
    print('df_file = ' + str(df_file))
    df.to_csv(df_file)
    return(df)


def define_bins(df):
    """
    list bins in a csv
    bins are used for colormap
    """
    cols = df.columns
    col = cols[-1]
    nums = list(df[col])

    nums_min = min(nums)
    nums_max = max(nums)
    bins = []

    for i in range(retrieve_ref('bins')+2):

        a = nums_min + i*(nums_max-nums_min)/(retrieve_ref('bins')+1)
        a = round(a,4)
        bins.append(a)

    #bins = bins[1:-1]

    df_bins = pd.DataFrame()
    df_bins[col] = bins
    df_bins.to_csv(os.path.join(retrieve_path('bins'), col + '.csv'))


def df_to_geojson(df, properties, lat='latitude', lon='longitude'):
    geojson = {'type':'FeatureCollection', 'features':[]}
    for _, row in df.iterrows():
        feature = {'type':'Feature',
                   'properties':{},
                   'geometry':{'type':'Point',
                               'coordinates':[]}}
        feature['geometry']['coordinates'] = [row[lon],row[lat]]
        for prop in properties:
            feature['properties'][prop] = row[prop]
        geojson['features'].append(feature)
    return geojson
