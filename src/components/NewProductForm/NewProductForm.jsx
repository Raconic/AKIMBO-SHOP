import { useState } from "react";


export default function NewProductForm ( {handleCreate} ) {
    const [ formData, setFormData ] = useState({
        name: "",
        price: "",
        description: "",
    })

    function handleAddNewProduct(evt) {
        evt.preventDefault()
        handleCreate(formData)
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
                <input type="text" name="name" value={formData.name} onChange={handleChange} />
                <label>Price</label>
                <input type="string" name="price" value={formData.price} onChange={handleChange} />
                <label>Description</label>
                <input type="text" name="description" value={formData.description} onChange={handleChange} />
                <button type="submit">Add Product</button>
                </form>
            </div>
        </div>
    )
}