import { Children } from 'types';

type StackProps = Children &
  JSX.IntrinsicElements['div'] & {
    direction?: 'row' | 'column';
    spacing?: number;
    wrap?: boolean;
  };

export const Stack: React.FC<StackProps> = ({
  children,
  direction = 'row',
  spacing = 2,
  wrap,
  ...props
}) => (
  <div
    {...props}
    style={{
      display: 'flex',
      gap: `${spacing * 0.25}rem`,
      flexWrap: wrap ? 'wrap' : 'nowrap',
      flexDirection: direction,
      ...props.style,
    }}
  >
    {children}
  </div>
);
