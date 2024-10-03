import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Product = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await axios.get("http://localhost:5000/api/users");
                setProducts(res.data.users || []); // Assuming 'users' contains the product data
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };
        fetchProducts();
    }, []);

    return (
      <div className='grid grid-cols-3 gap-8 py-12 px-4'>
          {products.length > 0 ? (
              products.map((product) => (
                  <div key={product._id} className='bg-[#8ecae6] hover:bg-[#ade8f4] py-4 px-4 rounded-3xl font-semibold w-full'>
                      {product.image && <img src={`http://localhost:5000/${product.image}`} alt={product.name} className='h-40 w-full object-cover rounded-t-3xl' />}
                      <h2 className='text-lg font-bold mt-2'>{product.name}</h2>
                      <h3 className='text-md'>Price: ${product.price}</h3>
                  </div>
              ))
          ) : (
              <p>No products found.</p>
          )}
      </div>
  );
}  

export default Product;
