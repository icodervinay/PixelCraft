import ProjectCard from './ProjectCard';

const projects = [
  {
    image: '/images/project1.jpg',
    title: 'Project One',
    category: 'Web Development'
  },
  {
    image: '/images/project2.jpg',
    title: 'Project Two',
    category: 'Mobile App'
  },
  {
    image: '/images/project3.jpg',
    title: 'Project Three',
    category: 'Branding'
  }
];

const FeaturedProjects = () => {
  return (
    <section id="projects" className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {projects.map((p, idx) => (
            <ProjectCard key={idx} image={p.image} title={p.title} category={p.category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;