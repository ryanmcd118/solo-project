const { Day } = require('../models/calendarModels');
const models = require('../models/calendarModels');

const calendarController = {};

calendarController.getUnits = async (req, res, next) => {
  try {
    const units = await Day.find({});
    res.locals.units = units;
    return next();
  } catch (err) {
    return next(err);
  }
};

calendarController.updateUnit = (req, res, next) => {
  console.log('inside UPDATE UNIT');
  // console.log('req body', req.body);
  console.log('req body id', req.body.id);
  console.log('req params', req.params);

  Day.find(req.body, (err, unit) => {
    if (err) {
      return next('Error in updateUnit: ', JSON.stringify(err));
    }
    console.log('find unit', unit);
    res.redirect('/updateUnit');
    return next();
  });
  // try {
  //   const updating = Day.find({});
    
  //   next();
  // } catch (err) {
  //   return next(err);
  // }
};

calendarController.addUnit = (req, res, next) => {
  console.log('addUnit controller REQ.BODY:', req.body.unitDay, req.body.topic);
  try {
    Day.create(req.body);
    // console.log('unit created');
    next();
  } catch (err) {
    return next(err);
  }
};

module.exports = calendarController;
