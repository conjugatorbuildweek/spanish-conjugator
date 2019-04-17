const express = require('express');
const cors = require('cors');
const configureRoutes = require('./config/api/routes');


configureRoutes(server);

module.exports = {
  server,
};
