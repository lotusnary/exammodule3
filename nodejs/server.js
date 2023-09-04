const express = require('express');
const app = express();

app.get('/get', (req, res) => {
    res.send("List of username");
});
app.post('/user', (req, res) => {
    res.send({ "id": 100, "name": "Nary" });
});

app.listen(5000, () => {
    console.log('Express Server is Running at Port No 5000..');
});