import { useState } from 'react';
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
import { RightSlideOut } from './right-slide-out';
import './right-panel.css';

export const RightPanel: React.FC = () => {
  const { contacts } = useData();
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => setIsOpen(false);
  const handleOpen = () => setIsOpen(true);

  return (
    <>
      <RuxContainer className='Dashboard-right-panel'>
        <h2 slot='header'>Right panel</h2>
        <RuxTable>
          <RuxTableHeader>
            <RuxTableCell>Status</RuxTableCell>
            <RuxTableCell>Item</RuxTableCell>
            <RuxTableCell>Header text</RuxTableCell>
          </RuxTableHeader>
          <RuxTableBody>
            {contacts.slice(10, 30).map(({ _id, ...c }) => (
              <RuxTableRow
                id='RightPanel-table-row'
                key={_id}
                onClick={handleOpen}
              >
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
      <RightSlideOut {...{ isOpen, handleClose }} />
    </>
  );
};
