import { useState } from 'react';
import { letter } from '../content';
import Reveal from './Reveal';

// Edit this — the short teaser line shown before the card is flipped.
const teaser = "To the love of my life :3";

export default function LoveLetter() {
  const [flipped, setFlipped] = useState(false);

  return (
    <Reveal>
      <p className="section-label">A love letter</p>
      <h2 className="section-heading">My heart written out for you</h2>

      <div
        className={`letter-flip-wrap${flipped ? ' is-flipped' : ''}`}
        onClick={() => setFlipped(f => !f)}
        role="button"
        tabIndex={0}
        aria-pressed={flipped}
        aria-label="Tap to open the letter"
        onKeyDown={e => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setFlipped(f => !f);
          }
        }}
      >
        <div className="letter-flip-inner">
          {/* FRONT */}
          <div className="letter-face letter-face-front">
            <span className="letter-quote-mark" aria-hidden="true">&ldquo;</span>
            <p className="letter-teaser">{teaser}</p>
            <p className="letter-tap-hint">tap to open</p>
          </div>

          {/* BACK */}
          <div className="letter-face letter-face-back">
            <span className="letter-quote-mark" aria-hidden="true">&ldquo;</span>
            <p className="letter-text">{letter}</p>
            <p className="letter-sign">— Tommy</p>
          </div>
        </div>
      </div>
    </Reveal>
  );
}