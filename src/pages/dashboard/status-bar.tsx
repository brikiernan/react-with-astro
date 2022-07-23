import {
  RuxClock,
  RuxGlobalStatusBar,
  RuxMonitoringIcon,
} from '@astrouxds/react';
import './status-bar.css';

const StatusBar: React.FC = () => (
  <RuxGlobalStatusBar
    appState='Production'
    appStateColor='tag1'
    username='Joan Smith'
    appDomain='Astro'
    appName='Dashboard'
    appVersion='4.0 Alpha'
    menuIcon='apps'
    includeIcon
  >
    <RuxClock />
    <div className='StatusBar-icons' slot='right-side'>
      <RuxMonitoringIcon
        icon='antenna-transmit'
        label='Connector'
        status='caution'
        notifications={1}
      />
      <RuxMonitoringIcon icon='thermal' label='Temp' />
      <RuxMonitoringIcon icon='equipment' label='Process' />
    </div>
  </RuxGlobalStatusBar>
);

export default StatusBar;
