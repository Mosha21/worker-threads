const port = process.env.PORT;
const { app } = require('./app');
const titleRouter = require('./routes/title');

app.use(titleRouter);

app.listen(port, () => {
    console.log('Server is up on port ' + port);
})