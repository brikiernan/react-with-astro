import { RuxButton, RuxIcon, RuxInput } from '@astrouxds/react';
import './header.css';

const Header: React.FC = () => (
  <div className='Header-box'>
    <h2>Contacts</h2>
    <div className='Header-input'>
      <RuxInput placeholder='Search...' size='small'>
        <RuxIcon slot='prefix' icon='search' size='extra-small' />
      </RuxInput>
      <RuxButton iconOnly icon='border-clear' secondary size='small' />
    </div>
  </div>
);

export default Header;
