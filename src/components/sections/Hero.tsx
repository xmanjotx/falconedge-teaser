import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion';
import { DottedGlobe } from '../ui/DottedGlobe';
import { ConcentricRings } from '../ui/ConcentricRings';
import { Button } from '../ui/button';
import { ChevronRight, Check, Loader2 } from 'lucide-react';
import { useState } from 'react';

export function Hero() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1500);
  };

  return (
    <section className="relative h-full w-full overflow-hidden bg-background flex items-center justify-center">
      {/* Concentric Rings Background */}
      <ConcentricRings />
      
      {/* 3D Globe in Center */}
      <div className="absolute inset-0 z-10 flex items-center justify-center" style={{ transform: 'translateY(30%)' }}>
        <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
          <Canvas camera={{ position: [0, 0, 4], fov: 35 }}>
            <ambientLight intensity={0.8} />
            <DottedGlobe />
          </Canvas>
        </div>
      </div>

      {/* Gradient Overlay for text readability */}
      <div className="absolute inset-0 z-20 bg-gradient-to-b from-background via-transparent to-background pointer-events-none" />

      {/* Content */}
      <div className="relative z-30 container mx-auto px-4 text-center flex flex-col items-center justify-start h-full pt-24 md:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center max-w-4xl"
        >
          <h2 className="text-accent tracking-[0.3em] text-[10px] md:text-xs font-bold uppercase mb-6 border border-accent/20 px-4 py-1 rounded-full bg-accent/5 backdrop-blur-sm">
            FalconEdge
          </h2>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight text-white mb-2 leading-none">
            Intelligence
          </h1>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-foreground-muted/40 mb-6 leading-none">
            at the edge.
          </h1>

          <p className="text-foreground-muted text-xs md:text-sm max-w-md mb-8 font-light leading-relaxed tracking-wide">
            Real-time intelligence for the physical world. <br/>
            Unified situational awareness for mission-critical environments.
          </p>
          
          {/* Waitlist Form Inline */}
          <div className="w-full max-w-sm relative group">
             <div className="absolute -inset-0.5 bg-gradient-to-r from-accent/20 to-accent/0 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
             <form onSubmit={handleSubmit} className="relative flex items-center bg-black/80 border border-white/10 rounded-lg p-1 pr-1 shadow-2xl backdrop-blur-xl">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={status !== 'idle'}
                  className="flex-1 bg-transparent text-white px-4 py-2.5 outline-none placeholder:text-foreground-muted/50 text-sm"
                />
                <Button 
                  type="submit"
                  disabled={status !== 'idle'}
                  className="bg-white text-black hover:bg-accent hover:text-black rounded-md px-5 py-2 h-auto text-xs font-bold uppercase tracking-wider transition-all duration-300"
                >
                  {status === 'loading' ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : status === 'success' ? (
                    <Check className="w-4 h-4" />
                  ) : (
                    <span className="flex items-center gap-1">
                      Join <ChevronRight className="w-3 h-3" />
                    </span>
                  )}
                </Button>
             </form>
          </div>
          
          {status === 'success' && (
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-3 text-accent text-xs tracking-widest uppercase"
            >
              Access Granted. We'll be in touch.
            </motion.p>
          )}

        </motion.div>
      </div>
    </section>
  );
}
