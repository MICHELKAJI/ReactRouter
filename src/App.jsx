import {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import About from './pages/about';
import ProductsList from './pages/productList';
import ProductPreview from './components/productPreview';
import SingleProduct from './pages/singleProduct';
import Products from './pages/Product';
 
import './App.css'
import NavBarr from './components/navBarre';

function App() {
 
  return (
    <>
     <BrowserRouter>
     <NavBarr/>
     
     <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/Product' element={<Products/>}>
        <Route index element={<ProductsList/>}/>
        <Route path =':id' element={<SingleProduct/>}/>
        </Route>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
