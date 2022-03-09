import { useState } from "react";

export default function NewProductForm () {
    const [ formData, setFormData ] = useState({
        name: "",
        price: "",
        decription: "",
    })

    function handleAddNewProduct(evt) {
        evt.preventDefault()
        const form = new FormData();
        form.append('name', formData.name);
        form.append('price', formData.price);
        form.append('description', formData.description);
        setFormData({ name: "", price: "", description:""});
    }

    function handleChange(evt) {
        setFormData({ ...formData,[evt.target.name]: evt.target.value});
    }


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