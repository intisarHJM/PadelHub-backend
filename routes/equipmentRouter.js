// equipment router
const router = require("express").Router()
const controller = require("../controllers/equipmentController")
const middleware = require("../middleware")

router.get(
  "/",
  middleware.stripToken,
  middleware.verifyToken,
  controller.getAllEquipment
)

router.get(
  "/:id",
  middleware.stripToken,
  middleware.verifyToken,
  controller.getEquipmentById
)

router.post(
  "/",
  middleware.stripToken,
  middleware.verifyToken,
  controller.createEquipment
)

// router.put(
//   '/:id',
//   middleware.stripToken,
//   middleware.verifyToken,
//   controller.updateEquipment
// )

router.delete(
  "/:id",
  middleware.stripToken,
  middleware.verifyToken,
  controller.deleteEquipment
)

module.exports = router
