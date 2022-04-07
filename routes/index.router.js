const { Router } = require("express"); //import
const { greet, welcome } = require("../controllers/index.controller");;

const indexRouter = Router(); // instantiate

indexRouter.get("/", welcome);

indexRouter.get("/greet", greet);
module.exports = indexRouter;
