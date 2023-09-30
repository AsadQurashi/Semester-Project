import mongoose from "mongoose";

const Gold_DataSchema = new mongoose.Schema({
     purity: {
        type : String
    },
    weight: {
        type : String
    },
    price: {
        type : Number
    },
    madeby: {
        type : String
    },
    img: {
        type : String
    }
})

const Gold_DataModel = mongoose.model("Gold", Gold_DataSchema);
export default Gold_DataModel;