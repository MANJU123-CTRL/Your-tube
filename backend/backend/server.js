
        const app = require('./app');
        const mongoose = require('mongoose');
        require('dotenv').config();

        mongoose.connect(process.env.DB_URI)
          .then(() => app.listen(process.env.PORT, () => console.log('Server is running')))
          .catch(err => console.log(err));
    