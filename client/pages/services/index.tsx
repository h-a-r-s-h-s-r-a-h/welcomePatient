import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ServicesPage = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-indigo-800 py-16 sm:py-24">
        <div className="absolute inset-0">
          <Image
            src="/images/services-hero.jpg"
            alt="Medical services"
            layout="fill"
            objectFit="cover"
            className="opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Our Healthcare Services
            </h1>
            <p className="mt-4 text-xl text-indigo-100 max-w-3xl mx-auto">
              Comprehensive, affordable healthcare solutions tailored to your needs.
            </p>
          </div>
        </div>
      </div>

      {/* Main Services Section */}
      <div className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
              Primary Healthcare Services
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              We offer a wide range of medical services to meet your healthcare needs.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Service 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 w-full bg-indigo-100 flex items-center justify-center">
                <span className="text-indigo-500 text-xl font-medium">Service Image</span>
              </div>
              <div className="px-6 py-4">
                <h3 className="text-lg font-medium text-gray-900">Primary Care</h3>
                <p className="mt-2 text-gray-500">
                  Comprehensive primary care services including routine check-ups, vaccinations, and preventive care.
                </p>
                <div className="mt-4">
                  <Link legacyBehavior href="/contact">
                    <a className="text-indigo-600 hover:text-indigo-500 font-medium">
                      Learn more →
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 w-full bg-indigo-100 flex items-center justify-center">
                <span className="text-indigo-500 text-xl font-medium">Service Image</span>
              </div>
              <div className="px-6 py-4">
                <h3 className="text-lg font-medium text-gray-900">Specialist Consultations</h3>
                <p className="mt-2 text-gray-500">
                  Access to specialists in various fields including cardiology, dermatology, and orthopedics.
                </p>
                <div className="mt-4">
                  <Link legacyBehavior href="/contact">
                    <a className="text-indigo-600 hover:text-indigo-500 font-medium">
                      Learn more →
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 w-full bg-indigo-100 flex items-center justify-center">
                <span className="text-indigo-500 text-xl font-medium">Service Image</span>
              </div>
              <div className="px-6 py-4">
                <h3 className="text-lg font-medium text-gray-900">Diagnostic Services</h3>
                <p className="mt-2 text-gray-500">
                  Advanced diagnostic services including lab tests, imaging, and screenings at affordable rates.
                </p>
                <div className="mt-4">
                  <Link legacyBehavior href="/contact">
                    <a className="text-indigo-600 hover:text-indigo-500 font-medium">
                      Learn more →
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Insurance Plans Section */}
      <div className="py-16 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
              Insurance Plans
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Affordable insurance options designed to protect your health and your wallet.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Plan 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="px-6 py-8">
                <h3 className="text-2xl font-medium text-gray-900 text-center">Basic Plan</h3>
                <p className="mt-4 text-gray-500 text-center">
                  Essential coverage for individuals and families.
                </p>
                <div className="mt-6">
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg className="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="ml-3 text-gray-700">Primary care visits</p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg className="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="ml-3 text-gray-700">Preventive care</p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg className="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="ml-3 text-gray-700">Basic lab tests</p>
                    </li>
                  </ul>
                </div>
                <div className="mt-8">
                  <Link legacyBehavior href="/register">
                    <a className="block w-full bg-indigo-600 border border-transparent rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-indigo-700">
                      Get started
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            {/* Plan 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border-2 border-indigo-500">
              <div className="px-6 py-8">
                <h3 className="text-2xl font-medium text-gray-900 text-center">Standard Plan</h3>
                <p className="mt-4 text-gray-500 text-center">
                  Comprehensive coverage for growing families.
                </p>
                <div className="mt-6">
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg className="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="ml-3 text-gray-700">All Basic Plan features</p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg className="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="ml-3 text-gray-700">Specialist visits</p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg className="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="ml-3 text-gray-700">Advanced diagnostics</p>
                    </li>
                  </ul>
                </div>
                <div className="mt-8">
                  <Link legacyBehavior href="/register">
                    <a className="block w-full bg-indigo-600 border border-transparent rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-indigo-700">
                      Get started
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            {/* Plan 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="px-6 py-8">
                <h3 className="text-2xl font-medium text-gray-900 text-center">Premium Plan</h3>
                <p className="mt-4 text-gray-500 text-center">
                  Complete coverage for comprehensive healthcare needs.
                </p>
                <div className="mt-6">
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg className="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="ml-3 text-gray-700">All Standard Plan features</p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg className="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="ml-3 text-gray-700">Hospital coverage</p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg className="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="ml-3 text-gray-700">Prescription medications</p>
                    </li>
                  </ul>
                </div>
                <div className="mt-8">
                  <Link legacyBehavior href="/register">
                    <a className="block w-full bg-indigo-600 border border-transparent rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-indigo-700">
                      Get started
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Telemedicine Section */}
      <div className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                Telemedicine Services
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                Access healthcare professionals from the comfort of your home with our telemedicine services. Connect with doctors via video calls for consultations, follow-ups, and non-emergency medical advice.
              </p>
              <div className="mt-6">
                <Link legacyBehavior href="/register">
                  <a className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700">
                    Schedule a virtual visit
                  </a>
                </Link>
              </div>
            </div>
            <div className="mt-12 lg:mt-0">
              <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                <div className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none">
                  <div className="h-64 w-full bg-indigo-100 rounded-xl flex items-center justify-center">
                    <span className="text-indigo-500 text-xl font-medium">Telemedicine Image</span>
                  </div>
                </div>
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

export default ServicesPage;
