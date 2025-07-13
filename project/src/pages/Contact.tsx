import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, MessageSquare } from 'lucide-react';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
  FaWhatsapp,
  FaThreads
} from 'react-icons/fa6';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (frontend only)
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  const contactInfo = [
  {
    icon: Phone,
    title: 'Call Us',
    info: '+91 7488928997',
    description: 'Monday - Friday: 9AM - 6PM'
  },
  {
    icon: Mail,
    title: 'Email Us',
    info: 'vapddashsteam@gmail.com',
    description: 'We will get back to you soon'
  },
  {
    icon: MapPin,
    title: 'Our Headquarters',
    info: 'Basudhara Complex, South Collectoriate Road',
    description: 'Opp. Reliance Smart Point, Buxar, Bihar, 802103'
  },
  {
    icon: Clock,
    title: 'Business Hours',
    info: 'Mon-Fri: 9AM–6PM',
    description: 'Sat: 10AM–4PM, Sun: Closed'
  }
];


  const handleWhatsAppClick = () => {
    const message = `Hi! I'd like to schedule a car wash service. Here are my details:
Name: ${formData.name}
Service: ${formData.service}
Message: ${formData.message}`;
    
    const encodedMessage = encodeURIComponent(message);
const whatsappUrl = `https://wa.me/7488928997?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

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
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-cyan-100 max-w-3xl mx-auto"
          >
            Get in touch to schedule your premium car wash service
          </motion.p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="mb-4">
                    <item.icon className="h-12 w-12 text-cyan-500 mx-auto group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-900 dark:text-white font-medium mb-1">
                    {item.info}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Send us a Message
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200"
                      placeholder="your@email.com"
                    />
                  </div>
                  
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200"
                      placeholder="+91 7488920000"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Select a service</option>
                      <option value="express-wash">Express Wash</option>
                      <option value="premium-foam">Premium Foam Wash</option>
                      <option value="interior-detail">Interior Detailing</option>
                      <option value="ceramic-coating">Ceramic Coating</option>
                      <option value="wax-polish">Wax & Polish</option>
                      <option value="full-service">Full Service Detail</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200"
                    placeholder="Tell us about your car and when you'd like to schedule service..."
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    type="submit"
                    className="flex-1 bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                  >
                    <Send className="h-5 w-5" />
                    <span>Send Message</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleWhatsAppClick}
                    className="flex-1 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                  >
                    <MessageSquare className="h-5 w-5" />
                    <span>WhatsApp Us</span>
                  </button>
                </div>
              </form>
              <div className="bg-gradient-to-br from-white dark:from-gray-800 to-black/20 p-6 rounded-xl border border-gray-200 dark:border-gray-700 mt-8">
  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Social Media</h4>
  <p className="text-gray-600 dark:text-gray-400 mb-6">
    Connect with us for the latest updates, services, and car care tips!
  </p>
  <div className="space-y-4">
    {[
      { icon: FaFacebook, label: 'Facebook', url: 'https://www.facebook.com/DashSteamVAP' },
      { icon: FaInstagram, label: 'Instagram', url: 'https://www.instagram.com/dashsteamvap/' },
      { icon: FaLinkedin, label: 'LinkedIn', url: 'https://www.linkedin.com/company/dashsteamvap/' },
      { icon: FaThreads, label: 'Threads', url: 'https://www.threads.com/@dashsteamvap' },
      { icon: FaWhatsapp, label: 'WhatsApp', url: 'https://wa.me/7488928997' },
      { icon: FaXTwitter, label: 'X (Twitter)', url: 'https://x.com/DashSteamVAP' }
    ].map(({ icon: Icon, label, url }, i) => (
      <a
        key={i}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center text-gray-800 dark:text-gray-200 hover:text-cyan-600 transition"
      >
        <Icon className="text-xl mr-3" />
        {label}
      </a>
    ))}
  </div>
</div>

            </motion.div>

            {/* Map & Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Visit Our Location
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  We're conveniently located in the heart of the city. Drop by for a quick wash or schedule an appointment online.
                </p>
                
                {/* Placeholder for Google Maps */}
              <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3660045.034077874!2d83.76184445!3d25.096074199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398d0a09a89a7cfd%3A0x51152a1f9643e9e0!2sBihar%2C%20India!5e0!3m2!1sen!2sjp!4v1710000000000!5m2!1sen!2sjp"
  width="100%"
  height="300"
  style={{ border: 0, borderRadius: "0.75rem" }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  className="w-full"
></iframe>

              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Why Choose Vapd Dashsteam?
                </h4>
                <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                    <span>Professional and experienced team</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                    <span>Eco-friendly products and practices</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                    <span>Competitive pricing and packages</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                    <span>Satisfaction guarantee</span>
                  </li>
                </ul>
              </div>

              <div className="bg-cyan-50 dark:bg-cyan-900/20 p-6 rounded-xl border border-cyan-200 dark:border-cyan-800">
                <h4 className="text-lg font-semibold text-cyan-800 dark:text-cyan-300 mb-2">
                  Quick Response Guarantee
                </h4>
                <p className="text-cyan-700 dark:text-cyan-400 text-sm">
                  We respond to all inquiries within 2 hours during business hours. For urgent requests, please call us directly.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;