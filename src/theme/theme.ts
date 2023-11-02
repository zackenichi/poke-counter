import { ThemeOptions, createTheme } from '@mui/material/styles';
import colors from './colors';

const componentOverrides: ThemeOptions['components'] = {
  MuiTypography: {
    styleOverrides: {
      h1: {
        fontSize: '1.5rem',
        fontWeight: 800,
        color: colors.primary,
      },
      h2: {
        fontSize: '1.2rem',
        fontWeight: 800,
      },
      h3: {
        fontSize: '0.9rem',
        fontWeight: 600,
        textTransform: 'uppercase',
      },
      h4: {
        fontSize: '0.8rem',
        fontWeight: 600,
        color: colors.cardbg,
      },
      body2: {
        fontSize: '16px',
        fontWeight: 400,
        textDecoration: 'underline',
        '&:hover': {
          cursor: 'pointer',
        },
      },
    },
  },
};

const theme = createTheme({
  palette: {
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.secondary,
    },
    background: {
      default: colors.background,
      paper: colors.cardbg,
    },
    success: {
      main: colors.success,
    },
    info: {
      main: colors.info,
    },
    warning: {
      main: colors.warning,
    },
  },
  components: componentOverrides,
});

export { theme };
