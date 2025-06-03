const express = require('express');
const router = express.Router();
const db = require('./db');

router.get('/', async (req, res) => {
    const sql = 'SELECT * FROM messages ORDER BY id DESC';
    const messages = await db.query(sql);
    res.render('index', { messages:messages[0] });
});

router.get('/api/messages', async (req, res) => {
    const sql = 'SELECT * FROM messages ORDER BY id DESC';
    const messages = await db.query(sql);
    res.json(messages[0]);
});

router.get('/create', (req, res) => {
  res.render('form');
});

router.post('/create', (req, res) => {
    const { message } = req.body;
    if (message) {
        db.query('INSERT INTO messages (message) VALUES (?)', [message]);
    };
    res.redirect('/');
});


module.exports = router;