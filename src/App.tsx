import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Footer } from "@/components/layout/Footer";

function App() {
  return (
    <div className="h-screen w-screen overflow-hidden bg-background text-foreground font-sans selection:bg-accent selection:text-background-alt flex flex-col">
      <Navbar />
      <main className="flex-grow relative">
        <Hero />
      </main>
      <div className="absolute bottom-0 w-full z-50">
        <Footer />
      </div>
    </div>
  );
}

export default App;
