const express = require("express");
const cors = require("cors");
const path = require('path')
const app = express();

var corsOptions = {
    origin: "http://localhost:8081"
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// const db = require("./models");
// db.mongoose
//     .connect(`mongodb+srv://AkProjects:AkProjects@cluster0.ufk2y7c.mongodb.net/?retryWrites=true&w=majority`, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//     })
//     .then(() => {
//         console.log("Successfully connect to MongoDB.");
//     })
//     .catch(err => {
//         console.error("Connection error", err);
//         process.exit();
//     });
app.use('/', express.static(path.join(__dirname, 'client','build')))

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
})
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});