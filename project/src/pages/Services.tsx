import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Shield, Droplets, Zap, Car, Wrench, CheckCircle } from 'lucide-react';

const Services: React.FC = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      icon: Sparkles,
      title: "Premium Foam Wash",
      price: "Rs.2500",
      duration: "30 min",
      description: "Complete exterior cleaning with premium foam and high-pressure rinse",
      features: [
        "Pre-wash inspection",
        "High-quality foam application",
        "Pressure washing",
        "Hand drying with microfiber",
        "Tire cleaning and shine",
        "Basic interior vacuum"
      ],
      image: "https://images.pexels.com/photos/3422964/pexels-photo-3422964.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      icon: Car,
      title: "Interior Detailing",
      price: "Rs.4500",
      duration: "45 min",
      description: "Deep cleaning and conditioning of your vehicle's interior",
      features: [
        "Complete vacuum cleaning",
        "Dashboard cleaning & conditioning",
        "Leather/fabric treatment",
        "Window cleaning (interior)",
        "Air freshener application",
        "Floor mat cleaning"
      ],
      image: "https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      icon: Shield,
      title: "Ceramic Coating",
      price: "Rs.15,000",
      duration: "2 hours",
      description: "Long-lasting paint protection with ceramic coating technology",
      features: [
        "Paint decontamination",
        "Clay bar treatment",
        "Paint correction (if needed)",
        "Ceramic coating application",
        "UV protection",
        "6-month warranty"
      ],
      image: "https://images.pexels.com/photos/1183099/pexels-photo-1183099.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      icon: Droplets,
      title: "Wax & Polish",
      price: "Rs.3500",
      duration: "40 min",
      description: "Premium wax application for enhanced shine and protection",
      features: [
        "Paint cleaning",
        "Polish application",
        "Premium wax coating",
        "Chrome polishing",
        "Trim restoration",
        "Final inspection"
      ],
      image: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      icon: Zap,
      title: "Express Wash",
      price: "Rs.1500",
      duration: "15 min",
      description: "Quick and efficient basic wash for busy schedules",
      features: [
        "Exterior rinse",
        "Soap application",
        "Basic scrubbing",
        "Final rinse",
        "Quick dry",
        "Tire rinse"
      ],
      image: "https://images.pexels.com/photos/3422964/pexels-photo-3422964.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      icon: Wrench,
      title: "Full Service Detail",
      price: "Rs.8500",
      duration: "90 min",
      description: "Complete interior and exterior detailing package",
      features: [
        "Premium exterior wash",
        "Complete interior detail",
        "Wax application",
        "Tire shine",
        "Engine bay cleaning",
        "Quality guarantee"
      ],
      image: "https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-cyan-500 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl font-bold text-white mb-6"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-cyan-100 max-w-3xl mx-auto"
          >
            Professional car care services tailored to meet every need and budget
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
                onMouseEnter={() => setActiveService(index)}
              >
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <service.icon className="h-8 w-8 text-white bg-cyan-500 p-1.5 rounded-lg" />
                    </div>
                    <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="text-lg font-bold text-gray-900 dark:text-white">{service.price}</span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {service.title}
                      </h3>
                      <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                        {service.duration}
                      </span>
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      {service.description}
                    </p>

                    <div className="space-y-2 mb-6">
                      {service.features.slice(0, 4).map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-cyan-500" />
                          <span className="text-sm text-gray-600 dark:text-gray-400">{feature}</span>
                        </div>
                      ))}
                      {service.features.length > 4 && (
                        <p className="text-sm text-cyan-500 font-medium">
                          +{service.features.length - 4} more features
                        </p>
                      )}
                    </div>

                    <button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                      Book This Service
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Details Modal/Expanded View */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="relative h-64 lg:h-full">
                <img
                  src={services[activeService].image}
                  alt={services[activeService].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  {React.createElement(services[activeService].icon, { className: "h-10 w-10 mb-2" })}
                  <h3 className="text-2xl font-bold">{services[activeService].title}</h3>
                  <p className="text-cyan-200">{services[activeService].duration} • {services[activeService].price}</p>
                </div>
              </div>

              <div className="p-8">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  What's Included:
                </h4>
                <div className="space-y-3">
                  {services[activeService].features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <CheckCircle className="h-5 w-5 text-cyan-500 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                    Book {services[activeService].title} - {services[activeService].price}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Vehicle?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact us today to schedule your car wash service
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
              Schedule Online
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
              Call Now: +91 74889 28997
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;