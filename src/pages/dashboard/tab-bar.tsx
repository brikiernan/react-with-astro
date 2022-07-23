import { RuxTab, RuxTabs } from '@astrouxds/react';

const TabBar: React.FC = () => (
  <div>
    <RuxTabs small onRuxselected={e => console.log('Rux selected...', e)}>
      <RuxTab>Tab item 1</RuxTab>
      <RuxTab selected>Tab item 2</RuxTab>
      <RuxTab>Tab item 3</RuxTab>
      <RuxTab disabled>Tab item 4</RuxTab>
    </RuxTabs>
  </div>
);

export default TabBar;
