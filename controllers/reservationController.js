const Reservation = require("../models/Reservation")
const User = require("../models/User")

const createReservation = async (req, res) => {
  try {

    const userId = res.locals.payload.id


    const { date, totalPrice, court } = req.body
    if (!date || !court) {
      return res.status(400).json({ message: "Date and Court ID are required" })
    }


  const newReservation = await Reservation.create({
      owner: userId,
      date: date,
      totalPrice: totalPrice,
      phoneNumber: req.body.phoneNumber,
      court: court
    })


    await User.findByIdAndUpdate(userId, { activeReserve: true })


    const populatedReservation = await Reservation.findById(newReservation._id)
      .populate("owner", "username email")
      .populate("court")

    res.status(201).json(populatedReservation)
  } catch (error) {
    console.error("Create Reservation Error:", error)
    res.status(400).json({ error: error.message })
  }
}

const getReservationsByCourt = async (req, res) => {
  try {
    const reservations = await Reservation.find({ court: req.params.courtId })
      .populate("owner", "username email")
      .populate("court")
    res.json(reservations)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

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
    if (!reservation) return res.status(404).json({ message: "Reservation not found" })

    const ownerId = reservation.owner
    await Reservation.findByIdAndDelete(req.params.id)


    const otherReservations = await Reservation.findOne({ owner: ownerId })
    if (!otherReservations) {
      await User.findByIdAndUpdate(ownerId, { activeReserve: false })
    }

    res.json({ message: "Reservation canceled successfully" })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

module.exports = {
  createReservation,
  getAllReservations,
  getReservationsByCourt,
  deleteReservation,
}
