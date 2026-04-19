// user router
const router = require("express").Router()
const userController = require("../controllers/userController")
const middleware = require("../middleware")

router.get(
  "/purchase-history/:id",
  middleware.stripToken,
  middleware.verifyToken,
  userController.getPurchaseHistory
)
router.get(
  "/reservation/:id",
  middleware.stripToken,
  middleware.verifyToken,
  userController.getReservationByUser
)

module.exports = router
