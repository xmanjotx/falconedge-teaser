export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
      <div className="flex items-center justify-between">
        {/* Logo Button */}
        <div>
          <div
            className="bg-amber-500 px-5 py-2 flex items-center gap-2"
            style={{ color: 'black' }}
          >
            <div className="w-3 h-3" style={{ backgroundColor: 'black' }} />
            <span className="text-sm font-medium tracking-widest uppercase">
              FalconEdge
            </span>
          </div>
        </div>

        {/* Tagline */}
        <span className="text-xs tracking-widest text-amber-500 hidden md:block">
          INTELLIGENCE AT THE EDGE
        </span>

        {/* CTA Button */}
        <div>
          <a
            href="#waitlist"
            className="inline-flex items-center justify-center bg-amber-500 px-5 py-2 text-sm tracking-widest font-medium hover:bg-amber-600 transition-all duration-200"
            style={{ color: 'black' }}
          >
            JOIN WAITLIST
          </a>
        </div>
      </div>
    </nav>
  );
}
