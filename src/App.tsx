import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Modules from './pages/Modules';
import PythonBasics from './pages/PythonBasics';
import DataCleaning from './pages/DataCleaning';
import DataVisualization from './pages/DataVisualization';
import BusinessMetrics from './pages/BusinessMetrics';
import CaseStudies from './pages/CaseStudies';
import Resources from './pages/Resources';

const App: React.FC = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/modules" element={<Modules />} />
        <Route path="/modules/python-basics" element={<PythonBasics />} />
        <Route path="/modules/data-cleaning" element={<DataCleaning />} />
        <Route path="/modules/data-visualization" element={<DataVisualization />} />
        <Route path="/modules/business-metrics" element={<BusinessMetrics />} />
        <Route path="/modules/case-studies" element={<CaseStudies />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
    </Router>
  );
};

export default App;