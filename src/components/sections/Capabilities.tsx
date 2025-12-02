import { motion } from 'framer-motion';
import { Radio, Zap, Globe2, BrainCircuit } from 'lucide-react';

const capabilities = [
  {
    icon: Radio,
    title: "Every sensor. One truth.",
  },
  {
    icon: Zap,
    title: "Speed of thought.",
  },
  {
    icon: Globe2,
    title: "Everywhere. At once.",
  },
  {
    icon: BrainCircuit,
    title: "Machine intelligence. Human judgment.",
  }
];

export function Capabilities() {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {capabilities.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group p-8 border border-white/5 bg-background-alt/50 hover:bg-white/[0.02] hover:border-accent/20 transition-all duration-500 flex flex-col items-center text-center"
            >
              <div className="mb-6 p-4 rounded-full bg-transparent border border-accent/20 text-accent group-hover:bg-accent group-hover:text-black transition-all duration-500">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-display font-bold text-white group-hover:text-accent transition-colors duration-300">
                {item.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
