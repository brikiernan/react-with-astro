import { Contact } from '@astrouxds/mock-data';

export const sortByAlertsLength = (a: Contact, b: Contact) => {
  return b.alerts.length - a.alerts.length;
};
