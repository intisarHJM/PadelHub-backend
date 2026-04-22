// club controller
const Court = require("../models/Court")

//the Courts created manually from the mangoDB

const getAllCourts = async (req, res) => {
  try {
    const allCourts = await Court.find({})
    res.status(200).json({ allCourts })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "An error occurred getting All Courts ⚠️",
      error: error.message,
    })
  }
}

const getCourtById = async (req, res) => {
  try {
    const court = await Court.findById(req.params.id).populate("reviews.author") //will show the author info instead of just the id
    res.status(200).json({ court })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "An error occurred getting this single court ⚠️",
      error: error.message,
    })
  }
}

const addReview = async (req, res) => {
  try {
    const newReview = {
      author: res.locals.payload.id,
      description: req.body.description,
      rating: Number(req.body.rating),
    }


    const court = await Court.findByIdAndUpdate(
      req.params.id,
      { $push: { reviews: newReview } },
      { new: true, validateBeforeSave: false }
    ).populate("reviews.author", "username")

    if (!court) return res.status(404).send("Court not found")

    res.status(200).json({ court })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}


module.exports = {
  getAllCourts,
  getCourtById,
  addReview,
}
