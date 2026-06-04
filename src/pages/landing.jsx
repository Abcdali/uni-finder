
import React, { useState, useEffect,useRef } from "react";
import { useNavigate } from "react-router-dom";
import heroVideo from "../assets/video2.mp4";
import ShimmerCard from "../components/ShimmerCard";

const universities = [
  {
    name: "LUMS Lahore",
    location: "Lahore",
    program: "BS Computer Science",
    fee: "8 Lac / year",
    rating: "4.5",
    image: "https://source.unsplash.com/400x250/?university,building"
  },
  {
    name: "FAST University",
    location: "Karachi",
    program: "BS Software Engineering",
    fee: "6 Lac / year",
    rating: "4.3",
    image: "https://source.unsplash.com/400x250/?campus"
  },
  {
    name: "NUST Islamabad",
    location: "Islamabad",
    program: "Engineering",
    fee: "7 Lac / year",
    rating: "4.6",
    image: "https://source.unsplash.com/400x250/?college"
  }
];


const uniList = Array.from({ length: 12 }, (_, i) => ({
  ...universities[i % 3],
  id: i
}));

export default function LandingPage() {
  const navigate = useNavigate();

const [loading, setLoading] = useState(true);
const [visible, setVisible] = useState(false);
const ref = useRef();
 useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting); 
      },
      { threshold: 0.3 }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);


 useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);
  const [programQuery, setProgramQuery] = useState("");
  const [cityQuery, setCityQuery] = useState("");
  const [universityQuery, setUniversityQuery] = useState("");

  const [programSuggestions, setProgramSuggestions] = useState([]);
    const [UniversitySuggestions, setUniversitySuggestions] = useState([]);
  const [citySuggestions, setCitySuggestions] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
const dropdownRef = useRef(null);

useEffect(() => {
  const handleOutsideClick = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setDropdownOpen(false);
    }
  };
  document.addEventListener("mousedown", handleOutsideClick);
  return () => document.removeEventListener("mousedown", handleOutsideClick);
}, []);
  

  
  const programs = ["BS Computer Science", "BS Software Engineering", "Engineering"];
  const cities = ["Lahore", "Karachi", "Islamabad"];
  const universitiesList = ["LUMS Lahore", "FAST University", "NUST Islamabad"];

  return (
    
    <div className="bg-gray-50 min-h-screen">

      <header className="bg-white shadow-sm" >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
     <img src="src/assets/Logo.png" alt="logo" className="h-8 w-8" />

  <h1 className="text-xl font-bold text-orange-500">
    UniFinder
  </h1>
</div>


<div className="space-x-3 flex items-center relative" ref={dropdownRef}>
  <button
    onClick={() => navigate("/login")}
    className="px-4 py-2 border border-orange-500 text-orange-500 rounded hover:bg-orange-50 transition"
  >
    Log In
  </button>

  <div className="relative"
    onMouseEnter={() => setDropdownOpen(true)}
    onMouseLeave={() => setDropdownOpen(false)}
  >
    <button
      onClick={() => setDropdownOpen(!dropdownOpen)}
      className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition flex items-center gap-2"
    >
      Sign Up
      <span className={`text-xs transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}>▾</span>
    </button>

    {dropdownOpen && (
      <div className="absolute right-0 mt-2 w-52 bg-white border border-gray-100 rounded-xl shadow-lg z-50 overflow-hidden">
        <p className="text-xs text-gray-400 px-4 pt-3 pb-1 uppercase tracking-wider">I am a...</p>

        <button onClick={() => navigate("/signup/student")}
          className="flex items-center gap-3 w-full px-4 py-3 hover:bg-orange-50 hover:text-orange-500 transition text-left">
          <span className="text-lg">🎓</span>
          <span>
            <p className="text-sm font-medium">Student</p>
            <p className="text-xs text-gray-400">Find universities & hostels</p>
          </span>
        </button>

        <hr className="border-gray-100" />

        <button onClick={() => navigate("/signup/university")}
          className="flex items-center gap-3 w-full px-4 py-3 hover:bg-orange-50 hover:text-orange-500 transition text-left">
          <span className="text-lg">🏫</span>
          <span>
            <p className="text-sm font-medium">University</p>
            <p className="text-xs text-gray-400">Register your university</p>
          </span>
        </button>

        <hr className="border-gray-100" />

        <button onClick={() => navigate("/signup/hostel")}
          className="flex items-center gap-3 w-full px-4 py-3 hover:bg-orange-50 hover:text-orange-500 transition text-left">
          <span className="text-lg">🏠</span>
          <span>
            <p className="text-sm font-medium">Hostel Owner</p>
            <p className="text-xs text-gray-400">List your hostel</p>
          </span>
        </button>
      </div>
    )}
  </div>
</div>
        </div>
      </header>

 <section className="relative h-[500px] flex items-center justify-center overflow-hidden"> 
  <video autoPlay loop muted className="absolute w-full h-full object-cover" >
     <source src={heroVideo} type="video/mp4" /> </video> 
      <div className="absolute inset-0 bg-black bg-opacity-50">
        </div> <div className="relative z-10 text-center text-white max-w-3xl px-4"> 
          <h2 className="text-4xl md:text-5xl font-bold mb-4"> 
            Find Your Future at the Perfect University </h2>
             <p className="mb-6 text-lg">
               Discover top universities, compare programs, and start your journey today.
                </p> 
                <div className="bg-white rounded-full shadow-lg flex flex-col md:flex-row overflow-hidden relative"> 
                  <div className="flex-1 relative">
                     <input type="text" value={programQuery} onChange={(e) => 
                      { const val = e.target.value; setProgramQuery(val); 
                      const results = programs.filter(p => p.toLowerCase().includes(val.toLowerCase()) );
                       setProgramSuggestions(results); }} 
                       placeholder="Program" className="w-full px-4 py-3 text-black outline-none" /> 
                       {programSuggestions.length > 0 &&
                        ( <ul className="absolute w-full bg-white border mt-1 rounded shadow z-10 text-black">
                           {programSuggestions.map((p, i) => ( <li key={i} onClick={() => { setProgramQuery(p); 
                            setProgramSuggestions([]); }} className="px-4 py-2 hover:bg-gray-100 cursor-pointer" > 
                            {p} </li> ))} </ul> )} 
                            </div>
                              <div className="flex-1 relative border-l">
                               <input type="text" value={cityQuery} onChange={(e) =>
                                 { const val = e.target.value; setCityQuery(val);
                                  const results = cities.filter(c => c.toLowerCase().includes(val.toLowerCase()) );
                                   setCitySuggestions(results); }} 
                                   placeholder="City" 
                                   className="w-full px-4 py-3 text-black outline-none" /> 
                                   {citySuggestions.length > 0 &&
                                    ( <ul className="absolute w-full bg-white border mt-1 rounded shadow z-10 text-black">
                                       {citySuggestions.map((c, i) => ( <li key={i} onClick={() => 
                                        { setCityQuery(c); setCitySuggestions([]); }} 
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer" > 
                      {c} </li> ))} </ul> )} 
                      </div> 
                      <div className="flex-1 relative"> 
                      <input type="text" value={universityQuery} onChange={(e) =>
                      { const val = e.target.value;  setUniversityQuery(val);
                      const results = universitiesList.filter(p => p.toLowerCase().includes(val.toLowerCase()) ); 
                      setUniversitySuggestions(results); }}
                       placeholder="University"
                      className="w-full px-4 py-3 text-black outline-none" />
                      {UniversitySuggestions.length > 0 && 
                      ( <ul className="absolute w-full bg-white border mt-1 rounded shadow z-10 text-black">
                      {UniversitySuggestions.map((p, i) => ( <li key={i} onClick={() => 
                     { setUniversityQuery(p); setUniversitySuggestions([]); }}
                   className="px-4 py-2 hover:bg-gray-100 cursor-pointer" > {p} </li> ))}
                  </ul> )} 
                </div> 
                <button className="bg-orange-500 px-6 py-3 text-white font-semibold hover:bg-orange-600">
                 Explore Now 
              </button>
            </div> 
          </div> 
        </section>

      
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Why Choose UniFinder?</h2>
          <p className="text-gray-600 mb-12">
            We help students find the best universities quickly and easily
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl shadow hover:shadow-lg transition">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="font-semibold text-lg mb-2">Top Universities</h3>
              <p className="text-gray-600 text-sm">
                Discover the best universities across Pakistan with updated data.
              </p>
            </div>

            <div className="p-6 rounded-xl shadow hover:shadow-lg transition">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="font-semibold text-lg mb-2">Fast & Easy Search</h3>
              <p className="text-gray-600 text-sm">
                Find universities by program, city, and fee in seconds.
              </p>
            </div>

            <div className="p-6 rounded-xl shadow hover:shadow-lg transition">
              <div className="text-4xl mb-4">💼</div>
              <h3 className="font-semibold text-lg mb-2">Career Focused</h3>
              <p className="text-gray-600 text-sm">
                Choose programs that match your future career goals.
              </p>
            </div>
          </div>
        </div>
      </section>

   

     <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

  {loading
    ? Array.from({ length: 8 }).map((_, i) => (
        <ShimmerCard key={i} />
      ))
    : uniList.map((uni) => (
        <div
          key={uni.id}
          className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition duration-300"
        >
          <img
            src={uni.image}
            alt={uni.name}
            className="w-full h-48 object-cover hover:scale-110 transition duration-500"
          />

          <div className="p-4">
            <h3 className="font-bold text-lg text-gray-800">{uni.name}</h3>
            <p className="text-sm text-gray-500 mt-1">📍 {uni.location}</p>
            <p className="text-sm text-gray-600 mt-1">🎓 {uni.program}</p>

            <div className="flex items-center gap-2 mt-2">
              <span className="bg-blue-600 text-white px-2 py-1 rounded text-sm">
                ⭐ {uni.rating}
              </span>
            </div>
             

            <div className="mt-3">
              <p className="text-orange-500 font-bold text-lg">{uni.fee}</p>
            </div>
            <div className="flex gap-2 mt-4" > 
              <button onClick={() =>
                 window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="flex-1 border border-gray-300 py-2 rounded hover:bg-gray-100">
                     View Details
                      </button>
                      </div>
          </div>
          
        </div>
      ))}
</div>
  <section ref={ref} className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-3xl font-bold mb-12">
          Our Impact in Numbers
        </h2>

        <div className="flex flex-col md:flex-row justify-between items-center gap-10">

        
          <div
            className={`transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h3 className="text-5xl font-bold text-orange-500">150+</h3>
            <p className="text-gray-600 mt-2">Universities Covered</p>
          </div>

         
          <div
            className={`transition-all duration-700 delay-200 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h3 className="text-5xl font-bold text-orange-500">25K+</h3>
            <p className="text-gray-600 mt-2">Students Helped</p>
          </div>

          
          <div
            className={`transition-all duration-700 delay-400 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h3 className="text-5xl font-bold text-orange-500">1M+</h3>
            <p className="text-gray-600 mt-2">Monthly Visits</p>
          </div>

        </div>
      </div>
    </section>
    </div>
  );
}