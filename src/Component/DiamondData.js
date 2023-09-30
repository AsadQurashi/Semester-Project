import React, { useState } from 'react';
import '../Style/InputFoam.css'; 
import { Diamond_Data } from '../Service/Api';

const DiamondDataPage = () => {
  const [diamondData, setDiamondData] = useState({
    Carat: '',
    Color: '',
    Clarity: '',
    Cut: '',
    Price: '',
    Img: ''
  });

  const handleChange = (e) => {
    setDiamondData({ ...diamondData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { Carat, Color, Clarity, Cut, Price, Img } = diamondData;
    try {
      const response = await Diamond_Data({
        carat: Carat,
        color: Color,
        clarity: Clarity,
        cut: Cut,
        price: Price,
        img: Img
      });
      alert("Data successfully saved");
    } catch (error)
    {
      alert("Data does not save"); 
    }
    console.log(diamondData);
  };

  return (
    <div className="diamond-data-page">
      <h1 className='h1'>Enter Diamond Data</h1>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label className='lbl' htmlFor="carat">Carat:</label>
          <input
            className='input-filed'
            type="text"
            id="carat"
            name="Carat"
            value={diamondData.Carat}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label className='lbl' htmlFor="color">Color:</label>
          <input
            className='input-filed'
            type="text"
            id="color"
            name="Color"
            value={diamondData.Color}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label className='lbl' htmlFor="clarity">Clarity:</label>
          <input
            className='input-filed'
            type="text"
            id="clarity"
            name="Clarity"
            value={diamondData.Clarity}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label className='lbl' htmlFor="cut">Cut:</label>
          <input
            className='input-filed'
            type="text"
            id="cut"
            name="Cut"
            value={diamondData.Cut}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label className='lbl' htmlFor="price">Price:</label>
          <input 
            className='input-filed'
            type="text"
            id="price"
            name="Price"
            value={diamondData.Price}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label className='lbl' htmlFor="img">Image:</label>
          <input className='input-filed'
            type="url"
            id="img"
            name="Img"
            value={diamondData.Img}
            onChange={handleChange}
            required
          />
        </div>
        <button className='btn' type="submit">Submit</button>
      </form>
    </div>
  );
};

export default DiamondDataPage;
