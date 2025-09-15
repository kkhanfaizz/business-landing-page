import React from "react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Navbar */}
      <header className="flex justify-between items-center p-6 shadow-md bg-white">
        <h1 className="text-2xl font-bold text-blue-600">CoolBiz</h1>
        <nav className="space-x-6 hidden md:flex">
          <a href="#services" className="hover:text-blue-600">Services</a>
          <a href="#about" className="hover:text-blue-600">About</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
        </nav>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Get Started</button>
      </header> 

      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-r from-blue-50 to-blue-100">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Grow Your Business with CoolBiz</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          We help businesses build modern websites and reach more customers with
          fast, responsive and SEO-friendly designs.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-xl text-lg hover:bg-blue-700">
          Get a Free Quote
        </button>
      </section>

      {/* Services */}
      <section id="services" className="py-16 px-6 md:px-20 bg-white">
        <h3 className="text-3xl font-bold text-center mb-12">Our Services</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-100 rounded-xl shadow hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-4">Website Design</h4>
            <p>Modern and responsive websites that work on all devices.</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-xl shadow hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-4">SEO Optimization</h4>
            <p>Boost your visibility and attract more customers online.</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-xl shadow hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-4">E-commerce Solutions</h4>
            <p>Sell your products online with fast and secure stores.</p>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-16 px-6 md:px-20 bg-gray-50">
        <h3 className="text-3xl font-bold text-center mb-8">About Us</h3>
        <p className="max-w-3xl mx-auto text-center text-lg">
          CoolBiz is a digital agency focused on helping startups and small
          businesses grow online. With expertise in React, Next.js, and modern
          web tools, we build fast and reliable websites.
        </p>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 px-6 md:px-20 bg-white">
        <h3 className="text-3xl font-bold text-center mb-8">Contact Us</h3>
        <form className="max-w-xl mx-auto space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border px-4 py-3 rounded-lg"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border px-4 py-3 rounded-lg"
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full border px-4 py-3 rounded-lg"
          ></textarea>
          <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
            Send Message
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 bg-gray-100 mt-10">
        <p>© 2025 CoolBiz. All rights reserved.</p>
      </footer>
    </div>
  );
}
