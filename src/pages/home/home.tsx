import { useState } from 'react';
import { Link } from 'react-router-dom';
import { RuxButton } from '@astrouxds/react';

import { Path } from 'types';
import { Stack } from 'components/stack';
import ClickAwayListener from 'components/click-away-listener';
import RuxList from 'common/rux-list';
import RuxListItem from 'common/rux-list-item';
import './home.css';

export const Home: React.FC = () => {
  const [selected, setSelected] = useState(-1);

  return (
    <div className='Home-container'>
      <Stack direction='column' spacing={8}>
        <Stack direction='column' spacing={4}>
          <h3>Astro 7.0 Sample App</h3>
          <Link to={Path.dashboard}>
            <RuxButton>Go To Sample App</RuxButton>
          </Link>
        </Stack>

        <Stack direction='column' spacing={4} style={{ width: 250 }}>
          <h3>Rux List</h3>
          <RuxList>
            {Array(5)
              .fill('Rux List item')
              .map((item, i) => (
                <ClickAwayListener
                  key={i}
                  onClickAway={() => {
                    if (i !== selected) return;
                    setSelected(-1);
                  }}
                >
                  <RuxListItem
                    selected={i === selected}
                    onClick={() => {
                      if (i === selected) return setSelected(-1);
                      setSelected(i);
                    }}
                  >
                    {item}
                  </RuxListItem>
                </ClickAwayListener>
              ))}
          </RuxList>
        </Stack>
      </Stack>
    </div>
  );
};
