import Navbar from './components/header/Navbar';
import './App.css';
import NevbarNew from './components/newnavbar/NevbarNew';
import Maincomp from './components/home/Maincomp';
import Footer from './components/footer/Footer';
import SignUp from './components/signup_sign/SignUp';
import SignIN from './components/signup_sign/SignIN';
import Cart from './components/cart/Cart';
import Buynow from './components/buynow/Buynow';
import { Routes,Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar/>
      <NevbarNew/>
      <Routes>
        <Route path="/" element={<Maincomp/>} />
        <Route path="/login" element={<SignIN/>} />
        <Route path="/register" element={<SignUp/>} />
        <Route path="/getproductsone/:id" element={<Cart/>} />
        <Route path="/buynow" element={<Buynow/>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
