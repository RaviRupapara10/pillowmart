
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
import Login from './pages/Login';
import Checkout from './pages/Checkout';
import Cart from './pages/Cart';
import Confirmation from './pages/Confirmation';
import Elements from './pages/Elements';
import Blog from './pages/Blog';
import SingleBlog from './pages/SingleBlog';
import Contact from './pages/Contact';

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
          <Route path="/login" element={<Login />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/elements" element={<Elements />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/single-blog" element={<SingleBlog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <FooterPart />
      </Router>

    </>
  );
}

export default App;
