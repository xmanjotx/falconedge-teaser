import { motion } from 'framer-motion';

export function Vision() {
  return (
    <section className="py-32 bg-background-alt text-center">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-8 leading-tight">
            Every critical environment. <br />
            <span className="text-foreground-muted">Continuously understood.</span>
          </h2>
          <p className="text-xl text-foreground-muted font-light leading-relaxed max-w-2xl mx-auto">
            Processing sensor, video, and signal data in real-time to deliver unified situational awareness. 
            From defence systems to smart cities, we bring clarity to chaos.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
