import pandas as pd
import numpy as np
import plotly.express as px
import plotly.graph_objects as go

df = pd.read_csv("NASA_data.csv")
df.head()


# Q1 = df['frp'].quantile(0.1)
# Q3 = df['frp'].quantile(1)
# IQR = Q3 - Q1
# lower_bound = Q1 - 1.5 * IQR
# upper_bound = Q3 + 1.5 * IQR

# df = df[(df['frp'] >= lower_bound) & (df['frp'] <= upper_bound)]

# num_bins = 3  # You can adjust the number of bins as needed

# # Calculate bin edges using the 'numpy.histogram_bin_edges' function
# bin_edges = pd.qcut(df['frp'], q=num_bins, duplicates='drop', retbins=True)[1]

# # First bin's lower edge and second bin's upper edge:
# l1_lower_edge = int(bin_edges[0])
# l1_upper_edge = int(bin_edges[1])

# # Second bin's lower edge and third bin's upper edge:
# l2_lower_edge = int(bin_edges[1])
# l2_upper_edge = int(bin_edges[2])

# # Third bin's lower edge and last bin's upper edge:
# l3_lower_edge = int(bin_edges[2])
# l3_upper_edge = int(bin_edges[-1])

# bin_edges now contains the edges of the bins
#print(bin_edges)

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