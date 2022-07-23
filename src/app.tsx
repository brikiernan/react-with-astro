import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Path } from 'types';
import Home from 'pages/home';
import Dashboard from 'pages/dashboard';

const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path={Path.home} element={<Home />} />
      <Route path={Path.dashboard} element={<Dashboard />} />
    </Routes>
  </BrowserRouter>
);

export default App;
