import { motion } from 'framer-motion';
import WorldMap from '../world-map-demo';
import { Network, Shield, Search } from 'lucide-react';

const features = [
  {
    icon: Network,
    title: "REAL-TIME AWARENESS",
    description: "INTELLIGENCE PROCESSED AT THE EDGE, NOT IN DISTANT CLOUDS. MILLISECONDS, NOT MINUTES.",
  },
  {
    icon: Shield,
    title: "AI-NATIVE INTELLIGENCE",
    description: "MACHINE LEARNING THAT SEES PATTERNS HUMANS MISS. PREDICTIVE, NOT REACTIVE.",
  },
  {
    icon: Search,
    title: "UNIFIED UNDERSTANDING",
    description: "EVERY SENSOR, EVERY CAMERA, EVERY SIGNAL — ONE VIEW. CROSS-SITE, CROSS-SYSTEM.",
  },
];

export function Hero() {
  return (
    <section className="relative h-full w-full overflow-hidden bg-black">
      {/* World Map as full background */}
      <div className="absolute inset-0 w-full h-full opacity-40">
        <WorldMap />
      </div>

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Main Content */}
      <div className="relative z-10 px-4 h-full flex flex-col">
        {/* Hero Text Area */}
        <div className="flex-1 flex items-start pt-8 md:pt-16 lg:pt-24 px-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-start max-w-2xl"
          >
            {/* Main Headline */}
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-amber-500 leading-[0.9] tracking-wide">
              REAL-TIME INTELLIGENCE.
              <br />
              UNIFIED AWARENESS.
            </h1>
          </motion.div>
        </div>

      </div>

      {/* Feature Cards at Bottom - Edge to Edge */}
      <div className="absolute bottom-0 left-0 right-0 z-20 px-4 pb-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="relative"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 border border-amber-500/30 bg-black/95">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={`relative py-8 px-6 ${index < 2 ? 'md:border-r border-amber-500/30' : ''}`}
              >
                {/* Grid pattern overlay */}
                <div
                  className="absolute inset-0 opacity-[0.03] pointer-events-none"
                  style={{
                    backgroundImage: `
                      linear-gradient(to right, #f59e0b 1px, transparent 1px),
                      linear-gradient(to bottom, #f59e0b 1px, transparent 1px)
                    `,
                    backgroundSize: '40px 40px'
                  }}
                />
                <div className="relative z-10">
                  <feature.icon className="w-7 h-7 text-amber-500 mb-8" strokeWidth={1.5} />
                  <h3 className="text-amber-500 text-base tracking-widest font-medium mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-amber-500/60 text-xs tracking-wider leading-relaxed uppercase">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
