import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import data from './Data/Yearly_Revenues.json';

const StackBar: React.FC = () => {
  const [selectedCompany, setSelectedCompany] = useState<string>('');

  const handleCompanyChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCompany(event.target.value);
  };

  const filteredData = data.map((yearData: any) => ({
    Year: yearData.Year,
    Revenue: yearData[selectedCompany] || 0
  }));

  return (
    <div>
      <div>
        <label htmlFor="hotelIndustries">Hotel Industries: </label>
        <select id="hotelIndustries" onChange={handleCompanyChange}>
          <option value="">Select a company</option>
          <option value="IHCL">IHCL</option>
          <option value="Taj GVK">Taj GVK</option>
          <option value="EIH">EIH</option>
          <option value="Lemon Tree">Lemon Tree</option>
          <option value="Chalet Hotels">Chalet Hotels</option>
          <option value="Oyo">Oyo</option>
          <option value="Treebo">Treebo</option>
        </select>
      </div>
      <div>
        <label htmlFor="airIndustries">Air Industries: </label>
        <select id="airIndustries" onChange={handleCompanyChange}>
          <option value="">Select an airline</option>
          <option value="Indigo">Indigo</option>
          <option value="SpiceJet">SpiceJet</option>
        </select>
      </div>
      <BarChart
        width={600}
        height={400}
        data={filteredData}
        margin={{
          top: 20, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="Year" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Revenue" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

export default StackBar;
