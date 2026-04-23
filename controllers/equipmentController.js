// equipment controller

const Equipment = require("../models/Equipment")
const User = require("../models/User")

const buyEquipments = async (req, res) => {
  try {
    const user = req.params.id
    const equipment = await Equipment.create({
      userId: user,
      toolName: req.body.toolName,
      quantity: req.body.quantity,
    })

    res.send(equipment)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

module.exports = {
  buyEquipments,
}
