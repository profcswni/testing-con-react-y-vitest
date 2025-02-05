import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import DashboardRoutes from './routes/index.tsx';
import {BrowserRouter} from "react-router";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <BrowserRouter>
    <DashboardRoutes />
      </BrowserRouter>
  </StrictMode>
);
