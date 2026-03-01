import Image from 'next/image';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  image: string;
  title: string;
  category: string;
}

const ProjectCard = ({ image, title, category }: ProjectCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-lg shadow-md overflow-hidden">
      <Image src={image} width={400} height={250} alt={title} className="object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-1">{title}</h3>
        <p className="text-sm text-gray-500">{category}</p>
      </div>
    </motion.div>
  );
};

export default ProjectCard;