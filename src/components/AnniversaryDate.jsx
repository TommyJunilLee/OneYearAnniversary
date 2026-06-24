import Reveal from './Reveal';

export default function AnniversaryDate() {
  return (
    <Reveal>
      <div className="date-callout">
        <img
          src="/photos/anniversaryDate.jpg"
          alt="Calendar marking July 6th as our anniversary"
          className="date-callout-img"
        />
      </div>
    </Reveal>
  );
}