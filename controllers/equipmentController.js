// equipment controller

const Equipment = require("../models/Equipment")


const createEquipment = async (req, res) => {
  try {
    const equipment = await Equipment.create(req.body)
    res.status(201).json({
      message: "Equipment created successfully",
      data: equipment,
    })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}


const getAllEquipment = async (req, res) => {
  try {
    const equipments = await Equipment.find({})
    res.status(200).json({ data: equipments })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const getEquipmentById = async (req, res) => {
  try {
    const equipment = await Equipment.findById(req.params.id);
    if (!equipment) return res.status(404).json({ message: "Not found" })
    res.status(200).json({ data: equipment });
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
