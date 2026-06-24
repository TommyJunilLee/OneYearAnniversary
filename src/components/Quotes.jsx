import { quotes } from '../content';
import Reveal from './Reveal';

export default function Quotes() {
  return (
    <Reveal>
      <p className="section-label">Things we say & things we love</p>
      <h2 className="section-heading">Our little language</h2>
      <div className="quotes-grid">
        {quotes.map((q, i) => (
          <div className="quote-card" key={i}>
            <p>&ldquo;{q.text}&rdquo;</p>
            <span className="quote-attribution">{q.credit}</span>
          </div>
        ))}
      </div>
    </Reveal>
  );
}
