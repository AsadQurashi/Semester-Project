import DiamondDataModel from "../Module/Diamond_Module.js";
import Gold_DataModel from "../Module/GoldDAta.js";
import RingDataModel from "../Module/RingData.js";

export const RingData = async (req, res) => {
  try {
    const { metal, stone, size, price, madeBy, img } = req.body;
    const ring = new RingDataModel({
      metal,
      stone,
      size,
      price,
      madeBy,
      img
    });

    await ring.save();

    res.status(200).json(ring);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const Gold_Data = async (req, res) => {
  try {
    const { purity, weight, price, madeby, img } = req.body;
    const gold = new Gold_DataModel({
      purity,
      weight,
      price,
      madeby,
      img
    });
    await gold.save();
    res.status(200).json(gold);
        
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const DiamondData = async (req, res) =>
{
  try {
    const { carat, color, clarity, cut, price, img } = req.body;
    const diamond = new DiamondDataModel({
      carat,
      color,
      clarity,
      cut,
      price,
      img
    });
    await diamond.save();
    res.status(200).json({ diamond });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Get Controllers

export const GetRingData = async (req, res) => {
  try {
    const getringdata = await RingDataModel.find();
    res.json(getringdata);
  } catch (error) {
    res.status(500).json({ error: "Ring data not found" });
  }
};

// 
export const GetGoldData = async (req, res) => {
  try {
    const getgolddata = await Gold_DataModel.find();
    res.json(getgolddata);
  } catch (error) {
    res.status(500).json({ error: "Gold data not found" });
  }
};

// 
export const GetDiamondData = async (req, res) => {
  try {
    const getdiamonddata = await DiamondDataModel.find();
    res.json(getdiamonddata);
  } catch (error) {
    res.status(500).json({ error: "Gold data not found" });
  }
};

//Delete Operation
//Delete Diamond Data
export const DeleteDiamondData = async (req, res) => {
  try {
    const { id } = req.params;
    await DiamondDataModel.findByIdAndDelete(id);
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ error: "Failed to delete diamond data" });
  }
};

//Delete Gold Data
export const DeleteGoldData = async (req, res) => {
  try {
    const { id } = req.params;
    await Gold_DataModel.findByIdAndDelete(id);
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ error: "Failed to delete Gold data" });
  }
};

//Delete Ring Data
export const DeleteRingData = async (req, res) => {
  try {
    const { id } = req.params;
    await RingDataModel.findByIdAndDelete(id);
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ error: "Failed to delete ring data" });
  }
};

//Update
// Update Diamond Data
export const UpdateDiamondData = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;

    const diamond = await DiamondDataModel.findByIdAndUpdate(
      id,
      updatedData,
      { new: true }
    );

    if (!diamond) {
      return res.status(404).json({ error: "Diamond data not found" });
    }

    res.json(diamond);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update Diamond Data
export const UpdateGoldData = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;

    const gold = await Gold_DataModel.findByIdAndUpdate(
      id,
      updatedData,
      { new: true }
    );

    if (!gold) {
      return res.status(404).json({ error: "Gold data not found" });
    }

    res.json(gold);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update Diamond Data
export const UpdateRingData = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;

    const ring = await RingDataModel.findByIdAndUpdate(
      id,
      updatedData,
      { new: true }
    );

    if (!ring) {
      return res.status(404).json({ error: "Ring data not found" });
    }

    res.json(ring);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

