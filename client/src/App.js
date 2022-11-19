import './App.css';
import {Route, Switch} from "react-router-dom"
import LandingPage from './components/LandingPage';
import Home from "./components/Home";
import PokemonCreate from './components/PokemonCreate';
import PokemonDetails from './components/PokemonDetail';

function App() {
 

  return (
    
    <div className="App">
      {/* buena practica. solo matchea con los links que envuelve */}
      <Switch> 
      <Route exact path = "/" component = {LandingPage}/>
      <Route path = "/home" component = {Home}/>
      <Route path = "/pokemon" component = {PokemonCreate}/>
      <Route path = "/pokemons/:id" component = {PokemonDetails}/>
      
      </Switch>
    </div>
  );
}

export default App;
