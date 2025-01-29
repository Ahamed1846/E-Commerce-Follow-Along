const express = require("express");
const router = express.Router();

// Example route
router.post("/register", (req, res) => {
    res.send("User registration endpoint");
});

module.exports = router;
