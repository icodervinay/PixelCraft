const CTASection = () => {
  return (
    <section className="py-20 bg-primary text-white text-center">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4">Ready to get started?</h2>
        <p className="mb-6">Contact us today and let's build something great together.</p>
        {/* example ShadCN button component */}
        <a href="#contact">
          <button className="inline-block bg-accent text-white py-3 px-8 rounded shadow-lg hover:opacity-90 transition">
            Get in Touch
          </button>
        </a>
      </div>
    </section>
  );
};

export default CTASection;