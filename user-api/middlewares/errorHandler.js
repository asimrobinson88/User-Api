const logger = require('../utils/logger');

exports.errorHandler = (err, req, res, next) => {

  logger.error(err.stack);

  res.status(500).json({ error: 'Internal Server Error' });

};

