Highcharts.setOptions({
    chart: {
        styledMode: true
    },
    legend: {
        enabled: false
    },
    xAxis: {
        type: 'category',
        title: {
            text: 'Decade'
        }
    },
    credits: {
        enabled: false
    },
    title: {
        text: ''
    }
});

Dashboards.board('container', {
    dataPool: {
        connectors: [{
            type: 'JSON',
            id: 'data',
            options: {
                orientation: 'columns',
                data: [
                    ['Decade', '1920-1929', '1930-1939', '1940-1949', '1950-1959', '1960-1969', '1970-1979', '1980-1989', '1990-1999', '2000-2009', '2010-2019'],
                    ['Global Avg Temperature Increase', 0.0, 0.1, 0.1, 0.2, 0.2, 0.3, 0.4, 0.5, 0.6, 0.8],
                    ['CO2 Concentration', 305, 310, 312, 315, 320, 327, 340, 355, 375, 400],
                    ['Sea Level Rise', 0.0, 0.2, 0.4, 0.8, 1.0, 2.0, 3.0, 4.5, 6.0, 8.0],
                    ['Extreme Weather Events', 'Rare', 'Uncommon', 'Uncommon', 'Increasing', 'More frequent', 'Frequent', 'Much more frequent', 'Common', 'Common, intense', 'Extreme']
                ]
            }
        }]
    },
    gui: {
        layouts: [{
            rows: [{
                cells: [{
                    id: 'cell-0-0'
                }, {
                    id: 'cell-0-1'
                }]
            }, {
                cells: [{
                    id: 'cell-1-0'
                }, {
                    id: 'cell-1-1'
                }, {
                    id: 'cell-1-2'
                }]
            }]
        }]
    },
    components: [{
        renderTo: 'cell-0-0',
        type: 'HTML',
        html: `<div class="content">
            <h1>Climate Change - A&nbsp;deep Dive into the Data</h1>
            <p>Understanding how the climate has changed over time can help us prepare for the future. By looking at
            the data from the last 100 years, we can see patterns, learn what's driving these changes, and start
            thinking about how we can address them. Let's break down the numbers, year by year, to better understand
            the impact climate change has had on our planet.</p>
        </div>`,
    }, {
        renderTo: 'cell-0-1',
        type: 'DataGrid',
        connector: {
            id: 'data'
        },
        sync: {
            highlight: {
                enabled: true,
                autoScroll: true
            }
        },
        dataGridOptions: {
            credits: {
                enabled: false
            },
            rendering: {
                rows: {
                    strictHeights: true
                }
            },
            columnDefaults: {
                cells: {
                    editable: true
                }
            },
            caption: {
                text: 'Table showing climate development'
            },
            header: [{
                columnId: 'Decade',
            }, {
                columnId: 'CO2 Concentration',
            }, {
                format: 'Effects',
                columns: [{
                    columnId: 'Global Avg Temperature Increase',
                }, {
                    columnId: 'Sea Level Rise',
                }, {
                    columnId: 'Extreme Weather Events',
                }]
            }],
            columns: [{
                id: 'Decade',
                cells: {
                    editable: false
                }
            }, {
                id: 'Global Avg Temperature Increase',
                header: {
                    format: 'Global Average Temperature Increase'
                },
                cells: {
                    format: '{value:0.1f} °C'
                }
            }, {
                id: 'CO2 Concentration',
                cells: {
                    format: '{value} ppm'
                }
            }, {
                id: 'Sea Level Rise',
                cells: {
                    format: '{value:0.1f} cm'
                }
            }]
        }
    }, {
        renderTo: 'cell-1-0',
        type: 'Highcharts',
        connector: {
            id: 'data',
            columnAssignment: [{
                seriesId: 'CO2 Concentration',
                data: ['Decade', 'CO2 Concentration']
            }]
        },
        sync: {
            highlight: true
        },
        chartOptions: {
            title: {
                text: 'CO2 Concentration Over Time'
            },
            yAxis: {
                title: {
                    text: 'CO2 Level [ppm]'
                }
            },
            tooltip: {
                valueSuffix: ' ppm'
            }
        }
    }, {
        renderTo: 'cell-1-1',
        type: 'Highcharts',
        connector: {
            id: 'data',
            columnAssignment: [{
                seriesId: 'Temperature Increase',
                data: ['Decade', 'Global Avg Temperature Increase']
            }]
        },
        sync: {
            highlight: true
        },
        chartOptions: {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Temperature Increase'
            },
            yAxis: {
                title: {
                    text: 'Temperature Change [°C]'
                }
            },
            tooltip: {
                valueSuffix: '°C'
            }
        }
    }, {
        renderTo: 'cell-1-2',
        type: 'Highcharts',
        connector: {
            id: 'data',
            columnAssignment: [{
                seriesId: 'Sea Level Rise',
                data: ['Decade', 'Sea Level Rise']
            }]
        },
        sync: {
            highlight: true
        },
        chartOptions: {
            chart: {
                type: 'area'
            },
            title: {
                text: 'Global Sea Level Change'
            },
            yAxis: {
                title: {
                    text: 'Sea Level Change [cm]'
                }
            },
            tooltip: {
                valueSuffix: ' cm'
            }
        }
    }]
});

