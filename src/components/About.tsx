import React from 'react';
import { Target, Award, Users, Clock } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Target,
      title: 'Precision Manufacturing',
      description: 'State-of-the-art injection molding with precise tolerances and consistent quality output.'
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      description: 'Rigorous quality control processes ensuring every product meets international standards.'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Skilled technicians and engineers with decades of experience in plastic manufacturing.'
    },
    {
      icon: Clock,
      title: 'Fast Turnaround',
      description: 'Efficient production processes delivering your orders on time, every time.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About RPN Plastic</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leading plastic manufacturing company specializing in high-quality injection molding solutions 
            for diverse industrial applications.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Excellence in Plastic Manufacturing</h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                RPN Plastic stands at the forefront of modern plastic manufacturing, combining advanced technology 
                with traditional craftsmanship to deliver exceptional results. Our fully automated Goldcoin 
                injection molding machines ensure precision and consistency in every product we create.
              </p>
              <p>
                With our 125-ton capacity machinery, we handle projects of all sizes, from prototypes to 
                large-scale production runs. Our commitment to quality, innovation, and customer satisfaction 
                has made us a trusted partner for businesses across various industries.
              </p>
              <p>
                We take pride in our ability to transform raw materials into precision-engineered plastic 
                components that meet the highest standards of durability and performance.
              </p>
            </div>
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/3747468/pexels-photo-3747468.jpeg"
              alt="Manufacturing Facility"
              className="rounded-2xl shadow-xl w-full h-96 object-cover"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-blue-100 p-3 rounded-lg w-fit mb-6">
                <feature.icon className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h4>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;