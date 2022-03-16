import { useState } from "react";
import './NewProductForm.css'

export default function NewProductForm ( {handleCreate} ) {
    const [ formData, setFormData ] = useState({
        name: "",
        price: "",
        description: "",
        image:""
    })

    function handleAddNewProduct(evt) {
        evt.preventDefault()
        handleCreate(formData)
        setFormData({ name: "", price: "", description:"", image:""});
    }

    function handleChange(evt) {
        setFormData({ ...formData,[evt.target.name]: evt.target.value});
    }


    return (
        <div>
            <div className="product-form">
                <h1>Add Product</h1>
                <form onSubmit={handleAddNewProduct}>
                <label>Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} />
                <label>Price</label>
                <input type="string" name="price" placeholder ='ONLY NUMBERS' value={formData.price} onChange={handleChange} />
                <label>Image URL</label>
                <input type="string" name="image" value={formData.image} onChange={handleChange} />
                <label>Description</label>
                <textarea type="text" name="description" value={formData.description} onChange={handleChange} />
                <button id='addBtn' type="submit">Add Product</button>
                </form>
            </div>
        </div>
    )
}