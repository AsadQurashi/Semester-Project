import React, { useState } from 'react';
import '../Style/InputFoam.css';
import { Ring_Data } from '../Service/Api';

const RingPage = () => {
  const [ringData, setRingData] = useState({
    Metal: '',
    Stone: '',
    Size: '',
    Price: '',
    MadeBy: '',
    Img: ''
  });

  const handleChange = (e) => {
    setRingData({ ...ringData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { Metal, Stone, Size, Price, MadeBy, Img } = ringData;
    try {
      const response = await Ring_Data({
        metal: Metal,
        stone: Stone,
        size: Size,
        price: Price,
        madeBy: MadeBy,
        img: Img
      });

      setRingData({
        Metal: '',
        Stone: '',
        Size: '',
        Price: '',
        MadeBy: '',
        Img: ''
      });
      alert("Data saved successfully");
    } catch (error) {
      alert("File is not saved");
    }
  };

  return (
    <div className="ring-specification-page">
      <h1 className="h1">Enter Ring Data</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="lbl">Metal:</label>
          <input
            className="input-filed"
            type="text"
            name="Metal"
            placeholder="Silver"
            value={ringData.Metal}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label className="lbl">Stone:</label>
          <input
            className="input-filed"
            type="text"
            name="Stone"
            placeholder="Nagina"
            value={ringData.Stone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label className="lbl">Size:</label>
          <input
            className="input-filed"
            type="text"
            name="Size"
            placeholder="1.4inch"
            value={ringData.Size}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label className="lbl">Price:</label>
          <input
            className="input-filed"
            type="text"
            name="Price"
            placeholder="$455"
            value={ringData.Price}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label className="lbl">Made By / Imported From:</label>
          <input
            className="input-filed"
            type="text"
            name="MadeBy"
            placeholder="Shop name/country"
            value={ringData.MadeBy}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label className="lbl">Img:</label>
          <input
            className="input-filed"
            type="url"
            name="Img"
            placeholder="img url"
            value={ringData.Img}
            onChange={handleChange}
            required
          />
        </div>

        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default RingPage;
