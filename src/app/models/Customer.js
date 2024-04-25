const { db } = require('../../config/db');

const Customer = (customer) => {
    this.id = customer.id;
    this.firstName = customer.first_name;
    this.lastName = customer.last_name;
    this.birthday = customer.birthday;
    this.gender = customer.gender;
    this.phone = customer.phone;
    this.email = customer.email;
    this.password = customer.password;
    this.avatar = customer.avatar;
    this.createdAt = customer.created_at;
    this.updatedAt = customer.updated_at;
    this.removedAt = customer.removed_at;
};

Customer.getAll = (customers) => {
    const sql = 'SELECT * FROM customers;';
    db.query(sql, (err, res) => {
        if (err) {
            console.error('Error executing query', err);
        } else {
            customers(res.rows);
        }
    });
};

Customer.getCustomerByName = (lastName, customer) => {
    const sql = "SELECT * FROM customers WHERE last_name = '" + lastName + "';";

    db.query(sql, (err, res) => {
        if (err) {
            console.error('Error executing query', err);
        } else {
            res.rows;
        }
    });
};

Customer.createCustomer = (data, result) => {
    const sql =
        'INSERT INTO customers(first_name, last_name, gender, birthday, email, phone, password, avatar, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);';
    const values = [
        data.firstName,
        data.lastName,
        data.gender,
        data.birthday,
        data.email,
        data.phone,
        data.password,
        data.avatar,
        data.createdAt,
    ];

    db.query(sql, values, (err, res) => {
        if (err) {
            console.error('Error executing query:', sql, err); // Log lỗi một cách rõ ràng hơn
        } else {
            console.log('Inserted successfully:', res.rows); // Log kết quả nếu cần thiết
            // Thực hiện các hành động tiếp theo nếu cần
        }
    });
};

module.exports = Customer;
