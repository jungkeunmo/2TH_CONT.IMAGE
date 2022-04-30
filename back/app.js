const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");

const oneRouter = require("./routers/oneRouter");
const twoRouter = require("./routers/twoRouter");
const threeRouter = require("./routers/threeRouter");

const PORT = 4000;
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(morgan("dev"));

app.use("/one", oneRouter);
app.use("/two", twoRouter);
app.use("/three", threeRouter);

app.listen(PORT, () => {
    console.log(`${PORT} SERVER START`);
});