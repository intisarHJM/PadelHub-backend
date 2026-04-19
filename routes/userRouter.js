// user router
const router = require("express").Router()
const controller = require("../controllers/userController")
const middleware = require("../middleware")

router.get("/purchase-history/:id", controller.getPurchaseHistory)

module.exports = router
