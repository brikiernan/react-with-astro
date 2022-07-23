import { useEffect, useRef } from 'react';
import { Children } from 'types';

type ClickAwayListenerProps = Children & {
  onClickAway: () => void;
};

export const ClickAwayListener: React.FC<ClickAwayListenerProps> = ({
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

  return <div ref={ref}>{children}</div>;
};
