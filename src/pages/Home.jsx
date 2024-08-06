import  { useEffect, useState } from 'react';
import axios from 'axios';
import Search from '../components/SearchComponent/Search';

const Home = () => {
    const [items, setItems] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://run.mocky.io/v3/200998b7-f48d-4456-a639-0b5d2d275c12');
                setItems(response.data);
                setFilteredItems(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="min-h-screen flex flex-col">
            <Search items={items} setFilteredItems={setFilteredItems} />
            <div className="p-4 flex-1 overflow-y-auto">
                {filteredItems.map(item => (
                    <div key={item.id} className="flex items-center mb-4 bg-white p-2 rounded shadow">
                        <img src="https://placehold.co/50x50.png" alt={item.item} className="w-16 h-16 bg-gray-300 mr-4 rounded" />
                        <div className='w-full'>
                            <div>
                                <div className="font-bold">{item.item}</div>
                            </div>
                            <div className='flex justify-between w-full items-center'>
                                <div className="text-gray-500">MRP: ₹{item.price}</div>
                                <div className="text-gray-500">{item.shipping_method}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;