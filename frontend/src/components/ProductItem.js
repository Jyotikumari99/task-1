import React, { useState } from "react";

const ProductItem = ({ product, updateProduct, deleteProduct }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState(product.name);
    const [price, setPrice] = useState(product.price);
    const [description, setDescription] = useState(product.description);

    const handleUpdate = () => {
        fetch(`http://localhost:5500/api/product/update/${product._id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, price, description }),
        })
            .then((response) => response.json())
            .then((data) => {
                updateProduct(data);
                setIsEditing(false);
            })
            .catch((error) => console.error("Error:", error));
    };

    const handleDelete = () => {
        fetch(`http://localhost:5500/api/product/delete/${product._id}`, {
            method: "DELETE",
        })
            .then(() => deleteProduct(product._id))
            .catch((error) => console.error("Error:", error));
    };

    return (
        <div>
            {isEditing ? (
                <div>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
                    <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
                    <button onClick={handleUpdate}>Update</button>
                    <button onClick={() => setIsEditing(false)}>Cancel</button>
                </div>
            ) : (
                <div>
                    <h3>{product.name}</h3>
                    <p>{product.price}</p>
                    <p>{product.description}</p>
                    <button onClick={() => setIsEditing(true)}>Edit</button>
                    <button onClick={handleDelete}>Delete</button>
                </div>
            )}
        </div>
    );
};

export default ProductItem;
