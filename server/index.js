require('dotenv').config();
const express = require('express');
const cors       = require('cors');
const helmet     = require('helmet');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');

// Server Setup
const app = express();
const PORT = process.env.SERVER_PORT;

/// Middleware
app.use(helmet());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());

// Login Route
const loginRoute = require('../routes/login');
app.use('/login', loginRoute);

// Logout Route
const logoutRoute = require('../routes/logout');
app.use('/logout', logoutRoute);

// Register Route
const registerRoute = require('../routes/register');
app.use('/register', registerRoute);

// Users Route
const userRoute = require('../routes/users');
app.use('/users', userRoute);

app.get('/', (req, res) => {
    res.send('Haha you got my g...')
});

// Server Listener
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });