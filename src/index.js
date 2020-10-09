const express = require(`express`);
const userRouter = require("./routes/users");
const taskRouter = require("./routes/tasks");
const mongooserequiring = require(`./db/mongoose`);

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
    console.log("Server is up at " + port);
});

