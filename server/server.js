"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const path = require('path');
const PORT = 3001;
const app = express();
const proofreadController = require('./controllers/proofreadController');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, '../dist')));
app.get('/', proofreadController.getProofreadInfo, (req, res) => {
    return res.status(200).json(res.locals.files);
});
app.post('/api/proofreading', proofreadController.postProofreadInfo, (req, res) => {
    return res.status(200).send(res.locals.message);
});
// Catch All Handler
app.use('*', (req, res) => {
    return res.status(404).send('Page Not Found');
});
// GLOBAL ERROR HANDLER 
app.use((error, req, res) => {
    const defaultError = {
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
