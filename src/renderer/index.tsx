import { createRoot } from 'react-dom/client';
import { createTheme, ThemeProvider } from '@mui/material/styles'
import App from './App';

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string
    }
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string
    }
  }
}

const theme = createTheme({})

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);

// calling IPC exposed from preload script
window?.electron?.ipcRenderer?.once('ipc-example', (arg) => {
  // eslint-disable-next-line no-console
  console.log(arg);
});
window?.electron?.ipcRenderer?.sendMessage('ipc-example', ['ping']);
