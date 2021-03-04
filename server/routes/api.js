const express = require('express');

const calendarController = require('../controllers/calendarController');

const router = express.Router();

router.get('/',
  calendarController.getUnits,
  (req, res) => res.status(200).json(res.locals.units));

router.post('/unit',
  calendarController.addUnit,
  (req, res) => res.status(200).json(res.locals.units));

module.exports = router;
