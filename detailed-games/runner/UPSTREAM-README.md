<<<<<<< HEAD
# Subway Runners 🏃‍♂️

A Subway Surfers-style 3D endless runner built with React, Three.js, and Supabase.

## Features

- 🎮 **Instant Play** - Jump in immediately as a guest
- 🏃 **3-Lane Movement** - Swipe or use arrow keys
- ⬆️ **Jump & Slide** - Dodge obstacles
- 🪙 **Coin Collection** - Collect coins for bonus points
- 📈 **Progressive Difficulty** - Speed increases over time
- 🏆 **Global Leaderboard** - Compete with players worldwide
- 🔐 **Google Sign-In** - Optional account for persistent scores
- 📱 **Mobile Friendly** - Touch controls supported

## Tech Stack

- **Frontend**: React + Vite + TypeScript
- **3D Engine**: Three.js + React Three Fiber
- **State Management**: Zustand
- **Backend**: Supabase (Auth + Database)
- **Styling**: Tailwind CSS

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment

Copy the example environment file:

```bash
cp .env.example .env
```

### 3. Set Up Supabase (Optional - for leaderboards)

If you want cloud leaderboards and Google sign-in, follow the Supabase setup below. The game works offline without this.

### 4. Run Development Server

```bash
npm run dev
```

Open http://localhost:5173 in your browser.

---

## Supabase Setup (For Leaderboards)

### Step 1: Create a Supabase Project

1. Go to [supabase.com](https://supabase.com)
2. Sign up or sign in
3. Click **New Project**
4. Choose your organization
5. Enter a project name (e.g., "subway-runners")
6. Set a secure database password
7. Select your preferred region
8. Click **Create new project** (takes ~2 minutes)

### Step 2: Get Your API Keys

1. Go to **Project Settings** → **API**
2. Copy the **Project URL** → paste into `.env` as `VITE_SUPABASE_URL`
3. Copy the **anon public** key → paste into `.env` as `VITE_SUPABASE_ANON_KEY`

Your `.env` file should look like:
```
VITE_SUPABASE_URL=https://your-project-ref.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### Step 3: Run Database Migrations

1. Go to **SQL Editor** in your Supabase dashboard
2. Click **New query**
3. Copy the entire contents of `supabase/migrations/001_initial_schema.sql`
4. Paste into the SQL Editor
5. Click **Run**

This creates:
- `profiles` table for user data
- `leaderboard_best` table for high scores
- `submit_best_score` RPC function for secure score submission
- Row Level Security (RLS) policies

---

## Google OAuth Setup

### Step 1: Google Cloud Console

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create a new project (or select existing)
3. Navigate to **APIs & Services** → **Credentials**
4. Click **Create Credentials** → **OAuth client ID**

### Step 2: Configure OAuth Consent Screen

If prompted, configure the consent screen:
1. Choose **External** (for public users)
2. Fill in required fields:
   - App name: "Subway Runners"
   - User support email: your email
   - Developer contact: your email
3. Click **Save and Continue** through the remaining steps

### Step 3: Create OAuth Client

1. Application type: **Web application**
2. Name: "Subway Runners Web"
3. Add **Authorized redirect URI**:
   ```
   https://YOUR-PROJECT-REF.supabase.co/auth/v1/callback
   ```
   (Replace YOUR-PROJECT-REF with your actual Supabase project reference)
4. Click **Create**
5. Copy the **Client ID** and **Client Secret**

### Step 4: Configure Supabase

1. In Supabase Dashboard → **Authentication** → **Providers**
2. Find **Google** and toggle it **ON**
3. Paste your **Client ID**
4. Paste your **Client Secret**
5. Click **Save**

### Step 5: Configure Redirect URLs

1. In Supabase Dashboard → **Authentication** → **URL Configuration**
2. Set **Site URL**: `http://localhost:5173` (for development)
3. Add to **Redirect URLs**: `http://localhost:5173`
4. For production, add your production URL to both fields

---

## Controls

### Desktop
- **← / A**: Move left
- **→ / D**: Move right
- **↑ / W / Space**: Jump
- **↓ / S**: Slide

### Mobile
- **Swipe Left/Right**: Change lanes
- **Swipe Up**: Jump
- **Swipe Down**: Slide

---

## Project Structure

```
src/
├── game/           # Three.js game components
│   ├── Game.tsx    # Main game scene
│   ├── Player.tsx  # Player capsule + controls
│   ├── Track.tsx   # Endless track chunks
│   └── useInput.tsx # Input handling hook
├── ui/             # React UI components
│   ├── screens/    # Full-screen views
│   ├── overlays/   # In-game UI
│   └── components/ # Reusable components
├── supabase/       # Supabase client + API
│   ├── client.ts   # Supabase client instance
│   ├── auth.ts     # Auth functions
│   └── leaderboard.ts # Leaderboard API
├── state/          # Zustand stores
│   ├── gameStore.ts
│   ├── authStore.ts
│   └── uiStore.ts
└── utils/          # Constants, types, helpers
```

---

## Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
```

---

## License

MIT
=======
# 🏃‍♂️ Endless Runner 3D (Subway Surfers–Style)

A **3D endless runner game** inspired by *Subway Surfers*, built for the web using **Three.js**.  
The player runs endlessly, switches lanes, jumps, slides, avoids obstacles, collects coins, and competes on global leaderboards.

The project is designed to be:
- **Mobile-first**
- **Fast to iterate**
- **Offline-first with optional cloud features**

---

## 🎮 Core Gameplay

- Auto-running character in a **3-lane track**
- Lane switching (left / center / right)
- Jump & slide mechanics
- Obstacles with instant fail on collision
- Coin collection
- Increasing speed and difficulty over time
- Instant restart loop (<1 second)

---

## 🌐 Features

### ✅ Implemented / MVP Scope
- 3D endless runner gameplay
- Coins & obstacles
- Distance-based scoring
- Local persistence (high score, coins)
- Guest play (no login required)
- Global leaderboard (Supabase)
- Optional login with Google
- Username submission for guest leaderboard entries
- Mobile + desktop input support
- Offline-friendly fallback behavior

### 🚧 Planned / Future Features
- Character models & animations
- Multiple playable characters
- Power-ups (magnets, shields, boosts)
- Cosmetic skins
- In-game shop
- Daily challenges
- Multiple environments/themes
- Sound effects & music polish
- Mobile app packaging (iOS / Android)

---

## 🧠 Tech Stack

### Frontend
- **React + Vite + TypeScript**
- **Three.js**
- **@react-three/fiber** (React renderer for Three.js)
- **@react-three/drei** (helpers)

### Backend
- **Supabase**
  - Google OAuth
  - PostgreSQL leaderboards
  - Row Level Security (RLS)

### Persistence
- `localStorage` (offline-first)
- Supabase (optional cloud sync)

---

## 🗂 Project Structure

>>>>>>> b405f2fdd6d1e7ed8761b32e4ca3523a88738475
