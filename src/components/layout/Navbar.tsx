import { Shield } from "lucide-react";

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-transparent pointer-events-none mix-blend-difference">
      <div className="container mx-auto px-4 h-24 flex items-center justify-between">
        <div className="flex items-center gap-3 pointer-events-auto">
          <Shield className="h-8 w-8 text-accent" />
          <span className="text-2xl font-display font-bold tracking-tight text-white">FalconEdge</span>
        </div>
      </div>
    </nav>
  );
}
