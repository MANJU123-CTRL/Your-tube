
        const express = require('express');
        const app = express();
        app.use(express.json());
        
        const authRoutes = require('./routes/authRoutes');
        const userRoutes = require('./routes/userRoutes');
        const videoRoutes = require('./routes/videoRoutes');

        app.use('/api/auth', authRoutes);
        app.use('/api/user', userRoutes);
        app.use('/api/video', videoRoutes);

        module.exports = app;
    