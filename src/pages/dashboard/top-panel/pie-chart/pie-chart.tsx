import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Pie } from 'react-chartjs-2';

export const PieChart: React.FC = () => (
  <Pie
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
);