import { motion } from 'framer-motion';
import { Globe } from '../ui/Globe';
import { Network, Shield, Search } from 'lucide-react';

const features = [
  {
    icon: Network,
    title: "EDGE INTELLIGENCE",
    description: "PROCESS SENSOR DATA IN REAL-TIME AT THE EDGE FOR INSTANT SITUATIONAL AWARENESS.",
  },
  {
    icon: Shield,
    title: "THREAT DETECTION",
    description: "AUTOMATED THREAT IDENTIFICATION AND RESPONSE ACROSS ALL CONNECTED SYSTEMS.",
  },
  {
    icon: Search,
    title: "UNIFIED ANALYTICS",
    description: "FUSE VIDEO, SIGNAL, AND SENSOR DATA INTO ACTIONABLE INTELLIGENCE.",
  },
];

export function Hero() {
  return (
    <section className="relative h-full w-full overflow-hidden bg-background">
      {/* Globe positioned center-right, rising from bottom like Cipher */}
      <div className="absolute bottom-0 left-1/2 -translate-x-[15%] translate-y-[50%] w-[600px] h-[600px] md:w-[750px] md:h-[750px] lg:w-[950px] lg:h-[950px] xl:w-[1100px] xl:h-[1100px]">
        {/* Glow effect behind globe */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[350px] h-[350px] md:w-[450px] md:h-[450px] lg:w-[550px] lg:h-[550px] rounded-full bg-accent/10 blur-[70px]" />
        </div>
        <Globe className="!relative !inset-auto w-full h-full !max-w-none" />
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
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-accent leading-[0.9] tracking-wide mb-6">
              NO BLIND SPOTS,
              <br />
              ONLY BOLD MOVES
            </h1>

            <p className="text-accent/70 text-sm tracking-widest uppercase max-w-md mb-8 leading-relaxed">
              WE EMPOWER YOU TO TAKE BOLD ACTIONS THAT SECURE
              YOUR PHYSICAL INFRASTRUCTURE AND ELIMINATE THREATS.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#waitlist"
                className="inline-flex items-center justify-center px-6 py-3 text-xs tracking-widest font-medium bg-accent text-background hover:bg-accent-light transition-all duration-200"
              >
                GET ACCESS
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center px-6 py-3 text-xs tracking-widest font-medium border border-accent text-accent hover:bg-accent hover:text-background transition-all duration-200"
              >
                ABOUT FALCONEDGE
              </a>
            </div>
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
          {/* Grain overlay behind the boxes */}
          <div className="grain-overlay absolute inset-0 !z-0" />
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 border border-accent/30 bg-background/95">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={`relative py-8 px-6 ${index < 2 ? 'md:border-r border-accent/30' : ''}`}
              >
                {/* Grid pattern overlay */}
                <div
                  className="absolute inset-0 opacity-[0.07] pointer-events-none"
                  style={{
                    backgroundImage: `
                      linear-gradient(to right, var(--color-accent) 1px, transparent 1px),
                      linear-gradient(to bottom, var(--color-accent) 1px, transparent 1px)
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
