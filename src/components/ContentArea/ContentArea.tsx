import { Container, Grid } from '@mui/material';

import { ElementSelector } from '../ElementSelector';
import { FC } from 'react';
import { ElementList } from '../ElementList';

const ContentArea: FC = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Container maxWidth="lg">
          <ElementSelector />
        </Container>
      </Grid>
      <Grid item xs={12}>
        <ElementList />
      </Grid>
    </Grid>
  );
};

export { ContentArea };
