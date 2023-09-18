module.exports = (app) => {
    app.get('/todo', (req, res) => {
        res.render('todo'); // render the view (ie the ejs files) to the user
    })

    app.post('/todo', (req, res) => {
        
    })

    app.delete('/todo', (req, res) => {
        
    })
}