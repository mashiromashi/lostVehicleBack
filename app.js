// variable initialization
const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// mongoose connect
mongoose.connect(
  "mongodb+srv://admin:admin@cluster0-iz4np.gcp.mongodb.net/LostAndFound?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true },
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection error"));
db.once("open", function() {
  console.log("LETS GO");
});

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// Routes
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/user.route");
const carRouter = require("./routes/car.route");
const bikeRouter = require("./routes/bike.route");
const laptopRouter = require("./routes/laptop.route");
const phoneRouter = require("./routes/phone.route");
const tuktukRouter = require("./routes/tuktuk.route");
const filterRouter = require("./routes/filter.route");
const imageUploadRouter = require("./routes/imageUpload.route");

app.use("/", indexRouter);
app.use("/user", usersRouter);
app.use("/car", carRouter);
app.use("/bike", bikeRouter);
app.use("/laptop", laptopRouter);
app.use("/phone", phoneRouter);
app.use("/tuktuk", tuktukRouter);
app.use("/filter", filterRouter);
app.use("/imageupload", imageUploadRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
