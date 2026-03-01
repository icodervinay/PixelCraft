'use client';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | Business Name',
  description: 'Get in touch with us for inquiries or consultations.'
};

export default function ContactPage() {
  return (
    <section id="contact" className="py-16">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
        <p className="text-gray-700 mb-4">
          Reach out via email or phone and we will respond promptly.
        </p>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700">Name</label>
            <input type="text" className="w-full border border-gray-300 p-2 rounded" />
          </div>
          <div>
            <label className="block text-gray-700">Email</label>
            <input type="email" className="w-full border border-gray-300 p-2 rounded" />
          </div>
          <div>
            <label className="block text-gray-700">Message</label>
            <textarea className="w-full border border-gray-300 p-2 rounded" rows={4}></textarea>
          </div>
          <button type="submit" className="bg-primary text-white py-2 px-6 rounded">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}