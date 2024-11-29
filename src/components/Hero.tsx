import React, { useState } from 'react';
import emailjs from 'emailjs-com';

export function Hero() {
  const [email, setEmail] = useState('');

  const SERVICE_ID = 'service_epgrq8s'; // Your EmailJS Service ID
  const TEMPLATE_ID = 'v2q2txm'; // Your EmailJS Template ID
  const PUBLIC_KEY = 'YtCPKFHLPWtE14yMf'; // Your EmailJS Public Key

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Prepare email template parameters
    const templateParams = {
      user_email: email, // Pass the email entered by the user
    };

    try {
      // Send the email using EmailJS
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
      alert('Thank you for signing up! You will receive updates from us.');
      setEmail(''); // Reset email input field
    } catch (error) {
      console.error('Failed to send email:', error);
      alert('Thank you for signing up! You will receive updates from us.');
    }
  };

  return (
    <div className="relative min-h-screen flex items-center">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&q=80"
          className="w-full h-full object-cover filter grayscale"
          alt="Concert crowd"
        />
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl sm:text-6xl font-bold text-white mb-4">
        Revolutionizing Live Entertainment
        </h1>
        <p className="text-xl text-gray-200 mb-12 max-w-3xl mx-auto">
          Experience the future of music with AlleChain. Our decentralized platform brings you
          high-quality concert livestreams, exclusive artist content, and innovative ways to
          support your favorite creators.
        </p>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white bg-white/10 text-white placeholder:text-gray-400 border border-white/20"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors"
            >
              Join Waitlist
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
