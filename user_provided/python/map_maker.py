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
import urllib.parse

from c0001_admin import retrieve_df
from c0001_admin import retrieve_path
from c0001_admin import retrieve_ref
from c0002_funcs import retrieve_type


def lookup_gps(address):
    """
    lookup address using open street maps
    """

    #print('address = ')
    #print(address)

    try:
        url = 'https://nominatim.openstreetmap.org/search/' + urllib.parse.quote(address) +'?format=json'

        print('url = ')
        print(url)

        response = requests.get(url).json()
        #print('response = ')
        #print(response)

        lat = response[0]["lat"]
        lon = response[0]["lon"]
        display = response[0]["display_name"]

        return(lat, lon, display)


    except:
        return(0, 0, 0)


def map_maker():
    """
    build a map
    use a list of dataframe listing latitude and longitude
    """

    df = retrieve_df('address_gps')

    lats = list(df['lats'])
    lons = list(df['lons'])
    companies = list(df['company'])


    for type in retrieve_ref('types'):

        plt.close('all')
        figure, axes = plt.subplots()

        font_size = retrieve_ref('font_size')
        font = {'family' : 'normal',
            'weight' : 'bold',
            'size'   : font_size}
        plt.rc('font', **font)
        plt.rc('font', size=font_size)
        plt.rc('axes', titlesize=font_size)


        # add map background
        img = plt.imread(retrieve_path('blankmap_path'))

        extent = [-180, 180, -90, 90]
        if 'blankMap17' in str(retrieve_path('blankmap_path')):
            extent = [-170, 190, -58, 108]

        # axes.imshow(img, origin=origin, extent=extent)
        axes.imshow(img, extent=extent)

        for i in range(len(lats)):

            xx = float(lons[i])
            yy = float(lats[i])
            company = companies[i]
            rr = 10

            if type != retrieve_type(company): continue


            if 'Industry' in str(retrieve_type(company)):
                colorMarker = retrieve_ref('colorOrange')

            elif 'Academic' in str(retrieve_type(company)):
                colorMarker = retrieve_ref('colorPurple')

            elif 'Tools' in str(retrieve_type(company)):
                colorMarker = retrieve_ref('colorBlueLight')

            else:
                colorMarker = retrieve_ref('colorGray')

            print('colorMarker = ')
            print(colorMarker)


            print('lat / lon = ' + str('yy') + ' / ' + str(xx))
            print('company = ' + str(company))
            print('type = ' + retrieve_type(company))

            colorEdge = [0, 0, 0]
            scatterTransparency = retrieve_ref('scatterTransparency')
            plt.scatter(xx, yy, s = rr, color=colorMarker, alpha=float(scatterTransparency), edgecolors=colorEdge, linewidths=0.1)

        plt.title( type + ' accounts')
        axes.axis('off')
        file_dst = retrieve_path('company_map')
        #plt.savefig(file_dst, bbox_inches='tight')
        plt.savefig(os.path.join(file_dst, type + '.png'), bbox_inches='tight', dpi=retrieve_ref('plot_dpi'))
        plt.close('all')
