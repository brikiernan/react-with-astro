import { Chart as ChartJS, ArcElement } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement);

export const PieChart: React.FC = () => (
  <Pie
    // seems to be a bug with this lib on the pie chart
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
      labels: ['Red', 'Blue', 'Yellow', 'Green'],
      datasets: [
        {
          data: [25, 25, 25, 25],
          backgroundColor: ['#AEA8E5', '#938BDB', '#6058A8', '#302C54'],
          borderWidth: 0,
        },
      ],
    }}
  />
);
