import Slider from 'react-slick';
import TestimonialCard from './TestimonialCard';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonials = [
  {
    quote: 'This company transformed our operations.',
    name: 'Jane Doe',
    title: 'CEO, ExampleCorp'
  },
  {
    quote: 'Exceptional service and support!',
    name: 'John Smith',
    title: 'CTO, TechCo'
  },
  {
    quote: 'Highly recommend for any business.',
    name: 'Alice Johnson',
    title: 'COO, BizGroup'
  }
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000
  };

  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">What Our Clients Say</h2>
        <Slider {...settings}>
          {testimonials.map((t, idx) => (
            <TestimonialCard key={idx} quote={t.quote} name={t.name} title={t.title} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;