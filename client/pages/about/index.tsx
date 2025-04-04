import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const AboutPage = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-indigo-800 py-16 sm:py-24">
        <div className="absolute inset-0">
          <Image
            src="/images/about-hero.jpg"
            alt="Medical team"
            layout="fill"
            objectFit="cover"
            className="opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              About AffordMedical
            </h1>
            <p className="mt-4 text-xl text-indigo-100 max-w-3xl mx-auto">
              We're on a mission to make quality healthcare accessible and affordable for everyone.
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                Our Mission
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                At AffordMedical, we believe that quality healthcare should be accessible to everyone, regardless of their financial situation. Our mission is to bridge the gap between patients and healthcare providers by offering affordable medical services and insurance plans.
              </p>
              <p className="mt-4 text-lg text-gray-500">
                Founded in 2023, we've been working tirelessly to create a healthcare ecosystem that prioritizes patient well-being while keeping costs manageable. We partner with top healthcare providers to ensure you receive the best care possible.
              </p>
            </div>
            <div className="mt-12 lg:mt-0">
              <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                <div className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none">
                  <div className="h-64 w-full bg-indigo-100 rounded-xl flex items-center justify-center">
                    <span className="text-indigo-500 text-xl font-medium">Our Mission Image</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-16 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
              Our Values
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              These core principles guide everything we do at AffordMedical.
            </p>
          </div>

          <div className="mt-12">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {/* Value 1 */}
              <div className="pt-6">
                <div className="flow-root bg-white rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                        <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Patient First</h3>
                    <p className="mt-5 text-base text-gray-500">
                      We put our patients at the center of everything we do. Your health and well-being are our top priorities.
                    </p>
                  </div>
                </div>
              </div>

              {/* Value 2 */}
              <div className="pt-6">
                <div className="flow-root bg-white rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                        <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Affordability</h3>
                    <p className="mt-5 text-base text-gray-500">
                      We believe that quality healthcare shouldn't break the bank. We work to make our services as affordable as possible.
                    </p>
                  </div>
                </div>
              </div>

              {/* Value 3 */}
              <div className="pt-6">
                <div className="flow-root bg-white rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                        <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Transparency</h3>
                    <p className="mt-5 text-base text-gray-500">
                      We believe in clear communication and transparency in all our operations, from pricing to treatment options.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
              Our Leadership Team
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Meet the dedicated professionals behind AffordMedical.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Team Member 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-64 w-full bg-indigo-100 flex items-center justify-center">
                <span className="text-indigo-500 text-xl font-medium">Team Member Photo</span>
              </div>
              <div className="px-6 py-4">
                <h3 className="text-lg font-medium text-gray-900">Dr. Sarah Johnson</h3>
                <p className="text-sm text-indigo-600">CEO & Founder</p>
                <p className="mt-2 text-gray-500">
                  With over 15 years of experience in healthcare administration, Dr. Johnson founded AffordMedical to revolutionize affordable healthcare access.
                </p>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-64 w-full bg-indigo-100 flex items-center justify-center">
                <span className="text-indigo-500 text-xl font-medium">Team Member Photo</span>
              </div>
              <div className="px-6 py-4">
                <h3 className="text-lg font-medium text-gray-900">Michael Chen</h3>
                <p className="text-sm text-indigo-600">Chief Medical Officer</p>
                <p className="mt-2 text-gray-500">
                  Dr. Chen brings extensive clinical experience and a passion for improving healthcare delivery systems.
                </p>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-64 w-full bg-indigo-100 flex items-center justify-center">
                <span className="text-indigo-500 text-xl font-medium">Team Member Photo</span>
              </div>
              <div className="px-6 py-4">
                <h3 className="text-lg font-medium text-gray-900">Lisa Rodriguez</h3>
                <p className="text-sm text-indigo-600">Head of Patient Services</p>
                <p className="mt-2 text-gray-500">
                  Lisa ensures that every patient receives exceptional care and support throughout their healthcare journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-indigo-700">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to get started?</span>
            <span className="block text-indigo-200">Join AffordMedical today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link legacyBehavior href="/register">
                <a className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50">
                  Get started
                </a>
              </Link>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <Link legacyBehavior href="/contact">
                <a className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600">
                  Contact us
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
