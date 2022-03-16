import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './components/home/home';
import Layout from './components/layout/layout';
import Museum from './components/museum/museum';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/museum" element={<Museum />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
