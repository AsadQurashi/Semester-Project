import React, { useEffect, useState } from "react";
import '../Style/Ring.css';
import { getRingData , updateRingData} from "../Service/Api";

const Ring = () => {
  const [ring, setRing] = useState([]);
  const [cart, setCart] = useState([]);
  const[updatedData , setUpdatedData] = useState([]);

  useEffect(() => {
    fetchRingData();
  }, []);

  const fetchRingData = async () => {
    try {
      const response = await getRingData();
      setRing(response);
    }
    catch (error) {
      console.error('Error fetching ring data:', error);
    }
  };

  const handleAddToCart = (item) => {
    const newItem = { ...item, quantity: 1 };
    setCart((prevCart) => [...prevCart, newItem]);
    const [updatedData, setUpdatedData] = useState({});
  };

  const handleUpdate = async (id) => {
    try {
      // Call the updateDiamondData function with the updatedData and ID
      await updateRingData(id, updatedData);
      // Refresh the diamonds data after the update
      fetchRingData();
      // Clear the updatedData state
      setUpdatedData({});
    } catch (error) {
      console.error("Error updating ring:", error);
    }
  };

  const handleDelete = async (id) => {
    setRing((prevRing) => prevRing.filter((product) => product.id !== id));
  };

  const Product = ({ data, onAddToCart, onDelete }) => {
    return (
      <div className="card col-lg-4 md-4 card text-center mb-4">
        <img className="card-img-top" src={data.img} alt="..." />
        <div className="card-body">
          <h5 className="card-title">Metal: {data.metal}</h5>
          <h5 className="card-text">Stone: {data.stone}.</h5>
          <h5 className="card-text">: {data.size}.</h5>
          <h5 className="card-text">Price: {data.price}.</h5>
          <input
            type="text"
            value={updatedData.metal || ""}
            onChange={(e) => setUpdatedData({ ...updatedData, metal: e.target.value })}
          />
          <button onClick={() => handleUpdate(ring.id)}>Update</button>
          <button className="btn btn-primary" onClick={() => onAddToCart(data)}>
            Add to Cart
          </button>
          <button className="btn btn-danger" onClick={() => onDelete(data.id)}>
            Delete
          </button>
        </div>
      </div>
    );
  };

  // Check if ring is an array before rendering
  if (!Array.isArray(ring)) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {/* Displaying Picture in Cards */}
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            {ring.map((data) => (
              <Product
                data={data}
                key={data.id}
                onAddToCart={handleAddToCart}
                onDelete={handleDelete}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ring;
