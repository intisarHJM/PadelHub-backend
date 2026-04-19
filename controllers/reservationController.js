// reservation controller
const Reservation = require("../models/Reservation")
const User = require("../models/User")
const Equipment = require("../models/Equipment")
const Court = require("../models/Court")

const createReservation = async (req, res) => {
  try {
    const checkReservation = await User.findById(req.body.owner, req.params.id)
    const user = await req.params.id
    if (checkReservation.activeReserve) {
      return res.json({
        message: "You  have an active reservation. ",
      })
    }

    await Reservation.create({
      owner: user,
      date: req.body.date,
      totalPrice: req.body.totalPrice,
      court: req.body.court,
    })
    const newReservation = await Reservation.create(req.body)
    await User.findByIdAndUpdate(req.body.owner, { activeReserve: true })

    res.json(newReservation)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// const getReservationByUser = async (req, res) => {
//   try {
//     const userReservations = await Reservation.find({
//       owner: req.params.id,
//     }).populate("court")

//     res.json(userReservations)
//   } catch (error) {
//     res.status(500).json({ error: error.message })
//   }
// }

const getAllReservations = async (req, res) => {
  try {
    const allReservations = await Reservation.find()
      .populate("owner", "username email")
      .populate("court")

    res.json(allReservations)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
const deleteReservation = async (req, res) => {
  try {
    const reservation = await Reservation.findById(req.params.id)

    if (!reservation) {
      return res.status(404).json({ message: "Reservation not found" })
    }

    await Reservation.findByIdAndDelete(req.params.id)
    await User.findByIdAndUpdate(reservation.owner, { activeReserve: false })

    res.json({ message: "Reservation canceled and user status updated" })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

module.exports = {
  createReservation,
  // getReservationByUser,
  getAllReservations,
  deleteReservation,
}
