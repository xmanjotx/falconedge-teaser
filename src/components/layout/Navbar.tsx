export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
      <div className="flex items-center justify-between">
        {/* Logo Button */}
        <div className="relative">
          <div className="grain-overlay absolute inset-0 !z-0" />
          <div className="relative z-10 bg-accent px-5 py-2 flex items-center gap-2">
            <div className="w-3 h-3 bg-background" />
            <span className="text-sm font-medium tracking-widest text-background uppercase">
              FalconEdge
            </span>
          </div>
        </div>

        {/* Tagline */}
        <span className="text-xs tracking-widest text-accent hidden md:block">
          INTELLIGENCE AT THE EDGE
        </span>

        {/* CTA Button */}
        <div className="relative">
          <div className="grain-overlay absolute inset-0 !z-0" />
          <a
            href="#waitlist"
            className="relative z-10 inline-flex items-center justify-center bg-accent px-5 py-2 text-sm tracking-widest font-medium text-background hover:bg-accent-light transition-all duration-200"
          >
            JOIN WAITLIST
          </a>
        </div>
      </div>
    </nav>
  );
}
