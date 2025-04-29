
        const express = require('express');
        const router = express.Router();
        const { addPoints } = require('../controllers/userController');

        router.post('/add-points', addPoints);

        module.exports = router;
    