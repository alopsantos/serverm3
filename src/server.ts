import express from 'express';

import './database/connection';

const app = express();

app.use(express.json());

/* app.get('/users', () => {
    console.log('teste');
}) */

app.listen(5555);
