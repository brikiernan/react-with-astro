import {
  RuxContainer,
  RuxTable,
  RuxTableBody,
  RuxTableCell,
  RuxTableHeader,
  RuxTableRow,
} from '@astrouxds/react';
import './right-panel.css';

export const RightPanel: React.FC = () => {
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
          <RuxTableRow>
            <RuxTableCell>Cell 1</RuxTableCell>
            <RuxTableCell>Cell 2</RuxTableCell>
            <RuxTableCell>Cell 3</RuxTableCell>
          </RuxTableRow>
        </RuxTableBody>
      </RuxTable>
    </RuxContainer>
  );
};
