// reservation router

const router = require("express").Router()
const middleware = require("../middleware")
const reservation = require("../controllers/reservationController")

router.get(
  "/",
  middleware.stripToken,
  middleware.verifyToken,
  reservation.getAllReservations
)
router.post(
  "/:id",
  middleware.stripToken,
  middleware.verifyToken,
  reservation.createReservation
)

router.delete(
  "/:id",
  middleware.stripToken,
  middleware.verifyToken,
  reservation.deleteReservation
)
router.get(
  "/user/:id",
  middleware.stripToken,
  middleware.verifyToken,
  reservation.getReservationByUser
)

module.exports = router
