import { Link } from 'react-router-dom';
import { RuxButton, RuxContainer } from '@astrouxds/react';
import { Path } from 'types';
import './home.css';

export const Home: React.FC = () => (
  <RuxContainer className='Home'>
    <Link to={Path.dashboard}>
      <RuxButton>Go To Dashboard</RuxButton>
    </Link>
  </RuxContainer>
);
