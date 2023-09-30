import mongoose from "mongoose";

const RingSchema =new mongoose.Schema({
    metal: {
        type : String
    },
    stone: {
        type : String
    },
    size: {
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

const RingDataModel = mongoose.model("Ring", RingSchema);
export default RingDataModel;