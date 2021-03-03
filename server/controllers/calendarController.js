const models = require('../models/calendarModels');

const calendarController = {};

calendarController.getUnit = (req, res, next) => {
  // console.log('entered getUnit controller');
  models.Day.find()
    .then((unit) => {
      res.locals.units = unit;
      return next();
    })
    .catch((e) => next(e));
};

calendarController.addUnit = (req, res, next) => {
  console.log('entered addUnit controller');

  const testUnit = new models.Unit({
    unitDay: 'week 2 day 1',
    topic: 'DOM Manipulation',
  });

  return testUnit.save((err, data) => {
    if (err) {
      return next(err);
    }
    res.locals.units = data;
    return next();
  });
};

module.exports = calendarController;
