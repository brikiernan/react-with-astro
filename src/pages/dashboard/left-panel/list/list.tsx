import { useState } from 'react';
import { RuxStatus } from '@astrouxds/react';
import { useData } from 'providers/data';
import './list.css';

export const List: React.FC = () => {
  const [selected, setSelected] = useState(-1);
  const { contacts } = useData();

  return (
    <ul className='List-ul-container'>
      {contacts.map(({ _id, ...c }, i) => (
        <li
          key={_id}
          className={selected === i ? 'selected' : undefined}
          onClick={() => setSelected(i)}
        >
          <RuxStatus status={c.contactStatus} />
          <div className='flex-grow-1'>
            <h3>{c.contactSatellite}</h3>
            <h6>{c.contactStep}</h6>
          </div>
          <h1>{c.contactElevation}</h1>
        </li>
      ))}
    </ul>
  );
};
