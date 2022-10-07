const listCtrl = require("../controllers/listCtrl");
const router = require('express').Router();

router.route('/')
    .get(listCtrl.getInfo)

module.exports = router;