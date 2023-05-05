module.exports = app => {
    const peopleController = require('../controllers/peopleController')();
  
    app.route('/api/v1/people').get(peopleController.getPeople);
    app.route('/api/v1/people').post(peopleController.newPerson);
}