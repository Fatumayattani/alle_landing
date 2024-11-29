import React from 'react';

export function About() {
  return (
    <div className="bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">About AlleChain</h2>
            <p className="text-gray-300 text-lg">
              AlleChain is a decentralized streaming platform for independent creators, 
              offering live concerts, podcasts, NFTs, and more.
            </p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80"
              alt="Recording studio"
              className="rounded-lg shadow-xl filter grayscale"
            />
          </div>
        </div>
      </div>
    </div>
  );
}