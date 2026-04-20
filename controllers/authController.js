// auth controller

const User = require("../models/User")
const middleware = require("../middleware")

const signUp = async (req, res) => {
  try {
    let hashedPassword = await middleware.hashPassword(req.body.password)

    const existingUser = await User.exists({ email: req.body.email })
    if (existingUser) {
      return res.send("User already exists.")
    } else {
      const user = await User.create({
        username: req.body.username,
        password: hashedPassword,
        email: req.body.email,
        image: req.body.image,
        phoneNum: req.body.phoneNum,
        activeReserve: req.body.activeReserve,
      })
      res.send(user)
    }
  } catch (error) {
    console.log("Error: " + error)
    res.send("Error while signing up")
  }
}

const signIn = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email })

    let matched = await middleware.comparePassword(
      req.body.password,
      user.password
    )
    if (matched) {
      let payload = {
        id: user._id,
        email: user.email,
      }

      let token = middleware.createToken(payload)
      let userData = { email: user.email, id: user._id } //for frontend
      return res.send({ user: userData, token })
    }
    res.send("Unauthorized access.")
  } catch (error) {
    console.log("Error: " + error)
    res.send("Error while signin in")
  }
}

const updatePassword = async (req, res) => {
  try {
    const user = await User.findById(req.params.id)

    // const password = user.password

    let matched = await middleware.comparePassword(
      req.body.oldPassword,
      user.password
    )

    if (matched) {
      let hashedPassword = await middleware.hashPassword(req.body.newPassword)
      await User.findByIdAndUpdate(req.params.id, { password: hashedPassword })
      return res.send("Password updated successfully!")
    }

    res.send("Unauthorized access.")
  } catch (error) {
    res.send("Error: " + error)
  }
}

const checkSession = async (req, res) => {
  try {
    const { id } = res.locals.payload
    const user = await User.findById(id).select("-password")
    res.send(user)
  } catch (error) {
    res.send("Error: " + error)
  }
}

module.exports = {
  signUp,
  signIn,
  updatePassword,
  checkSession,
}
