import './App.css';
import Navbar from './component/Navbar';
import ProductDetails from './pages/ProductDetail';
import GenderFilter from './pages/GenderFilter';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import StyleFilter from './pages/StyleFilter';
import Cart from './pages/Cart';
import AllProduct from './pages/ViewAllProducts';
import CreateReview from './pages/Create';
import Notfound from './pages/Notfound';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product/:id' element={<ProductDetails />} />
        <Route path='/category/:category' element={<GenderFilter />} />
        <Route path='/style/:styleType' element={<StyleFilter />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/allproducts' element={<AllProduct />} />
        <Route path='/create' element={<CreateReview />} />
        <Route path='/*' element={<Notfound />} />
      </Routes>
    </Router>
      
    
  );
}

export default App;
