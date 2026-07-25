const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">
        <h1 className="text-2xl font-bold text-blue-700">
          🚗 AutoCare Pro
        </h1>

        <ul className="flex gap-8 font-medium">
          <li className="cursor-pointer hover:text-blue-600">Home</li>
          <li className="cursor-pointer hover:text-blue-600">Services</li>
          <li className="cursor-pointer hover:text-blue-600">About</li>
          <li className="cursor-pointer hover:text-blue-600">Contact</li>
        </ul>

        <div className="flex gap-4">
          <button className="px-5 py-2 border rounded-lg">
            Login
          </button>

          <button className="px-5 py-2 bg-blue-700 text-white rounded-lg">
            Register
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;