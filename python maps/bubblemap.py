import pandas as pd
import numpy as np
import plotly.express as px
import plotly.graph_objects as go

df = pd.read_csv("NASA_data.csv")
df.head()

# the Colored Key: numerical range by Class (0,1,2), Hover_name?
df['text'] = 'Fire Radiative Power (FRP): ' + (df['frp']).astype(str)+' watts'
#i want the colors to be organized into the type of wildfire (least severe 0,1, or 2 most severe)

limits = [(1, 4999),(5000, 9999),(10000, 15000)]

#for the legend and colors of the bubbles: royal blue = 0, orange = 1, crimson = 2
colors = ["royalblue","orange","crimson"]
scale = 5

fig = go.Figure()

#edit part in template
for i in range(len(limits)):
    lim = limits[i]
    df_sub = df[lim[0]:lim[1]]
    fig.add_trace(go.Scattergeo(
        locationmode = 'USA-states',
        lon = df_sub['longitude'],
        lat = df_sub['latitude'],
        text = df_sub['text'],
        marker = dict(
            size = df_sub['frp']/scale,
            color = colors[i],
            line_color='rgb(40,40,40)',
            line_width=0.5,
            sizemode = 'area'
        ),
        name = '{0} - {1}'.format(lim[0],lim[1])))

# top left title
fig.update_layout(
        title_text = 'Wildfires Across the United States<br>(Click legend to toggle traces)',
        showlegend = True,
        geo = dict(
            scope = 'usa',
            landcolor = 'rgb(217, 217, 217)',
        )
    )


fig.show()
