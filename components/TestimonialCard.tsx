import { motion } from 'framer-motion';

interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
}

const TestimonialCard = ({ quote, name, title }: TestimonialCardProps) => {
  return (
    <motion.div
      className="bg-white p-6 rounded-lg shadow-md"
      whileHover={{ scale: 1.02 }}
    >
      <p className="text-gray-700 italic mb-4">"{quote}"</p>
      <p className="font-semibold">{name}</p>
      <p className="text-sm text-gray-500">{title}</p>
    </motion.div>
  );
};

export default TestimonialCard;