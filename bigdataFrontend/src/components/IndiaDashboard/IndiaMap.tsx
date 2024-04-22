import React, {useEffect, useState} from 'react';
import Plot from 'react-plotly.js';
import data from './Data/StateWiseJSON.json';

function ChoroplethMap() {

    let states = [];
    let values = [];

    const Data = data.map((item)=> {

        let value = 0
        Object.keys(item).map(i => {
            if (i !== 'States/UTs' && i !== 'Sl. No.' ) {
                value += parseInt(item[i])
            }
        })
        states.push(item["States/UTs"]);
        values.push(value);
    })


    const handleSelect = (e) => {
        console.log(e)
    }

    console.log(states, 'states');
    console.log(values, 'values');

    return (
        <div>
            <Plot
                data={[
                    {
                        type: 'choropleth',
                        geojson:
                            'https://gist.githubusercontent.com/jbrobst/56c13bbbf9d97d187fea01ca62ea5112/raw/e388c4cae20aa53cb5090210a42ebb9b765c0a36/india_states.geojson',
                        featureidkey: 'properties.ST_NM',
                        locations: states,
                        z: values,
                        colorscale: 'Reds',
                        zmin: 0,
                        zmax: Math.max(...values),
                        animation: {
                            duration: 1000,
                            redraw: true,
                        },
                    },
                ]}
                layout={{
                    title: 'Active Cases in India',
                    geo: {
                        fitbounds: 'locations',
                        visible: false,
                    },
                }}
                onClick={handleSelect}
            />
        </div>
    );
}

export default ChoroplethMap;