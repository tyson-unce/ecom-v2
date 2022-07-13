const express = require('express');
const app = express();

const path = require('path');
const publicPath = path.join(__dirname, '..', 'public');
app.use(express.static(publicPath));

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`Server is up on port ${port}!`);
 });

 app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
 });