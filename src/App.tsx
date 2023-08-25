
import './App.css';
import Index from './pages/Index';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import About from './pages/About';
import Header from './component/Header';
import FooterPart from './component/FooterPart';
import ProductList from './pages/ProductList';
import ProductDetails from './pages/ProductDetails';

function App() {
  return (
    <>


      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/product_list" element={<ProductList />} />
          <Route path="/single-product" element={<ProductDetails />} />
        </Routes>
        <FooterPart />
      </Router>

    </>
  );
}

export default App;
