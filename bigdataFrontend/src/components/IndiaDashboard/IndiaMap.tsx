import React, {useEffect, useState} from 'react';
import Plot from 'react-plotly.js';
import axios from 'axios';

// const Plot = createPlotlyComponent(Plotly);

const data = {
    state: [
        "Andaman & Nicobar",
        "Andhra Pradesh",
        "Arunachal Pradesh",
        "Assam",
        "Bihar",
        "Chandigarh",
        "Chhattisgarh",
        "Dadra and Nagar Haveli and Daman and Diu",
        "Delhi",
        "Goa",
        "Gujarat",
        "Haryana",
        "Himachal Pradesh",
        "Jammu & Kashmir",
        "Jharkhand",
        "Karnataka",
        "Kerala",
        "Ladakh",
        "Madhya Pradesh",
        "Maharashtra",
        "Manipur",
        "Meghalaya",
        "Mizoram",
        "Nagaland",
        "Odisha",
        "Puducherry",
        "Punjab",
        "Rajasthan",
        "Sikkim",
        "Tamil Nadu",
        "Telangana",
        "Tripura",
        "Uttarakhand",
        "Uttar Pradesh",
        "West Bengal"
    ],
    'active cases': [
        47, 18159, 387, 6818, 7549, 164, 1260, 179, 17407, 1272, 11289, 5495, 382, 5488,
        2069, 30661, 5376, 176, 5562, 114947, 635, 309, 112, 525, 4436, 774, 2587, 6666,
        155, 46717, 13327, 676, 937, 15720, 13679]
    // 'active cases': [
    // 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    // 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    // 0, 0, 0, 0, 0, 15720, 0]
};

function ChoroplethMap() {
    console.log('Data:', data);

    const handleSelect = (e) => {
        console.log(e)
    }

    return (
        <div>
            <Plot
                data={[
                    {
                        type: 'choropleth',
                        geojson:
                            'https://gist.githubusercontent.com/jbrobst/56c13bbbf9d97d187fea01ca62ea5112/raw/e388c4cae20aa53cb5090210a42ebb9b765c0a36/india_states.geojson',
                        featureidkey: 'properties.ST_NM',
                        locations: data.state,
                        z: data['active cases'],
                        colorscale: 'Reds',
                        zmin: 0,
                        zmax: Math.max(...data['active cases']),
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