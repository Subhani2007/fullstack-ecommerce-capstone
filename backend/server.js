const express = require("express");
const path = require("path");

const app = express();


// Serve frontend files
app.use(express.static(path.join(__dirname, "../frontend")));


// Backend test route
app.get("/api", (req, res) => {
    res.json({
        message: "Backend Running Successfully"
    });
});


const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server Started: http://localhost:${PORT}`);
});
