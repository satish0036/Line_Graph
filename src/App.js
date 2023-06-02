import React, { useEffect, useState } from 'react';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function App() {
  const [data, setData] = useState([]);

  const getData = async () => {
    const res = await fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=all');
    const actualData = await res.json();
    const transformedData = Object.keys(actualData.cases).map((date) => ({
      date,
      cases: actualData.cases[date],
      deaths: actualData.deaths[date],
      recoveries: actualData.recovered[date],
    }));
    setData(transformedData);
  };

  useEffect(() => {
    getData();
  }, []);

  const colors = ['#d9041a', '#8884d8', '#ffc658'];

  return (
    <div>
      <h1>COVID-19 Cases, Deaths, and Recoveries</h1>
      {data.length > 0 ? (
        <ResponsiveContainer width="95%" height={300}>
          <LineChart data={data} margin={{ bottom: 0 ,left:30 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis domain={[0, 'dataMax']} />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="cases" stroke={colors[0]} dot={false} />
            <Line type="monotone" dataKey="deaths" stroke={colors[1]} dot={false} />
            <Line type="monotone" dataKey="recoveries" stroke={colors[2]} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}

export default App;
