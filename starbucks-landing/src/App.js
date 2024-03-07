import './App.css';
import Catalog from './components/catalog/Catalog';
import Gallery from './components/gallery/Gallery';
import Navbar from './components/navbar/Navbar';
import CatalogPage from './pages/CatalogPage';

function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <Catalog/>
      <Gallery/> */}
      <CatalogPage/>
    </div>
  );
}

export default App;
