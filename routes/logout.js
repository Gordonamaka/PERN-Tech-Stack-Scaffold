const express = require("express");
const router = express();

router.get('/', (req, res) => {
    res.send(`Logout Route`);
});

module.exports = router;