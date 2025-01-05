import { useState } from "react";

const AddItemForm = ({ onAddItem }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem({ title, description, price });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="input-field-class"
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="input-field-class"
      />
      <input
        type="price"
        placeholder="price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className="input-field-class"
      />
      <button type="submit" className="submit-button-class">
        Add Item
      </button>
    </form>
  );
};

export default AddItemForm;
