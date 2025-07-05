import React from 'react'
import { Heart, Star } from 'lucide-react'

function Hero() {
  return (
    <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-5xl font-bold leading-tight">
                Your Pet's{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Happy Place
                </span>{" "}
                While You're Away
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Your furry friend deserves the best, and we're here to provide
                loving care, fun activities, and a safe environment.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#booking"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  Book Care Now
                </a>
                <a
                  href="#contact"
                  className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
                >
                  Get in Touch
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-r from-blue-200 to-purple-200 rounded-3xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="rounded-2xl shadow-xl w-full h-80 bg-gradient-to-br from-blue-300 to-purple-300 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Heart className="h-20 w-20 mx-auto mb-4" />
                    <p className="text-lg font-semibold">Happy Pets Playing</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-white rounded-full p-4 shadow-lg">
                <Star className="h-8 w-8 text-yellow-500 fill-current" />
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Hero