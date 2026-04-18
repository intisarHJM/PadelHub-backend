// reservation router

const router = require("express").Router()

const reservation = require("../controllers/reservationController")

router.post("/", reservation.createReservation)
router.get("/", reservation.getAllReservations)
router.delete("/:id", reservation.deleteReservation)

module.exports = router
