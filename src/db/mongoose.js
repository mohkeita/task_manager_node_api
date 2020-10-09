const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/task-manager-node-api", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
});