import { useEffect } from 'react';
import {
  RuxDialog,
  RuxProgress,
  RuxButtonGroup,
  RuxButton,
} from '@astrouxds/react';

type SaveModalProps = {
  isModalOpen: boolean;
  setValue: React.Dispatch<React.SetStateAction<number>>;
  value: number;
};

export const SaveModal: React.FC<SaveModalProps> = props => {
  const { isModalOpen, setValue, value } = props;

  useEffect(() => {
    if (isModalOpen && value < 100) {
      const interval = setInterval(() => setValue(prev => prev + 25), 500);

      return () => clearInterval(interval);
    }
  }, [isModalOpen, value, setValue]);

  return (
    <RuxDialog modalTitle='Save changes' open={isModalOpen}>
      <h3 className='gutter-bottom'>Compiling changes</h3>
      <RuxProgress max={100} value={value} />
      <div slot='footer'>
        <RuxButtonGroup hAlign='right'>
          <RuxButton className='pr-3' secondary>
            Cancel
          </RuxButton>
          <RuxButton disabled>Save</RuxButton>
        </RuxButtonGroup>
      </div>
    </RuxDialog>
  );
};
