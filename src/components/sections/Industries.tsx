import { motion } from 'framer-motion';

const industries = [
  {
    title: "Defence",
    tagline: "Situational awareness. Uncompromised.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
  },
  {
    title: "Metro",
    tagline: "Cities that see. Cities that respond.",
    image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Intelligence",
    tagline: "Every signal. Every second.",
    image: "https://images.unsplash.com/photo-1558494949-ef526b004297?q=80&w=2070&auto=format&fit=crop"
  }
];

export function Industries() {
  return (
    <section className="py-32 bg-background-alt">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {industries.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="group relative h-[400px] border border-white/5 overflow-hidden cursor-default"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-500 z-10" />
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end">
                <h3 className="text-accent font-mono text-xs uppercase tracking-widest mb-2 opacity-100 transition-opacity">
                  {item.title}
                </h3>
                <p className="text-2xl font-display font-bold text-white group-hover:translate-x-0 transition-transform duration-300">
                  {item.tagline}
                </p>
                
                {/* Decorative Line */}
                <div className="w-12 h-1 bg-accent mt-6 transform origin-left scale-x-100 group-hover:scale-x-100 transition-transform duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
