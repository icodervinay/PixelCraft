'use client';

// ...rest of your imports and code
import ServiceCard from './ServiceCard';
import { Code, Server, Layers } from 'lucide-react';

const services = [
  {
    icon: <Code />, 
    title: 'Consulting',
    description: 'Expert advice tailored to your business needs.'
  },
  {
    icon: <Server />,
    title: 'Implementation',
    description: 'Seamless deployment of innovative solutions.'
  },
  {
    icon: <Layers />,
    title: 'Support',
    description: 'Reliable support to keep you running smoothly.'
  }
];

const ServicesOverview = () => {
  return (
    <section id="services" className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((s, idx) => (
            <ServiceCard key={idx} icon={s.icon} title={s.title} description={s.description} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;