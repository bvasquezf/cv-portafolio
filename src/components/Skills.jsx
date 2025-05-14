import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Layout, Database, PenTool as Tool, Brain, Languages } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      name: "Lenguajes de Programación",
      icon: Code2,
      skills: [
        { name: "JavaScript", level: "intermedio" },
        { name: "Python", level: "básico" },
        { name: "Java", level: "intermedio" },
        { name: "C#", level: "basico" }
      ]
    },
    {
      name: "Frontend",
      icon: Layout,
      skills: [
        { name: "HTML", level: "intermedio" },
        { name: "CSS", level: "intermedio" },
        { name: "React", level: "intermedio" },
        { name: "Bootstrap", level: "intermedio" }
      ]
    },
    {
      name: "Backend & Bases de datos",
      icon: Database,
      skills: [
        { name: "MySQL", level: "intermedio" },
        { name: "Oracle", level: "intermedio" },
      ]
    },
    {
      name: "Herramientas & Control de Versiones",
      icon: Tool,
      skills: [
        { name: "GitHub", level: "básico" },
        { name: "Excel", level: "intermedio" }
      ]
    },
    {
      name: "Análisis de Datos",
      icon: Brain,
      skills: [
        { name: "Power BI", level: "basico" }
      ]
    },
    {
      name: "Idiomas",
      icon: Languages,
      skills: [
        { name: "Español", level: "Nativo" },
        { name: "Inglés", level: "intermedio" }
      ]
    }
  ];

  const getLevelColor = (level) => {
    switch (level) {
      case 'básico':
        return 'bg-yellow-200';
      case 'intermedio':
        return 'bg-green-200';
      case 'avanzado':
        return 'bg-blue-200';
      case 'Nativo':
        return 'bg-blue-200';
      default:
        return 'bg-gray-200';
    }
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6 }}
      className="py-8 bg-secondary/30"
    >
      <div className="max-w-5xl mx-auto px-3">
        <div className="flex items-center gap-2 mb-6">
          <Code2 size={20} className="text-accent" />
          <h2 className="text-xl font-bold text-primary">Habilidades</h2>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div 
              key={category.name}
              variants={item}
              whileHover={{ y: -5 }}
              className="bg-card p-4 rounded-lg shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-2 mb-4">
                <category.icon size={20} className="text-accent" />
                <h3 className="text-lg font-semibold text-primary">{category.name}</h3>
              </div>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div 
                    key={skillIndex}
                    className="group"
                    whileHover={{ x: 5 }}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-primary/80">{skill.name}</span>
                      <span className={`text-xs px-2 py-1 rounded-full ${getLevelColor(skill.level)} text-primary/70`}>
                        {skill.level}
                      </span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: skill.level === 'básico' ? '33%' : skill.level === 'intermedio' ? '66%' : '100%' }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className={`h-full ${getLevelColor(skill.level)} group-hover:opacity-80 transition-opacity`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}