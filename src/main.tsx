import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import App from './App.tsx';
import './index.css';

ScrollTrigger.config({ limitCallbacks: true });

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
