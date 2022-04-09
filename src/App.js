import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './components/home/home';
import Layout from './components/layout/layout';
import CollectLayout from './components/layout/collect-layout';
import Museum from './components/museum/museum';
import Opening from './components/openings/openings';
import VirtualMuseums from './components/experiences/virtual-museums';
import VirtualExhibits from './components/experiences/virtual-exhibits';
import VirtualTours from './components/experiences/virtual-tours';
import Games from './components/experiences/games';
import Metaverse from './components/experiences/metaverse';

import Collect from './components/collect/collect';
import Upcoming from './components/collect/upcoming';
import Results from './components/collect/results';
import Art from './components/collect/comingsoon/art';
import Artifacts from './components/collect/comingsoon/artifacts';
import AllMuseums from './components/collect/all-museums';
import AllArts from './components/collect/all-arts';
import AllArtifacts from './components/collect/all-artifacts';
import Fossils from './components/collect/fossils';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="/museum" element={<Museum />} />
          <Route path="/openings" element={<Opening />} />
          <Route path="/virtual-museums" element={<VirtualMuseums />} />
          <Route path="/virtual-exhibits" element={<VirtualExhibits />} />
          <Route path="/virtual-tours" element={<VirtualTours />} />
          <Route path="/games" element={<Games />} />
          <Route path="/metaverse" element={<Metaverse />} />
        </Route>

        <Route path="/current-auctions" element={<CollectLayout />} >
          <Route index element={<Collect />} />
        </Route>
        <Route path="/upcoming-auctions" element={<CollectLayout />} >
          <Route index element={<Upcoming />} />
        </Route>
        <Route path="/auction-results" element={<CollectLayout />} >
          <Route index element={<Results />} />
        </Route>
        <Route path="/art-results" element={<CollectLayout />} >
          <Route index element={<Art />} />
        </Route>
        <Route path="/artifacts-results" element={<CollectLayout />} >
          <Route index element={<Artifacts />} />
        </Route>
        <Route path="/all-museums" element={<CollectLayout />} >
          <Route index element={<AllMuseums />} />
        </Route>
        <Route path="/all-arts" element={<CollectLayout />} >
          <Route index element={<AllArts />} />
        </Route>
        <Route path="/all-artifacts" element={<CollectLayout />} >
          <Route index element={<AllArtifacts />} />
        </Route>
        <Route path="/fossils" element={<CollectLayout />} >
          <Route index element={<Fossils />} />
        </Route>

      </Routes>
    </Router>
  );
}

export default App;
