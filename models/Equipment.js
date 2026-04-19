//Equipment model
const mongoose = require("mongoose")

const equipmentSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    toolName: {
      type: String,
      required: true,
    },

    //commented
    /*  tool_img: {
      type: String,
      required: true,
    }, */
    /* pricePerUnit: {
      type: Number,
      required: true,
    }, */

    quantity: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model("Equipment", equipmentSchema)
