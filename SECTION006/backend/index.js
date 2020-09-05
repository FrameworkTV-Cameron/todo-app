const express = require('express');
const app = express();
const bodyParsesr = require('body-parser');
const cors = require('cors');
const bodyParser = require('body-parser');
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
