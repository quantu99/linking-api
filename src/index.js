const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const dotenv = require('dotenv');
const database = require('./database');
const linkRoute = require('./route/link');
dotenv.config();
const PORT = process.env.PORT;
database.connect();
const app = express();
app.use(cors());
app.use(cookieParser());
app.use(morgan('common'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/v1/link', linkRoute);
app.get('/instagram-oembed', async (req, res) => {
    try {
        const response = await axios.get(
            `https://api.instagram.com/oembed?url=${req.query.url}&access_token=e13193ff5dadce5500660416f3d19f90`,
        );
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});
app.listen(PORT || 8000, () => {
    console.log(`This app is running on http://localhost:${PORT}`);
});
