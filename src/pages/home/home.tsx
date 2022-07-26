import { Link } from 'react-router-dom';
import { RuxButton } from '@astrouxds/react';
import { Path } from 'types';
import './home.css';

export const Home: React.FC = () => (
  <div className='Home-container'>
    <Link to={Path.dashboard}>
      <RuxButton>Go To Dashboard</RuxButton>
    </Link>

    {/* @ts-ignore */}
    <rux-button onClick={() => console.log('Clicked...')} class='pl-3'>
      Button Without Wrapper
      {/* @ts-ignore */}
    </rux-button>
  </div>
);
