import { createContext, useContext } from 'react';
import { Children, Contact } from 'types';
import { contacts } from 'data/contacts';
import { sortByAlertsLegth } from 'utils/sort-contacts';

type DataContextProps = {
  contacts: Contact[];
};

const DataContext = createContext<DataContextProps>({ contacts: [] });

export const useData = () => useContext(DataContext);

export const DataProvider: React.FC<Children> = ({ children }) => {
  const value: DataContextProps = {
    contacts: contacts.sort(sortByAlertsLegth).slice(0, 37),
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
