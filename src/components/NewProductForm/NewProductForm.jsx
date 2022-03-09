import { useState } from "react";

export default function NewProductForm () {
   


    return (
        <div>
            <div className="form-container">
                <h1>Add Product</h1>
                <form onSubmit={handleAddNewProduct}>
                <label>Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                <label>Price</label>
                <input type="text" name="price" value={formData.price} onChange={handleChange} required />
                <label>Description</label>
                <input type="text" name="description" value={formData.description} onChange={handleChange} required />
                <button type="submit">Add Product</button>
                </form>
            </div>
        </div>
    )
}