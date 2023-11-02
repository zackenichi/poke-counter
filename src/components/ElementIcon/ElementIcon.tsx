import { FC } from 'react';
import { getTypeColor, getTypeIconSrc } from '../../utils/typeHelper';
import { Box } from '@mui/material';

interface ElementIconProps {
  element: string;
}

const ElementIcon: FC<ElementIconProps> = ({ element }) => {
  const icon = getTypeIconSrc(element);
  const color = getTypeColor(element);

  return (
    <Box
      component="img"
      src={icon}
      alt={element}
      sx={{
        height: '24px',
        width: '24px',
        background: color,
        borderRadius: '50%',
        padding: '2px 5px',
      }}
    />
  );
};

export { ElementIcon };
