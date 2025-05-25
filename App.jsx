import React, { useState } from 'react';

export default function App() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (!email.includes('@') || !email.includes('.')) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    setSubmitted(true);
    setEmail('');
    setTimeout(() => setSubmitted(false), 3000);
  };

  const featureCards = [
    { title: 'Women', description: 'Elegant and modern designs for every occasion.', icon: '👗' },
    { title: 'Men', description: 'Sophisticated styles that speak confidence.', icon: '👔' },
    { title: 'Accessories', description: 'Complete your look with our curated collection.', icon: '👜' },
    { title: 'New Arrivals', description: 'Fresh drops weekly. Stay ahead of the trends.', icon: '🆕' },
  ];

  return (
    <div className="min-h-screen bg-[#121212] text-gray-200">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center min-h-[70vh] bg-gradient-to-b from-black via-gray-900 to-gray-800 overflow-hidden">
        <div className="absolute inset-0 z-0 animate-pulse opacity-30">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-900 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-green-900 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
        </div>
        <div className="z-10 text-center px-6 max-w-3xl mx-auto transform transition-all duration-1000 ease-out animate-fadeInUp">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight leading-tight text-[#7E8C54]">
            Welcome to Bella — Where Style Meets Soul.
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Discover timeless fashion crafted for the bold and beautiful.
          </p>
          <a href="#cta" className="inline-block bg-[#7E8C54] hover:bg-green-700 text-black font-semibold py-3 px-8 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105">
            Join the Movement
          </a>
        </div>
      </section>

      {/* Brand Description */}
      <section className="py-16 px-6 bg-[#121212]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-[#7E8C54]">About Bella</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Bella is more than just a clothing brand — it's a celebration of individuality, elegance, and confidence.
            Our mission is to empower every person who wears Bella to express their true self through thoughtfully designed fashion.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section id="cta" className="bg-black py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Be the First to Know</h2>
          <p className="text-lg text-gray-400 mb-8">
            Sign up now to get exclusive early access to our collections, special offers, and style inspiration.
          </p>
          <a href="#form" className="inline-block bg-[#7E8C54] hover:bg-green-700 text-black font-semibold py-3 px-8 rounded-full shadow-md transform transition-transform duration-300 hover:scale-105">
            Subscribe Now
          </a>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="py-16 px-6 bg-[#121212]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-[#7E8C54]">Explore Our Collections</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featureCards.map((card, index) => (
              <div key={index} className="bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-xl transform transition-transform duration-300 hover:-translate-y-2 cursor-pointer border border-green-800">
                <div className="text-4xl mb-4 text-[#7E8C54]">{card.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-white">{card.title}</h3>
                <p className="text-gray-300">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Email Capture Form */}
      <section id="form" className="py-16 px-6 bg-[#121212]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center text-[#7E8C54]">Stay in the Loop</h2>
          <p className="text-center text-gray-300 mb-8">
            Get updates on new arrivals, limited editions, and styling tips straight to your inbox.
          </p>
          <form onSubmit={handleEmailSubmit} className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-grow px-5 py-3 rounded-lg border border-gray-600 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-[#7E8C54]"
              aria-label="Email address"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-[#7E8C54] text-black font-medium rounded-lg shadow-md hover:bg-green-700 transition-colors duration-300"
            >
              Subscribe
            </button>
          </form>
          {error && <p className="mt-2 text-red-500 text-center">{error}</p>}
          {submitted && <p className="mt-2 text-green-500 text-center">Thank you! You're all set.</p>}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-[#121212] text-center text-gray-600 text-sm">
        &copy; {new Date().getFullYear()} Bella. All rights reserved.
      </footer>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
}