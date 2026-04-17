//User model
const { Schema, default: mongoose } = require("mongoose")

const userSchema = new Schema(
  {
    username: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    image: { type: String, required: false },
    phoneNum: { type: String, required: false },
    activeReserve: { type: Boolean, required: false },
  },
  { timestamps: true }
)

module.exports = mongoose.model("User", userSchema)
