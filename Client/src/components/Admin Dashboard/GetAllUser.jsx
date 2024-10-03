import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

const GetAllUser = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/users");
        console.log("Fetched Users:", res.data.users); // Debugging line
        setUsers(res.data.users || []);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, []);

  const handleDelete = async (userId) => {
    try {
      await axios.delete(`http://localhost:5000/api/users/${userId}`);
      setUsers(users.filter((item) => item._id !== userId));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <div>
      <h1 className='flex items-center justify-center font-bold text-[30px] mt-10'>Get All Users</h1>
      <Link to="/admin/newuser">
        <button className='py-2 px-4 rounded-lg my-4 mx-4 text-white bg-blue-600 hover:bg-blue-400'>Add New User</button>
      </Link>
      <div className='grid grid-cols-3 items-center justify-center text-center gap-8 py-12 px-4'>
        {
          users.map((item) => (
            <div key={item._id} className='bg-[#8ecae6] hover:bg-[#ade8f4] py-2 px-4 space-y-2 rounded-3xl font-semibold w-full'>
              {item.image ? (
                <img 
                  src={`http://localhost:5000/uploads/${item.image}`}  
                  className="w-full h-auto" 
                  onError={() => console.log(`Failed to load image for user: ${item.name}`)} // Debugging line
                />
              ) : (
                <p>No image available</p> // Fallback if no image is found
              )}
              <h1>{item.name}</h1>
              <h5>{item.price}</h5>
              <div className='flex justify-around'>
                <button className='py-2 px-4 rounded-lg ml-4 mb-4 bg-[#48cae4] hover:bg-[#00b4d8]'>Edit</button>
                <button className='py-2 px-4 rounded-lg ml-4 mb-4 bg-[#48cae4] hover:bg-[#00b4d8]' onClick={() => handleDelete(item._id)}>Delete</button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default GetAllUser;
