import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/Homescreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen'; // Add this at the top

const App = () => {
  return (
    <Router>
      <div className="d-flex flex-column vh-100">
        <Header />
        <main className="flex-grow-1 py-3">
          <Container>
            <Routes>
              <Route path="/" element={<HomeScreen />} exact />
              {/* We will add the ProductScreen route here next! */}
              <Route path='/product/:id' element={<ProductScreen />} />
              <Route path='/cart/:id?' element={<CartScreen />} />
            </Routes>
          </Container>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;