import { createTheme } from '@mui/material/styles';
import colors from './colors';

const theme = createTheme({
  palette: {
    primary: {
      main: colors.primary['01'],
    },
    secondary: {
      main: colors.primary['02'],
    },
    info: {
      main: colors.primary['03'],
    }
  },
  shape: {
    borderRadius: 100,
  }
});

export default theme;