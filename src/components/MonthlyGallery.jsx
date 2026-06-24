import CircularGallery from './CircularGallery';
import { months, placeholderImage } from '../content';
import Reveal from './Reveal';

export default function MonthlyGallery() {
  const items = months.map(m => ({
    image: m.image || placeholderImage,
    text: m.text
  }));

  return (
    <Reveal>
      <div className="gallery-heading-wrap">
        <p className="section-label">July 2025 - June 2026</p>
        <h2 className="section-heading">Our year in a nutshell</h2>
      </div>
      <div className="gallery-stage">
        <CircularGallery
          items={items}
          bend={2}
          textColor="#ffffff"
          borderRadius={0.08}
          scrollEase={0.06}
          scrollSpeed={1.6}
          font="500 26px 'DM Sans'"
        />
      </div>
    </Reveal>
  );
}
