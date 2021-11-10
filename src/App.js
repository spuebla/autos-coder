import logo from './logo.svg';
import './App.css';
import NavBar from './componentes/NavBar';
import ItemListContainer from './componentes/Items/ItemListContainer';


function App() {
  return (
    <div className="App">
     <NavBar/>
     <ItemListContainer/>
    </div>
  );
}

export default App;
