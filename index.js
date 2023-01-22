const express = require("express")
const app = express();
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const NotesRoute = require('./Routes/notes')

dotenv.config();
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next()
})


// Mongoose Connection
mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log('DB connection established');
}).catch((err) => {
    console.log(err);
})

// Routes
app.use('/api/notes', NotesRoute)

app.listen(process.env.PORT || 5000, () => {
    console.log("Backend server is running!");
});