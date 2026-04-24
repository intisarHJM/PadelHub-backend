require("dotenv").config({ quiet: true })

const express = require("express")
const morgan = require("morgan")
const cors = require("cors")

const authRouter = require("./routes/authRouter")
const courtRouter = require("./routes/courtRouter")
const equipmentRouter = require("./routes/equipmentRouter")
const reservationRouter = require("./routes/reservationRouter")
const userRouter = require("./routes/userRouter")

const PORT = process.env.PORT || 3001

const db = require("./db")

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors({ origin: "https://padelhub.surge.sh" }))

app.use("/auth", authRouter)
app.use("/courts", courtRouter) // path to '/courts'
app.use("/equipments", equipmentRouter)
app.use("/reservations", reservationRouter)
app.use("/user", userRouter)

app.get("/", (req, res) => {
  res.send("welcome the server is running successfully!")
})

app.listen(PORT, () => {
  console.log(`Server is up on port:`, PORT)
})
