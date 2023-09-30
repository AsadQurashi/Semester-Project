import mongoose from "mongoose";

const Diamond_DataSchema = new mongoose.Schema({
    carat: {
        type: String
    },
    color: {
        type: String
    },
    clarity: {
        type: String
    },
    cut: {
        type: String
    },
    price: {
        type: String
    },
    img: {
        type: String
    }
});

const DiamondDataModel = mongoose.model("Diamond", Diamond_DataSchema);
export default DiamondDataModel;