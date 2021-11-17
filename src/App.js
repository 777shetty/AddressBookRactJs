import logo from './logo.svg';
import './App.css';
import { Route,Routes,BrowserRouter } from 'react-router-dom'  
import AddressBookForm from '../src/components/address-book/AddressBookForm'
import Home from '../src/components/home/Home'
function App() {
  return (
    <BrowserRouter>  
    <Routes>
    <Route path="/" element={<AddressBookForm />} ></Route> 
    <Route path="/home" element={<Home />} ></Route>  
    </Routes>
</BrowserRouter> 
  );
}

export default App;
