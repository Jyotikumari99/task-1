import React, { useState } from "react";

const ProductForm = ({ addProduct }) => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("http://localhost:5500/api/product/create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, price, description }),
        })
            .then((response) => response.json())
            .then((data) => {
                addProduct(data);
                setName("");
                setPrice("");
                setDescription("");
            })
            .catch((error) => console.error("Error:", error));
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
            <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} required />
            <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
            <button type="submit">Add Product</button>
        </form>
    );
};

export default ProductForm;
