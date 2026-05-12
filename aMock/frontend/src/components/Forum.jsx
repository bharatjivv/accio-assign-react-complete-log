import React, { useState } from 'react'

const Forum = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData)
    }

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    value={formData.name}
                    name="name"
                    onChange={handleChange}
                />

                <br />
                <label htmlFor="email">Email:</label>
                <input
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />

                <br />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Forum;