// prisma.config.ts
import { defineConfig } from '@prisma/config';
import * as dotenv from 'dotenv';

// This loads your .env file into process.env
dotenv.config();

export default defineConfig({
  datasource: {
    url: process.env.DATABASE_URL,
  },
});