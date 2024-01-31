const moment = require('moment');

const formatMessage = (username, text, id) => ({
  username,
  text,
  id,
  time: moment().format('h:mm a')
});

module.exports = { formatMessage };