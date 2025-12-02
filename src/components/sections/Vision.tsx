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
          <p className="text-xs tracking-widest text-accent mb-6">
            INTELLIGENCE AT THE EDGE.
          </p>
          <p className="text-xl text-foreground-muted font-light leading-relaxed max-w-3xl mx-auto">
            FalconEdge is a real-time intelligence platform for mission-critical environments. It processes sensor, video, and signal data — delivering unified situational awareness to defence systems, metro cities, and intelligence agencies.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
