import logo from './logo.svg';
import './App.css';
import { Route,Routes,BrowserRouter } from 'react-router-dom'  
import AddressBookForm from '../src/components/address-book/AddressBookForm'
function App() {
  return (
    <BrowserRouter>  
    <Routes>
    <Route path="/" element={<AddressBookForm />} ></Route> 
    </Routes>
</BrowserRouter> 
  );
}

export default App;
