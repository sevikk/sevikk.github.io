const express = require("express");

const UserController = require("../controllers/user");

const extractFile = require("../middleware/file");

const router = express.Router();

router.post("/signup", UserController.createUser);

router.post("/login", UserController.userLogin);

router.put("/:id", extractFile, UserController.updateUser);

router.put("/changePassword", UserController.changePassword)

module.exports = router;
