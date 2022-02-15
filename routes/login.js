const express = require("express");
const router = express();

router.get('/', (req, res) => {
    res.send(`Login Route`);
});

module.exports = router;