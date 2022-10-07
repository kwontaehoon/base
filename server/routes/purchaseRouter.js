const purchaseCtrl = require("../controllers/purchaseCtrl");
const router = require('express').Router();

router.route('/')
    .get(purchaseCtrl.getInfo)

module.exports = router;