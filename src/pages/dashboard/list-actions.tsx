import { RuxButton, RuxButtonGroup } from '@astrouxds/react';

const ListActions: React.FC = () => (
  <div slot='footer'>
    <RuxButtonGroup hAlign='right'>
      <RuxButton className='pr-3' secondary>
        Dismiss
      </RuxButton>
      <RuxButton>Acknowledge</RuxButton>
    </RuxButtonGroup>
  </div>
);

export default ListActions;
