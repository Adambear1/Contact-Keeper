const express = require("express");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const connectDB = require("./config/db");

const app = express();
app.use(helmet());

const PORT = process.env.PORT || 5000;

// ConnectDB
connectDB();

// Init Middleware
app.use(bodyParser.json({ extended: false }));
app.use(bodyParser.urlencoded());
// Routes
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/contacts", require("./routes/contacts"));

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
