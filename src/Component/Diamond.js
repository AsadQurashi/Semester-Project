import React, { useEffect, useState } from 'react';
import '../Style/Content.css';
import { getdiamonddata, deleteDiamondData, updateDiamondData } from '../Service/Api';


const DiamondPage = () => {
  const [diamonds, setDiamonds] = useState([]);
  const [updatedData, setUpdatedData] = useState({});


  useEffect(() => {
    fetchDiamonds();
  }, []);

  const fetchDiamonds = async () => {
    try {
      const response = await getdiamonddata();
      setDiamonds(response);
    } catch (error) {
      console.error("Error fetching diamond data:", error);
    }
  };

  const handleUpdate = async (id) => {
    try {
      // Call the updateDiamondData function with the updatedData and ID
      await updateDiamondData(id, updatedData);
      // Refresh the diamonds data after the update
      fetchDiamonds();
      // Clear the updatedData state
      setUpdatedData({});
    } catch (error) {
      console.error("Error updating diamond:", error);
    }
  };


  const handleDelete = async (id) => {
    try {
      await deleteDiamondData(id);
      setDiamonds(diamonds.filter((diamond) => diamond.id !== id));
    } catch (error) {
      console.error("Error deleting diamond:", error);
    }
  };

  return (
    <div className="container">
      <h1>Diamonds</h1>
      <div className="row">
        {diamonds.map((diamond) => (
          <div className="col-lg-4 col-md-6 mb-4" key={diamond.id}>
            <div className="card">
              <img className="card-img-top" src={diamond.img} alt="Diamond" />
              <div className="card-body">
                <h5 className="card-title">Carat: {diamond.carat}</h5>
                <h5 className="card-text">Color: {diamond.color}</h5>
                <h5 className="card-text">Clarity: {diamond.clarity}</h5>
                <h5 className="card-text">Cut: {diamond.cut}</h5>
                <h5 className="card-text">Price: ${diamond.price}</h5>
                <input
                  type="text"
                  value={updatedData.carat || ""}
                  onChange={(e) => setUpdatedData({ ...updatedData, carat: e.target.value })}
                />
                <button onClick={() => handleUpdate(diamond.id)}>Update</button>
                <button onClick={() => handleDelete(diamond.id)}>Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiamondPage;
 