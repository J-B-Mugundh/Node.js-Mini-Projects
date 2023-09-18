const express = require('express');
const todoController = require('./controllers/todoController');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('./public')); // middleware
app.use(express.json()); // Parse JSON requests

// Controllers
todoController(app);

app.listen(3000, () => {
    console.log("You're listening to port 3000");
});
