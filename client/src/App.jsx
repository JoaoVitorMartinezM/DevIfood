import Products from "./pages/ProductPage";
import './index.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


function App() {
  return (
    <>

      <Navbar/>
      
      <main>
        <Products/>


      </main>

      <Footer/>
      
    </>
  );
}

export default App;
