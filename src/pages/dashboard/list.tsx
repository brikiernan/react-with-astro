import { useState } from 'react';
import { RuxStatus } from '@astrouxds/react';
import { Contact } from 'types';
import './list.css';

type ListProps = {
  contacts: Contact[];
};

const List: React.FC<ListProps> = ({ contacts }) => {
  const [selected, setSelected] = useState(-1);

  return (
    <div className='List-box'>
      <ul>
        {contacts.map(({ _id, ...c }, i) => (
          <li
            key={_id}
            className={selected === i ? 'List-item-selected' : 'List-item'}
            onClick={() => setSelected(i)}
          >
            <RuxStatus status={c.contactStatus} />
            <div>
              <h3>{c.contactSatellite}</h3>
              <h6>{c.contactStep}</h6>
            </div>
            <h1>{c.contactElevation}</h1>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
