import { MemoryRouter as Router } from 'react-router-dom';
import AppRouter from './router/AppRouter';
import './App.css';

export default function App() {
  return (
    <Router>
      <AppRouter />
    </Router>
  );
}
