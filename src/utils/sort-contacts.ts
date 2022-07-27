import { Contact } from 'types';

export const sortByAlertsLength = (a: Contact, b: Contact) => {
  return b.alerts.length - a.alerts.length;
};
