const { getSheetByName } = require("../controllers/get-sheet-by-name");

const router = require("express").Router();

router.get("/", getSheetByName);

module.exports = router;
