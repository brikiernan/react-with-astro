import { RuxButton, RuxButtonGroup } from '@astrouxds/react';
import './list-actions.css';

const ListActions: React.FC = () => (
  <div className='ListActions'>
    <RuxButtonGroup hAlign='right'>
      <RuxButton className='pr-3' secondary>
        Dismiss
      </RuxButton>
      <RuxButton>Acknowledge</RuxButton>
    </RuxButtonGroup>
  </div>
);

export default ListActions;
