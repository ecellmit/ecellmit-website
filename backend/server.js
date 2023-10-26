const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("./utils/connectDb");

connectDB();

const port = process.env.PORT || 3001;

app.use(cors())
app.use(express.json({ extended: false }));

app.use("/api/team", require("./api/team"))

app.use("/api/alumni", require("./api/alumni"))

app.use("/api/resources", require("./api/resources"))

app.use("/api/fame", require("./api/fame"))

app.use("/api/blog", require("./api/blog"))

// listens to the app on PORT
app.listen(port, () => {
    console.log(`Server is up on port ${port}!`);
});