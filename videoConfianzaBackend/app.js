const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const cors = require("cors");
const Router = require("./src/Routes/SyscomProducts");



app.listen(port, "0.0.0.0",() => {
  console.log(`Server running on port ${port}`);
});

app.use(cors());
app.use(express.json());

app.use(
  (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
  },
);

app.use("/",Router);






