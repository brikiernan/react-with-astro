import { RuxClassificationMarking } from '@astrouxds/react';
import StatusBar from 'components/status-bar';
import LeftPanel from './left-panel';
import TabBar from './tab-bar';
import ButtonBar from './button-bar';
import RightPanel from './right-panel';
import BottomPanel from './bottom-panel';
import TopPanel from './top-panel';
import './dashboard.css';

export const Dashboard: React.FC = () => (
  <RuxClassificationMarking>
    <StatusBar />
    <main className='Dashboard-grid'>
      <LeftPanel />
      <TabBar />
      <ButtonBar />
      <TopPanel />
      <BottomPanel />
      <RightPanel />
    </main>
  </RuxClassificationMarking>
);
