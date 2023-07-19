import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';

const AnalyticsPage = () => {
  const [distributionChannel, setDistributionChannel] = useState('');
  const [customerNumber, setCustomerNumber] = useState('');
  const [chartData, setChartData] = useState({
    barChart: {
      xAxis: {
        categories: ['Label 1', 'Label 2', 'Label 3'],
      },
      series: [
        {
          name: 'Bar Chart',
          data: [10, 20, 30],
          color: ['#db4437', '#4285f4', '#fbbc05'],
        },
      ],
    },
    pieChart: {
      series: [
        {
          name: 'Pie Chart',
          data: [
            { name: 'Label 1', y: 40 },
            { name: 'Label 2', y: 30 },
            { name: 'Label 3', y: 30 },
          ],
        },
      ],
      colors: ['#db4437', '#4285f4', '#fbbc05'],
    },
  });

  const handleAnalyticsButtonClick = () => {
    // Perform analytics calculations and update chart data
    const newChartData = {
      barChart: {
        xAxis: {
          categories: ['Label 1', 'Label 2', 'Label 3'],
        },
        series: [
          {
            name: 'Bar Chart',
            data: [40, 20, 10],
            color: ['#db4437', '#4285f4', '#fbbc05'],
          },
        ],
      },
      pieChart: {
        series: [
          {
            name: 'Pie Chart',
            data: [
              { name: 'Label 1', y: 60 },
              { name: 'Label 2', y: 20 },
              { name: 'Label 3', y: 20 },
            ],
          },
        ],
        colors: ['#db4437', '#4285f4', '#fbbc05'],
      },
    };

    setChartData(newChartData);
  };

  return (
    <div>
      <TextField
        label="Distribution Channel"
        value={distributionChannel}
        onChange={(e) => setDistributionChannel(e.target.value)}
      />
      <TextField
        label="Customer Number"
        value={customerNumber}
        onChange={(e) => setCustomerNumber(e.target.value)}
      />
      <Button
        variant="contained"
        style={{ backgroundColor: '#fc7500', marginTop: '16px' }}
        onClick={handleAnalyticsButtonClick}
      >
        Calculate Analytics
      </Button>
      <div>
        <HighchartsReact highcharts={Highcharts} options={chartData.barChart} />
      </div>
      <div>
        <HighchartsReact highcharts={Highcharts} options={chartData.pieChart} />
      </div>
    </div>
  );
};

export default AnalyticsPage;
