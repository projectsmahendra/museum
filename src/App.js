import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './components/home/home';
import Layout from './components/layout/layout';
import CollectLayout from './components/layout/collect-layout';
import Museum from './components/museum/museum';
import Opening from './components/openings/openings';
import Collect from './components/collect/collect';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="/museum" element={<Museum />} />
          <Route path="/openings" element={<Opening />} />
        </Route>

        <Route path="/current-auctions" element={<CollectLayout />} >
          <Route index element={<Collect />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
