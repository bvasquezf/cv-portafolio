import { Monitor, Medal, Handshake } from 'lucide-react';
import { motion } from 'framer-motion';

// Feature Card Component
const FeatureCard = ({ icon: Icon, children }) => (
  <motion.div 
    className="p-4 bg-card rounded-lg shadow-sm hover:shadow-lg"
    whileHover={{ y: -10 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <Icon className="w-12 h-12 mb-4 text-accent mx-auto" />
    <p className="text-primary/70 text-center">
      {children}
    </p>
  </motion.div>
);

export default function About() {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="py-8 bg-background"
    >
      <div className="max-w-5xl mx-auto px-3">
        <div className="flex items-center gap-2 mb-6">
          <Monitor size={20} className="text-accent" />
          <h2 className="text-xl font-bold text-primary">Acerca de mí</h2>
        </div>

        <motion.div 
          className="max-w-2xl mx-auto text-primary/70 text-lg mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <p className="text-center leading-relaxed">
            Tengo un fuerte enfoque en objetivos, así como gran capacidad para
            el desarrollo de programas y aplicaciones, y la resolución efectiva
            de problemas de código. Persona comunicativa, amable y capaz de
            adaptarse a cada situación. Busco una oportunidad laboral en la que
            demostrar mi compromiso y capacidad de trabajo. Siempre he destacado
            por mi buena productividad y mi capacidad de aprender rápidamente.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <FeatureCard icon={Monitor}>
            Iniciativa y coordinación de grupos para trabajar de manera
            organizada y resolver mejor los problemas.
          </FeatureCard>

          <FeatureCard icon={Medal}>
            Responsabilidad y compromiso organizacional.
          </FeatureCard>

          <FeatureCard icon={Handshake}>
            Enérgico y autónomo, con competencias de creación y aplicación de
            ideas, abierto a integrar nuevos conocimientos.
          </FeatureCard>
        </motion.div>
      </div>
    </motion.section>
  );
}
