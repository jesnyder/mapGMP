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

from admin import retrieve_df
from admin import retrieve_path
from admin import retrieve_ref


def lookup_gps(address):
    """
    lookup address using open street maps
    """

    #print('address = ')
    #print(address)

    try:
        url = 'https://nominatim.openstreetmap.org/search/' + urllib.parse.quote(address) +'?format=json'

        #print('url = ')
        #print(url)

        response = requests.get(url).json()
        #print('response = ')
        #print(response)

        lat = response[0]["lat"]
        lon = response[0]["lon"]
        display = response[0]["display_name"]

        lat = round(float(str(lat)),6)
        lon = round(float(str(lon)),6)

        #print('lat = ' + str(lat))
        #print('lon = ' + str(lon))
        #print('display = ' + str(display))

        return(lat, lon, display)


    except:
        return(0, 0, 0)
