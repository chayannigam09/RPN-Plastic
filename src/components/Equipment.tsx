import React from 'react';
import { Settings, Zap, Gauge, CheckCircle } from 'lucide-react';

const Equipment = () => {
  const specs = [
    { label: 'Machine Capacity', value: '125 Tons' },
    { label: 'Machine Type', value: 'Goldcoin Injection Molding' },
    { label: 'Operation Mode', value: 'Fully Automated' },
    { label: 'Production Speed', value: 'High Volume' },
    { label: 'Precision Level', value: '±0.02mm' },
    { label: 'Material Compatibility', value: 'Wide Range' }
  ];

  const features = [
    {
      icon: Settings,
      title: 'Advanced Automation',
      description: 'Fully automated operation ensuring consistent quality and reduced production time.'
    },
    {
      icon: Zap,
      title: 'High Efficiency',
      description: 'Optimized energy consumption with maximum output capability for cost-effective production.'
    },
    {
      icon: Gauge,
      title: 'Precision Control',
      description: 'Precise temperature, pressure, and timing controls for superior product quality.'
    }
  ];

  return (
    <section id="equipment" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Equipment</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            State-of-the-art Goldcoin injection molding machinery delivering precision and reliability 
            for all your plastic manufacturing needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold mb-6">Goldcoin 125-Ton Injection Molding Machine</h3>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Our flagship Goldcoin injection molding machine represents the pinnacle of modern manufacturing 
              technology. With 125 tons of clamping force and fully automated operation, this machine delivers 
              unparalleled precision and consistency in plastic component production.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {specs.map((spec, index) => (
                <div key={index} className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                  <div className="text-sm text-gray-400 mb-1">{spec.label}</div>
                  <div className="font-semibold text-white">{spec.value}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
              >
                Request Capabilities Sheet
              </button>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.pexels.com/photos/3747468/pexels-photo-3747468.jpeg"
              alt="Injection Molding Machine"
              className="rounded-2xl shadow-2xl w-full h-96 object-cover"
            />
            <div className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-lg font-bold">
              125 TON
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="bg-blue-600 p-4 rounded-full w-fit mx-auto mb-6">
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-4">{feature.title}</h4>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-800 to-blue-600 rounded-2xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Why Choose Our Equipment?</h3>
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                <span>Consistent Quality Output</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                <span>Minimal Material Waste</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                <span>Fast Production Cycles</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Equipment;