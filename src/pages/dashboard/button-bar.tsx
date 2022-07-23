import { RuxButton, RuxButtonGroup } from '@astrouxds/react';
import { Drawer } from 'components/drawer';
import './button-bar.css';

const ButtonBar: React.FC = () => (
  <div className='ButtonBar-group'>
    <RuxButtonGroup>
      <RuxButton className='pr-3' secondary>
        First button
      </RuxButton>
      <RuxButton secondary>Button two</RuxButton>
      <div className='flex-grow-1' />
      <RuxButton className='pr-3' secondary>
        Third longish button
      </RuxButton>
      <RuxButton className='pr-3' secondary>
        Button 4
      </RuxButton>
      <Drawer text='Open right slide out panel' />
    </RuxButtonGroup>
  </div>
);

export default ButtonBar;
