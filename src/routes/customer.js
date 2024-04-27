const express = require('express');
const router = express.Router();

const CustomerController = require('../app/controllers/CustomerController');

router.post('/createCustomer', CustomerController.createCustomer);
router.put('/updateCustomer', CustomerController.updateCustomer);
router.get('/:slug', CustomerController.getCustomerByName);
router.get('/', CustomerController.getAll);

module.exports = router;
