const {Schema, model}  =  require("mongoose")

const RentaDeHotelesSchema =  new Schema ({
    nombre: String,
    descripcion: {
        type:  String,
        require:  true,
    },
    Precio: Number,
    lugar:  String
    
})

module.exports =  model("Renta de Hoteles", RentaDeHotelesSchema);