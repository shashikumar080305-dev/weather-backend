const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');

const app = express();
app.use(cors({
    origin: "*"
}));

app.get('/weather', async (req, res) => {
    const city = req.query.city;

    try {
        const apiKey = process.env.API_KEY;
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        const response = await fetch(url);
        const data = await response.json();

        res.json(data);
    } catch (error) {
        res.status(500).json({ error: "Failed" });
    }
});

app.listen(10000, () => {
    console.log("Server running");
});