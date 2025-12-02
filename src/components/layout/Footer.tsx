export function Footer() {
  return (
    <footer className="w-full py-4 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <div className="text-xs tracking-widest text-accent/50 uppercase">
            &copy; {new Date().getFullYear()} FalconEdge Inc.
          </div>

          {/* Links */}
          <div className="flex items-center gap-8">
            <a
              href="#privacy"
              className="text-xs tracking-widest text-accent/50 hover:text-accent transition-colors uppercase"
            >
              Privacy
            </a>
            <a
              href="#terms"
              className="text-xs tracking-widest text-accent/50 hover:text-accent transition-colors uppercase"
            >
              Terms
            </a>
            <a
              href="mailto:contact@falconedge.ai"
              className="text-xs tracking-widest text-accent/50 hover:text-accent transition-colors uppercase"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
