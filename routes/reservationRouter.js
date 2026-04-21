// reservation router

const router = require("express").Router()
const middleware = require("../middleware")
const reservationController = require("../controllers/reservationController")

// router.get(
//   "/",
//   middleware.stripToken,
//   middleware.verifyToken,
//   reservationController.getAllReservations
// )

router.post(
  "/:id",
  middleware.stripToken,
  middleware.verifyToken,
  reservationController.createReservation
)

router.delete(
  "/:id",
  middleware.stripToken,
  middleware.verifyToken,
  reservationController.deleteReservation
)
// router.get(
//   "/user/:id",
//   middleware.stripToken,
//   middleware.verifyToken,
//   reservation.getReservationByUser
// )

module.exports = router
