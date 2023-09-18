let data = [{item: 'Read NodeJS'}, {item : 'Go shopping'}, {item: 'Do workout'}];

const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false});

module.exports = (app) => {
    app.get('/todo', (req, res) => {
        res.render('todo', {todos: data}); // render the view (ie the ejs files) to the user
    });

    app.post('/todo', urlencodedParser, (req, res) => {
        try {
            const newItem = { item: req.body.item }; // Create a new item object
            data.push(newItem); // Adding the new todo data
            // Then, we will have to send the data back to the front end
            // This can be done using res.json(data)
            res.json(data);

        } catch (error) {
            console.error('Error adding todo:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    });

    app.delete('/todo/:item', (req, res) => {
        const itemToDelete = req.params.item; // Get the item to delete from the URL parameter
        data = data.filter((todo) => todo.item !== itemToDelete); // Filter out the item to delete
        res.json(data);
    });
       
    

}