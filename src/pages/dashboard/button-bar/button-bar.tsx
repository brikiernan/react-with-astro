import { RuxButton, RuxButtonGroup } from '@astrouxds/react';
import './button-bar.css';

export const ButtonBar: React.FC = () => (
  <div className='Dashboard-button-bar'>
    <RuxButtonGroup>
      <RuxButton size='small' className='pr-3' secondary>
        First button
      </RuxButton>
      <RuxButton size='small' className='flex-grow-1' secondary>
        Button two
      </RuxButton>
      <RuxButton size='small' className='pr-3' secondary>
        Third longish button
      </RuxButton>
      <RuxButton size='small' className='pr-3' secondary>
        Button 4
      </RuxButton>
      <RuxButton size='small' className='pr-3' secondary>
        Fifth longish button name
      </RuxButton>
    </RuxButtonGroup>
  </div>
);
