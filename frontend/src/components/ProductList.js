import React, { useState, useEffect } from "react";
import ProductItem from "./ProductItem";
import ProductForm from "./ProductForm";

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5500/api/product/get")
            .then((response) => response.json())
            .then((data) => setProducts(data))
            .catch((error) => console.error("Error:", error));
    }, []);

    const addProduct = (product) => {
        setProducts([...products, product]);
    };

    const updateProduct = (updatedProduct) => {
        setProducts(products.map((product) => (product._id === updatedProduct._id ? updatedProduct : product)));
    };

    const deleteProduct = (id) => {
        setProducts(products.filter((product) => product._id !== id));
    };

    return (
        <div>
            <h1>Product List</h1>
            <ProductForm addProduct={addProduct} />
            {products.map((product) => (
                <ProductItem key={product._id} product={product} updateProduct={updateProduct} deleteProduct={deleteProduct} />
            ))}
        </div>
    );
};

export default ProductList;
