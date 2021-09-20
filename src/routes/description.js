const express = require('express');
const connection = require('../db/connection');
const router = new express.Router();

router.post('/descriptions', async (req, res) => {
    const body = req.body;

    try {
        await connection.query(
        `INSERT INTO DESCRIPTIONS (description, date_created, relevance) 
         VALUES("${body.description}", "${body.date_created}", 
         ${body.relevance})`);

        res.status(201).send();
    } catch (error) {
        res.status(400).send(error);
    }
});

module.exports = router;