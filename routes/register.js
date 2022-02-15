const express = require("express");
const router = express();

router.get('/', (req, res) => {
    res.send(`Welcome to the Register Route.`);
});

module.exports = router;