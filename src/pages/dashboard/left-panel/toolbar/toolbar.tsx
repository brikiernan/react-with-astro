import { RuxOption, RuxSelect } from '@astrouxds/react';
import { useData } from 'providers/data';
import './toolbar.css';

export const Toolbar: React.FC = () => {
  const { contacts } = useData();

  return (
    <div className='Toolbar-grid' slot='toolbar'>
      <div className='Toolbar-box'>
        <h1>{contacts.length}</h1>
        <p>Active Items</p>
      </div>
      <div>
        <p className='gutter-bottom'>Sort by</p>
        <RuxSelect placeholder='Last updated' size='small'>
          <RuxOption value='last-updated' label='Last updated' />
          <RuxOption value='1.1' label='Option 1.1' />
          <RuxOption value='1.2' label='Option 1.2' />
          <RuxOption value='1.3' label='Option 1.3' />
        </RuxSelect>
      </div>
      <div>
        <p className='gutter-bottom'>Item type</p>
        <RuxSelect placeholder='All' size='small'>
          <RuxOption value='all' label='All' />
          <RuxOption value='1.1' label='Option 1.1' />
          <RuxOption value='1.2' label='Option 1.2' />
          <RuxOption value='1.3' label='Option 1.3' />
        </RuxSelect>
      </div>
    </div>
  );
};
