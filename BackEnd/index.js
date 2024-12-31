const dotenv = require('dotenv');
const express = require('express');
const app = express();

// Load environment variables from a .env file
dotenv.config();

app.use((req, res, next) => {
    console.log(`${req.method} request for ${req.url}`);
    next();
});

app.get('/', (req, res) => {
    res.send('Hello World');
});

const port = process.env.PORT || 3000; // Fallback to 3000 if PORT is not defined
const ip = process.env.IP || '127.0.0.1'; // Fallback to localhost if IP is not defined

console.log(`Port: ${port}`);
console.log(`IP: ${ip}`);

app.listen(port, ip, () => console.log(`Server is running at http://${ip}:${port}`));
