var figure = {
    "data": [
        {
            "meta": {
                "columnNames": {
                    "x": "State",
                    "y": "Number of acres burned"
                }
            },
            "mode": "lines",
            "type": "bar",
            "xsrc": "maryambev:2:d18192",
            "x": [
                "California",
                "Oregon",
                "Montana",
                "Washington",
                "Arizona",
                "Idaho",
                "Alaska",
                "Texas",
                "Kansas",
                "New Mexico"
            ],
            "ysrc": "maryambev:2:add8b6",
            "y": [
                "2,233,666",
                "828,777",
                "747,678",
                "674,222",
                "524,428",
                "439,600",
                "253,357",
                "168,258",
                "163,982",
                "123,792"
            ],
            "marker": {
                "color": "rgb(250, 76, 80)"
            },
            "transforms": [
                {
                    "type": "sort",
                    "order": "descending"
                }
            ],
            "orientation": "v",
            "autocolorscale": true
        }
    ],
    "layout": {
        "title": {
            "x": 0.5,
            "text": "Top Ten U.S States with the Highest Number of Acres Burned from Wildfires (2021)"
        },
        "xaxis": {
            "type": "category",
            "range": [
                -0.5,
                9.5
            ],
            "title": {
                "text": "Number of Acres Burned"
            },
            "domain": [
                0,
                1
            ],
            "autorange": true
        },
        "yaxis": {
            "range": [
                0,
                2351227.3684210526
            ],
            "title": {
                "text": "U.S States"
            },
            "autorange": true
        },
        "autosize": true,
        "template": {
            "data": {
                "bar": [
                    {
                        "type": "bar",
                        "marker": {
                            "colorbar": {
                                "ticks": "",
                                "outlinewidth": 0
                            }
                        }
                    }
                ],
                "table": [
                    {
                        "type": "table",
                        "cells": {
                            "fill": {
                                "color": "#EBF0F8"
                            },
                            "line": {
                                "color": "white"
                            }
                        },
                        "header": {
                            "fill": {
                                "color": "#C8D4E3"
                            },
                            "line": {
                                "color": "white"
                            }
                        }
                    }
                ],
                "carpet": [
                    {
                        "type": "carpet",
                        "aaxis": {
                            "gridcolor": "white",
                            "linecolor": "white",
                            "endlinecolor": "#2a3f5f",
                            "minorgridcolor": "white",
                            "startlinecolor": "#2a3f5f"
                        },
                        "baxis": {
                            "gridcolor": "white",
                            "linecolor": "white",
                            "endlinecolor": "#2a3f5f",
                            "minorgridcolor": "white",
                            "startlinecolor": "#2a3f5f"
                        }
                    }
                ],
                "mesh3d": [
                    {
                        "type": "mesh3d",
                        "colorbar": {
                            "ticks": "",
                            "outlinewidth": 0
                        }
                    }
                ],
                "contour": [
                    {
                        "type": "contour",
                        "colorbar": {
                            "ticks": "",
                            "outlinewidth": 0
                        },
                        "autocolorscale": true
                    }
                ],
                "heatmap": [
                    {
                        "type": "heatmap",
                        "colorbar": {
                            "ticks": "",
                            "outlinewidth": 0
                        },
                        "autocolorscale": true
                    }
                ],
                "scatter": [
                    {
                        "type": "scatter",
                        "marker": {
                            "colorbar": {
                                "ticks": "",
                                "outlinewidth": 0
                            }
                        }
                    }
                ],
                "surface": [
                    {
                        "type": "surface",
                        "colorbar": {
                            "ticks": "",
                            "outlinewidth": 0
                        }
                    }
                ],
                "heatmapgl": [
                    {
                        "type": "heatmapgl",
                        "colorbar": {
                            "ticks": "",
                            "outlinewidth": 0
                        }
                    }
                ],
                "histogram": [
                    {
                        "type": "histogram",
                        "marker": {
                            "colorbar": {
                                "ticks": "",
                                "outlinewidth": 0
                            }
                        }
                    }
                ],
                "parcoords": [
                    {
                        "line": {
                            "colorbar": {
                                "ticks": "",
                                "outlinewidth": 0
                            }
                        },
                        "type": "parcoords"
                    }
                ],
                "scatter3d": [
                    {
                        "type": "scatter3d",
                        "marker": {
                            "colorbar": {
                                "ticks": "",
                                "outlinewidth": 0
                            }
                        }
                    }
                ],
                "scattergl": [
                    {
                        "type": "scattergl",
                        "marker": {
                            "colorbar": {
                                "ticks": "",
                                "outlinewidth": 0
                            }
                        }
                    }
                ],
                "choropleth": [
                    {
                        "type": "choropleth",
                        "colorbar": {
                            "ticks": "",
                            "outlinewidth": 0
                        }
                    }
                ],
                "scattergeo": [
                    {
                        "type": "scattergeo",
                        "marker": {
                            "colorbar": {
                                "ticks": "",
                                "outlinewidth": 0
                            }
                        }
                    }
                ],
                "histogram2d": [
                    {
                        "type": "histogram2d",
                        "colorbar": {
                            "ticks": "",
                            "outlinewidth": 0
                        },
                        "autocolorscale": true
                    }
                ],
                "scatterpolar": [
                    {
                        "type": "scatterpolar",
                        "marker": {
                            "colorbar": {
                                "ticks": "",
                                "outlinewidth": 0
                            }
                        }
                    }
                ],
                "contourcarpet": [
                    {
                        "type": "contourcarpet",
                        "colorbar": {
                            "ticks": "",
                            "outlinewidth": 0
                        }
                    }
                ],
                "scattercarpet": [
                    {
                        "type": "scattercarpet",
                        "marker": {
                            "colorbar": {
                                "ticks": "",
                                "outlinewidth": 0
                            }
                        }
                    }
                ],
                "scattermapbox": [
                    {
                        "type": "scattermapbox",
                        "marker": {
                            "colorbar": {
                                "ticks": "",
                                "outlinewidth": 0
                            }
                        }
                    }
                ],
                "scatterpolargl": [
                    {
                        "type": "scatterpolargl",
                        "marker": {
                            "colorbar": {
                                "ticks": "",
                                "outlinewidth": 0
                            }
                        }
                    }
                ],
                "scatterternary": [
                    {
                        "type": "scatterternary",
                        "marker": {
                            "colorbar": {
                                "ticks": "",
                                "outlinewidth": 0
                            }
                        }
                    }
                ],
                "histogram2dcontour": [
                    {
                        "type": "histogram2dcontour",
                        "colorbar": {
                            "ticks": "",
                            "outlinewidth": 0
                        },
                        "autocolorscale": true
                    }
                ]
            },
            "layout": {
                "geo": {
                    "bgcolor": "white",
                    "showland": true,
                    "lakecolor": "white",
                    "landcolor": "#E5ECF6",
                    "showlakes": true,
                    "subunitcolor": "white"
                },
                "font": {
                    "color": "#2a3f5f"
                },
                "polar": {
                    "bgcolor": "#E5ECF6",
                    "radialaxis": {
                        "ticks": "",
                        "gridcolor": "white",
                        "linecolor": "white"
                    },
                    "angularaxis": {
                        "ticks": "",
                        "gridcolor": "white",
                        "linecolor": "white"
                    }
                },
                "scene": {
                    "xaxis": {
                        "ticks": "",
                        "gridcolor": "white",
                        "gridwidth": 2,
                        "linecolor": "white",
                        "zerolinecolor": "white",
                        "showbackground": true,
                        "backgroundcolor": "#E5ECF6"
                    },
                    "yaxis": {
                        "ticks": "",
                        "gridcolor": "white",
                        "gridwidth": 2,
                        "linecolor": "white",
                        "zerolinecolor": "white",
                        "showbackground": true,
                        "backgroundcolor": "#E5ECF6"
                    },
                    "zaxis": {
                        "ticks": "",
                        "gridcolor": "white",
                        "gridwidth": 2,
                        "linecolor": "white",
                        "zerolinecolor": "white",
                        "showbackground": true,
                        "backgroundcolor": "#E5ECF6"
                    }
                },
                "title": {
                    "x": 0.05
                },
                "xaxis": {
                    "ticks": "",
                    "gridcolor": "white",
                    "linecolor": "white",
                    "automargin": true,
                    "zerolinecolor": "white",
                    "zerolinewidth": 2
                },
                "yaxis": {
                    "ticks": "",
                    "gridcolor": "white",
                    "linecolor": "white",
                    "automargin": true,
                    "zerolinecolor": "white",
                    "zerolinewidth": 2
                },
                "ternary": {
                    "aaxis": {
                        "ticks": "",
                        "gridcolor": "white",
                        "linecolor": "white"
                    },
                    "baxis": {
                        "ticks": "",
                        "gridcolor": "white",
                        "linecolor": "white"
                    },
                    "caxis": {
                        "ticks": "",
                        "gridcolor": "white",
                        "linecolor": "white"
                    },
                    "bgcolor": "#E5ECF6"
                },
                "colorway": [
                    "#636efa",
                    "#EF553B",
                    "#00cc96",
                    "#ab63fa",
                    "#19d3f3",
                    "#e763fa",
                    "#fecb52",
                    "#ffa15a",
                    "#ff6692",
                    "#b6e880"
                ],
                "hovermode": "closest",
                "colorscale": {
                    "diverging": [
                        [
                            0,
                            "#8e0152"
                        ],
                        [
                            0.1,
                            "#c51b7d"
                        ],
                        [
                            0.2,
                            "#de77ae"
                        ],
                        [
                            0.3,
                            "#f1b6da"
                        ],
                        [
                            0.4,
                            "#fde0ef"
                        ],
                        [
                            0.5,
                            "#f7f7f7"
                        ],
                        [
                            0.6,
                            "#e6f5d0"
                        ],
                        [
                            0.7,
                            "#b8e186"
                        ],
                        [
                            0.8,
                            "#7fbc41"
                        ],
                        [
                            0.9,
                            "#4d9221"
                        ],
                        [
                            1,
                            "#276419"
                        ]
                    ],
                    "sequential": [
                        [
                            0,
                            "#0508b8"
                        ],
                        [
                            0.0893854748603352,
                            "#1910d8"
                        ],
                        [
                            0.1787709497206704,
                            "#3c19f0"
                        ],
                        [
                            0.2681564245810056,
                            "#6b1cfb"
                        ],
                        [
                            0.3575418994413408,
                            "#981cfd"
                        ],
                        [
                            0.44692737430167595,
                            "#bf1cfd"
                        ],
                        [
                            0.5363128491620112,
                            "#dd2bfd"
                        ],
                        [
                            0.6256983240223464,
                            "#f246fe"
                        ],
                        [
                            0.7150837988826816,
                            "#fc67fd"
                        ],
                        [
                            0.8044692737430168,
                            "#fe88fc"
                        ],
                        [
                            0.8938547486033519,
                            "#fea5fd"
                        ],
                        [
                            0.9832402234636871,
                            "#febefe"
                        ],
                        [
                            1,
                            "#fec3fe"
                        ]
                    ],
                    "sequentialminus": [
                        [
                            0,
                            "#0508b8"
                        ],
                        [
                            0.0893854748603352,
                            "#1910d8"
                        ],
                        [
                            0.1787709497206704,
                            "#3c19f0"
                        ],
                        [
                            0.2681564245810056,
                            "#6b1cfb"
                        ],
                        [
                            0.3575418994413408,
                            "#981cfd"
                        ],
                        [
                            0.44692737430167595,
                            "#bf1cfd"
                        ],
                        [
                            0.5363128491620112,
                            "#dd2bfd"
                        ],
                        [
                            0.6256983240223464,
                            "#f246fe"
                        ],
                        [
                            0.7150837988826816,
                            "#fc67fd"
                        ],
                        [
                            0.8044692737430168,
                            "#fe88fc"
                        ],
                        [
                            0.8938547486033519,
                            "#fea5fd"
                        ],
                        [
                            0.9832402234636871,
                            "#febefe"
                        ],
                        [
                            1,
                            "#fec3fe"
                        ]
                    ]
                },
                "plot_bgcolor": "#E5ECF6",
                "paper_bgcolor": "white",
                "shapedefaults": {
                    "line": {
                        "width": 0
                    },
                    "opacity": 0.4,
                    "fillcolor": "#506784"
                },
                "annotationdefaults": {
                    "arrowhead": 0,
                    "arrowcolor": "#506784",
                    "arrowwidth": 1
                }
            },
            "themeRef": "PLOTLY_GRAY"
        }
    },
    "frames": []
}