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

from c0001_admin import list_unique
from c0001_admin import retrieve_df
from c0001_admin import retrieve_path
from c0001_admin import retrieve_ref
from c0001_admin import str_list
from c0001_admin import unique_dfcol

from c0002_funcs import normalize_list
from c0002_funcs import size_list
from c0002_funcs import list_types


def generate_web():
    """
    generate html and javascript
    """

    # create geojson
    generate_geojson()

    # generate js
    generate_js()

    # combine user provided html
    # generate a single index.html file
    generate_html()


    # delete existing docs and replace
    shutil.rmtree(retrieve_path('docs'))
    prepare_docs()


def generate_geojson():
    """
    write geojson
    """

    df = retrieve_df('address_facilities')

    names = list(df['Legal Name'])
    lons = list(df['lon'])
    lats = list(df['lat'])

    f_dst = open(retrieve_path('geojson_facilities'), 'w')

    for i in range(len(names)):
        circle_name = str('circle_' + str(i))
        coords_name = str('coords_' + str(i))
        marker_name = str('markers_' + str(i))

        f_dst.write('\n')
        f_dst.write('const ' + coords_name + ' = ')
        f_dst.write('[ ' + str(lats[i]) + ' , ' + str(lons[i]) + ']; ' )
        f_dst.write('\n')

        f_dst.write('var ' + marker_name + ' = L.marker(')
        f_dst.write(coords_name + ').addTo(map); ')
        f_dst.write('\n')

        f_dst.write(marker_name + '.bindPopup("')
        f_dst.write(names[i])
        f_dst.write('").openPopup(); ' + '\n')
        f_dst.write('\n')

        f_dst.write('var ')
        f_dst.write(circle_name)
        f_dst.write(' = L.circle(' + coords_name + ', { ')
        f_dst.write('\n')
        f_dst.write('color: "red",' + '\n')
        f_dst.write('fillColor: "#f03",' + '\n')
        f_dst.write('fillOpacity: 0.5,' + '\n')
        f_dst.write('radius: 5' + '\n')
        f_dst.write('}).addTo(map);' + '\n')
        f_dst.write('\n')
        f_dst.write('\n')

    f_dst.close()


def generate_html():
    """
    combine user provided html
    generate a single index.html file
    """

    for file in os.listdir(retrieve_path('html_pieces')):

        if 'index_000' in file:
            f_dst = open(retrieve_path('html_index'), 'w')
            f_dst.write('<!--' + '\n')
            f_dst.write('Source Code: ' + '\n')
            f_dst.write('https://github.com/jesnyder/mapGMP' + '\n')
            f_dst.write('Generated: ' + '\n')
            f_dst.write(str(datetime.datetime.now()) + '\n')
            f_dst.write('-->' + '\n')
            f_dst.close()

        elif 'index_999' in file:

            f_dst = open(retrieve_path('html_index'), 'a')
            f_dst.write('\n')

            for js_file in os.listdir(retrieve_path('js_generated')):



                js_file_split = js_file.split('.')

                """
                if 'map' in js_file_split:
                    f_dst.write('<div>' + '\n')
                else:
                    f_dst.write('<div class="chartholder">' + '\n')
                """

                #f_dst.write('<div>' + '\n')
                f_dst.write('<div id="' )
                #f_dst.write('\n')

                #f_dst.write('<canvas id="')
                f_dst.write(str(js_file_split[0]))

                #f_dst.write('" width="800" height="500">')
                f_dst.write('">')

                #f_dst.write(' </canvas>')
                f_dst.write('\n')
                f_dst.write('</div>' + '\n')

                f_dst.write('<script src="')
                f_dst.write('js/')
                f_dst.write(js_file)
                f_dst.write('"></script>')
                f_dst.write('\n')

                #f_dst.write('\n')

            f_dst.write('\n')
            f_dst.close()

        # read from the source
        f_src = open(os.path.join(retrieve_path(r'html_pieces'), file), 'r+', encoding='UTF-8')
        lines = f_src.readlines()
        f_src.close()


        f_dst = open(retrieve_path('html_index'), 'a')
        f_dst.write('\n')
        for line in lines:
            f_dst.write(line)
            #f_dst.write('\n')
        f_dst.write('\n')
        f_dst.close()


def generate_js():
    """
    generate js
    """

    for file in os.listdir(retrieve_path('js_provided')):

        file_src = open(os.path.join(retrieve_path('js_provided'), file), 'r')
        print('file found: ' + str(file_src))
        lines = file_src.readlines()
        file_src.close()

        file_split = file.split('.')
        chartName = file_split[0]

        file_dst = open(os.path.join(retrieve_path('js_generated'), file), 'w')
        print('file created: ' + str(file_dst))
        for line in lines:

            if 'chartNamePaste' in line:
                line = line.replace('chartNamePaste', chartName)

            elif 'retrieveDataSet' in line:

                file_geojson = open(os.path.join(retrieve_path('geojson_facilities')), 'r')
                lines__geojson = file_geojson.readlines()
                file_geojson.close()

                line = line.replace('retrieveDataSet', '')
                for dataset_line in lines__geojson:
                    file_dst.write(dataset_line)
                continue

            file_dst.write(line)
        file_dst.close()


def prepare_docs():
    """
    combine html
    """

    # copy files to a docs folder to build website
    source = retrieve_path('html_index')
    destination = retrieve_path('docs_html')
    shutil.copy(source, destination)

    for file in os.listdir(retrieve_path('js_generated')):
        print('retrieve_path(js_generated) = ' + str(retrieve_path('js_generated')))
        print('file = ' + str(file))
        source = os.path.join(retrieve_path('js_generated'), file)
        destination = os.path.join(retrieve_path('docs_js'), file)
        print('source = ' + str(source))
        print('destination = ' + str(destination))
        shutil.copy(source, destination)

    # for css styles
    source = retrieve_path('css_src')
    destination = retrieve_path('css_dst')
    shutil.copy(source, destination)

    # for shape files styles
    source = retrieve_path('us_counties_shp')
    destination = retrieve_path('us_counties_shp_docs')
    shutil.copy(source, destination)




"""
archived code

"""

def build_js_datasets():
    """
    From datasets build datasets to be used in javascript
    """

    # for scoring metrics by type
    dataset_name = 'types'
    df_agg = retrieve_df('df_agg')
    type_col = 'types'
    x_col = 'Application Knowledge'
    y_col = 'Network Breadth'
    r_col = 'Network Strength'
    write_js_bubble(dataset_name, df_agg, type_col, x_col, y_col, r_col)

    # for longitude/latitude
    dataset_name = 'address'
    df_agg = retrieve_df('company_addresses_generated_meta')
    type_col = 'types'
    x_col = 'lon'
    y_col = 'lat'
    r_col = 'strength'
    write_js_bubble(dataset_name, df_agg, type_col, x_col, y_col, r_col)


def write_js_map(dataset_name, df_agg):
    """
    write js code for lon and lat
    """


def write_js_bubble(dataset_name, df_agg, type_col, x_col, y_col, r_col):
    """
    write javascript code to a file
    """

    filename = os.path.join(retrieve_path('js_dataset'), dataset_name + '.csv')
    print('filename = ' + str(filename))
    f = open(filename, 'w')

    #f.write('data: {' + '\n')
    f.write('labels: "' + dataset_name + '",' + '\n')
    f.write('datasets: [' + '\n')

    for type in retrieve_ref('types'):

        df = df_agg[df_agg.types == type]
        label = type

        if type == 'Industry':
            backgroundColor =  retrieve_ref('colorOrange')

        elif type == 'Academic':
            backgroundColor =  retrieve_ref('colorBlueLight')

        elif type == 'Tools':
            backgroundColor =  retrieve_ref('colorPurple')

        else:
            backgroundColor =  retrieve_ref('colorGray')

        for i in range(len(backgroundColor)):
            backgroundColor[i] = int(backgroundColor[i]*255)

        backgroundColor.append(1)

        borderColor = [255, 255, 255, 1]
        xx = list(df[x_col])
        yy = list(df[y_col])
        rr = list(df[r_col])

        f.write('{' + '\n')
        f.write('label: ["' + str(label ) + '"],' + '\n')
        f.write('backgroundColor: "rgba(' + str(str_list(backgroundColor)) + ' )",'  + '\n')
        f.write('borderColor: "rgba(' + str(str_list(borderColor)) + ' )",' + '\n')
        #f.write('borderWidth: [' + str(1) + '] , ' + '\n')
        f.write('data: '  + '\n')


        #for i in range(len(xx)):
        f.write('[' + '\n')
        for i in range(len(xx)):
            #for i in range(3):
            f.write('{' )
            f.write('x: ' + str(xx[i]) + ', ' )
            f.write('y: ' + str(yy[i]) + ', ' )
            f.write('r: ' + str(3*rr[i]) + ', ' )
            f.write('} ,' + '\n')
        f.write('] ' + '\n')
        f.write('}, ' + '\n')
        f.write('\n')


    f.write(']' + '\n')
    #f.write('},' + '\n')
    #f.write(']' + '\n')
    #f.write('},' + '\n')
    f.close()


def retrieveDataSet(dataset_name):
    """
    return contents of a file as a list of lines
    """
    filename = os.path.join(retrieve_path('js_dataset'), dataset_name + '.csv')
    file_src = open(filename , 'r')
    lines = file_src.readlines()
    file_src.close()
    return(lines)


def write_js():
    """
    build bubble chart
    """

    for file in os.listdir(retrieve_path('js_provided')):

        file_src = open(os.path.join(retrieve_path('js_provided'), file), 'r')
        lines = file_src.readlines()
        file_src.close()

        file_split = file.split('.')
        chartName = file_split[0]

        file_dst = open(os.path.join(retrieve_path('js_generated'), file), 'w')
        for line in lines:
            if 'chartNamePaste' in line:
                line = line.replace('chartNamePaste', chartName)

            elif 'retrieveDataSet' in line:
                dataset_name_ref = file.split('.')
                dataset_name_ref = dataset_name_ref[0]
                dataset_name_ref = dataset_name_ref.split('-')
                dataset_name_ref = dataset_name_ref[1]
                dataset_name_ref = str(dataset_name_ref)
                print('dataset_name_ref = ' + dataset_name_ref)

                line = line.replace('retrieveDataSet', '')
                for dataset_line in retrieveDataSet(dataset_name_ref):
                    file_dst.write(dataset_line)
                continue

            file_dst.write(line)
        file_dst.close()
