// AdminPanel.js
import React, { useState } from "react";

export default function AdminPanel({ products, setProducts }) {
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    image: "",
  });

  const handleDelete = (id) => {
    const updated = products.filter((p) => p.id !== id);
    setProducts(updated);
  };

  const handleEditClick = (product) => {
    setEditingId(product.id);
    setFormData({ ...product });
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setFormData({
      name: "",
      price: "",
      description: "",
      image: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    const updatedProducts = products.map((p) =>
      p.id === editingId ? { ...p, ...formData, price: parseFloat(formData.price) } : p
    );
    setProducts(updatedProducts);
    handleCancelEdit();
  };

  return (
    <div className="container">
      <h2>Admin Panel</h2>
      <div className="col-12">
        {products.map((product) => (
          <div key={product.id} className="admin-product-item">
            {editingId === product.id ? (
              <div className="edit-form">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                />
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  placeholder="Price"
                />
                <input
                  type="text"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Description"
                />
                <input
                  type="text"
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                  placeholder="Image URL"
                />
                <button onClick={handleSave} className="btn">Save</button>
                <button onClick={handleCancelEdit} className="btn">Cancel</button>
              </div>
            ) : (
              <div className="product-info">
                <a href={`/products/${product.id}`}>{product.name}</a>
                <button onClick={() => handleEditClick(product)} className="btn">Edit</button>
                <button onClick={() => handleDelete(product.id)} className="btn">Delete</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
