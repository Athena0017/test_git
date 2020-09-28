const express = require('express');
const app = express();

app.get('/home', (req, res) => {
    res.send('Hello world')
});

const port = process.env.PORT || 3030
app.listen(port, () => console.log(`Server is open on port ${port}`));