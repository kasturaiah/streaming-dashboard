📺 Streaming Dashboard Clone (Next.js 14 + Tailwind + OMDb API)

A simplified movie streaming dashboard (Netflix-style) built with Next.js 14 App Router, TypeScript, Tailwind CSS, and OMDb API.
The app displays a hero banner, multiple horizontal movie rows, and detailed movie pages using dynamic routing.

🚀 Features
✔ Next.js 14 App Router

Uses server components for data fetching & optimized rendering.

✔ OMDb API Integration

Fetch movie lists and movie details using external API.

✔ Hero Banner

Highlights the first movie in the popular list.

✔ Horizontal Movie Rows

Fully responsive and scrollable (like Netflix categories).

✔ Dynamic Route Pages

Each movie links to /movie/[id] showing:

Poster

Title

Genre

Plot

Release date

Director, Runtime, Actors, Ratings, etc.

✔ Tailwind CSS

Used for fast styling, animations, and responsive layout.

✔ Environment Variable Support

OMDb API key stored securely using .env.local.

📁 Project Structure
streaming-dashboard/
│── app/
│   ├── layout.tsx
│   ├── globals.css
│   ├── page.tsx
│   └── movie/[id]/page.tsx
│
│── components/
│   ├── Header.tsx
│   ├── HeroBanner.tsx
│   ├── MovieRow.tsx
│   └── MovieCard.tsx
│
│── lib/
│   └── omdb.ts
│
│── types/
│   └── movie.ts
│
│── public/
│   ├── fallback.jpg
│   └── poster-fallback.png
│
│── .env.local        (not committed)
│── .gitignore
│── next.config.js
│── tailwind.config.js
│── postcss.config.js
│── package.json
│── README.md

🔧 Installation & Setup
1️⃣ Clone the project
git clone <your_repo_url>
cd streaming-dashboard

2️⃣ Install dependencies
npm install

3️⃣ Add your OMDb API key

Create a file named .env.local in the project root:

OMDB_API_KEY=your_real_key_here

4️⃣ Run development server
npm run dev


Now open:

👉 http://localhost:3000/
