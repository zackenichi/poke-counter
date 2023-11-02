import { Box } from '@mui/material';
import { FC } from 'react';
import { ElementChip } from '../ElementChip';
import elements from '../../data/elements';

const ElementSelector: FC = () => {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {elements.map((element) => {
        return (
          <span key={element}>
            <ElementChip label={element} />
          </span>
        );
      })}
    </Box>
  );
};

export { ElementSelector };
