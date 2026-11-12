# Bedebo

An AI study workspace for Ethiopian students. Upload your notes or PDFs and Bedebo turns them into study guides, quizzes and flashcards, in Amharic or English.

**[Live app](https://bedebo2.vercel.app)** · **[Telegram](https://t.me/bedebostudy)**

<img width="1331" height="671" alt="Screenshot 2026-11-12 at 10 03 50 AM" src="https://github.com/user-attachments/assets/476f5e3c-aa7a-4f5f-887c-73fb8e168eb3" />


## Why I built it

Most AI study tools are built for English speakers and answer from the whole internet. That's a bad fit for a student preparing for an exam on one specific textbook, often in Amharic. Bedebo is built around two ideas: it works in the language the student is comfortable with, and it stays inside the material the student gives it.

## What it does

- **Study guides:** turns messy notes into structured guides
- **Smart quizzes:** exam-style questions generated from your own material
- **Flashcards:** quick review of key concepts
- **Bilingual tutor:** switch between Amharic and English mid-conversation
- **Source control:** answers come from your uploaded textbooks and notes, not from outside your curriculum
- **Settings:** [what users can configure, e.g. language, subjects]
- **Telegram:** also usable through a Telegram bot / Mini App

## Tech stack

- **Framework:** Next.js (App Router) + TypeScript
- **UI:** Tailwind CSS + shadcn/ui
- **Database:** Prisma + [your database]
- **AI:** [your provider / model]
- **Deployment:** Vercel

## Getting started

```bash
git clone https://github.com/nebioudaniel/Bedebo.git
cd Bedebo
npm install
```

Create a `.env` file:

```env
DATABASE_URL=
[AI_API_KEY=]
[TELEGRAM_BOT_TOKEN=]
```

Set up the database and run it:

```bash
npx prisma generate
npx prisma migrate dev
npm run dev
```

Open http://localhost:3000.

## Project structure

```
app/          routes and pages
components/   UI components
lib/          shared helpers
utils/        small utilities
prisma/       schema and seed data
```

## How the AI stays on topic

[2 to 3 sentences in your own words: how you keep answers limited to the student's material, e.g. you pass only the uploaded text as context and tell the model not to answer beyond it.]

## Roadmap

- [ ] [next feature]
- [ ] [next feature]

## Author

Built by [Neba](https://github.com/nebioudaniel), founder of Mesob AI.
