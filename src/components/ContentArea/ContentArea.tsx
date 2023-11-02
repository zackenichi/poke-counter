import { Grid, Typography } from '@mui/material';

import { ElementSelector } from '../ElementSelector';
import { FC } from 'react';

const ContentArea: FC = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography>
          <ElementSelector />
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>Cards</Typography>
      </Grid>
    </Grid>
  );
};

export { ContentArea };
