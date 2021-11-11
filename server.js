const express = require("express");
const secrets = require("./secrets.js");
const { port } = secrets;
const app = express();
const sheetsRoutes = require("./routes");

//
//_________________________________________________
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.send("main route");
});

//
//_________________________________________________
app.get("/sheet", sheetsRoutes);

//
//_________________________________________________
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
