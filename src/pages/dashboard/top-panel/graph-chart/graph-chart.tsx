import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
} from 'chart.js';
import './graph-chart.css';

ChartJS.register(CategoryScale, LinearScale, BarElement);

export const GraphChart: React.FC = () => (
  <>
    <Bar
      options={{
        layout: {
          padding: {
            bottom: 6,
          },
        },
        scales: {
          y: {
            display: false,
          },
          x: { display: false },
        },
      }}
      data={{
        labels: [
          'alpha',
          'beta',
          'niner',
          'bravo',
          'delta',
          'charlie',
          'hotel',
        ],
        datasets: [
          {
            data: [40, 60, 80, 100, 60, 80, 40],
            backgroundColor: [
              '#302C54',
              '#6058A8',
              '#938BDB',
              '#938BDB',
              '#6058A8',
              '#938BDB',
              '#302C54',
            ],
            borderWidth: 2,
            borderColor: '#938BDB',
            borderSkipped: false,
          },
        ],
      }}
    />
    <h2 className='GraphChart-label'>Graph</h2>
  </>
);
