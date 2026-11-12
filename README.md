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
- **Database:** Prisma + Postgresql
- **AI:** Deepseek Api
- **Deployment:** Vercel and Rail way

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

The AI never answers from the open internet. It answers from the student's own file.

1. **Extract:** when a student uploads a PDF or notes, I pull the text out of the file.
2. **Chunk:** that text is split into smaller chunks, so each piece is small enough to fit in the model's context and stays focused on one idea.
3. **Retrieve:** when the student asks something or generates a quiz or study guide, only the relevant chunks are passed to the AI as its source material.
4. **Answer:** the AI is told to respond from those chunks, so it doesn't drift off the topic or go outside the course.

Building this is where I learned how chunking and AI integration work in practice. Chunk size matters a lot: too big and the model loses focus, too small and it loses context.

## Technical decisions

- **Chunking before the model call.** Sending a whole textbook to the model is slow, expensive and unfocused. Splitting the text into chunks and sending only what's needed keeps answers on topic and API usage lower.
- **DeepSeek API for generation.** [Why: cost? quality? Amharic support?]
- **PostgreSQL with Prisma.** [What's stored: users, uploaded files, chunks, generated guides?] Prisma gives type-safe queries across the whole TypeScript codebase.
- **Vercel + Railway.** [What runs where: e.g. Next.js app on Vercel, database on Railway.]
- **Telegram as a second entry point.** Many students in Ethiopia already live in Telegram, so the app meets them there instead of asking them to install something new.

## Known limitations

- **The chat is limited.** Students can't yet ask questions about each section of their material one by one.
- **The workspace needs work.** The layout and flow still need to be polished.
- **AI usage isn't managed.** [e.g. there are no per-user limits yet, so usage and cost are hard to control.]

## Roadmap

- [ ] Section-based chat: ask about any part of your material, with the AI explaining it and mapping out the topic
- [ ] Redesign the workspace to be cleaner and easier to use
- [ ] AI usage management: [limits, quotas, or caching, whichever you plan]


Built by [Nebiyou Daniel ](https://github.com/nebioudaniel), Learn mmore Build better 
