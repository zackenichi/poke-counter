import { Grid, Typography } from '@mui/material';

const Header = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h1" textAlign="center">
          Pokemon Type Calculator
        </Typography>
      </Grid>
    </Grid>
  );
};

export { Header };
