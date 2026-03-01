import Image from 'next/image';

const AboutPreview = () => {
  return (
    <section id="about" className="py-16 bg-neutral">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <Image src="/images/about-placeholder.jpg" alt="About us" width={600} height={400} className="rounded-lg shadow-lg" />
        </div>
        <div className="md:w-1/2 md:pl-12">
          <h2 className="text-3xl font-bold mb-4">About Our Company</h2>
          <p className="text-gray-700 mb-4">
            We specialize in delivering high-quality solutions to clients across various industries.
          </p>
          <a href="/about" className="text-primary font-medium hover:underline">
            Learn more →
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;