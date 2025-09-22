import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import React from 'react';
import Navigation from './Navigation';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';

import Home from './Home';
import AllCustomers from './customer_service/components/AllCustomers'
import SaveCustomer from './customer_service/components/SaveCustomer';

export default function Menu() {
  return (
    <div className="App">
      <Navigation />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/allcustomers" element={<AllCustomers />} />
          <Route path="/savecustomer" element={<SaveCustomer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
