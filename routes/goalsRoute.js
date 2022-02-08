const express = require("express");
const {
  index,
  create,
  update,
  remove,
} = require("../controllers/GoalsController");

const router = express.Router();

router.route("/").get(index).post(create);
router.route("/:id").put(update).delete(remove);

module.exports = router;
