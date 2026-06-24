import Hero from './components/Hero';
import AnniversaryDate from './components/AnniversaryDate';
import MonthlyGallery from './components/MonthlyGallery';
import LoveLetter from './components/LoveLetter';
import Timeline from './components/Timeline';
import Quotes from './components/Quotes';
import Footer from './components/Footer';
import Divider from './components/Divider';

export default function App() {
  return (
    <>
      <Hero />
      <AnniversaryDate />

      <div className="gallery-section">
        <MonthlyGallery />
      </div>

      <div className="wrap">
        <Divider />
        <LoveLetter />
        <Divider />
        <Timeline />
        <Divider />
        <Quotes />
        <Footer />
      </div>
    </>
  );
}
