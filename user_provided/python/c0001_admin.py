import math
import matplotlib
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


def display_df(df_name, df):
    """
    formatted display of df
    """

    print(df_name + ' = ')
    print(df)

    print(df_name + '.columns = ')
    print(df.columns)


def list_unique(df, colname):
    """
    return a list of unique
    """

    types = []
    for item in list(df[colname]):
        if item not in types:
            types.append(item)
    return(types)


def lookup_type(company):
    """
    look up the type of a given company
    """
    df_agg = retrieve_df('df_agg')
    df = df_agg[df_agg.company == company]
    types = list(df['types'])
    type = types[0]
    return(type)


def reset_df(df):
    """
    reset the index column
    """

    df = df.reset_index()

    for col in df.columns:

        if 'index' in col:
            del df[col]

        if 'Unnamed:' in col:
            del df[col]


def retrieve_df(name):
    """
    return a df
    from a pathname
    """

    # check path
    df_path = retrieve_path(name)
    print('df_path = ')
    print(df_path)

    # retrieve df
    df = pd.read_csv(retrieve_path(name))

    for col in df.columns:
        if 'Unnamed:' in col:
            del df[col]

    return(df)


def retrieve_calculated(name_ref):
    """
    retrieve value from saved file
    """

    df = retrieve_df('calculated_refs')

    df_ref = df[df.name == name_ref]
    metrics = list(df_ref['value'])
    calculated_value = metrics[0]

    try:
        calculated_value = round(calculated_value, 3)
    except:
        print('tried.')

    return(calculated_value)


def retrieve_path(name):
    """
    return the path
    given a path name
    """

    src_file = os.path.join('user_provided', 'admin', 'paths' + '.csv')
    df = pd.read_csv(src_file)

    try:
        df = df[df['name'] == name]
    except:
        return('None found.')

    path_retrieved = list(df['path'])[0]
    path_split = path_retrieved.split(' ')

    # build the path
    path_list = []
    for sub in path_split:
        path_list.append(sub)
        path = os.path.join(*path_list)

        # do not check for specific files
        if '.' in sub: continue

        # create the folder, if it doesnt exist
        if os.path.exists(path) == False: os.mkdir(path)

    return(path)


def retrieve_ref(name):
    """
    return saved variable
    from a variable name
    """

    # retrieve the list of variables
    df = pd.read_csv(retrieve_path('ref_variable'))

    try:
        df = df[df['name'] == name]
    except:
        return('None found.')

    term_retrieved = list(df['term'])[0]

    # if the term is a list, split
    if '$$$' in term_retrieved:
        term = term_retrieved.split('$$$')

        # try to convert list to floats
        try:
            for i in range(len(term)):
                term[i] = float(term[i])
        except:
            term = term

    else:

        term = term_retrieved

        # try to convert list to floats
        try:
            if '.' in term:
                term = float(term)
            else:
                term = int(term)
        except:
            term = term

    return(term)


def str_list(str_src):
    """
    Return a string from a list
    """

    temp_var = '-0987654321poiuytrewqasdfghjkl`okijhjhgfds'
    str_dst = temp_var

    for element in str_src:
        if str_dst == temp_var:
            str_dst = str(element)
        else:
            str_dst = str_dst + ' , ' + str(element)

    return(str_dst)


def unique_dfcol(ref_list):
    """
    return a list of unique values
    from a dataframe a column name
    """

    if len(ref_list) == 0:
        return([])

    types = []
    for item in list(ref_list):
        if item not in types:
            types.append(item)

    assert len(types) > 0
    return(types)


def write_calculated(name, value):
    """
    save a metric to be referenced later
    """

    # create a temp df
    df_temp = pd.DataFrame()
    df_temp['name'] = [name]
    df_temp['value'] = [value]

    try:
        df = retrieve_df('calculated_refs')
    except:
        df = pd.DataFrame()
        df['name'] = ['test']
        df['value'] = ['test']
        df.to_csv(retrieve_path('calculated_refs'))
        df = retrieve_df('calculated_refs')

    if name in list(df['name']):
        df = df[df.name != name]

    df = df.append(df_temp)
    #df = df.sort_values(by=['name'], ascending=True)
    #df = reset_df(df)
    display_df('df', df)
    df.to_csv(retrieve_path('calculated_refs'))
