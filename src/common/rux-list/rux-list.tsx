import { Children } from 'types';
import './rux-list.css';

type RuxListProps = Children & JSX.IntrinsicElements['ul'];

export const RuxList: React.FC<RuxListProps> = ({ children, ...props }) => {
  let className = 'rux-list';

  if (props.className) {
    className = props.className + ' rux-list';
  }

  return (
    <ul {...props} className={className}>
      {children}
    </ul>
  );
};
