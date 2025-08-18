import React from 'react';
import { Cog, Package, Wrench, Shield } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Cog,
      title: 'Custom Injection Molding',
      description: 'Tailored plastic components designed and manufactured to your exact specifications.',
      features: ['Custom tooling design', 'Prototype development', 'Volume production', 'Quality testing']
    },
    {
      icon: Package,
      title: 'Product Development',
      description: 'End-to-end product development from concept to finished plastic components.',
      features: ['Design consultation', 'Material selection', 'Cost optimization', 'Production planning']
    },
    {
      icon: Wrench,
      title: 'Tool & Die Making',
      description: 'Precision tooling and die creation for consistent, high-quality production runs.',
      features: ['Precision tooling', 'Die maintenance', 'Tool modification', 'Quality assurance']
    },
    {
      icon: Shield,
      title: 'Quality Control',
      description: 'Comprehensive quality assurance throughout the entire manufacturing process.',
      features: ['Material testing', 'Dimensional inspection', 'Performance testing', 'Certification']
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive plastic manufacturing solutions tailored to meet your specific requirements 
            and industry standards.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl border border-blue-100 hover:border-blue-300 hover:shadow-xl transition-all duration-300">
              <div className="bg-blue-600 p-4 rounded-lg w-fit mb-6 group-hover:bg-blue-700 transition-colors duration-300">
                <service.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Need Custom Solutions?</h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Our engineering team is ready to work with you on specialized plastic manufacturing projects.
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300"
          >
            Discuss Your Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;