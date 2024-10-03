Highcharts.setOptions({
    legend: {
        enabled: false
    },
    xAxis: {
        title: {
            text: 'Year'
        }
    },
    credits: {
        enabled: false
    }
})

Dashboards.board('container', {
    dataPool: {
        connectors: [{
            type: 'CSV',
            id: 'data',
            options: {
                csv: document.getElementById('data').innerText
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
            <h1>Climate Change - A deep Dive into the Data</h1>
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
            columns: [{
                id: 'CO2',
                header: {
                    format: 'CO2 Level [ppm]'
                },
                cells: {
                    format: '{value:0.2f}'
                }
            }, {
                id: 'TempChange',
                header: {
                    format: 'Temperature Change [°C]'
                },
                cells: {
                    format: '{value:0.2f}'
                }
            }, {
                id: 'SeaLevel',
                header: {
                    format: 'Sea Level Change [mm]'
                },
                cells: {
                    format: '{value:0.2f}'
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
                data: ['Year', 'CO2']
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
            }
        }
    }, {
        renderTo: 'cell-1-1',
        type: 'Highcharts',
        connector: {
            id: 'data',
            columnAssignment: [{
                seriesId: 'Temperature Increase',
                data: ['Year', 'TempChange']
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
            }
        }
    }, {
        renderTo: 'cell-1-2',
        type: 'Highcharts',
        connector: {
            id: 'data',
            columnAssignment: [{
                seriesId: 'Sea Level Rise',
                data: ['Year', 'SeaLevel']
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
                text: 'Global Sea Level Rise'
            },
            yAxis: {
                title: {
                    text: 'Sea Level Change [mm]'
                }
            }
        }
    }]
});

