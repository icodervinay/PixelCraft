'use client';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Business Name',
  description: 'Read our latest insights and articles.'
};

export default function BlogPage() {
  return (
    <section className="py-16">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-6">Blog</h1>
        <p className="text-gray-700 mb-4">
          Stay updated with our news, tips, and industry insights.
        </p>
      </div>
    </section>
  );
}