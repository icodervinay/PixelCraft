'use client';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects | Business Name',
  description: 'Explore our portfolio of completed projects.'
};

export default function ProjectsPage() {
  return (
    <section className="py-16">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-6">Projects</h1>
        <p className="text-gray-700 mb-4">
          Browse impressive work we have delivered for our clients across industries.
        </p>
      </div>
    </section>
  );
}