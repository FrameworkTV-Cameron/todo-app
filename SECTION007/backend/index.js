const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

const connection = mongoose.connection;
mongoose.connect("mongodb+srv://CCampos:Potato@42!@frameworktv.2xbn4.gcp.mongodb.net/FrameworkTV?r" +
        "etryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
connection.once('open', () => {
    console.log("MongoDB connection succsessful.")
})


app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
