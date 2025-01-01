import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const[visible,setVisible]=useState(false);
  const{setShowSearch,getCartCount,navigate,token,setToken,setCartItems}=useContext(ShopContext);

  const logout=()=>{
    navigate('/login');
    localStorage.removeItem('token');
    setToken('');
    setCartItems({});
  }

  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <Link to='/'>
      <img src={assets.logo} className="w-36" alt="LOGO" />
      </Link>
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>HOME</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>

        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p>COLLECTION</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>ABOUT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>CONTACT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="https://forever-adminn-ebon.vercel.app" target="_blank" className="border px-4 py-1 text-xs rounded-full -mt-2">
        <p className="mt-1">ADMIN PANEL</p>  
        </NavLink>
      </ul>
      <div className="flex item-center gap-6">
        <img
          onClick={()=>{setShowSearch(true);navigate("/collection")}} className="w-5 cursor-pointer"
          src={assets.search_icon}
          alt="SEARCH"
        />

        <div className="group relative">
          
          <img onClick={()=>token ? '' : navigate('/login')}
            className="w-5 cursor-pointer"
            src={assets.profile_icon}
            alt="PROFILE"
          />
          {/* Dropdown -menu */}
         {token &&  
         <div
            className="group-hover:block hidden absolute 
       dropdown-menu right-0 pt-4"
          >
            <div className="flex flex-col w-36 gap-2 px-5 py-2 bg-slate-100 text-gray-500 rounded">
              <p onClick={()=>navigate('/')} className="cursor-pointer hover:text-black">My Profile</p>
              <p onClick={()=>navigate('/Orders')} className="cursor-pointer hover:text-black">Orders</p>
              <p onClick={logout} className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>}
        </div>
        <Link to="/cart" className="relative">
        <img src={assets.cart_icon} className="w-5 min-w-5" alt="CART"></img>
        <p className="absolute w-4 right-[-5px] bottom-[-5px] text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">{getCartCount()}</p>
        </Link>
        <img onClick={()=>setVisible(true)} src={assets.menu_icon} className="w-5 cursor-pointer sm:hidden" alt=""></img>
      </div> 

      {/* Sidebar menu for small screen */}
      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full': 'w-0'}`}>
        <div className="flex flex-col text-gray-600">
          <div className="flex cursor-pointer items-center gap-4 p-3" onClick={()=>setVisible(false)}>
            <img src={assets.dropdown_icon} className="h-4 rotate-180" alt="BACK"></img>
            <p>Back</p>
          </div>
          <NavLink onClick={()=>setVisible(false)} className=" py-2 pl-5 border" to="/">HOME</NavLink>
          <NavLink onClick={()=>setVisible(false)} className=" py-2 pl-5 border" to="/collection">COLLECTION</NavLink>
          <NavLink onClick={()=>setVisible(false)} className=" py-2 pl-5 border" to="/about">ABOUT</NavLink>
          <NavLink onClick={()=>setVisible(false)} className=" py-2 pl-5 border" to="/contact">CONTACT</NavLink>
         
        </div>
      </div>

    </div>
  );
};

export default Navbar;
