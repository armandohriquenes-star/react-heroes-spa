import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import { BrowserRouter } from 'react-router-dom';
import { HeroesApp } from './HeroesApp';

const basename = import.meta.env.MODE === 'production' ? '/react-heroes-spa' : '';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename={basename}>
      <HeroesApp />
    </BrowserRouter>
  </StrictMode>,
);
