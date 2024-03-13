import { Request, Response } from 'express';
const express = require('express');
const path = require('path');
const PORT = 3001;
const app = express();
const proofreadController = require('./controllers/proofreadController');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, '../dist')));

app.post('/api/proofreading', proofreadController.postProofreadInfo, (req: Request, res: Response) => {
    return res.status(200).send(res.locals.message);
});

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});