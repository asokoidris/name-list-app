const express = require("express");
const morgan = require("morgan");
const flash = require("connect-flash");
const ejs = require ("ejs")
const ejsLayouts = require("express-ejs-layouts");
const bodyParser = require("body-parser");
const Logger = require("./providers/logger");
const mongoDbConnection = require("./providers/mongoDb");
const { PORT, APPLICATION_NAME, DOMAIN } = require("./config/keys");

//Routes
const pageRoutes = require("./routes/page-routes");

const app = express();

global.logger = Logger.createLogger({ label: APPLICATION_NAME });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("combined", { stream: logger.stream }));
app.set("layout", "layout");
app.use(ejsLayouts);

app.set("view engine", "ejs");

app.use(express.static("public"));

app.use(flash());

app.use("/", pageRoutes);

app.use((req, res, next) => {
  res.status(404).render("errors/404");
});

app.listen(PORT, async () => {
  await mongoDbConnection();
  logger.info(`Server started on port ${DOMAIN}`);
});
