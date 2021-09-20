const express = require('express');
const titleRouter = require('./routes/title');
const descriptionRouter = require('./routes/description')

const app = express();
app.use(express.json());
app.use(titleRouter, descriptionRouter);

module.exports = app