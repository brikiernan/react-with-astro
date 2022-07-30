import { RuxContainer, RuxSegmentedButton, RuxSwitch } from '@astrouxds/react';
import './top-panel.css';

export const TopPanel: React.FC = () => {
  return (
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
      <div style={{ height: 192, background: '#333' }}>Charts go here</div>
    </RuxContainer>
  );
};
