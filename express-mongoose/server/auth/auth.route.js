const express = require('express');
const validate = require('express-validation');
const paramValidation = require('../../config/param-validation');
const authCtrl = require('./auth.controller');

const router = express.Router(); // eslint-disable-line new-cap

router.route('/login')
  .post(validate(paramValidation.login), authCtrl.login);

router.route('/login/jwt')
  .post(validate(paramValidation.login), authCtrl.login);

router.route('/logout')
  .get(authCtrl.logout);

router.route('/:public_address/nonce')
  .get(validate(paramValidation.nonce), authCtrl.nonce);

router.route('/user')
  .get(authCtrl.currentUser);

module.exports = router;
