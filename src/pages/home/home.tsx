import { Link } from 'react-router-dom';
import { RuxButton } from '@astrouxds/react';

export const Home: React.FC = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <Link to='/dashboard'>
        <RuxButton>Go To Dashboard</RuxButton>
      </Link>
    </div>
  );
};
