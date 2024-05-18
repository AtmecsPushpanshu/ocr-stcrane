import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './screens/Login';

import './App.css';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}
