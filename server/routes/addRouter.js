const addCtrl = require("../controllers/addCtrl");
const router = require('express').Router();

router.route('/')
    .get(addCtrl.getInfo)

module.exports = router;