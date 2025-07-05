import React from 'react'
import { Star } from 'lucide-react';

function Reviews() {

    const testimonials = [
    {
      name: "Sarah Johnson",
      rating: 5,
      text: "Amazing service! My golden retriever Max absolutely loves coming here. The staff is incredibly caring and professional.",
      petType: "Dog",
    },
    {
      name: "Michael Chen",
      rating: 5,
      text: "Perfect care for my two cats. They come home happy and relaxed. Highly recommend!",
      petType: "Cat",
    },
    {
      name: "Emma Rodriguez",
      rating: 5,
      text: "The bird care service is exceptional. My parrot Charlie gets the specialized attention he needs.",
      petType: "Bird",
    },
  ];

  return (
    <section id="reviews" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What Pet Parents Say</h2>
            <p className="text-xl text-gray-600">
              Real reviews from our satisfied customers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-b from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-500 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">
                      {testimonial.petType} Parent
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default Reviews