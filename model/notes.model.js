const mongoose=require("mongoose")

const notesSchema=mongoose.Schema({
    Title:String,
    Description:String,
    user:String
})
const notesModel=mongoose.model("note",notesSchema)

module.exports={
    notesModel
}