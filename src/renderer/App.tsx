import { MemoryRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AppRouter from './router/AppRouter';
import './App.css';

export default function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            // Global query options
            retry: false, // Disable automatic retries
            refetchOnWindowFocus: false, // Disable refetching on window focus
        },
        mutations: {
            // Global mutation options
            retry: false, // Disable automatic retries
        },
    },
});
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <AppRouter />
      </Router>
    </QueryClientProvider>
  );
}
