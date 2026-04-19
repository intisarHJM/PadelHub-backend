// reservation controller
const Reservation = require("../models/Reservation")
const User = require("../models/User")
const Equipment = require("../models/Equipment")

const createReservation = async (req, res) => {
  try {
    const newReservation = await Reservation.create(req.body)

    await User.findByIdAndUpdate(req.body.owner, { activeReserve: true })

    res.json(newReservation)
  } catch (error) {
    res.status(400).json({ error: error.message })
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

// const updateEquipment = async (req, res) => {
//   try {
//     const equipment = await Equipment.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//       runValidators: true,
//     })
//     if (!equipment) return res.status(404).json({ message: "Not found" })
//     res.status(200).json({ message: "Updated successfully", data: equipment })

//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// }

const deleteEquipment = async (req, res) => {
  try {
    const equipment = await Equipment.findByIdAndDelete(req.params.id)
    if (!equipment) return res.status(404).json({ message: "Not found" })
    res.status(200).json({ message: "Equipment deleted successfully" })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

module.exports = {
  createEquipment,
  getAllEquipment,
  getEquipmentById,
  deleteEquipment,
}
