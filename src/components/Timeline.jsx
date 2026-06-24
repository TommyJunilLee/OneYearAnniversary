import { memories } from '../content';
import Reveal from './Reveal';

function latLngToOsmTile(lat, lng, zoom) {
  const n = 2 ** zoom;
  const x = ((lng + 180) / 360) * n;
  const latRad = (lat * Math.PI) / 180;
  const y = ((1 - Math.log(Math.tan(latRad) + 1 / Math.cos(latRad)) / Math.PI) / 2) * n;

  const xTile = Math.floor(x);
  const yTile = Math.floor(y);

  const xPct = ((x - xTile) * 256) / 256;
  const yPct = ((y - yTile) * 256) / 256;

  return { xTile, yTile, xPct, yPct };
}

function osmPermalink(lat, lng, zoom) {
  return `https://www.openstreetmap.org/?mlat=${lat}&mlon=${lng}#map=${zoom}/${lat}/${lng}`;
}

export default function Timeline() {
  return (
    <Reveal>
      <p className="section-label">Our story so far</p>
      <h2 className="section-heading">Every place that became us</h2>
      <div className="timeline">
        {memories.map((mem, i) => (
          <div className="timeline-item" key={i}>
            <div className="timeline-date">{mem.date}</div>
            <div className="timeline-spine">
              <div className="spine-dot"></div>
              <div className="spine-line"></div>
            </div>
            <div className="timeline-content">
              <p className="timeline-title">{mem.title}</p>
              <p className="timeline-desc">{mem.desc}</p>
              {mem.location && <div className="timeline-location">{mem.location}</div>}
              {Number.isFinite(Number(mem.lat)) && Number.isFinite(Number(mem.lng)) && (
                <div className="timeline-map">
                  {(() => {
                    const lat = Number(mem.lat);
                    const lng = Number(mem.lng);
                    const zoom = 13;
                    const { xTile, yTile, xPct, yPct } = latLngToOsmTile(lat, lng, zoom);
                    const tileUrl = `https://tile.openstreetmap.org/${zoom}/${xTile}/${yTile}.png`;

                    return (
                      <>
                        <img src={tileUrl} alt={`Map of ${mem.location || 'location'}`} loading="lazy" />
                        <span
                          className="timeline-map-pin"
                          aria-hidden="true"
                          style={{ left: `${xPct * 100}%`, top: `${yPct * 100}%` }}
                        />
                        <a
                          className="timeline-map-link"
                          href={osmPermalink(lat, lng, zoom)}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Open in OpenStreetMap
                        </a>
                      </>
                    );
                  })()}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </Reveal>
  );
}
