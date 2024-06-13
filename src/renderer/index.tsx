import { createRoot } from 'react-dom/client';
import { createTheme, ThemeOptions, ThemeProvider } from '@mui/material/styles';
import '@fontsource/open-sans';
import App from './App';
import { CssBaseline } from '@mui/material';

declare module '@mui/material/styles' {
  interface ThemeOptions {
    colors?: {
      primary?: string;
      secondary?: string;
    };
    general?: {
      [key: string]: any;
    };
    sidebar?: {
      [key: string]: any;
    };
    header?: {
      [key: string]: any;
    };
  }

  interface Theme {
    colors: {
      primary: string;
      secondary: string;
    };
    general: {
      [key: string]: any;
    };
    sidebar: {
      [key: string]: any;
    };
    header: {
      [key: string]: any;
    };
  }
}

const themeOptions: ThemeOptions = {
  typography: {
    fontFamily: 'Open Sans, sans-serif',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none', // Disable uppercase transformation
          boxShadow:'none',
          borderRadius: '4px',
        },
      },
    },
  },
};

const theme = createTheme(themeOptions);

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>,
);

// calling IPC exposed from preload script
window?.electron?.ipcRenderer?.once('ipc-example', (arg) => {
  // eslint-disable-next-line no-console
  console.log(arg);
});
window?.electron?.ipcRenderer?.sendMessage('ipc-example', ['ping']);
