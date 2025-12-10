import { Background, Container, CTA, Wrapper } from "@/components";
import { generateMetadata } from "@/functions/metadata";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronRight, Shield, Target, Lock, Radio, Eye } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  title: "Defence & National Security - FalconEdge",
  description: "Advanced tactical situational awareness for border security and perimeter defense.",
});

export default function DefencePage() {
    return (
        <Background>
            <Wrapper className="py-20 relative">
                <Container className="relative">
                    {/* Hero Section */}
                    <div className="flex flex-col items-center text-center max-w-4xl mx-auto py-16">
                        <Badge variant="outline" className="mb-6 border-primary/20 bg-primary/10 text-primary animate-pulse">
                            MISSION CRITICAL
                        </Badge>
                        <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6 tracking-tight">
                            Autonomous <span className="text-primary">Perimeter Defence</span>
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl">
                            Deploy next-generation surveillance and threat detection systems that operate autonomously in denied environments. Secure borders and critical assets with AI-driven overwatch.
                        </p>
                        <div className="flex items-center gap-4">
                            <Button size="lg" className="rounded-full">
                                Request Briefing <ChevronRight className="w-4 h-4 ml-2" />
                            </Button>
                        </div>
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-16">
                        <div className="p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-colors">
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                                <Target className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Hostile Intent Detection</h3>
                            <p className="text-muted-foreground">
                                Predictive algorithms analyze movement patterns to identify potential threats before they breach the perimeter.
                            </p>
                        </div>
                        <div className="p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-colors">
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                                <Radio className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">EW Resilient Comms</h3>
                            <p className="text-muted-foreground">
                                Maintains tactical data links in contested electromagnetic spectrums using frequency-hopping mesh networks.
                            </p>
                        </div>
                        <div className="p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-colors">
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                                <Eye className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Multi-Spectral Vision</h3>
                            <p className="text-muted-foreground">
                                Fusion of thermal, night vision, and optical sensors provides clear situational awareness in zero-visibility conditions.
                            </p>
                        </div>
                    </div>

                    {/* Deep Dive Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20">
                        <div className="relative h-[400px] rounded-2xl overflow-hidden border border-border/50 bg-muted/20">
                            {/* Placeholder for tactical map/visual */}
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <Shield className="w-32 h-32 text-primary/20" />
                            </div>
                            <div className="absolute bottom-6 left-6 right-6 p-4 bg-background/80 backdrop-blur-md rounded-xl border border-border/50">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                        <span className="text-sm font-mono text-muted-foreground">SYSTEM ACTIVE</span>
                                    </div>
                                    <span className="text-sm font-mono text-primary">SECURE</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold font-heading mb-6">
                                Border Security & <br/>Force Protection
                            </h2>
                            <p className="text-muted-foreground mb-6">
                                FalconEdge provides commanders with a unified common operating picture (COP). By integrating sensor data from ground radars, UAVs, and unattended ground sensors, we eliminate blind spots.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-1 shrink-0">
                                        <Lock className="w-3 h-3 text-primary" />
                                    </div>
                                    <span className="text-sm text-foreground/80">Automated threat classification and prioritization</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-1 shrink-0">
                                        <Lock className="w-3 h-3 text-primary" />
                                    </div>
                                    <span className="text-sm text-foreground/80">Seamless integration with existing C4ISR architecture</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-1 shrink-0">
                                        <Lock className="w-3 h-3 text-primary" />
                                    </div>
                                    <span className="text-sm text-foreground/80">Low-latency edge processing for millisecond reaction times</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Container>
                <CTA />
            </Wrapper>
        </Background>
    );
}
