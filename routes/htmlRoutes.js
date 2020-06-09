const router = require('express').Router();
const path = require('path');

// add our routes

// TODO: html route for displaying the home page
router.get('/', (req, res) => {
    const filePath = path.join(__dirname, '..', 'public', 'html', 'index.html');
    res.sendFile()
})

module.exports = router;