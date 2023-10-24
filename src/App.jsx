import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import ImagesSection from './components/ImagesSection';
import TestimonialsSection from './components/TestimonialsSection';
import SectionOne from './components/SectionOne';
import SectionTwo from './components/SectionTwo';
import SectionThree from './components/SectionThree';

function App() {

  return (
    <div>
      <Header />

      <SectionOne />

      <SectionTwo />

      <SectionThree />

      <TestimonialsSection />

      <ImagesSection />

      <Footer />
    </div>
  )
}

export default App
