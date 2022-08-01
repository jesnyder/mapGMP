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

from c5000_generate_web import generate_web


def main():
    """
    visualize map data in an interactive form
    """

    print("running main")

    generate_web()

    print("completed main")





if __name__ == "__main__":
    main()
