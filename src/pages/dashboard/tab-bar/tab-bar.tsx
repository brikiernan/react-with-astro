import { RuxTab, RuxTabs } from '@astrouxds/react';
import './tab-bar.css';

export const TabBar: React.FC = () => {
  const handleSlected = (e: CustomEvent) => {
    console.log('Rux tab selected...', e);
  };

  return (
    <RuxTabs className='Dashboard-tab-bar' small onRuxselected={handleSlected}>
      <RuxTab>Tab item 1</RuxTab>
      <RuxTab selected>Tab item 2</RuxTab>
      <RuxTab>Tab item 3</RuxTab>
      <RuxTab disabled>Tab item 4</RuxTab>
    </RuxTabs>
  );
};
