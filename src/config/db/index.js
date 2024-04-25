const { Client } = require('pg');

const dbConfig = {
    user: 'postgres.jktgyccfxmgsivdqwbom',
    password: 'PhumNgoc0099',
    host: 'aws-0-ap-southeast-1.pooler.supabase.com',
    port: '5432',
    database: 'postgres',
};

const db = new Client(dbConfig);
function connect() {
    db.connect()
        .then(() => {
            console.log('Connected DB successfully!');
        })
        .catch((err) => {
            console.error('Connected DB failure!', err);
        });
}

module.exports = { connect, db };
