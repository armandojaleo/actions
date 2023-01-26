const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');


const app = express();
app.use(
    cors({
        origin: '*',
    })
);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

const port = 3000;

app.listen(port, () => {
    console.log('\x1b[36m%s\x1b[0m', `👍 Server running on http://localhost:${port}`);
});
