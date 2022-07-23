import { useState } from 'react';
import { RuxButton, RuxContainer, RuxTab, RuxTabs } from '@astrouxds/react';
import { ClickAwayListener } from './click-away-listener';
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
        <RuxButton secondary onClick={handleOpen}>
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
          xcv
        </RuxContainer>
      </ClickAwayListener>
    </>
  );
};
