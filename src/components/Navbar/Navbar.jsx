import  { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaSearch, FaBell, FaEnvelope, FaUser } from 'react-icons/fa';

const Navbar = () => {
  const [active, setActive] = useState(0);

  const navItems = [
    { icon: <FaHome />, id: 0, route: '/' },
    { icon: <FaSearch />, id: 1, route: '/2' },
    { icon: <FaBell />, id: 2, route: '/3' },
    { icon: <FaEnvelope />, id: 3, route: '/3' },
    { icon: <FaUser />, id: 4, route: '/3' },
  ];

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white shadow-lg z-50">
      <div className="flex justify-around">
        {navItems.map((item) => (
          <Link
            to={item.route}
            key={item.id}
            className={`flex items-center justify-center p-4 cursor-pointer ${
              active === item.id ? 'text-green-500' : 'text-gray-500'
            }`}
            onClick={() => setActive(item.id)}
          >
            <div className={`rounded-full p-2 ${active === item.id ? 'bg-green-500' : 'bg-gray-300'}`}>
              {item.icon}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
