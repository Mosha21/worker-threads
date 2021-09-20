const port = process.env.PORT;
const { app } = require('./app');
const titleRouter = require('./routes/title');
const descriptionRouter = require('./routes/description')

app.use(titleRouter, descriptionRouter);

app.listen(port, () => {
    console.log('Server is up on port ' + port);
})