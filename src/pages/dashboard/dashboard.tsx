import { useEffect, useState } from 'react';
import { RuxClassificationMarking } from '@astrouxds/react';
import { Contact } from 'types';
import { client } from 'lib/client';
import fallbackData from 'data/contacts.json';
import StatusBar from './status-bar';
import Header from './header';
import Toolbar from './toolbar';
import List from './list';
import ListActions from './list-actions';
import TabBar from './tab-bar';
import ButtonBar from './button-bar';
import './dashboard.css';

const ENDPOINT = 'http://localhost:8888/api/v1/contacts';
const sort = (a: Contact, b: Contact) => b.alerts.length - a.alerts.length;

export const Dashboard: React.FC = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        console.log('Moch data used...');
        const data = await client.get<Contact[]>(ENDPOINT);
        setContacts(data.sort(sort));
      } catch (error) {
        /*
         *
         * This is just here so someone could run the app without
         * running the moch data server locally
         *
         */
        console.log('Fallback data used...');
        setContacts(fallbackData as Contact[]);
      }
    };

    fetch();
  }, []);

  return (
    <RuxClassificationMarking>
      <div className='Dashboard-container'>
        <StatusBar />
        <div className='Dashboard-grid'>
          <div className='Dashboard-left'>
            <Header />
            <Toolbar contacts={contacts} />
            <List contacts={contacts} />
            <ListActions />
          </div>
          <div className='Dashboard-right'>
            <TabBar />
            <ButtonBar />
          </div>
        </div>
      </div>
    </RuxClassificationMarking>
  );
};
