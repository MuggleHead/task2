import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Search from '../components/SearchComponent/Search';
    

const GridProductPage = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://run.mocky.io/v3/200998b7-f48d-4456-a639-0b5d2d275c12');
        setItems(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Search items={items} setFilteredItems={setItems} />
      <div className="p-4 flex-1 overflow-y-auto">
        <div className="grid grid-cols-3 gap-4">
          {items.map(item => (
            <div key={item.id} className="bg-white p-2 rounded shadow">
              <img  src="https://placehold.co/110x110.png" alt={item.item} className="w-full h-24 bg-gray-300 mb-2 rounded object-cover" />
              <div className="text-center">
                <div className="font-bold">{item.item}</div>
                <div className="text-gray-500">₹{item.price}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
     
    </div>
  );
};

export default GridProductPage;
