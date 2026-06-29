// ============================================================
// EDIT EVERYTHING IN THIS FILE TO PERSONALIZE YOUR PAGE
// ============================================================

// 1. MONTHLY PHOTOS — one for each month of your year together, July through June.
//    Put your photo files in public/photos/ then reference them as "/photos/yourfile.jpg"
//    Leave image as "" to show a placeholder for that month.
export const months = [
  { label: "July",      image: "/photos/july.jpg", text: "July" },
  { label: "August",    image: "/photos/august.jpg", text: "August" },
  { label: "September", image: "/photos/september.jpg", text: "September" },
  { label: "October",   image: "/photos/october.jpg", text: "October" },
  { label: "November",  image: "/photos/november.jpg", text: "November" },
  { label: "December",  image: "/photos/december.jpg", text: "December" },
  { label: "January",   image: "/photos/january.jpg", text: "January" },
  { label: "February",  image: "/photos/february.jpg", text: "February" },
  { label: "March",     image: "/photos/march.jpg", text: "March" },
  { label: "April",     image: "/photos/april.jpg", text: "April" },
  { label: "May",       image: "/photos/may.jpg", text: "May" },
  { label: "June",      image: "/photos/june.jpg", text: "June" }
];

// Fallback placeholder image used for any month you haven't filled in yet.
export const placeholderImage =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Crect width='800' height='600' fill='%23F4F1EC'/%3E%3C/svg%3E";

// 2. THE LETTER — write your message here. Use \n\n for a new paragraph.
export const letter = `Dear Erin,\n\nYou have been such a joy and pride in my life, and this past year has really shown me God's blessing. YOU! You are so caring, so talented, so cute, so pretty, so funny, and I could go on forever with all the things I love about you. Even still, I'm finding myself falling in love with you more and more. I've prayed over you before I even met you, and you are even more perfect than I could've ever imagined. I will continue to pray over our relationship and that God will lead us to fruitful lives. This year has gone by so quickly, and I guess it's because time goes by fast with those you love. I love with you all my heart!`;

// 3. TIMELINE / MEMORIES — add as many as you want.
//    location: a place name, shown as a label and used for the map snapshot.
//    For the map image, this automatically generates a free static map
//    using OpenStreetMap — just fill in latitude and longitude (lat, lng).
//    Tip: search the place on Google Maps, right-click the pin, then click
//    the coordinates that pop up to copy them, and paste here.
export const memories = [
  {
    date: "June 16th / 2025",
    title: "Our First Coffee",
    desc: "Where everything began.",
    location: "Blue Bottle Coffee",
    lat: 32.9518,
    lng: -117.2355
  },
  {
    date: "June 30th / 2025",
    title: "Our First Date",
    desc: "Where I first showed me tism.",
    location: "Round1 Bowling & Arcade",
    lat: 32.6569,
    lng: -117.0651
  },
  {
    date: "July 6th / 2025",
    title: "Our First Day",
    desc: "Where we became Tommy & Erin.",
    location: "Convoy Music Bar",
    lat: 32.8248,
    lng: -117.1558
  }
];

// 4. QUOTES & INSIDE JOKES — add as many as you want.
export const quotes = [
  { text: "What's so funny 😡", credit: "-Erin" },
  { text: "Snuggle snuggle", credit: "-Both of us" },
  { text: "I'm pooping", credit: "-Erin" },
  { text: "Is mayonnaise an instrument?", credit: "-Patrick" },
  { text: "I want a cat", credit: "-Erin" },
  { text: "She is very gorgeous to me!", credit: "-Tommy" },
  { text: "He was number one!", credit: "-Spongebob" },
  { text: "She's a baddie", credit: "-Tommy" },
  { text: "Snackie Snack", credit: "-Both of us" },
  { text: "🦄", credit: "-Both of us" }
];

export function staticMapUrl(lat, lng, zoom = 14, width = 640, height = 280) {
  // Free static map snapshot, no API key required
  // Some networks block `staticmap.openstreetmap.de`; the `.fr` endpoint tends to be more reliable.
  return `https://staticmap.openstreetmap.fr/osmfr/staticmap.php?center=${lat},${lng}&zoom=${zoom}&size=${width}x${height}&markers=${lat},${lng},red-pushpin`;
}
