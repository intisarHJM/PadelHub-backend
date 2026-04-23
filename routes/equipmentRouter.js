// equipment router
const router = require("express").Router()
const equController = require("../controllers/equipmentController")
const middleware = require("../middleware")

router.post(
  "/buy/:id",
  middleware.stripToken,
  middleware.verifyToken,
  equController.buyEquipments
)



module.exports = router
