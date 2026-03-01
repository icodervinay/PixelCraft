'use client';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services | Business Name',
  description: 'Discover the range of professional services we offer.'
};

export default function ServicesPage() {
  return (
    <section className="py-16">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-6">Our Services</h1>
        <p className="text-gray-700 mb-4">
          We provide consulting, implementation, and support services tailored to your needs.
        </p>
      </div>
    </section>
  );
}