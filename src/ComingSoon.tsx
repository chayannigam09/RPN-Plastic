import React, { useEffect, useState } from "react";
import "./coming-soon.css"; // styles moved to external css for clarity
import logo from '../assets/logo.png';

export default function ComingSoon() {
  console.log('object')
  return (
    <div className="coming-soon-body">
      <div className="container">
        <div className="flex items-center justify-center">
          <img src={logo} alt="" className="h-28 w-28 text-white" />

        </div>
        <h1>🚀 Coming Soon</h1>
        <p>Our website is under construction. We'll be here soon with our new awesome site.</p>
      </div>
    </div>
  );
}
