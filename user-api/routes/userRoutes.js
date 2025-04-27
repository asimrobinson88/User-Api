const express = require("express");
const { getUserById } = require("../controllers/userController");
const { validateObjectId } = require("../middlewares/validateObjectId");

const router = express.Router();

router.get("/:id", validateObjectId, getUserById);

module.exports = router;
