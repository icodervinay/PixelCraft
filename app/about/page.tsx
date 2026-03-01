'use client';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Business Name',
  description: 'Learn more about our mission, vision and team.'
};

export default function AboutPage() {
  return (
    <section className="py-16">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-6">About Us</h1>
        <p className="text-gray-700 mb-4">
          Our company specializes in providing top-notch services to clients worldwide. We believe in innovation and excellence.
        </p>
      </div>
    </section>
  );
}