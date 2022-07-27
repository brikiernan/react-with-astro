import {
  RuxClock,
  RuxGlobalStatusBar,
  RuxMonitoringIcon,
} from '@astrouxds/react';
import './status-bar.css';

export const StatusBar: React.FC = () => (
  <RuxGlobalStatusBar
    appState='App state'
    appStateColor='tag1'
    username='User Name'
    appDomain='Astro'
    appName='Sample App'
    appVersion='0.0 Alpha'
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
