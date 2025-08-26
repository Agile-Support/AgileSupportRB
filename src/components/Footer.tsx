
import React from "react";
const Footer = () => {
  return <footer className="w-full bg-white py-0">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-pulse-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">AS</span>
              </div>
              <span className="font-display font-bold text-xl text-gray-900">Agile Support</span>
            </div>
            <p className="text-gray-600 text-sm">
              Your trusted partner for comprehensive IT solutions and digital transformation.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Web Development</li>
              <li>App Development</li>
              <li>Quality Assurance</li>
              <li>Project Management</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Industries</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Healthcare</li>
              <li>E-commerce</li>
              <li>Finance</li>
              <li>Education</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>agile.sppt@gmail.com</li>
              <li>Bengalore, India</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8">
          <p className="text-center text-gray-600 text-sm">
            © 2025 Agile Support. All rights reserved.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;
