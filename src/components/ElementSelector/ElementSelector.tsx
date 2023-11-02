import { Box } from '@mui/material';
import { FC } from 'react';
import { ElementChip } from '../ElementChip';
import elements from '../../data/elements';

const ElementSelector: FC = () => {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
      {elements.map((element) => {
        return <ElementChip label={element} />;
      })}
    </Box>
  );
};

export { ElementSelector };
