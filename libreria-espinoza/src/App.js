//import logo from './logo.svg';
import NavBar from './components/NavBar/NavBar';
import './App.css';
import './components/NavBar/NavBar.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
     <NavBar />
     <ItemListContainer greeting='Hola, bienvenidos' />
    </div>
  );
}

export default App;
