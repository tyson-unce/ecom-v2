import './App.css';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Products from './components/Products';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
    <Router >
        <Navbar id="nav"/>
          <Routes>
            <Route path="/" />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
      </Router>
    <main>
      
      this is the main body
      
  </main>
  </>
  );
}

export default App;
