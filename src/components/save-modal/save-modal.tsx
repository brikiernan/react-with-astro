import { useEffect } from 'react';
import {
  RuxDialog,
  RuxProgress,
  RuxButtonGroup,
  RuxButton,
} from '@astrouxds/react';

type SaveModalProps = {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setValue: React.Dispatch<React.SetStateAction<number>>;
  value: number;
};

export const SaveModal: React.FC<SaveModalProps> = props => {
  const { isModalOpen, setIsModalOpen, setValue, value } = props;
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    if (isModalOpen && value < 100) {
      const interval = setInterval(() => setValue(prev => prev + 25), 500);

      return () => clearInterval(interval);
    }
  }, [isModalOpen, value, setValue]);

  return (
    <RuxDialog
      modalTitle='Save changes'
      open={isModalOpen}
      onRuxdialogclosed={closeModal}
    >
      <h3 className='gutter-bottom'>Compiling changes</h3>
      <RuxProgress max={100} value={value} />
      <div slot='footer'>
        <RuxButtonGroup hAlign='right'>
          <RuxButton onClick={closeModal} className='pr-3' secondary>
            Cancel
          </RuxButton>
        </RuxButtonGroup>
      </div>
    </RuxDialog>
  );
};
