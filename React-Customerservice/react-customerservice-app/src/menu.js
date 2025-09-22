import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navigation from './Navigation';
import Home from './Home';
import AllCustomers from './customer_service/components/AllCustomers';
import SaveCustomer from './customer_service/components/SaveCustomer';
import DeleteCustomer from './customer_service/components/DeleteCustomer';
import FindCustomerById from './customer_service/components/FindCustomerById';

export default function Menu() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/allcustomers" element={<AllCustomers />} />
          <Route path="/savecustomer" element={<SaveCustomer />} />
          <Route path="/deletecustomer" element={<DeleteCustomer />} />
          <Route path="/findcustomer" element={<FindCustomerById />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
