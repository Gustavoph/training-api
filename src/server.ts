import express from 'express';

import './database';

import './shared/container';

import { router } from './routes';

const app = express();

app.use(express.json());

app.use(router);

app.listen(process.env.PORT || 3334, () => {
  console.log('Server is on 🔥');
});
