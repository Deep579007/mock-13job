require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
const connect = require("./config/db");

const userRouter = require("./routes/user/user.router");
const jobsRouter = require("./routes/jobs/jobs.router");

const PORT = process.env.PORT || 8080;

// Deafult Midllewares
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));


app.use("/user", userRouter);
app.use("/jobs", jobsRouter);

app.get("/", async (req, res) => {
    res.status(200).send("BASE PAGE");
});
  
app.listen(PORT, async () => {
  await connect();
  console.log("listen on 8080");
});