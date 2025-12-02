export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
      <div className="relative">
        {/* Grain overlay behind navbar */}
        <div className="grain-overlay absolute inset-0 !z-0" />
        <div className="relative z-10 bg-accent">
          <div className="h-10 flex items-center justify-between px-6">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-background" />
              <span className="text-sm font-medium tracking-widest text-background uppercase">
                FalconEdge
              </span>
            </div>

            {/* Tagline */}
            <span className="text-xs tracking-widest text-background hidden md:block">
              EDGE AI FOR PHYSICAL SECURITY
            </span>

            {/* CTA Button */}
            <a
              href="#waitlist"
              className="inline-flex items-center justify-center px-6 py-3 text-xs tracking-widest font-medium border border-background text-background hover:bg-background hover:text-accent transition-all duration-200"
            >
              JOIN WAITLIST
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
