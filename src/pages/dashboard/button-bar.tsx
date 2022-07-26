import { RuxButton, RuxButtonGroup } from '@astrouxds/react';
import { Drawer } from 'components/drawer';
import './button-bar.css';

const ButtonBar: React.FC = () => (
  <div className='ButtonBar-group'>
    <RuxButtonGroup>
      <RuxButton className='pr-3' secondary>
        First button
      </RuxButton>
      <RuxButton className='flex-grow-1' secondary>
        Button two
      </RuxButton>
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
