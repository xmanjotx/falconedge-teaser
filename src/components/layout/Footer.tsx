export function Footer() {
  return (
    <footer className="w-full py-6">
      <div className="container mx-auto px-4 flex items-center justify-between text-[10px] uppercase tracking-widest text-foreground-muted/40">
        <div>
          &copy; {new Date().getFullYear()} FalconEdge Inc.
        </div>

        <a href="mailto:contact@falconedge.ai" className="hover:text-accent transition-colors">
          Contact
        </a>
      </div>
    </footer>
  );
}
