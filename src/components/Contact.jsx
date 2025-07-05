import React from 'react'
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

function Contacts() {
  return (
    <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
              <p className="text-xl text-gray-600">
                Visit us, call us, or send us an email - we're here to help!
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold mb-6">
                    Contact Information
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="bg-blue-600 p-3 rounded-full">
                        <Phone className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Phone</h4>
                        <a
                          href="tel:+91 98765 43210"
                          className="text-blue-600 hover:underline"
                        >
                          {" "}
                          +91 98765 43210
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="bg-purple-600 p-3 rounded-full">
                        <Mail className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Email</h4>
                        <a
                          href="mailto:contact@petdaycare.com"
                          className="text-purple-600 hover:underline"
                        >
                          contact@petdaycare.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="bg-green-600 p-3 rounded-full">
                        <MapPin className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Address</h4>
                        <p className="text-gray-600">
                          {" "}
                          Pandurangapuram, Beach Road, Vizag
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="bg-orange-600 p-3 rounded-full">
                        <Clock className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Hours</h4>
                        <p className="text-gray-600">
                          Mon-Fri: 7AM-7PM
                          <br />
                          Sat-Sun: 8AM-6PM
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6">Our Location</h3>
                {/* <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                  <div className="w-full h-80 bg-gradient-to-br from-green-200 to-blue-200 flex items-center justify-center">
                    <div className="text-center text-gray-700">
                      <MapPin className="h-20 w-20 mx-auto mb-4" />
                      <p className="text-lg font-semibold">Interactive Map</p>
                      <p className="text-sm">
                        123 Pet Care Lane, Happy Valley, CA
                      </p>
                    </div>
                  </div>
                </div> */}
                <div className="mt-6 text-center">
                  <div className="relative w-full h-64 max-w-4xl mx-auto">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7601.280957612919!2d83.323601!3d17.714436!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a395a4003c70bdd%3A0xcbe1c445e33620ff!2sBeach%20Rd%2C%20Visakhapatnam%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1751687634421!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

  )
}

export default Contacts