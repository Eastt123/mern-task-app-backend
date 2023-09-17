const dotenv = require("dotenv").config();
const express = require("express");
const connectDB = require("./config/connectDB");
const Task = require("./model/taskModel");
const Taskroutes = require("./routes/taskRoute");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors({
    origin:["http://localhost:3000",
        "https://mern-task-app-1pbi.onrender.com"
]
}))

app.use("/api/tasks",Taskroutes);





connectDB().then(()=>{
app.listen(PORT, ()=>{
    console.log(`Server is up ${PORT}`);
});
});

