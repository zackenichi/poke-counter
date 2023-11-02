import { Box } from '@mui/material';
import { FC } from 'react';
import { Header } from '../Header';
import { ContentArea } from '../ContentArea';

const App: FC = () => {
  return (
    <Box
      sx={{
        display: 'grid',
        height: '100vh',
        gridTemplateRows: 'auto 1fr',
        gridTemplateAreas: `"header" "main"`,
        p: 2,
      }}
      id="appContainer"
      role="main"
    >
      <Box
        sx={{
          gridArea: 'header',
        }}
      >
        <Header />
      </Box>
      <Box
        sx={{
          gridArea: 'main',
          marginTop: 2,
        }}
      >
        <ContentArea />
      </Box>
    </Box>
  );
};

export { App };
