//
//_________________________________________________
const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.send("node js server app root route");
});

//
//_________________________________________________
const sheetsRoutes = require("./routes");
app.get("/sheet", sheetsRoutes);

//
//_________________________________________________
// const { handleError, ErrorHandler } = require("./middleware/handle-error");
// app.get("/error", (req, res) => {
//   throw new ErrorHandler(500, "Internal server error");
// });
// app.use((err, req, res, next) => {
//   handleError(err, res);
// });

//
//_________________________________________________
const secrets = require("./secrets.js");
const { port } = secrets;
app.listen(port, () => {
  console.log(`Server running on localhost:${port}`);
});
