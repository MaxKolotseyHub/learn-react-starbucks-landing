import './App.css';
import Catalog from './components/catalog/Catalog';
import Gallery from './components/gallery/Gallery';
import Navbar from './components/navbar/Navbar';
import CatalogPage from './pages/CatalogPage';
import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Router, Routes } from "react-router-dom";
import HomePage from './pages/HomePage';
import GalleryPage from './pages/GalleryPage';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <HomePage/>
//   },
//   {
//     path: '/catalog',
//     element: <CatalogPage/>
//   }
// ])
function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/catalog' element={<CatalogPage/>}/>
            <Route path='/gallery' element={<GalleryPage/>}/>
          </Routes>
    </BrowserRouter>
      </div>
  );
}

export default App;
