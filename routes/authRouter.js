// auth router
const router = require("express").Router()
const controller = require("../controllers/authController")

router.get("/test", (req, res) => {
  res.send("working")
})

module.exports = router
