import { useEffect, useState } from 'react';
import { RuxClassificationMarking, RuxContainer } from '@astrouxds/react';
import { Contact } from 'types';
import data from 'data/contacts.json';
import StatusBar from './status-bar';
import Header from './header';
import LeftTabBar from './left-tab-bar';
import Toolbar from './toolbar';
import List from './list';
import ListActions from './list-actions';
import TabBar from './tab-bar';
import ButtonBar from './button-bar';
import './dashboard.css';

const sort = (a: Contact, b: Contact) => b.alerts.length - a.alerts.length;

export const Dashboard: React.FC = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);

  useEffect(() => {
    const mochContacts = data as Contact[];
    setContacts(mochContacts.sort(sort).slice(0, 27));
  }, []);

  return (
    <RuxClassificationMarking>
      <StatusBar />
      <div className='Dashboard-container'>
        <RuxContainer>
          <Header />
          <LeftTabBar />
          <Toolbar contacts={contacts} />
          <List contacts={contacts} />
          <ListActions />
        </RuxContainer>
        <div className='Dashboard-content'>
          <TabBar />
          <ButtonBar />
        </div>
      </div>
    </RuxClassificationMarking>
  );
};
