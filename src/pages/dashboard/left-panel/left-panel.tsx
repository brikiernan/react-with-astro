import { RuxContainer } from '@astrouxds/react';
import Header from './header';
import TabBar from './tab-bar';
import Toolbar from './toolbar';
import List from './list';
import Footer from './footer';
import './left-panel.css';

export const LeftPanel: React.FC = () => (
  <RuxContainer className='Dashboard-left-panel'>
    <Header />
    <TabBar />
    <Toolbar />
    <List />
    <Footer />
  </RuxContainer>
);
