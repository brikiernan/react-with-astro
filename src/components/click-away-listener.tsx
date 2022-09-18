import { useEffect, useRef } from 'react';
import { Children } from 'types';

type ClickAwayListenerProps = Children & {
  onClickAway: () => void;
};

const ClickAwayListener: React.FC<ClickAwayListenerProps> = ({
  children,
  onClickAway,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickAway = (event: MouseEvent) => {
      if (!event.target) return;
      const target = event.target as Node | null;

      if (ref.current && !ref.current.contains(target)) {
        onClickAway();
      }
    };

    document.addEventListener('mousedown', handleClickAway);

    return () => {
      document.removeEventListener('mousedown', handleClickAway);
    };
  });

  return <span ref={ref}>{children}</span>;
};

export default ClickAwayListener;
