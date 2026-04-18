//  club router
const Court = require("../models/Court")
const courtController = require("../controllers/courtController.js")
const express = require("express")
const router = express.Router()
const middleware = require("../middleware")

router.get(
  "/",
  middleware.stripToken,
  middleware.verifyToken,
  courtController.getAllCourts
) // get all courts

router.get(
  "/:id",
  middleware.stripToken,
  middleware.verifyToken,
  courtController.getCourtById
) //get one court using the court id

router.post(
  "/:id/reviews",
  middleware.stripToken,
  middleware.verifyToken,
  courtController.addReview
) //posting reviews inside the court using court id

module.exports = router
