import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Send, MapPin, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
      return;
    }

    try {
      await emailjs.send(
        'service_x45fppm',
        'template_bbmkove',
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          message: formData.message,
          to_name: 'Brian',
          reply_to: formData.email,
        },
        'XQ9oOH83iYDrRL4gP'
      );

      setStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} className="py-8 bg-background">
      <div className="max-w-5xl mx-auto px-3">
        <div className="flex items-center gap-2 mb-6">
          <Mail size={20} className="text-accent" />
          <h2 className="text-xl font-bold text-primary">Contacto</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="space-y-4">
            <div className="bg-card p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-primary mb-3">Información de Contacto</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-primary/70">
                  <Mail size={16} className="text-accent" />
                  <a href="mailto:brvasquezf@gmail.com" className="hover:text-accent transition-colors">brvasquezf@gmail.com</a>
                </div>
                <div className="flex items-center gap-2 text-primary/70">
                  <Phone size={16} className="text-accent" />
                  <a href="tel:+56956425265" className="hover:text-accent transition-colors">+569 56425265</a>
                </div>
                <div className="flex items-center gap-2 text-primary/70">
                  <MapPin size={16} className="text-accent" />
                  <span>Santiago, Chile</span>
                </div>
              </div>
            </div>
            <div className="bg-card p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-primary mb-3">Horario Disponible</h3>
              <p className="text-primary/70">Lunes a Viernes: 9:00 - 18:00</p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
            <form onSubmit={handleSubmit} className="bg-card p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-primary mb-4">Envíame un mensaje</h3>
              <div className="space-y-3">
                {['name', 'email', 'phone', 'message'].map(field => (
                  <div key={field}>
                    <label htmlFor={field} className="block text-xs font-medium text-primary/70 mb-1">
                      {field === 'message' ? 'Mensaje' : field.charAt(0).toUpperCase() + field.slice(1)}
                    </label>
                    {field === 'message' ? (
                      <textarea
                        id={field}
                        name={field}
                        value={formData[field]}
                        onChange={handleChange}
                        rows={3}
                        className="w-full px-3 py-2 rounded-lg border border-secondary focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors resize-none"
                        required
                      />
                    ) : (
                      <input
                        type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
                        id={field}
                        name={field}
                        value={formData[field]}
                        onChange={handleChange}
                        className="w-full px-3 py-2 rounded-lg border border-secondary focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors"
                        required={field !== 'phone'}
                      />
                    )}
                  </div>
                ))}

                <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type="submit" disabled={status === 'loading'} className="w-full bg-accent text-white py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-accent/90 transition-colors disabled:opacity-70 disabled:cursor-not-allowed">
                  <Send size={16} className={status === 'loading' ? 'animate-pulse' : ''} />
                  {status === 'loading' ? 'Enviando...' : 'Enviar mensaje'}
                </motion.button>

                {status === 'success' && <p className="text-green-600">Mensaje enviado con éxito.</p>}
                {status === 'error' && <p className="text-red-600">Error al enviar el mensaje. Inténtalo nuevamente.</p>}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
