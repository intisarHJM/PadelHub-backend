// auth controller

const User = require("../models/User")
// const { User } = require("../models")

const signUp = async (req, res) => {
  try {
    const existingUser = await User.exists({ email: req.body.email })
    if (existingUser) {
      return res.send("User already exists.")
    } else {
      const user = await User.create({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        image: req.body.image,
        phoneNum: req.body.phoneNum,
        activeReserve: req.body.activeReserve,
      })
      res.send(user)
    }
  } catch (error) {
    console.log("Error: " + error)
  }
}

module.exports = {
  signUp,
}
