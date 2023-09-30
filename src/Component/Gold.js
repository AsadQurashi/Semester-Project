import { useState, memo, useEffect } from "react";
import '../Style/Content.css';
import { getgolddata, deleteGoldData , updateGoldData} from "../Service/Api";

const Gold = () => {
  const [gold, setGold] = useState([])
  const [cart, setCart] = useState([]);
  const [updatedData, setUpdatedData] = useState({});

  useEffect(() => {
    fectgolddata();
  }, []);

  const fectgolddata = async () =>
  {
    try {
      const response = await getgolddata();
      setGold(response);
    } catch (error) {
       alert("Error fetching gold data:", error);
    }
    }
  const handleAddToCart = (item) => {
    const newItem = { ...item, quantity: 1 };
    setCart((prevCart) => [...prevCart, newItem]);
  };

  const handleUpdate = async (id) => {
    try {
      // Call the updateDiamondData function with the updatedData and ID
      await updateGoldData(id, updatedData);
      // Refresh the diamonds data after the update
      fectgolddata();
      // Clear the updatedData state
      setUpdatedData({});
    } catch (error) {
      console.error("Error updating Gold:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteGoldData(id);
      setGold((prevGold) => prevGold.filter((product) => product.id !== id));
    } catch (error) {
      alert("Error deleting gold data:", error);
    }
  };

  const Product = memo(({ data, onAddToCart, onDelete }) => {
    return (
      <div className="card col-lg-4 md-4 card text-center mb-4">
        <img className="card-img-top" src={data.img} alt="..." />
        <div className="card-body">
          <h5 className="card-title">ID: {data.id}</h5>
          <h5 className="card-text">Purity: {data.purity}.</h5>
          <h5 className="card-text">weight: {data.weight}.</h5>
          <h5 className="card-title">Price: {data.price}</h5>
          <h5 className="card-text">MadeBy: {data.madeby}.</h5>
          <input
            type="text"
            value={updatedData.purity || ""}
            onChange={(e) => setUpdatedData({ ...updatedData, purity: e.target.value })}
          />
          <button onClick={() => handleUpdate(gold.id)}>Update</button>
          <button className="btn btn-primary" onClick={() => onAddToCart(data)}>
            Add to Cart
          </button>
          <button className="btn btn-danger" onClick={() => onDelete(data.id)}>
            Delete
          </button>
        </div>
      </div>
    );
  });

  return (
    <div>
      {/* Displaying Picture in Cards */}
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            {gold.map((data) => (
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

export default Gold;
