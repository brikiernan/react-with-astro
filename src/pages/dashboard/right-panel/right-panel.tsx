import {
  RuxContainer,
  RuxStatus,
  RuxTable,
  RuxTableBody,
  RuxTableCell,
  RuxTableHeader,
  RuxTableRow,
} from '@astrouxds/react';
import { useData } from 'providers/data';
import './right-panel.css';

export const RightPanel: React.FC = () => {
  const { contacts } = useData();

  return (
    <RuxContainer className='Dashboard-right-panel disable-body-padding '>
      <h2 slot='header'>Right panel</h2>
      <RuxTable>
        <RuxTableHeader>
          <RuxTableCell>Status</RuxTableCell>
          <RuxTableCell>Item</RuxTableCell>
          <RuxTableCell>Header text</RuxTableCell>
        </RuxTableHeader>
        <RuxTableBody>
          {contacts.slice(10, 30).map(({ _id, ...c }) => (
            <RuxTableRow key={_id}>
              <RuxTableCell>
                <RuxStatus status={c.contactStatus} />
              </RuxTableCell>
              <RuxTableCell>
                <p>{c.contactName}</p>
              </RuxTableCell>
              <RuxTableCell>
                <p>{c.contactStep}</p>
                <p>{c.contactDetail}</p>
              </RuxTableCell>
            </RuxTableRow>
          ))}
        </RuxTableBody>
      </RuxTable>
    </RuxContainer>
  );
};
