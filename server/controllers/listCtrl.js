const client = require('../psql');

const listCtrl = {
    getInfo: async(req, res)=>{

        if(req.query.user === 'true'){

            client.query(`select "characterIndex" from user_character;`, (error, rows) => {
                res.send(rows.rows);
            })
        }else

        client.query(`select name from data_clothes where index IN (
            select "itemNo" from test);`, (error, rows) => {
            res.send(rows.rows);
        });

        // select name from data_clothes where index IN (
        //     select "itemNo" from test GROUP BY "itemNo" HAVING COUNT(*) > 1); 중복값 찾기
}}

module.exports = listCtrl