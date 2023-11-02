import { Grid } from '@mui/material';
import { FC } from 'react';
import { ElementCard } from '../ElementCard';
import elements from '../../data/elements';

const ElementList: FC = () => {
  return (
    <Grid container spacing={2}>
      {elements.map((element) => {
        return (
          <Grid item md={2} xs={12} key={element}>
            <ElementCard element={element} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export { ElementList };
