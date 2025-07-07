const express = require('express');
const router = express.Router();
const {
  ingestLog,
  getLogs
} = require('../controllers/logsController');

router.post('/', ingestLog);
router.get('/', getLogs);

module.exports = router;
