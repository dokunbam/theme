var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function(req, res, next) {
  res.render("guests/login");
});

router.get("/login", function(req, res, next) {
  res.render("guests/login");
});

router.post("/login", function(req, res, next) {
  res.render("guests/login");
});

router.get("/register", function(req, res, next) {
  res.render("guests/register");
});

router.post("/register", function(req, res, next) {
  res.render("guests/register");
});

module.exports = router;
