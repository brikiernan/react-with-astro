import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Path } from 'types';
import { DataProvider } from 'providers/data';
import Home from 'pages/home';
import Dashboard from 'pages/dashboard';

const App: React.FC = () => (
  <DataProvider>
    <BrowserRouter>
      <Routes>
        <Route path={Path.home} element={<Home />} />
        <Route path={Path.dashboard} element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  </DataProvider>
);

export default App;
