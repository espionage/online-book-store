const express  = require('express');
const mongoose = require('mongoose');
const router = require("./routes/book-routes");
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());
app.use("/books",router);

mongoose.connect(
    "mongodb+srv://admin:F55pA4L7JVSC1tPi@cluster0.5cxmh.mongodb.net/bookStore?retryWrites=true&w=majority"
)
.then(() => console.log("Connected to Database"))
.then(() => {
    app.listen(5000);
})
.catch((err) => console.log(err));
