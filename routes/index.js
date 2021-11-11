const router = require("express").Router();
const sheetsRoutes = require("./google-sheets");

router.use("/sheet", sheetsRoutes);

module.exports = router;
