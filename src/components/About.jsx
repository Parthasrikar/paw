import React from 'react'
import { Shield, Camera, Users, Heart } from 'lucide-react'

function About() {
  return (
    <section
        id="about"
        className="py-20 bg-gradient-to-r from-blue-50 to-purple-50"
      >
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8">
                Why Choose PawCare Haven?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 p-3 rounded-full">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Licensed & Insured
                    </h3>
                    <p className="text-gray-600">
                      Fully licensed pet care facility with comprehensive
                      insurance coverage for your peace of mind.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-600 p-3 rounded-full">
                    <Camera className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Daily Photo Updates
                    </h3>
                    <p className="text-gray-600">
                      Receive photos and updates throughout the day so you know
                      your pet is happy and safe.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-green-600 p-3 rounded-full">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Experienced Staff
                    </h3>
                    <p className="text-gray-600">
                      Our certified pet care professionals have years of
                      experience with all types of animals.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl shadow-lg bg-gradient-to-br from-blue-200 to-blue-300 h-60 flex items-center justify-center">
                <div className="text-center text-blue-800">
                  <Heart className="h-12 w-12 mx-auto mb-2" />
                  <p className="font-semibold">Dog Care</p>
                </div>
              </div>
              <div className="rounded-xl shadow-lg bg-gradient-to-br from-purple-200 to-purple-300 h-60 flex items-center justify-center mt-8">
                <div className="text-center text-purple-800">
                  <Heart className="h-12 w-12 mx-auto mb-2" />
                  <p className="font-semibold">Cat Care</p>
                </div>
              </div>
              <div className="rounded-xl shadow-lg bg-gradient-to-br from-green-200 to-green-300 h-60 flex items-center justify-center -mt-8">
                <div className="text-center text-green-800">
                  <Heart className="h-12 w-12 mx-auto mb-2" />
                  <p className="font-semibold">Bird Care</p>
                </div>
              </div>
              <div className="rounded-xl shadow-lg bg-gradient-to-br from-orange-200 to-orange-300 h-60 flex items-center justify-center">
                <div className="text-center text-orange-800">
                  <Heart className="h-12 w-12 mx-auto mb-2" />
                  <p className="font-semibold">Playtime</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default About