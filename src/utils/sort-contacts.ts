import { Contact } from 'types';

export const sortByAlertsLegth = (a: Contact, b: Contact) => {
  return b.alerts.length - a.alerts.length;
};
