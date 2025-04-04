import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
          <div className="px-5 py-2">
            <Link href="/about" className="text-base text-gray-300 hover:text-white">
              About
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link href="/services" className="text-base text-gray-300 hover:text-white">
              Services
            </Link>
          </div>
          {/* <div className="px-5 py-2">
            <Link href="/providers" className="text-base text-gray-300 hover:text-white">
              Providers
            </Link>
          </div> */}
          <div className="px-5 py-2">
            <Link href="/contact" className="text-base text-gray-300 hover:text-white">
              Contact
            </Link>
          </div>
          {/* <div className="px-5 py-2">
            <Link href="/privacy" className="text-base text-gray-300 hover:text-white">
              Privacy
            </Link>
          </div> */}
          {/* <div className="px-5 py-2">
            <Link href="/terms" className="text-base text-gray-300 hover:text-white">
              Terms
            </Link>
          </div> */}
        </nav>
        <p className="mt-8 text-center text-base text-gray-400">
          &copy; {new Date().getFullYear()} AffordMedical. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer; 