const express = require("express");
const routes = require('./api/routes/peopleRoute');

const app = express();
const port = 3000;

app.use(express.json());
app.use('/', routes);

const listener = app.listen(process.env.PORT || port, () => {
    console.log('App is listening on port ' + listener.address().port)
})