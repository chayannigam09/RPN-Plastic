import React from 'react';
import { Factory, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Factory className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">RPN Plastic</h3>
                <p className="text-sm text-gray-400">Manufacturing Excellence</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Leading plastic manufacturing company specializing in precision injection molding 
              with state-of-the-art 125-ton Goldcoin machinery.
            </p>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4" />
                <span>info@rpnplastic.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4" />
                <span>Industrial Zone, Manufacturing District</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Custom Injection Molding</li>
              <li>Product Development</li>
              <li>Tool & Die Making</li>
              <li>Quality Control</li>
              <li>Prototyping</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Industries</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Automotive</li>
              <li>Electronics</li>
              <li>Medical Devices</li>
              <li>Consumer Goods</li>
              <li>Industrial</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © 2025 RPN Plastic. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                Quality Certificates
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;