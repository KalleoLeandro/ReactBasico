import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';

import Pagina1 from './pages/Pagina1';
import Pagina2 from './pages/Pagina2';
import Pagina3 from './pages/Pagina3';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/Pagina1" element={<Pagina1 />} />
          <Route path="/Pagina2" element={<Pagina2 />} />
          <Route path="/Pagina3" element={<Pagina3 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
