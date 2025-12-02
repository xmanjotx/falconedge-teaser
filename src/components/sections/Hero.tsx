import { motion } from 'framer-motion';
import { Globe } from '../ui/Globe';
import { LaserFlow } from '../ui/LaserFlow';
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
    <section className="relative h-full w-full overflow-hidden bg-background">
      {/* Globe positioned center-right, rising from bottom like Cipher */}
      <div className="absolute bottom-0 left-1/2 -translate-x-[15%] translate-y-[50%] w-[600px] h-[600px] md:w-[750px] md:h-[750px] lg:w-[950px] lg:h-[950px] xl:w-[1100px] xl:h-[1100px] overflow-visible">
        {/* Glow effect behind globe */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[350px] h-[350px] md:w-[450px] md:h-[450px] lg:w-[550px] lg:h-[550px] rounded-full bg-accent/10 blur-[70px]" />
        </div>

        {/* LaserFlow Effect aligned with globe center */}
        <div className="absolute inset-0 -translate-y-1/2 pointer-events-none">
          <LaserFlow 
            color="#ffa500"
            horizontalBeamOffset={0}
            verticalBeamOffset={-0.3}
            fogIntensity={0.85}
            wispIntensity={5.5}
            flowSpeed={0.5}
            verticalSizing={1.8}
            horizontalSizing={0.28}
            decay={0.85}
          />
        </div>

        <Globe className="!relative !inset-auto w-full h-full !max-w-none opacity-0" />
      </div>

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
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-accent leading-[0.9] tracking-wide">
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
          <div className="grid grid-cols-1 md:grid-cols-3 border border-accent/30 bg-background/95">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={`relative py-8 px-6 ${index < 2 ? 'md:border-r border-accent/30' : ''}`}
              >
                {/* Grid pattern overlay */}
                <div
                  className="absolute inset-0 opacity-[0.03] pointer-events-none"
                  style={{
                    backgroundImage: `
                      linear-gradient(to right, var(--accent-color) 1px, transparent 1px),
                      linear-gradient(to bottom, var(--accent-color) 1px, transparent 1px)
                    `,
                    backgroundSize: '40px 40px'
                  }}
                />
                <div className="relative z-10">
                  <feature.icon className="w-7 h-7 text-accent mb-8" strokeWidth={1.5} />
                  <h3 className="text-accent text-base tracking-widest font-medium mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-accent/60 text-xs tracking-wider leading-relaxed uppercase">
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
