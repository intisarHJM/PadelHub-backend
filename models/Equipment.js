//Equipment model
const mongoose = require("mongoose")

const equipmentSchema = new mongoose.Schema(
  {
    toolName: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    room: {
      type: Number,
      required: true
    },
    qty: {
      type: Number,
      required: true,
      default: 0
    }
  },
  { timestamps: true }
)

module.exports = mongoose.model("Equipment", equipmentSchema)
