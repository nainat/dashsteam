import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Clock, Wrench, CheckCircle, Star } from 'lucide-react';

const About: React.FC = () => {
  const [counters, setCounters] = useState({
    cars: 0,
    customers: 0,
    years: 0,
    services: 0
  });

  const achievements = [
    { icon: Award, number: 1000, suffix: '+', label: 'Cars Cleaned', key: 'cars' },
    { icon: Users, number: 850, suffix: '+', label: 'Happy Customers', key: 'customers' },
    { icon: Clock, number: 5, suffix: '+', label: 'Years Experience', key: 'years' },
    { icon: Wrench, number: 6, suffix: '', label: 'Services Offered', key: 'services' }
  ];

  const timeline = [
    {
      year: '2020',
      title: 'Vapd Dashsteam Founded',
      description: 'Started as a small local car wash with a vision for premium service'
    },
    {
      year: '2021',
      title: 'First 100 Customers',
      description: 'Reached our first major milestone and expanded our service offerings'
    },
    {
      year: '2022',
      title: 'Eco-Friendly Initiative',
      description: 'Introduced environmentally conscious products and water conservation'
    },
    {
      year: '2023',
      title: 'Premium Services Launch',
      description: 'Added ceramic coating and advanced detailing services'
    },
    {
      year: '2024',
      title: '1000+ Cars Milestone',
      description: 'Celebrated serving over 1000 vehicles with excellent customer satisfaction'
    },
    {
      year: '2025',
      title: 'Innovation & Growth',
      description: 'Continuing to innovate with new technologies and expanding our reach'
    }
  ];

  const team = [
    {
      name: 'Anurag Singh',
      role: 'Founder & CEO',
      description: 'Passionate about cars and customer service excellence',
      image: './ceo.png'
    },
    {
      name: 'Suryansh Kumar Pathak',
      role: 'Managing Director',
      description: 'Ensures every customer receives premium service',
      image: './dir.png'
    },
    {
      name: 'Aman Gupta',
      role: 'Lead Tech Specialist',
      description: 'Expert in building technical aspects of car care and website',
      image: './tech.jpg'
    }
  ];

  useEffect(() => {
    const animateCounters = () => {
      achievements.forEach((achievement) => {
        const target = achievement.number;
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;

        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          setCounters(prev => ({
            ...prev,
            [achievement.key]: Math.floor(current)
          }));
        }, 16);
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateCounters();
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    const statsSection = document.getElementById('stats-section');
    if (statsSection) {
      observer.observe(statsSection);
    }

    return () => observer.disconnect();
  } );

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
            About Vapd Dashsteam
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-cyan-100 max-w-3xl mx-auto"
          >
            Committed to excellence in automotive care since 2020
          </motion.p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                Vapd Dashsteam was born from a passion for automotive excellence and customer satisfaction. What started as a small local car wash has grown into a premier automotive care service, trusted by hundreds of customers.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                We believe that every vehicle deserves the highest level of care, which is why we use only premium products and employ the latest techniques in automotive detailing and protection.
              </p>
              <div className="space-y-4">
                {[
                  'Premium quality products and equipment',
                  'Eco-friendly cleaning solutions',
                  'Experienced and trained professionals',
                  'Customer satisfaction guarantee'
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-cyan-500" />
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/3422964/pexels-photo-3422964.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Car wash service"
                className="rounded-xl shadow-lg w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements Stats */}
      <section id="stats-section" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Achievements
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Numbers that speak for our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                  <achievement.icon className="h-12 w-12 text-cyan-500 mx-auto mb-4" />
                  <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                    {counters[achievement.key as keyof typeof counters]}{achievement.suffix}
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 font-medium">
                    {achievement.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Milestones that shaped our story
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-cyan-500"></div>
            
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                    <div className="text-cyan-500 font-bold text-lg mb-2">{item.year}</div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                  </div>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyan-500 rounded-full border-4 border-white dark:border-gray-900"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              The professionals behind our exceptional service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
                  <div className="relative mb-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-32 h-32 rounded-full mx-auto object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute bottom-0 right-1/2 transform translate-x-1/2 translate-y-1/2">
                      <div className="bg-cyan-500 p-2 rounded-full">
                        <Star className="h-4 w-4 text-white" />
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {member.name}
                  </h3>
                  <p className="text-cyan-500 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 dark:text-gray-400">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Join Our Growing Family
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Experience the Vapd Dashsteam difference and see why customers choose us
          </p>
          <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
            Schedule Your First Wash
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;