'use client';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Careers | Business Name',
  description: 'Join our team and grow your career with us.'
};

export default function CareersPage() {
  return (
    <section className="py-16">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-6">Careers</h1>
        <p className="text-gray-700 mb-4">
          We are always looking for talented individuals. Check back for open positions.
        </p>
      </div>
    </section>
  );
}