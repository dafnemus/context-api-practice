import PokemonProvider from './context/pokemons/Provider';
import Routes from './routes';
import './App.css';

function App() {
  return (
    <div className="App">
      <PokemonProvider>
        <Routes />
      </PokemonProvider>
    </div>
  );
}

export default App;
