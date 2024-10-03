import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddNewUser = () => {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    image: null,
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();

    data.append('name', formData.name);
    data.append('price', formData.price);
    data.append('image', formData.image);

    try {
      await axios.post("http://localhost:5000/api/users", data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      navigate("/admin/users");
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className='w-[40%] mx-auto bg-green-500 py-2 px-4 mt-20 rounded-3xl font-semibold'>
        <h1 className='flex items-center justify-center font-bold text-[30px]'>Add New User</h1>
        <label htmlFor="name">Name</label>
        <input type="text" name='name' value={formData.name} onChange={handleChange} className='w-full bg-slate-600 rounded-3xl py-2 px-4 my-2' placeholder='Enter User Name' required />
        <label htmlFor="price">Price</label>
        <input type="number" name='price' value={formData.price} onChange={handleChange} className='w-full bg-slate-600 rounded-3xl py-2 px-4 my-2' placeholder='Enter User Price' required />
        <label htmlFor="image">Image</label>
        <input type="file" name='image' onChange={handleChange} className='w-full bg-slate-600 rounded-3xl py-2 px-4 my-2' required />
        <button className='bg-green-600 py-2 px-4 rounded-3xl hover:bg-green-400 text-white'>Send</button>
      </form>
    </div>
  );
};

export default AddNewUser;
