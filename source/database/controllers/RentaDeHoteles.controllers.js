const RentaHoteles = require("../model/RentaDeHoteles");

// Controlador crearHotel
async function crearHotel(req, res) {
  try {
    const { nombre, descripcion, Precio,lugar } = req.body;
    const nuevoHotel = new RentaHoteles({ nombre, descripcion, Precio, lugar });
    const hotelCreado = await nuevoHotel.save();
    res.json(hotelCreado);
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Error al crear el hotel' });
  }
}

// Controlador obtenerHoteles
async function obtenerHoteles(req, res) {
  try {
    const hoteles = await RentaHoteles.find();
    res.json(hoteles);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los hoteles' });
  }
}

// Controlador obtenerHotelPorId
async function obtenerHotelPorId(req, res) {
  try {
    const hotel = await RentaHoteles.findById(req.params.id);
    if (hotel) {
      res.json(hotel);
    } else {
      res.status(404).json({ error: 'Hotel no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el hotel' });
  }
}

// Controlador actualizarHotel
async function actualizarHotel(req, res) {
  try {
    const { nombre, descripcion,Precio } = req.body;
    const hotelActualizado = await RentaHoteles.findByIdAndUpdate(
      req.params.id,
      { nombre, descripcion,Precio },
      { new: true }
    );
    if (hotelActualizado) {
      res.json(hotelActualizado);
    } else {
      res.status(404).json({ error: 'Hotel no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el hotel' });
  }
}

// Controlador eliminarHotel
async function eliminarHotel(req, res) {
  try {
    const hotelEliminado = await RentaHoteles.findByIdAndDelete(req.params.id);
    if (hotelEliminado) {
      res.json({ mensaje: 'Hotel eliminado correctamente' });
    } else {
      res.status(404).json({ error: 'Hotel no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el hotel' });
  }
}

module.exports = {
  crearHotel,
  obtenerHoteles,
  obtenerHotelPorId,
  actualizarHotel,
  eliminarHotel,
};