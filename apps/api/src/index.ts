import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import pino from 'pino';
import { PrismaClient } from '@prisma/client';

const log = pino({ transport: { target: 'pino-pretty' } });
const prisma = new PrismaClient();
const app = express();

app.use(helmet());
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());

app.get('/health', (_req, res) => res.json({ ok: true }));

// Example route to prove DB works
app.post('/v1/users', async (req, res) => {
  const { email, password } = req.body ?? {};
  if (!email || !password) return res.status(400).json({ error: 'email & password required' });
  const user = await prisma.user.create({ data: { email, password } });
  res.json({ id: user.id, email: user.email });
});

const port = Number(process.env.PORT || 4000);
app.listen(port, () => log.info(`API listening on http://localhost:${port}`));
