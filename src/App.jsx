import './App.css'
import TopBar from './components/layouts/TopBar';
import Header from './components/common/Header';
import Banner from './components/common/Banner';
import Slider from './components/layouts/Slider';
import ProductSection from './components/layouts/ProductSection';
import Footer from './components/layouts/Footer';
import Navbar from './components/common/NavBar';
import TrustSection from './components/common/TrustSection';
import BestOfLaCampana from './components/common/BestofLaCampana'

function App() {
  return (
    <>
      <div className="font-sans">
        <TopBar />
        <Header />
        <Navbar />
        <Banner />
        <Slider />
        <TrustSection />
        <BestOfLaCampana />
        <ProductSection />
        <Footer />

      </div>
    </>
  )
}

export default App