import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import RandomCat from './pages/RandomCat';
import SearchByTag from './pages/SearchByTag';
import CustomText from './pages/CustomText';
import RandomGif from './pages/RandomGif';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <h1 className="main-heading">CATAAS Web App</h1>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<RandomCat />} />
            <Route path="/tag" element={<SearchByTag />} />
            <Route path="/text" element={<CustomText />} />
            <Route path="/gif" element={<RandomGif />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
