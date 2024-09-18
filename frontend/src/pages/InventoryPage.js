import React, { useState } from "react";
import Modal from "react-modal";
import ItemCard from "../components/ItemCard.js";
import "../styles/InventoryPage.css";
import Navbar2 from "../components/Navbar2.js";

const InventoryPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [items, setItems] = useState([]);
  const [itemData, setItemData] = useState({
    name: "",
    description: "",
    image: "",
  });

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setItemData({ ...itemData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setItemData({ ...itemData, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    setItems([...items, itemData]);
    setItemData({ name: "", description: "", image: "" });
    closeModal();
  };

  return (
    <>
      <Navbar2 />

      <div className="inventory-page">
        <button className="plus-button" onClick={openModal}>
          +
        </button>
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          className="modal"
        >
          <h2>Add New Item</h2>
          <input
            type="text"
            name="name"
            placeholder="Item Name"
            value={itemData.name}
            onChange={handleInputChange}
          />
          <textarea
            name="description"
            placeholder="Item Description"
            value={itemData.description}
            onChange={handleInputChange}
          />
          <input type="file" accept="image/*" onChange={handleImageChange} />
          <button onClick={handleSubmit}>Submit</button>
        </Modal>
        <div className="item-cards">
          {items.map((item, index) => (
            <ItemCard key={index} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default InventoryPage;
