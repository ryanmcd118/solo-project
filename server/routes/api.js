const express = require('express');

const calendarController = require('../controllers/calendarController');

const router = express.Router();

router.get('/',
  calendarController.getUnits,
  (req, res) => res.status(200).json(res.locals.units));

router.get('/updateUnit',
  (req, res) => {
    // console.log('inside update router');
    res
      .status(200)
      .redirect('/api/updateUnit');
  });

// router.post('/updateUnit',
//   calendarController.getUnits,
//   calendarController.updateUnit,
//   (req, res) => res.status(200).json({ units: res.locals.units }));

router.post('/unit',
  calendarController.addUnit,
  (req, res) => res.status(200).json(res.locals.units));

module.exports = router;
