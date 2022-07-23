import { RuxButton, RuxButtonGroup } from '@astrouxds/react';
import './button-bar.css';

const ButtonBar: React.FC = () => (
  <div className='ButtonBar-group'>
    <RuxButtonGroup>
      <RuxButton className='pr-3' secondary>
        First Button
      </RuxButton>
      <RuxButton secondary>Second Button</RuxButton>
      <div className='flex-grow-1' />
      <RuxButton className='pr-3' secondary>
        Third Button
      </RuxButton>
      <RuxButton className='pr-3' secondary>
        Fourth Button
      </RuxButton>
      <RuxButton
        secondary
        onClick={() => console.log('Open the drawer please...')}
      >
        Open Drawer
      </RuxButton>
    </RuxButtonGroup>
  </div>
);

export default ButtonBar;
