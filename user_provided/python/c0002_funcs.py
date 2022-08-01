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

from c0001_admin import retrieve_df
from c0001_admin import retrieve_path
from c0001_admin import retrieve_ref
from c0001_admin import unique_dfcol



def count_df_cols(path_dst, df):
    """
    list unique values in each column of a dataframe
    save as the column title in the path_dst provided
    """

    for col in df.columns:

        unique_name =str(col)
        u_list, count_list = unique_list(list(df[col]))

        df_temp = pd.DataFrame()
        df_temp[col] = u_list
        df_temp['counts'] = count_list
        df_temp = df_temp.sort_values('counts', ascending=False)
        df_temp = reset_df(df_temp)
        display_df('df_temp', df_temp)

        if os.path.exists(path_dst) == False: os.mkdir(path_dst)
        df_temp.to_csv(os.path.join(path_dst, unique_name + '.csv'))


def display_df(df_name, df):
    """
    formatted display of df
    """

    print(df_name + ' = ')
    print(df)

    print(df_name + '.columns = ')
    print(df.columns)


def list_types(df, colname):
    """

    """

    types = []
    for item in list(df[colname]):
        if item not in types:
            types.append(item)
    return(types)


def normalize_list(list):
    """
    convert all scores to numbers
    """

    for i in range(len(list)):
        if list[i] == 'Low': list[i] = 1
        elif list[i] == 'Medium': list[i] = 3
        elif list[i] == 'High': list[i] = 5

    return(list)


def polyfit_scores(app_know, net_brea, net_stre):
    """
    from three lists
    return the slope
    """
    counts = []
    for i in range(3):
        for j in range(len(app_know)):
            counts.append(j)

    scores = []
    for score in app_know: scores.append(score)
    for score in net_brea: scores.append(score)
    for score in net_stre: scores.append(score)

    """
    print('counts = ')
    print(counts)

    print('scores = ')
    print(scores)
    """

    average = sum(counts) / len(counts)

    if len(app_know) == 1: return(average, 0)

    slope = np.polyfit(counts, scores, 1)
    slope = slope[0]

    """
    print('polyfit slope = ')
    print(slope)
    """

    return(average, slope)


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

    return(df)


def retrieve_type(company):
    """
    return type given company name
    """

    df = retrieve_df('df_agg')



    df = df[df.company == company]

    if len(list(df['company'])) == 0:
        print('company = ' + company)

    for col in df.columns:
        if 'type' in col:
            types = list(df[col])
            type = types[0]
            return(type)


def size_list(xx):
    """
    return list of sizes
    """

    tt = []
    for t in xx:
        s_min, s_max = 20, 70
        tt_min, tt_max = min(xx), max(xx)

        try:
            t = (t-tt_min)/(tt_max-tt_min)
        except:
            t = 0.5
        #assert t >= 0
        #assert t <= 1
        t = t*(s_max-s_min) + s_min
        t = t*t
        tt.append(t)

    return(tt)


def summarize_df(path_dst, df):


    df_temp = pd.DataFrame()
    df_temp['name'] = list(df.columns)
    #df_temp['length'] = len_all
    #df_temp['unique'] = len_unique
    df_temp = reset_df(df_temp)
    df_temp.to_csv(os.path.join(path_dst))


def unique_list(ref_list):
    """
    find unique
    """

    unique_list, count_list = [], []

    for item in ref_list:

        if item not in unique_list:
            unique_list.append(item)
            count_list.append(ref_list.count(item))

    return(unique_list, count_list)
