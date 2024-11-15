const express = require("express");
const {
  getAllUsers,
  createUser,
  getUserById,
  updateUserById,
  deleteUserById,
} = require("../controllers/userControllers");

const router = express.Router();

router.get("/", getAllUsers);
router.post("/", createUser);
router.get("/:userId", getUserById);
router.put("/:userId", updateUserById);
router.delete("/:userId", deleteUserById);

module.exports = router;
