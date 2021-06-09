const express = require('express');
let router = express.Router();
const updatesController = require('../controllers/updates.controller');
const {
    body,
    param
} = require('express-validator');
const AuthController = require("../controllers/auth.controller");

router.route('/')
    .get(AuthController.checkAuth, updatesController.get)
    .post(AuthController.checkAuth, [body('name').isString(),
        body('type').isString()
    ], updatesController.create)


router.route("/deactivate/:id")
    .put(AuthController.checkAuth, [param("id").isMongoId()], updatesController.deactivate);

router.route("/activate/:id")
    .put(AuthController.checkAuth, [param("id").isMongoId()], updatesController.activate);

router.route('/:id')
    .get(AuthController.checkAuth, [param("id").isMongoId()], updatesController.getOne)
    .put(AuthController.checkAuth, [param("id").isMongoId()], updatesController.update)
    .delete(AuthController.checkAuth, [param("id").isMongoId()], updatesController.delete);

module.exports = router;