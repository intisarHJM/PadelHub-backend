require("dotenv").config({ quiet: true })

const express = require("express")
const morgan = require("morgan")
const cors = require("cors")

const authRouter = require("./routes/authRouter")
const courtRouter = require("./routes/courtRouter")

const PORT = process.env.PORT || 3001

const db = require("./db")

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

app.use("/auth", authRouter)
app.use("/courts", courtRouter) // path to '/courts'

app.get("/", (req, res) => {
  res.send("welcome!")
})

app.listen(PORT, () => {
  console.log(`Server is up on port:`, PORT)
})
