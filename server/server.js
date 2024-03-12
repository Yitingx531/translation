"use strict";
const express = require('express');
const path = require('path');
const PORT = 5000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, '../dist')));
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});
