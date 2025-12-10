import { Background, Container, CTA, Wrapper } from "@/components";
import { generateMetadata } from "@/functions/metadata";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronRight, Building2, Users, Siren, Activity, Map, Zap } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  title: "Metro & Smart Cities - FalconEdge",
  description: "AI-powered urban analytics for safer, smarter cities.",
});

export default function SmartCitiesPage() {
    return (
        <Background>
            <Wrapper className="py-20 relative">
                <Container className="relative">
                    {/* Hero Section */}
                    <div className="flex flex-col items-center text-center max-w-4xl mx-auto py-16">
                        <Badge variant="outline" className="mb-6 border-cyan-500/20 bg-cyan-500/10 text-cyan-500">
                            URBAN INTELLIGENCE
                        </Badge>
                        <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6 tracking-tight">
                            The Nervous System of <span className="text-cyan-500">Smart Cities</span>
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl">
                            Transform urban CCTV networks into intelligent sensors. Monitor crowd density, traffic flow, and public safety incidents in real-time.
                        </p>
                        <div className="flex items-center gap-4">
                            <Button size="lg" className="rounded-full">
                                Explore Solution <ChevronRight className="w-4 h-4 ml-2" />
                            </Button>
                        </div>
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-16">
                        <div className="p-6 rounded-2xl bg-card border border-border/50 hover:border-cyan-500/50 transition-colors group">
                            <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-4 group-hover:bg-cyan-500/20 transition-colors">
                                <Users className="w-6 h-6 text-cyan-500" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Crowd Dynamics</h3>
                            <p className="text-muted-foreground">
                                Real-time estimation of crowd size and density to prevent stampedes and manage large public events effectively.
                            </p>
                        </div>
                        <div className="p-6 rounded-2xl bg-card border border-border/50 hover:border-cyan-500/50 transition-colors group">
                            <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-4 group-hover:bg-cyan-500/20 transition-colors">
                                <Siren className="w-6 h-6 text-cyan-500" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Incident Response</h3>
                            <p className="text-muted-foreground">
                                Instant alerts for fights, falls, or abandoned objects, enabling law enforcement to respond seconds faster.
                            </p>
                        </div>
                        <div className="p-6 rounded-2xl bg-card border border-border/50 hover:border-cyan-500/50 transition-colors group">
                            <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-4 group-hover:bg-cyan-500/20 transition-colors">
                                <Activity className="w-6 h-6 text-cyan-500" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Traffic Optimization</h3>
                            <p className="text-muted-foreground">
                                Analyze vehicle flow to optimize traffic light timing and reduce congestion in metropolitan areas.
                            </p>
                        </div>
                    </div>

                    {/* Deep Dive Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20">
                        <div className="order-2 lg:order-1">
                            <h2 className="text-3xl font-bold font-heading mb-6">
                                Securing the Metro
                            </h2>
                            <p className="text-muted-foreground mb-6">
                                For rapid transit systems, FalconEdge provides a layer of proactive security. From detecting platform intrusions to identifying lost children, our vision models are trained for the complex metro environment.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-full bg-cyan-500/10 flex items-center justify-center mt-1 shrink-0">
                                        <Map className="w-3 h-3 text-cyan-500" />
                                    </div>
                                    <span className="text-sm text-foreground/80">Station-wide heatmap analytics</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-full bg-cyan-500/10 flex items-center justify-center mt-1 shrink-0">
                                        <Zap className="w-3 h-3 text-cyan-500" />
                                    </div>
                                    <span className="text-sm text-foreground/80">Low-light performance for tunnel monitoring</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-full bg-cyan-500/10 flex items-center justify-center mt-1 shrink-0">
                                        <Building2 className="w-3 h-3 text-cyan-500" />
                                    </div>
                                    <span className="text-sm text-foreground/80">Privacy-first face blurring technology</span>
                                </li>
                            </ul>
                        </div>
                        <div className="order-1 lg:order-2 relative h-[400px] rounded-2xl overflow-hidden border border-border/50 bg-muted/20">
                             <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-cyan-500/20 via-background to-background" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <Building2 className="w-32 h-32 text-cyan-500/20" />
                            </div>
                            {/* Decorative Grid */}
                            <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:20px_20px]" />
                        </div>
                    </div>
                </Container>
                <CTA />
            </Wrapper>
        </Background>
    );
}
