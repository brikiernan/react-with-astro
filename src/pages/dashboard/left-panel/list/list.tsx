import { useState } from 'react';
import { RuxStatus } from '@astrouxds/react';

import { useData } from 'providers/data';
import RuxList from 'common/rux-list';
import RuxListItem from 'common/rux-list-item';
import './list.css';

export const List: React.FC = () => {
  const [selected, setSelected] = useState(-1);
  const { contacts } = useData();

  return (
    <RuxList className='List-wrapper'>
      {contacts.map(({ _id, ...c }, i) => (
        <RuxListItem
          key={_id}
          selected={selected === i}
          onClick={() => setSelected(i)}
          className='List-item-wrapper'
        >
          <RuxStatus status={c.contactStatus} />
          <div className='flex-grow-1'>
            <h3>{c.contactSatellite}</h3>
            <h6>{c.contactStep}</h6>
          </div>
          <h1>{c.contactElevation}</h1>
        </RuxListItem>
      ))}
    </RuxList>
  );
};
