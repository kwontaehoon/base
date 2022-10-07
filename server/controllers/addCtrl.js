const client = require('../psql');

const addCtrl = {
    getInfo: async(req, res)=>{

        client.query(`select * from data_clothes;`, (error, rows) => {
            res.send(rows.rows);
        });
}}

module.exports = addCtrl