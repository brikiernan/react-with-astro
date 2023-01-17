import { createContext, useContext, useEffect, useState } from 'react';
import { onContactsChange, Contact } from '@astrouxds/mock-data';
import { Children } from 'types';
import { sortByAlertsLength } from 'utils/sort-contacts';

type DataContextProps = {
  contacts: Contact[];
};

const DataContext = createContext<DataContextProps>({ contacts: [] });

export const useData = () => useContext(DataContext);

export const DataProvider: React.FC<Children> = ({ children }) => {
  const [contacts, setContacts] = useState<Contact[]>([]);

  useEffect(() => {
    const unsubscribe = onContactsChange(contacts => {
      setContacts(contacts);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const value: DataContextProps = {
    contacts: contacts.sort(sortByAlertsLength),
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
