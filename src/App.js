import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import Services from './components/pages/Services';
import About from './components/pages/About';
import Footer from './components/Footer';
import Employees from './components/pages/Employees';

function App() {
	return (
		<>
			<Router>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/services" element={<Services />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/about" element={<About />} />
					<Route path="/employees" element={<Employees />} />
				</Routes>
				<Footer />
			</Router>
		</>
	);
}

export default App;
