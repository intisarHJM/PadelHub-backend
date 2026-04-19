//user controller

// const { model } = require("mongoose")
const Equipment = require("../models/Equipment")
const Court = require("../models/Court")
const Reservation = require("../models/Reservation")

const getPurchaseHistory = async (req, res) => {
  try {
    const equipments = await Equipment.find({ userId: req.params.id })
    res.send(equipments)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const getReservationByUser = async (req, res) => {
  try {
    const userReservations = await Reservation.find({
      owner: req.params.id,
    }).populate("court")

    res.json(userReservations)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

module.exports = {
  getPurchaseHistory,
  getReservationByUser,
}
