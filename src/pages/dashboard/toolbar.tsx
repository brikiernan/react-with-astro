import { RuxOption, RuxSelect } from '@astrouxds/react';
import { Contact } from 'types';
import './toolbar.css';

type ToolbarProps = {
  contacts: Contact[];
};

const Toolbar: React.FC<ToolbarProps> = ({ contacts }) => (
  <div className='Toolbar-grid' slot='toolbar'>
    <div className='Toolbar-box'>
      <h1>{contacts.length}</h1>
      <p>Active Items</p>
    </div>
    <div>
      <p className='p-gutter-bottom'>Sort by</p>
      <RuxSelect placeholder='Last updated' size='small'>
        <RuxOption value='last-updated' label='Last updated' />
        <RuxOption value='1.1' label='Option 1.1' />
        <RuxOption value='1.2' label='Option 1.2' />
        <RuxOption value='1.3' label='Option 1.3' />
      </RuxSelect>
    </div>
    <div>
      <p className='p-gutter-bottom'>Item type</p>
      <RuxSelect placeholder='All' size='small'>
        <RuxOption value='all' label='All' />
        <RuxOption value='1.1' label='Option 1.1' />
        <RuxOption value='1.2' label='Option 1.2' />
        <RuxOption value='1.3' label='Option 1.3' />
      </RuxSelect>
    </div>
  </div>
);

export default Toolbar;
