import React, { useState } from 'react';
import { Send } from 'lucide-react';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      // ✅ ID de Formspree configurado: xgojzjvv
      const response = await fetch('https://formspree.io/f/xgojzjvv', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmitStatus('success');
        form.reset();
      } else {
        const data = await response.json();
        setSubmitStatus('error');
        setErrorMessage(data.error || 'Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.');
      }
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage('Error de conexión. Por favor, verifica tu internet e intenta de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título para página de contacto */}
        <div className="text-center mb-16">
          <h1 className="font-heading mb-6 leading-tight">
            <span className="block text-gray-800 text-3xl md:text-4xl lg:text-5xl mb-3">
              Let's Create
            </span>
            <span className="block text-[#6AAB56] text-4xl md:text-5xl lg:text-6xl font-bold">
              Something Together
            </span>
          </h1>
          <p className="font-body text-gray-600 text-lg max-w-2xl mx-auto mt-6">
            Tell me about your project and let's discuss how we can bring your vision to life.
          </p>
        </div>

        {/* Formulario completo */}
        <div className="bg-white rounded-2xl p-8 border border-[#E8F5E9] shadow-sm max-w-2xl mx-auto">
          <h3 className="font-heading text-2xl font-bold text-gray-800 mb-8 text-center">
            Send a Message
          </h3>
          
          {/* Mensaje de éxito */}
          {submitStatus === 'success' && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-center font-body">
              ✅ ¡Mensaje enviado con éxito! Te contactaré pronto.
            </div>
          )}

          {/* Mensaje de error */}
          {submitStatus === 'error' && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-center font-body">
              ❌ {errorMessage || 'Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.'}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="font-body text-gray-700 mb-2 block">Your Name *</label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-3 rounded-lg border border-[#E8F5E9] focus:border-[#6AAB56] focus:outline-none font-body transition-colors duration-300"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label className="font-body text-gray-700 mb-2 block">Your Email *</label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-3 rounded-lg border border-[#E8F5E9] focus:border-[#6AAB56] focus:outline-none font-body transition-colors duration-300"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label className="font-body text-gray-700 mb-2 block">Project Type</label>
              <select
                name="project_type"
                className="w-full px-4 py-3 rounded-lg border border-[#E8F5E9] focus:border-[#6AAB56] focus:outline-none font-body transition-colors duration-300"
              >
                <option value="">Select an option</option>
                <option value="branding">Brand Identity Design</option>
                <option value="web">Website Design</option>
                <option value="uiux">UI/UX Design</option>
                <option value="graphic">Graphic Design</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="font-body text-gray-700 mb-2 block">Message *</label>
              <textarea
                name="message"
                rows={6}
                required
                className="w-full px-4 py-3 rounded-lg border border-[#E8F5E9] focus:border-[#6AAB56] focus:outline-none font-body resize-none transition-colors duration-300"
                placeholder="Tell me about your project, timeline, and budget..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full font-heading px-8 py-4 bg-[#6AAB56] text-white rounded-full hover:bg-[#5A9545] transition-all duration-300 text-lg font-medium shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-95 inline-flex items-center justify-center gap-3 group ${
                isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              {isSubmitting ? 'Enviando...' : 'Send Message'}
            </button>
          </form>

          {/* Nota al final del formulario */}
          <div className="mt-8 pt-6 border-t border-[#E8F5E9]">
            <p className="font-body text-gray-500 text-sm text-center">
              I'll get back to you within 24 hours. Looking forward to hearing about your project!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;