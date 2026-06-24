# Your anniversary site — setup guide (React version)

This is a real React website with an animated circular photo gallery. It
needs a quick one-time setup on your computer, then deploys for free with a
real shareable link.

## What's different from a plain HTML page

This site uses a "build step" — your code gets compiled into the final
website. That's normal for any modern site with animations like this one,
and the deploy step below handles it automatically. You don't need to
understand it, just follow the steps.

## Step 1: Install Node.js (one-time, ~2 minutes)

If you don't already have it: go to **https://nodejs.org**, download the
"LTS" version, and install it like any other program.

## Step 2: Install the project's dependencies

1. Unzip this project folder somewhere on your computer.
2. Open a terminal (Mac: Terminal app. Windows: search "Command Prompt" or "PowerShell").
3. Navigate into the folder. For example:
   ```
   cd Downloads/anniversary-react
   ```
4. Run:
   ```
   npm install
   ```
   This downloads everything the project needs. Takes about a minute.

## Step 3: Preview it on your computer

Run:
```
npm run dev
```
Then open the link it prints (usually `http://localhost:5173`) in your
browser. Keep this running while you edit — the page updates live as you
save changes.

## Step 4: Add your 12 monthly photos

1. Put your photo files in the `public/photos` folder. Name them simply,
   e.g. `july.jpg`, `august.jpg`, etc.
2. Open `src/content.js` in any text editor (VS Code, Notepad, TextEdit).
3. Find the `months` array near the top. For each month, set `image` to
   `"/photos/july.jpg"` (matching your filename).

```js
{ label: "July", image: "/photos/july.jpg", text: "July" },
```

Leave `image: ""` for any month you haven't added a photo for yet — it'll
show a soft placeholder instead.

## Step 5: Write your letter

In `src/content.js`, find `export const letter = ...` and replace the
placeholder text with your real message.

## Step 6: Add your memories (with map locations)

In `src/content.js`, find the `memories` array. Each one looks like:

```js
{
  date: "March 2025",
  title: "The day we met",
  desc: "What you remember most about this moment.",
  location: "Griffith Observatory, Los Angeles",
  lat: 34.1184,
  lng: -118.3004
},
```

To get `lat` and `lng` for a place:
1. Search the place on Google Maps.
2. Right-click directly on the pin.
3. Click the coordinates that appear at the top of the menu — this copies them.
4. Paste them in, splitting into `lat` (first number) and `lng` (second).

The map photo generates automatically — no API key needed. Add or remove
memory entries freely.

## Step 7: Add your quotes / inside jokes

In `src/content.js`, find the `quotes` array and edit `text` and `credit`
for each. Add more by copying the pattern.

## Step 8: Get your shareable link (free, ~5 minutes)

We'll use **Netlify**, which builds and hosts the site for you.

1. Go to **https://app.netlify.com** and sign up free (GitHub, Google, or email).
2. Click "Add new site" → "Deploy manually".
3. In your terminal, inside the project folder, run:
   ```
   npm run build
   ```
   This creates a `dist` folder with your finished site.
4. Drag the `dist` folder onto the Netlify deploy page.
5. Netlify gives you a live link instantly, like
   `https://random-name-123.netlify.app`

**Want a nicer link?**
In your site's settings on Netlify, click "Change site name" to customize
the URL, e.g. `https://yourname-and-her-name.netlify.app`

**To update the site later:** make your edits, run `npm run build` again,
and drag the new `dist` folder onto your existing Netlify site's deploy page.

That's it — a real, animated, permanent, shareable link.
