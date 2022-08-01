import { RuxContainer, RuxSegmentedButton, RuxSwitch } from '@astrouxds/react';
import Legend from 'components/legend';
import DoughnutChart from './doughnut-chart';
import PieChart from './pie-chart';
import GraphChart from './graph-chart';
import './top-panel.css';

export const TopPanel: React.FC = () => (
  <RuxContainer className='Dashboard-top-panel'>
    <div className='TopPanel-header' slot='header'>
      <h2>Center top panel</h2>
      <div className='TopPanel-header-right'>
        <p>Show values</p>
        <RuxSwitch />
        <RuxSegmentedButton
          size='small'
          data={[{ label: 'Table' }, { label: 'Charts', selected: true }]}
        />
      </div>
    </div>
    <div className='TopPanel-charts-container'>
      <div className='TopPanel-chart-item'>
        <DoughnutChart />
        <Legend />
      </div>
      <div className='TopPanel-chart-item'>
        <PieChart />
        <Legend />
      </div>
      <div>
        <GraphChart />
      </div>
    </div>
  </RuxContainer>
);
