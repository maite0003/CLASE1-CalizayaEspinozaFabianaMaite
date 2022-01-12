//import logo from './logo.svg';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<ItemListContainer greeting='Hola, bienvenidos' />} />
        <Route exact path='/categoria/:idCategoria' element={<ItemListContainer greeting='Hola, bienvenidos' />} />
        <Route exact path='/detalle/:idDetalle' element={<ItemDetailContainer />} />
        <Route exact path='/cart' element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
