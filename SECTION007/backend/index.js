const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

const connection = mongoose.connection;
mongoose.connect("<Replace with your connect URL>", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
connection.once('open', () => {
    console.log("MongoDB connection succsessful.")
})


app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
