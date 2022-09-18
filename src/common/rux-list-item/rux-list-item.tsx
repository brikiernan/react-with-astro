import { Children } from 'types';
import './rux-list-item.css';

type RuxListItemProps = Children &
  JSX.IntrinsicElements['li'] & {
    selected?: boolean;
  };

export const RuxListItem: React.FC<RuxListItemProps> = ({
  children,
  selected,
  ...props
}) => {
  let className = 'rux-list-item';

  if (props.className) {
    className = props.className + ' rux-list-item';
  }

  if (selected) {
    className = 'rux-list-item selected';
  }

  if (props.className && selected) {
    className = props.className + ' rux-list-item selected';
  }

  return (
    <li {...props} className={className}>
      {children}
    </li>
  );
};
