import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import heroVideo from "../assets/video1.mp4";
import logo from "../assets/Logo.png";


const HomePage = () => {
  const navigate = useNavigate();
  const location = useLocation();

useEffect(() => {
  if (location.state?.message) {
    toast.success(location.state.message);
    window.history.replaceState({}, document.title); 
  }
}, []);

  return (
    <>
      
      <ToastContainer position="top-right" autoClose={2000} />

      
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          <div className="flex items-center gap-2">
            <img src={logo} alt="logo" className="h-8 w-8" />

            <h1 className="text-xl font-bold text-orange-500">
              UniFinder
            </h1>
          </div>

         <div className="flex items-center gap-4">

  
  <div
   onClick={() => navigate("/profile")}
   className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden border-2 border-orange-500 cursor-pointer hover:scale-105 transition">
    <img
      src="https://i.pravatar.cc/100"
      alt="Profile"
      className="w-full h-full object-cover"
    />
  </div>

</div>

        </div>
      </header>

     
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">

        <video autoPlay loop muted className="absolute w-full h-full object-cover">
          <source src={heroVideo} type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="relative z-10 text-center text-white max-w-3xl px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Find Your Future at the Perfect University
          </h2>

          <p className="mb-6 text-lg">
            Discover top universities, compare programs, and start your journey today.
          </p>
        </div>

      </section>
    </>
  );
};

export default HomePage;