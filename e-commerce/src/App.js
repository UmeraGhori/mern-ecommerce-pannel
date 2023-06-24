import './App.css';
import Nav from './Nav'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Products from './components/Products';
import AddProduct from './components/AddProduct';
import Logout from './components/Logout';
import Profile from './components/Profile';
import UpdateProduct from './components/UpdateProduct';
import Footer from './Footer';
import SignUp from './SignUp';
import Login from "./Login"
import PrivateComponent from "./components/PrivateComponent";

function App() {
  return (
    <>
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route element={<PrivateComponent/>}>
        <Route path='/' element={<Products/>} />
        <Route path='/add' element={<AddProduct/>} />
        <Route path='/update/:id' element={<UpdateProduct/>} />
        <Route path='/logout' element={<Logout/>} />
        <Route path='/profile/:id' element={<Profile/>} />
      </Route>
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
      </BrowserRouter>
        <Footer/>
    </div>
    </>
  );
}

export default App;
