const app = require('./config/express')();
const path = require('path');
const port = app.get('port');

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/index.html'));
  });

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
});