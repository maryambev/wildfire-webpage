import pandas as pd
import numpy as np
import plotly.express as px
import plotly.graph_objects as go

import json

import dash
import dash_core_components as dcc
import dash_html_components  as html
from dash.dependencies import Import, Output

us_wildfires = pd.read_csv("https://firms.modaps.eosdis.nasa.gov/data/country/modis/2022/modis_2022_United_States.csv")



fig = px.scatter_mapbox(us_wildfires, lat="latitude", lon="longitude", hover_name="brightness", hover_data=["frp", "daynight"],
                        color_discrete_sequence=["fuchsia"], zoom=3, height=300)
fig.update_layout(mapbox_style="open-street-map")
fig.update_layout(margin={"r":0,"t":0,"l":0,"b":0})
fig.show()