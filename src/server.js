const express = require("express"); 
const cors = require("cors");
require("dotenv").config();

const connectDB =require("./config/db");
const authcontrollers = require("./controller/authcontroller");
connectDB();

const authroutes = require("./routes/authroutes");

const app = express();
const authmiddleware = require("./Middleware/authmiddleware");

app.get("/api/profile", authmiddleware, (req, res) => {
    res.json({
        message: "Authentication successful",
        userId: req.user.id,
    });
});

app.use(cors()); 
app.use(express.json()); 
app.use("/api/auth",authroutes);
app.get("/", (req, res) =>{
    res.send("Node.js Server Running Successfully!"); 
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => { console.log(`Server running on http://localhost:${PORT}`); 
});  



