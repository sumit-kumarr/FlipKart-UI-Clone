import React from "react";
import { IoIosSearch } from "react-icons/io";
import { IoMdContact } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { CiShoppingBasket } from "react-icons/ci";
import { CiMenuKebab } from "react-icons/ci";

const Navbar = () => {
    const options = [
    {value:"Login",label:"Login" ,icon:<IoMdContact/> }, 
    {value:"Login",label:"Login" ,icon:<IoMdContact/> } ,
    {value:"Login",label:"Login" ,icon:<IoMdContact/> }, 
    {value:"Login",label:"Login" ,icon:<IoMdContact/> } 


    ]
  return (
    <div className="flex gap-10 mt-3 p-3 items-center fixed top-0 left-0 right-0 z-50">
      <img
        src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg"
        alt=""
        className=" ml-5 cursor-pointer"
      />
      <div className="relative w-full m-3 items-center">
        <input
          type="text"
          placeholder="Search Brand,Products,Mobile,Sports,Toy..."
          className="relative px-10 py-3 bg-white w-full border border-blue-400 rounded-2xl outline-0 placeholder:italic placeholder:text-sm placeholder:fill-slate-200 overflow-hidden"
        />
        <IoIosSearch className="absolute left-2 bottom-4 font-bold text-xl " />
      </div>

      <div className="flex gap-3">
        <select className="border border-blue-400 rounded-2xl p-4 relative outline-0 hover:cursor-pointer hover:bg-blue-400 hover:text-white transition-all duration-300">
            {
                options.map((option)=>(
                    <option value={option.value} className="flex gap-2 items-center absolute bg-white text-black border border-blue-300 outline-0 p-3"><span>{option.icon}</span>{option.label}</option>
                ))
            }
        </select>
      </div>

      {/* cartIcon */}
      <div className="flex items-center hover:cursor-pointer transition-all duration-300 gap-2">
        <FaShoppingCart className="text-2xl hover:cursor-pointer bg-none transition-all duration-300" />
        <span className="text-xl">Cart</span>
      </div>

      {/* become a Seller */}
    <div className="flex items-center hover:cursor-pointer transition-all duration-300 gap-2">
        <CiShoppingBasket className="text-6xl hover:cursor-pointer bg-none transition-all duration-300" />
        <h2 className="text-xl">Become a Seller</h2>
    </div>

    <div className="group relative flex items-center hover:cursor-pointer transition-all duration-300 gap-2">
        <CiMenuKebab className="text-black cursor-pointer text-2xl" />
        <div className="absolute hidden group-hover:block top-full right-0 bg-white w-48 border border-blue-300 rounded shadow-lg transition-all duration-300 mt-6">
            <ul className="flex flex-col p-2">
                <li className="p-2 hover:bg-slate-50/60 hover:text-blue-500 rounded transition-all duration-300 cursor-pointer">Notification Preference</li>
                <li className="p-2 hover:bg-slate-50/60 hover:text-blue-500 rounded transition-all duration-300 cursor-pointer">24x7 Customer Care</li>
                <li className="p-2 hover:bg-slate-50/60 hover:text-blue-500 rounded transition-all duration-300 cursor-pointer">Advertise</li>
                <li className="p-2 hover:bg-slate-50/60 hover:text-blue-500 rounded transition-all duration-300 cursor-pointer">Download App</li>
            </ul>
        </div>
    </div>

    </div>
  );
};

export default Navbar;
