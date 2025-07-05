import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Star,
  Heart,
  Award,
  Shield,
  Camera,
  Users,
  Calendar,
  CheckCircle,
  Contact,
} from "lucide-react";

import Header from "./Header";
import Hero from "./Hero";
import Services from "./Services";
import About from "./About";
import Reviews from "./Reviews";
import Contacts from "./Contact";
import Footer from "./Footer";
import Booking from "./Booking";

const PetDaycare = () => {
  
  

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50">
      {/* Header */}
      <Header></Header>

      {/* Hero Section */}
      <Hero></Hero>

      {/* Services Section */}
      <Services></Services>

      {/* About Section */}
      <About></About>

      {/* Reviews Section */}
    <Reviews></Reviews>      

      {/* Booking Section */}
      <Booking></Booking>

      {/* Contact Section */}
      <Contacts></Contacts>
      {/* Footer */}
      <Footer></Footer>
    </div>
  );
};

export default PetDaycare;
