import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';

export default function Education() {
  const education = [
    {
      period: "2017 - 2020",
      institution: "Duoc UC",
      title: "Analista Programador Computacional",
      description: "Especialización en desarrollo de software y sistemas computacionales."
    },
    {
      period: "2011 - 2014",
      institution: "Liceo Polivalente B-133",
      title: "Técnico en Telecomunicaciones",
      description: "Formación técnica especializada en sistemas de telecomunicaciones."
    }
  ];

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="py-8"
    >
      <div className="max-w-5xl mx-auto px-3">
        <div className="flex items-center gap-2 mb-6">
          <GraduationCap size={20} className="text-accent" />
          <h2 className="text-xl font-bold text-primary">Formación</h2>
        </div>
        
        <div className="space-y-6">
          {education.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * index }}
              className="bg-card p-4 rounded-lg shadow-sm hover:shadow-lg transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="flex items-center gap-2 text-accent font-semibold min-w-[140px]">
                  <Calendar size={18} />
                  <span>{item.period}</span>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-primary mb-1">
                    {item.institution}
                  </h3>
                  <p className="text-primary/80 font-medium">
                    {item.title}
                  </p>
                  <p className="text-primary/60 mt-2">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}