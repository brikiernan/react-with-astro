import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './app';
import './index.css';
import '@astrouxds/astro-web-components/dist/astro-web-components/astro-web-components.css';

const root = document.getElementById('root') as HTMLElement;
createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>
);
