import { Award, Smile, Shield, ThumbsUp } from 'lucide-react';

const features = [
  { icon: <Award />, title: 'Expert Team', description: 'Professional consultants with years of experience.' },
  { icon: <Shield />, title: 'Trusted Partner', description: 'We build long-term relationships based on trust.' },
  { icon: <Smile />, title: 'Customer Focus', description: 'Your satisfaction is our top priority.' },
  { icon: <ThumbsUp />, title: 'Proven Results', description: 'Track record of successful projects.' }
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-neutral">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Us</h2>
        <div className="grid gap-8 md:grid-cols-4">
          {features.map((f, idx) => (
            <div key={idx} className="text-center">
              <div className="text-4xl text-primary mb-4">{f.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-600">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;