import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

export default function Experience() {
  const experience = [
    {
      position: "Analista de datos",
      company: "Artel S.A",
      period: "Ago 2022 - Actualmente",
      location: "Santiago, Chile",
      responsibilities: [
        "Análisis completo de productos en locales físico y por sistemas internos.",
        "Realizar seguimiento de bajas de productos.",
        "Reabastecer locales, haciendo pedidos manuales por sistema.",
        "Habilidades en SAP con diversas entradas para realizar seguimiento a procesos de productos, pedidos y almacenamiento.",
        "Automatizar procesos repetitivos con soluciones de Software a base de lenguaje Python para facilitar la realización de procesos en diferentes áreas de trabajo dentro de la misma empresa."
      ],
      technologies: ["Python", "SAP", "Análisis de datos", "Automatización"]
    },
    {
      position: "Soporte técnico",
      company: "Escuela Básica Acapulco",
      period: "Abr 2019 – Jun 2020",
      location: "Santiago, Chile",
      responsibilities: [
        "Encargado del área computacional de la escuela tanto de Sala de computación y pantallas interactivas en cada una de las salas educativas.",
        "Manutención de los computadores y notebooks tanto de la sala de computación como de los profesores, netbooks para el desarrollo en las clases dentro de sala y directivos escolares.",
        "Monitoreo de la red de el colegio y redes sociales."
      ],
      technologies: ["Soporte Técnico", "Redes", "Mantenimiento de Hardware", "Gestión TI"]
    }
  ];

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
      className="py-8 bg-background"
    >
      <div className="max-w-5xl mx-auto px-3">
        <div className="flex items-center gap-2 mb-6">
          <Briefcase size={20} className="text-accent" />
          <h2 className="text-xl font-bold text-primary">Experiencia Laboral</h2>
        </div>

        <div className="space-y-6">
          {experience.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * index }}
              className="bg-card p-4 rounded-lg shadow-sm hover:shadow-lg transition-all"
            >
              <div className="flex flex-col gap-4">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-primary">{item.position}</h3>
                    <p className="text-accent font-medium">{item.company}</p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 text-primary/70">
                    <div className="flex items-center gap-2">
                      <Calendar size={18} />
                      <span>{item.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={18} />
                      <span>{item.location}</span>
                    </div>
                  </div>
                </div>
                
                <ul className="space-y-2 text-primary/70 list-disc list-inside">
                  {item.responsibilities.map((responsibility, respIndex) => (
                    <motion.li 
                      key={respIndex}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * (respIndex + 1) }}
                    >
                      {responsibility}
                    </motion.li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mt-4">
                  {item.technologies.map((tech, techIndex) => (
                    <motion.span 
                      key={techIndex}
                      whileHover={{ scale: 1.05, backgroundColor: 'var(--accent)', color: 'white' }}
                      className="px-3 py-1 bg-secondary text-primary/70 rounded-full text-sm transition-colors"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
