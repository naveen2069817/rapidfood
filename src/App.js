import './App.css';
import Home from './screen/Home';
import Signup from './screen/Signup';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Login from './screen/Login';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import { CartProvider } from './components/ContextReducer';
import MyOrder from './screen/MyOrder';

function App() {
  return (
    <CartProvider>
      <Router>
    <div>
      <Routes>
        <Route exact path='/' element ={<Home/>}></Route>
        <Route exact path='/Login' element ={<Login/>}></Route>
        <Route exact path='/Signup' element ={<Signup/>}></Route>
        <Route exact path='/Myorder' element ={<MyOrder/>}></Route>
      </Routes>
    </div>
   </Router>
    </CartProvider>
   
  );
}

export default App;
