import './App.css';
import Homepage from './components/Homepage'
import Navbar from './components/Navbar'
import BeerDetails from './components/BeerDetails'
import Beers from './pages/Beers';
import BeerRandom from './components/BeerRandom'
import BeerNew from './pages/BeerNew'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Homepage/>}/>
        <Route exact path="/beers" element={<Beers/>}/>
        <Route exact path="/beers/:beerID" element={<BeerDetails/>}/>
        <Route exact path="/random-beer" element={<BeerRandom/>}/>
        <Route exact path="/new-beer" element={<BeerNew/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
