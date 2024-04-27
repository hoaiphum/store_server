var Customer = require('../models/Customer');

const CustomerController = {
    async getAll(req, res) {
        try {
            await Customer.getAll((customers) => {
                res.render('customer', { customers });
            });
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    },
    async getCustomerByName(req, res) {
        try {
            const name = req.params.slug;
            await Customer.getCustomerByName(name, (customers) => {
                res.render('customer/showDetail', { customers });
            });
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    },
    async createCustomer(req, res) {
        try {
            const data = {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                birthday: req.body.birthday,
                gender: req.body.gender,
                phone: req.body.phone,
                email: req.body.email,
                password: req.body.password,
                avatar: req.body.avatar,
                createdAt: req.body.createdAt,
            };
            await Customer.createCustomer(data, (result) => {
                res.send({ data: result });
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    },
    async updateCustomer(req, res) {
        try {
            const data = req.body;
            await Customer.updateCustomer(data, (result) => {
                res.send({ data: result });
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    },
};

module.exports = CustomerController;
