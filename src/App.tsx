import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";

function App() {
  return (
    <div className="h-screen w-screen overflow-hidden bg-background text-accent font-sans selection:bg-accent selection:text-background flex flex-col">
      <Navbar />
      <main className="flex-grow relative pt-16">
        <Hero />
      </main>
    </div>
  );
}

export default App;
