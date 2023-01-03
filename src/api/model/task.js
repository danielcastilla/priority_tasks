import mongoose from "mongoose"

const taskSchema = mongoose.Schema({
    titular: String,
    descripcion: String,
    tags:[String],
    creado:{type:Date, default:Date.now},
    actualizado:{type:Date, default:Date.now},
    seguir:Boolean,
    autor:String
})

export default mongoose.model("task", taskSchema)