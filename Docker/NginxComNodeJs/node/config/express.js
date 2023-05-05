const express = require('express')
const config = require('config');

module.exports = () => {
  const app = express();

  app.set('port', process.env.PORT || config.get('server.port'));

  app.use(express.json());

  require('../api/routes/index')(app);
  require('../api/routes/peopleRoute')(app);

  return app;
};