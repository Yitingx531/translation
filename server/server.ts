import { Request, Response } from 'express';
const express = require('express');
const path = require('path');
const PORT = 3001;
const app = express();
const proofreadController = require('./controllers/proofreadController');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, '../dist')));

type Error = {
    log: string,
    status: number,
    message: string
};

app.get('/api/proofreading', proofreadController.getProofreadInfo, (req: Request, res: Response) => {
    return res.status(200).send(res.locals.files);
});

app.post('/api/proofreading', proofreadController.postProofreadInfo, (req: Request, res: Response) => {
    return res.status(200).send(res.locals.message);
});

// Catch All Handler
app.use('*', (req: Request, res: Response) => {
  return res.status(404).send('Page Not Found');
});

// GLOBAL ERROR HANDLER 
app.use((error: Error, req: Request, res: Response) => {
    const defaultError: Error = {
        log: 'Global error handler, unkonwn middleware error',
        status: 500,
        message: 'Unknown server error. Please try again'
    };
    const errObj = Object.assign({}, defaultError, error);
    return res.status(errObj.status).json(errObj.message);
});

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});