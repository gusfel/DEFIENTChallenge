const express = require('express');

const app = express();
const port = 3000;
const path = require('path');
const axios = require('axios');

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './public')));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
