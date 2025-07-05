import React from 'react'
import { useState } from 'react';
import { Heart, CheckCircle } from 'lucide-react';

function Services() {

    const [activeService, setActiveService] = useState(0);

    const services = [
    {
      title: "Dog Care",
      description:
        "Professional dog walking, feeding, and playtime in a safe environment",
      price: "From $30/day",
      features: [
        "Daily walks",
        "Feeding schedule",
        "Play sessions",
        "Photo updates",
      ],
    },
    {
      title: "Cat Care",
      description:
        "Gentle care for your feline friends with cozy spaces and personal attention",
      price: "From $25/day",
      features: [
        "Litter maintenance",
        "Feeding",
        "Cuddle time",
        "Health monitoring",
      ],
    },
    {
      title: "Bird Care",
      description:
        "Specialized care for birds with proper nutrition and social interaction",
      price: "From $20/day",
      features: [
        "Cage cleaning",
        "Fresh food",
        "Social time",
        "Flight exercise",
      ],
    },
    {
      title: "Overnight Care",
      description:
        "24/7 supervision and care for pets who need extended attention",
      price: "From $60/night",
      features: [
        "24/7 monitoring",
        "Comfort items",
        "Regular updates",
        "Emergency care",
      ],
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Premium Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive care tailored to each pet's unique needs and
              personality
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`bg-gradient-to-b from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer ${
                  activeService === index ? "ring-2 ring-blue-600" : ""
                }`}
                onClick={() => setActiveService(index)}
              >
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="text-2xl font-bold text-blue-600 mb-4">
                  {service.price}
                </div>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default Services