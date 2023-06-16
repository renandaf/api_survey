const express = require("express")
const router = express.Router()

const survey = [
  {
    _id: 1,
    kebersihan: "Bersih",
    pelayanan: "Baik",
    rasa: "Bintang 5",
    harga: "Retoran",
    variasi: "Lengkap",
    label: "Luar biasa",
  },
];

router.get("/survey", (req, res) => {
  res.send(survey)
})

module.exports = router