const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const { dbConnection } = require("./source/database/config");
//Añsignamos a una co nstante  la direccion denuestras rutas 
const RentaHoteles= require("./source/database/routes/RentaDeHoteles.routes")

dbConnection();

app.use(cors());
app.use(express.json())
app.use("/renta",  RentaHoteles)


app.get("/", function (_, res) {
  res.send("<h2>Hola mundo</h2>");
});

app.listen(3000);
