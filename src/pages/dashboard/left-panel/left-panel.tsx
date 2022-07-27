import { RuxContainer } from '@astrouxds/react';
import Header from './header';
import List from './list';
import ListActions from './list-actions';
import TabBar from './tab-bar';
import Toolbar from './toolbar';
import './left-panel.css';

export const LeftPanel: React.FC = () => (
  <RuxContainer className='Dashboard-left-panel disable-body-padding'>
    <Header />
    <TabBar />
    <Toolbar />
    <List />
    <ListActions />
  </RuxContainer>
);
