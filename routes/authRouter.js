// auth router
const router = require("express").Router()
const authController = require("../controllers/authController")
const middleware = require("../middleware")

router.post("/sign-up", authController.signUp)
router.post("/sign-in", authController.signIn)
router.post(
  "/update-password/:id",
  middleware.stripToken,
  middleware.verifyToken,
  authController.updatePassword
)
router.get(
  "/session",
  middleware.stripToken,
  middleware.verifyToken,
  authController.checkSession
)

module.exports = router
