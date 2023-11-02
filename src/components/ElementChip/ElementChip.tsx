import { Chip } from '@mui/material';
import { FC } from 'react';
import { ElementIcon } from '../ElementIcon';

interface ElementChipProps {
  label: string;
}

const ElementChip: FC<ElementChipProps> = ({ label }) => {
  const handleClick = () => {
    console.log(`You clicked ${label}`);
  };

  return (
    <Chip
      label={label}
      icon={<ElementIcon element={label} />}
      onClick={handleClick}
      sx={{ mr: 1, my: 1, padding: '2px 5px', textTransform: 'uppercase' }}
    />
  );
};

export { ElementChip };
