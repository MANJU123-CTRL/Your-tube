
        const express = require('express');
        const router = express.Router();
        const { watchVideo, downloadVideo } = require('../controllers/videoController');

        router.post('/watch-video', watchVideo);
        router.post('/download-video', downloadVideo);

        module.exports = router;
    