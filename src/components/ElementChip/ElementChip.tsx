import { Chip } from '@mui/material';
import { FC } from 'react';
import FaceIcon from '@mui/icons-material/Face';

interface ElementChipProps {
  label: string;
  icon?: React.ReactNode;
}

const ElementChip: FC<ElementChipProps> = ({ label }) => {
  const handleClick = () => {
    console.log(`You clicked ${label}`);
  };

  return (
    <Chip
      icon={<FaceIcon />}
      label={label}
      sx={{ mr: 1, my: 1 }}
      onClick={handleClick}
    />
  );
};

export { ElementChip };
