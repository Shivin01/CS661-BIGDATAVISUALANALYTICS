import React, { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';
import jsonData from './Data/CS661Stockdata_processed.json'; // Import JSON data directly

interface IDataPoint {
  Date: string;
  'INDIGO.NS_open': number;
  'INDIGO.NS_high': number;
  'INDIGO.NS_low': number;
  'INDIGO.NS_close': number;
}

interface IAllData {
  daily: IDataPoint[];
  monthly: IDataPoint[];
  quarterly: IDataPoint[];
  yearly: IDataPoint[];
}

const StockChart: React.FC = () => {
  const [timeframe, setTimeframe] = useState<'daily' | 'monthly' | 'quarterly' | 'yearly'>('daily');
  const [plotData, setPlotData] = useState<IDataPoint[]>(jsonData.daily); // Set initial data to daily

  useEffect(() => {
    // Update plot data when timeframe changes
    setPlotData(jsonData[timeframe]);
  }, [timeframe]);

  const getPlotlyData = () => {
    return [{
      x: plotData.map(d => d.Date),
      close: plotData.map(d => d['INDIGO.NS_close']),
      high: plotData.map(d => d['INDIGO.NS_high']),
      low: plotData.map(d => d['INDIGO.NS_low']),
      open: plotData.map(d => d['INDIGO.NS_open']),
      // Set the colors for increasing and decreasing
      increasing: {line: {color: 'green'}},
      decreasing: {line: {color: 'red'}},
      type: 'candlestick',
      xaxis: 'x',
      yaxis: 'y'
    }];
  };
  

  const layout = {
    title: 'Candle Stick Chart for INDIGO',
    xaxis: {
      title: 'Date',
      type: 'date'
    },
    yaxis: {
      title: 'Price'
    }
  };

  return (
    <div style={{ position: 'relative', paddingTop: '50px' }}>
      <div style={{ position: 'absolute', top: '10px', left: '10px', zIndex: 10 }}>
        <button onClick={() => setTimeframe('daily')} style={{ marginRight: '5px' }}>Daily</button>
        <button onClick={() => setTimeframe('monthly')} style={{ marginRight: '5px' }}>Monthly</button>
        <button onClick={() => setTimeframe('quarterly')} style={{ marginRight: '5px' }}>Quarterly</button>
        <button onClick={() => setTimeframe('yearly')} style={{ marginRight: '5px' }}>Yearly</button>
      </div>
      <Plot
  data={getPlotlyData()}
  layout={layout}
  style={{ width: '100%', height: '100%' }}
 />

    </div>
  );
};

export default StockChart;
