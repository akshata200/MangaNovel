const express = require('express');
const services = require('../services/render')
const route = express.Router();

route.get('/', services.home);
route.get('/novel', services.novel);
route.get('/prolouge', services.prolouge);
module.exports = route;