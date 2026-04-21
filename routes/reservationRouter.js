const router = require("express").Router()
const middleware = require("../middleware")
const reservationController = require("../controllers/reservationController")


router.get("/",
  middleware.stripToken,
  middleware.verifyToken,
   reservationController.getAllReservations)


router.get("/court/:courtId",
   middleware.stripToken,
   middleware.verifyToken,
   reservationController.getReservationsByCourt)


router.post("/:id",
  middleware.stripToken,
  middleware.verifyToken,
  reservationController.createReservation)


router.delete("/:id",
  middleware.stripToken,
   middleware.verifyToken,
    reservationController.deleteReservation)

module.exports = router
