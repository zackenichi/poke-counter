import { Chip } from '@mui/material';
import { FC } from 'react';
import { ElementIcon } from '../ElementIcon';

interface ElementChipProps {
  element: string;
}

const ElementChip: FC<ElementChipProps> = ({ element }) => {
  const handleClick = () => {
    console.log(`You clicked ${element}`);
  };

  return (
    <Chip
      label={element}
      icon={<ElementIcon element={element} />}
      onClick={handleClick}
      sx={{ mr: 1, my: 1, padding: '2px 5px', textTransform: 'uppercase' }}
    />
  );
};

export { ElementChip };
