import { RuxButton, RuxIcon, RuxInput } from '@astrouxds/react';
import './header.css';

export const Header: React.FC = () => (
  <div className='Header-box' slot='header'>
    <h2>Left panel</h2>
    <div id='Header-input-btn' className='Header-input'>
      <RuxInput placeholder='Search...' size='small'>
        <RuxIcon slot='prefix' icon='search' size='extra-small' />
      </RuxInput>
      <RuxButton iconOnly icon='border-clear' secondary size='small' />
    </div>
  </div>
);
