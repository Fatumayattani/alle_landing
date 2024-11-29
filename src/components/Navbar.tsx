import React from 'react';
import { Github } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-black text-white z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
        <div className="flex-shrink-0 flex items-center">
  <img 
    src="/assets/logo.png" 
    alt="AlleChain Logo" 
    className="w-6 h-6 mr-2" 
  />
  <span className="text-xl font-bold">AlleChain</span>
</div>

          <div className="flex space-x-8">
            <a href="https://github.com/Fatumayattani/allechain_livepeer" className="flex items-center hover:text-gray-300">
              <Github className="w-5 h-5 mr-1" />
              GitHub
            </a>
            <a href="/blog" className="hover:text-gray-300">Blog</a>
          </div>
        </div>
      </div>
    </nav>
  );
}