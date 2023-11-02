import { Card, CardContent, Chip, Grid, Typography } from '@mui/material';
import { FC } from 'react';
import { getTypeColor } from '../../utils/typeHelper';
import { ElementIcon } from '../ElementIcon';

interface ElementCardProps {
  element: string;
  damage?: string;
}

const ElementCard: FC<ElementCardProps> = ({ element, damage }) => {
  const color = getTypeColor(element);

  return (
    <Card sx={{ backgroundColor: color }}>
      <CardContent>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={10}>
            <CardLabel element={element} />
          </Grid>
          <Grid item xs={2}>
            <ElementIcon element={element} />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h4">{damage}</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

const CardLabel: FC<ElementCardProps> = ({ element }) => {
  return (
    <Chip
      label={element}
      sx={{
        background: 'white',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        fontSize: '0.7rem',
        padding: '2px 5px',
      }}
    />
  );
};

export { ElementCard };
