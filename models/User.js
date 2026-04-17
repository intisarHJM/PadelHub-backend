//User model
const { Schema } = require("mongoose")

const userSchema = new Schema(
  {
    username: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: false },
    image: { type: String, required: false },
    phoneNum: { type: String, required: false },
    activeReserve: { type: Boolean, required: false },
  },
  { timestamps: true }
)

module.exports = userSchema
