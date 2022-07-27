import { useState } from 'react';
import {
  RuxButton,
  RuxButtonGroup,
  RuxCheckbox,
  RuxContainer,
  RuxInput,
  RuxOption,
  RuxSelect,
  RuxSlider,
  RuxTab,
  RuxTabs,
  RuxTextarea,
} from '@astrouxds/react';
import { ClickAwayListener } from 'components/click-away-listener';
import './drawer.css';

type DrawerProps = {
  text: string;
};

export const Drawer: React.FC<DrawerProps> = ({ text }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);
  const handleOpen = () => setIsOpen(true);

  return (
    <>
      <div id={isOpen ? 'Drawer-overlay' : ''} />
      <ClickAwayListener onClickAway={handleClose}>
        <RuxButton size='small' secondary onClick={handleOpen}>
          {text}
        </RuxButton>
        <RuxContainer
          id={isOpen ? 'Drawer-open' : 'Drawer-closed'}
          className='Drawer-container'
        >
          <h2 slot='header'>Drawer</h2>
          <RuxTabs small slot='tab-bar'>
            <RuxTab selected>Tab item 1</RuxTab>
            <RuxTab>Tab item 2</RuxTab>
            <RuxTab>Tab item 3</RuxTab>
          </RuxTabs>
          <div className='Drawer-grid'>
            <p className='align-self-center'>Select menu 1</p>
            <RuxSelect>
              <RuxOption label='Select menu' value='' />
              <RuxOption label='Option 1' value='' />
              <RuxOption label='Option 2' value='' />
              <RuxOption label='Another option' value='' />
            </RuxSelect>
            <p className='align-self-center'>Input item 1</p>
            <RuxInput placeholder='Medium input' />
            <p className='pt-2'>Select menu 2</p>
            <RuxSelect helpText='Help text with a link'>
              <RuxOption label='Select menu' value='' />
              <RuxOption label='Option 1' value='' />
              <RuxOption label='Option 2' value='' />
              <RuxOption label='Another option' value='' />
            </RuxSelect>
            <p className='align-self-center'>Input item 2</p>
            <div id='form-item' className='flex gap-3'>
              <RuxInput />
              <RuxButton iconOnly icon='border-clear' secondary />
            </div>
            <p></p>
            <div id='form-item' className='flex gap-3'>
              <RuxInput />
              <RuxButton iconOnly icon='border-clear' secondary />
              <RuxButton iconOnly icon='border-clear' secondary />
            </div>
            <p>Check item</p>
            <RuxCheckbox checked />
            <p></p>
            <div id='form-item' className='flex gap-3'>
              <RuxInput disabled />
              <RuxButton disabled iconOnly icon='border-clear' secondary />
              <RuxButton disabled iconOnly icon='border-clear' secondary />
            </div>
            <p>Slider item</p>
            <RuxSlider
              id='Drawer-slider'
              axisLabels={['Low', 'Medium', 'High']}
              step={1}
            />
            <p>Text Area item</p>
            <RuxTextarea rows={4} />
          </div>
          <RuxButtonGroup slot='footer'>
            <RuxButton className='flex-grow-1' borderless>
              Restore to defaults
            </RuxButton>
            <RuxButton className='pr-3' secondary onClick={handleClose}>
              Cancel
            </RuxButton>
            <RuxButton>Apply</RuxButton>
          </RuxButtonGroup>
        </RuxContainer>
      </ClickAwayListener>
    </>
  );
};
