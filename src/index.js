const express = require('express');
const router = require('./routes/routes.js');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3002;

app.use(express.json());
app.use(router);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
