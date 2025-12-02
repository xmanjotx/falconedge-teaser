import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { ArrowRight, Check, Loader2 } from 'lucide-react';

export function Waitlist() {
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
    <section id="waitlist" className="py-32 bg-background relative">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
            Be first to see.
          </h2>
          <p className="text-foreground-muted mb-12">
            Join the waitlist for early access to the platform.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={status !== 'idle'}
              className="flex-1 bg-white/5 border border-white/10 text-white px-6 py-4 outline-none focus:border-accent transition-colors disabled:opacity-50"
            />
            <Button 
              type="submit"
              disabled={status !== 'idle'}
              className="bg-white text-black hover:bg-accent hover:text-white px-8 py-4 h-auto rounded-none font-bold uppercase tracking-wide transition-colors disabled:opacity-50 min-w-[140px]"
            >
              {status === 'loading' ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : status === 'success' ? (
                <Check className="w-5 h-5" />
              ) : (
                <span className="flex items-center gap-2">
                  Join <ArrowRight className="w-4 h-4" />
                </span>
              )}
            </Button>
          </form>

          {status === 'success' && (
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 text-accent text-sm"
            >
              You're on the list. We'll be in touch.
            </motion.p>
          )}
          
          <p className="mt-8 text-xs text-foreground-muted/40 uppercase tracking-widest">
            We respect your privacy.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
