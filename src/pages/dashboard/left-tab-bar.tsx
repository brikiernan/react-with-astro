import { RuxTab, RuxTabs } from '@astrouxds/react';

const LeftTabBar: React.FC = () => (
  <div slot='tab-bar'>
    <RuxTabs small onRuxselected={e => console.log('Rux selected...', e)}>
      <RuxTab selected>Tab item 1</RuxTab>
      <RuxTab>Tab item 2</RuxTab>
      <RuxTab>Tab item 3</RuxTab>
    </RuxTabs>
  </div>
);

export default LeftTabBar;
