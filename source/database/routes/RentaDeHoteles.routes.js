const express = require("express");
const router = express.Router();
const hotelController = require("../controllers/RentaDeHoteles.controllers");

// Ruta para crear un nuevo hotel
router.post("/", hotelController.crearHotel);

// Ruta para obtener todos los hoteles
router.get("/", hotelController.obtenerHoteles);

// Ruta para obtener un hotel por ID
router.get("/:id", hotelController.obtenerHotelPorId);

// Ruta para actualizar un hotel por ID
router.put("/:id", hotelController.actualizarHotel);

// Ruta para eliminar un hotel por ID
router.delete("/:id", hotelController.eliminarHotel);

module.exports = router;