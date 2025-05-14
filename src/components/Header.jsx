import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Header() {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-card shadow-sm border-b border-secondary"
    >
      <div className="max-w-5xl mx-auto px-3 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              src="../src/img/img2.jpeg"
              alt="Perfil de Brian Vasquez"
              className="w-32 h-32 rounded-full object-cover border-4 border-secondary shadow-md"
            />
            <div>
              <motion.h1 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-3xl font-bold text-primary"
              >
                Brian Vasquez
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl text-primary/80"
              >
                Desarrollador Fullstack | React
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="text-primary/60 mt-2"
              >
                Construyendo experiencias web modernas y elegantes.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="flex items-center gap-2 text-primary/60 mt-2"
              >
                <MapPin size={18} />
                <span>Santiago, Chile</span>
              </motion.div>
            </div>
          </div>
          
          <div className="flex gap-6">
            {[
              { icon: Github, href: "https://github.com/bvasquezf" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/brvasquezf/" },
              { icon: Mail, href: "mailto:brvasquezf@gmail.com" }
            ].map((item, index) => (
              <motion.a
                key={index}
                whileHover={{ scale: 1.1, backgroundColor: 'var(--accent)', color: 'white' }}
                transition={{ type: "spring", stiffness: 400 }}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer" 
                className="p-2 rounded-full bg-secondary text-primary/70 transition-colors hover:text-white"
              >
                <item.icon size={24} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </motion.header>
  );
}
