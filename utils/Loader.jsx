import React from "react";

const Loader = () => {
  return (
    <div className="loader-main">
      <div className="wine-glass-loader">
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Wine Glass */}
          <path className="glass" d="M30 20C30 20 35 50 50 50C65 50 70 20 70 20M30 20H70M30 20C27.5 15 27.5 10 27.5 10H72.5C72.5 10 72.5 15 70 20" stroke="#E0E0E0" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <path className="glass-stem" d="M50 50V85M35 95H65" stroke="#E0E0E0" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          
          {/* Wine Fill */}
          <path className="wine-fill" d="M32 20C32 20 35 40 50 40C65 40 68 20 68 20V35C68 42.5 60 50 50 50C40 50 32 42.5 32 35V20Z" fill="#4A0E2E"/>
          
          {/* Bubbles */}
          <circle className="bubble bubble1" cx="45" cy="30" r="2" fill="#FFF" fillOpacity="0.8"/>
          <circle className="bubble bubble2" cx="55" cy="35" r="1.5" fill="#FFF" fillOpacity="0.8"/>
          <circle className="bubble bubble3" cx="50" cy="25" r="1" fill="#FFF" fillOpacity="0.8"/>
          
          {/* Glass Reflection */}
          <path className="glass-reflection" d="M35 25C35 25 40 35 50 35C60 35 65 25 65 25" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.3"/>
        </svg>
      </div>
    </div>
  );
};

export default Loader;
