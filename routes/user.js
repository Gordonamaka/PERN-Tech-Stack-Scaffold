const express = require("express");
const router = express();
const { Pool } = require("pg");
const { dbParams } = require("../db/params/dbParams");
const pool = new Pool(dbParams);

router.get('/', (req, res) => {
    
    pool.query(`SELECT * FROM users;`)
      .then((results) => {
        const users = results.rows;
        res.json({ users });
      })
      .catch((err) => {
        res.status(401).send(err.message);
      });
});

module.exports = router;