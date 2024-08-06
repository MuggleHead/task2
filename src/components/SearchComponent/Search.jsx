import { useState, useEffect, useRef } from 'react';

const Search = () => {
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await fetch('https://run.mocky.io/v3/200998b7-f48d-4456-a639-0b5d2d275c12');
      const data = await response.json();
      setItems(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error('Error fetching items:', error);
      setItems([]);
    }
  };

  const handleSearchClick = () => {
    setIsSearchActive(true);
    inputRef.current.focus();
  };

  const handleSearchBlur = () => {
    setIsSearchActive(false);
    setSearchTerm('');
    setFilteredItems([]);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    if (isSearchActive) {
      const filtered = items.filter(item =>
        item && item.item && typeof item.item === 'string' &&
        item.item.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setFilteredItems(filtered);
    }
  };

  return (
    <div className="bg-gray-100 p-4 w-full mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">Explore</h1>
        <button className="text-green-500">Filter</button>
      </div>
      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleSearchChange}
          onBlur={handleSearchBlur}
          className="w-full py-2 px-4 rounded-full bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <button
          onClick={handleSearchClick}
          className="absolute right-3 top-2.5 text-gray-400 focus:outline-none"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
      {isSearchActive && filteredItems.length > 0 && (
        <ul className="mt-4">
          {filteredItems.map((item, index) => (
            <li key={item.id || index} className="py-2 border-b last:border-b-0">
              {item.item} - ${item.price}
            </li>
          ))}
        </ul>
      )}
      {isSearchActive && searchTerm && filteredItems.length === 0 && (
        <p className="text-center text-gray-500 mt-4">No items match your search.</p>
      )}
    </div>
  );
};

export default Search;