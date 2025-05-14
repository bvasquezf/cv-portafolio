import React from 'react';
import { motion } from 'framer-motion';
import { FolderGit2, Link } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "Plataforma de comercio electrónico con carrito de compras, pagos y panel de administración.",
      image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&h=400&fit=crop",
      technologies: ["React", "Node.js", "PostgreSQL"],
      link: "https://github.com",
      demo: "https://demo.com"
    },
  ];

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="py-8"
    >
      <div className="max-w-5xl mx-auto px-3">
        <div className="flex items-center gap-2 mb-6">
          <FolderGit2 size={20} className="text-accent" />
          <h2 className="text-xl font-bold text-primary">Proyectos</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="bg-card rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative overflow-hidden">
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-primary">{project.title}</h3>
                <p className="text-primary/70 mt-2">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span 
                      key={techIndex}
                      whileHover={{ scale: 1.05, backgroundColor: 'var(--accent)', color: 'white' }}
                      className="px-3 py-1 bg-secondary text-primary/70 rounded-full text-sm transition-colors"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
                <div className="mt-4 flex gap-4">
                  <motion.a 
                    whileHover={{ scale: 1.05, color: 'var(--accent)' }}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary/70 transition-colors"
                  >
                    <FolderGit2 size={18} />
                    <span>Código</span>
                  </motion.a>
                  <motion.a 
                    whileHover={{ scale: 1.05, color: 'var(--accent)' }}
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary/70 transition-colors"
                  >
                    <Link size={18} />
                    <span>Demo</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}