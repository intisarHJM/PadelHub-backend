//Court model
const { Schema, default: mongoose } = require("mongoose")
const Reservation = require("./Reservation")

const courtSchema = new Schema(
  {
    court_img: { type: String, required: false },
    court_id: { type: String, required: true },
    courtType: { type: String, required: true },
    price: { type: Number, required: true },

    reviews: [
      new Schema({
        author: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
          required: true,
        },
        description: { type: String, required: true },
        rating: { type: Number, required: true, min: 1, max: 5 },
        createdAt: { type: Date, default: Date.now },
      }),
    ],
  },
  { timestamps: true }
)

module.exports = mongoose.model("Court", courtSchema)

// /* isReserved: { type: Boolean, default: false },*/
// bookingDate: {
//   type: mongoose.Schema.Types.ObjectId,
//   ref: "Reservation",
//  default: null,
// }, //reference to reservation
//Note:
//I removed them because already reservation model will own the court if reserved
//we need it here only if we need to refer who reserved the court at this date.
