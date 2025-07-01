import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './style.css';

import Home from './views/home';
import About from './views/about';
import Contact from './views/contact';
import FAQ from './views/faq';
import PrivacyPolicy from './views/privacy-policy';
import TermsAndConditions from './views/terms-and-conditions';
import CookiesPolicy from './views/cookies-policy';
import NotFound from './views/not-found';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />
      <Route path="/terms" element={<TermsAndConditions />} />
      <Route path="/cookies" element={<CookiesPolicy />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<App />);
