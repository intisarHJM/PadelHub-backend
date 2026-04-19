//user controller

// const { model } = require("mongoose")
const Equipment = require("../models/Equipment")

const getPurchaseHistory = async (req, res) => {
  try {
    const equipments = await Equipment.find({ userId: req.params.id })
    res.send(equipments)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

module.exports = {
  getPurchaseHistory,
}
