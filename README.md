# wildfire-webpage

Mapbox Maps vs Geo Maps
Plotly supports two different kinds of maps:
Mapbox maps are tile-based maps. If your figure is created with a px.scatter_mapbox, px.line_mapbox, px.choropleth_mapbox or px.density_mapbox function or otherwise contains one or more traces of type go.Scattermapbox, go.Choroplethmapbox or go.Densitymapbox, the layout.mapbox object in your figure contains configuration information for the map itself.
Geo maps are outline-based maps. If your figure is created with a px.scatter_geo, px.line_geo or px.choropleth function or otherwise contains one or more traces of type go.Scattergeo or go.Choropleth, the layout.geo object in your figure contains configuration information for the map itself.
This page documents Mapbox tile-based maps, and the Geo map documentation describes how to configure outline-based maps.
How Layers Work in Mapbox Tile Maps
Mapbox tile maps are composed of various layers, of three different types:
layout.mapbox.style defines is the lowest layers, also known as your "base map"
The various traces in data are by default rendered above the base map (although this can be controlled via the below attribute).
layout.mapbox.layers is an array that defines more layers that are by default rendered above the traces in data (although this can also be controlled via the below attribute).
Mapbox Access Tokens and When You Need Them
The word "mapbox" in the trace names and layout.mapbox refers to the Mapbox GL JS open-source library, which is integrated into Plotly.py. If your basemap in layout.mapbox.style uses data from the Mapbox service, then you will need to register for a free account at https://mapbox.com/ and obtain a Mapbox Access token. This token should be provided in layout.mapbox.access_token (or, if using Plotly Express, via the px.set_mapbox_access_token() configuration function).
If your layout.mapbox.style does not use data from the Mapbox service, you do not need to register for a Mapbox account.
Base Maps in layout.mapbox.style
The accepted values for layout.mapbox.style are one of:
"white-bg" yields an empty white canvas which results in no external HTTP requests
"open-street-map", "carto-positron", "carto-darkmatter", "stamen-terrain", "stamen-toner" or "stamen-watercolor" yield maps composed of raster tiles from various public tile servers which do not require signups or access tokens
"basic", "streets", "outdoors", "light", "dark", "satellite", or "satellite-streets" yield maps composed of vector tiles from the Mapbox service, and do require a Mapbox Access Token or an on-premise Mapbox installation.
A Mapbox service style URL, which requires a Mapbox Access Token or an on-premise Mapbox installation.
A Mapbox Style object as defined at https://docs.mapbox.com/mapbox-gl-js/style-spec/
