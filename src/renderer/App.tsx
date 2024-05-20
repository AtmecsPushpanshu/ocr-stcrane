import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './screens/Login';
import MainLayout from './components/Layout/mainLayout';
import { AnotherScreen } from './screens/Another';

import './App.css';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<MainLayout />}>
          <Route path="anotherscreen" element={<AnotherScreen />} />
        </Route>
      </Routes>
    </Router>
  );
}
