import { Grid, Typography } from '@mui/material';
import React from 'react';

const Header = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h1">Pokemon Element Guide</Typography>
      </Grid>
    </Grid>
  );
};

export { Header };
