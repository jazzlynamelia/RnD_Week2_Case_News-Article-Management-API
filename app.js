const express = require('express');
const app = express();
const port = 8000;

app.use(express.json());

// routes
require('./src/routes/api')(app);

app.listen(port, () => {
    console.log(`Aplikasi berjalan di port ${port}`);
});