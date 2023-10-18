import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./Home'));
const Lat1 = lazy(() => import('./Lat1'));
const Lat2 = lazy(() => import('./Lat2'));
const Lat3 = lazy(() => import('./Lat3'));

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Lat1" element={<Lat1 />} />
        <Route path="/Lat2" element={<Lat2 />} />
        <Route path="/Lat3" element={<Lat3 />} />
      </Routes>
    </Suspense>
  </Router>
);

export default App;