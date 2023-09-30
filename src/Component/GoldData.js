import React, { useState } from 'react';
import '../Style/InputFoam.css';
import { Gold_Data } from '../Service/Api';

const GoldDataPage = () => {
  const [goldData, setGoldData] = useState({
    Purity: '',
    Weight: '',
    Price: '',
    MadeBy: '',
    Img: ''
  });

  const handleChange = (e) => {
    setGoldData({ ...goldData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { Purity, Weight, Price, MadeBy, Img } = goldData; 
    try {
      const response = await Gold_Data({
        purity: Purity,
        weight: Weight,
        price: Price,
        madeby: MadeBy,
        img: Img
      });
      alert("Data successfully saved");
    } catch (error) {
      alert("Data dose not saved");
    }
    console.log(goldData);
  };

  return (
    <div className="gold-data-page">
      <h1 className="h1">Enter Gold Data</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="lbl" htmlFor="purity">Purity:</label>
          <input
            className="input-filed"
            type="text"
            id="purity"
            name="Purity"
            value={goldData.Purity}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label className="lbl" htmlFor="weight">Weight:</label>
          <input
            className="input-filed"
            type="text"
            id="weight"
            name="Weight"
            value={goldData.Weight}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label className="lbl" htmlFor="price">Price:</label>
          <input
            className="input-filed"
            type="text"
            id="price"
            name="Price"
            value={goldData.Price}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label className="lbl">Made By:</label>
          <input
            className="input-filed"
            type="text"
            id="madeBy"
            name="MadeBy"
            value={goldData.MadeBy}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label className="lbl" htmlFor="orderedBy">Ordered By:</label>
          <input
            className="input-filed"
            type="text"
            id="orderedBy"
            name="orderedBy"
            value={goldData.orderedBy}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label className="lbl" htmlFor="img">Img:</label>
          <input
            className="input-filed"
            type="url"
            id="img"
            name="Img"
            onChange={handleChange}
            required
          />
        </div>
        <button className="btn" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default GoldDataPage;
