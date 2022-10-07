const client = require('../psql');

const purchaseCtrl = {
    getInfo: async(req, res)=>{
        console.log('purchase');
        console.log(req.query);

        const {id, index, count} = req.query;
        console.log('id: ', id);
        console.log('name: ', index);
        console.log('count: ', count);

        const sql = `insert into test(id, "createAt", "updateAt", "isEquiped", "employerId", "itemNo", "characterUid")
        VALUES(${id}, current_timestamp, current_timestamp, false, null, ${index}, null);`

        client.query(sql, (error, rows) => {
            if(error){console.log('error: ', error);}
            else{ res.send('test'); }
        });
}}

module.exports = purchaseCtrl