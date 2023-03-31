import './App.css';

//1 - config imports react router
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

//pages

import Home from './pages/Home';
import About from './pages/About';
import Info from './pages/Info';
import Search  from './pages/Search';

//components
import Navbar from './components/Navbar'

import NotFound from './components/NotFound';
import SearchForm from './components/SearchForm';
import Product from './components/Product';


function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
      <BrowserRouter>
      {/*2- links com react router*/}
        <Navbar/>
        {/* 9 - Search*/}
        <SearchForm/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          {/*Rotas dinâmicas*/}
          <Route path="/products/:id" element={<Product/>}/>          
          {/*6 - Nested Route*/}
          <Route path="/products/:id/info" element={<Info/>}/>  
          {/* 9 - Search*/}      
          <Route path="/search" element={<Search/>}/>
          {/*10 - redirect*/}
          <Route path="/company" element={<Navigate to="/about"/>}/>
          {/*7 - No Math route*/}
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
