const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/quiz-app")
.then(() => console.log("DB Connected"));

app.use("/auth", require("./routes/auth"));
app.use("/quiz", require("./routes/quiz"));
app.use("/result", require("./routes/result"));

app.listen(5000, () => console.log("Server running on port 5000"));
