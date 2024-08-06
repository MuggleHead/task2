import React, { useState } from 'react';
import axios from 'axios';


const PostPage = () => {
    const [itemName, setItemName] = useState('');
    const [itemPrice, setItemPrice] = useState('');
    const [shippingMethod, setShippingMethod] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://run.mocky.io/v3/200998b7-f48d-4456-a639-0b5d2d275c12', {
                item: itemName,
                price: itemPrice,
                shipping_method: shippingMethod
            });
            console.log('Item added:', response.data);
            // Reset form fields
            setItemName('');
            setItemPrice('');
            setShippingMethod('');
        } catch (error) {
            console.error('Error posting data:', error);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col p-4">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-xl font-bold">Add Item</h1>
                <button className="text-green-500 font-bold">Add</button>
            </div>
            <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow">
                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Item Name"
                        value={itemName}
                        onChange={(e) => setItemName(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="number"
                        placeholder="Item Price"
                        value={itemPrice}
                        onChange={(e) => setItemPrice(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>
                <div className="mb-4">
                    <select
                        value={shippingMethod}
                        onChange={(e) => setShippingMethod(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded"
                    >
                        <option value="">Shipping Method</option>
                        <option value="Same Day Shipping">Same Day Shipping</option>
                        <option value="Standard Shipping">Standard Shipping</option>
                        <option value="Express Shipping">Express Shipping</option>
                    </select>
                </div>
                <div className="flex justify-center">
                    <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
                        Submit
                    </button>
                </div>
            </form>

        </div>
    );
};

export default PostPage;
