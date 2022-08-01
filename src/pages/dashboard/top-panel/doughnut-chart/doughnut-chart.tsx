import { Chart as ChartJS, ArcElement } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import './doughnut-chart.css';

ChartJS.register(ArcElement);

export const DoughnutChart: React.FC = () => (
  <>
    <Doughnut
      plugins={[ChartDataLabels]}
      options={{
        plugins: {
          datalabels: {
            color: ctx => {
              if (ctx.dataIndex === 0) return 'black';
              return 'white';
            },
            font: {
              size: 14,
              weight: 700,
              lineHeight: 20,
            },
            formatter: value => value + '%',
          },
        },
      }}
      data={{
        datasets: [
          {
            data: [25, 25, 25, 25],
            backgroundColor: ['#AEA8E5', '#938BDB', '#6058A8', '#302C54'],
            borderWidth: 0,
          },
        ],
      }}
    />
    <div className='DoughnutChart-inner'>
      <h3>35,000</h3>
      <p>Title here</p>
    </div>
  </>
);
