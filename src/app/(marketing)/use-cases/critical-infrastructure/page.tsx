import { Background, Container, CTA, Wrapper } from "@/components";
import { generateMetadata } from "@/functions/metadata";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronRight, Factory, Zap, Server, AlertTriangle, Cpu, Box } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  title: "Critical Infrastructure - FalconEdge",
  description: "Protecting power grids, water systems, and industrial assets from physical and cyber threats.",
});

export default function InfrastructurePage() {
    return (
        <Background>
            <Wrapper className="py-20 relative">
                <Container className="relative">
                    {/* Hero Section */}
                    <div className="flex flex-col items-center text-center max-w-4xl mx-auto py-16">
                        <Badge variant="outline" className="mb-6 border-amber-500/20 bg-amber-500/10 text-amber-500">
                            INFRASTRUCTURE PROTECTION
                        </Badge>
                        <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6 tracking-tight">
                            Fortifying <span className="text-amber-500">National Assets</span>
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl">
                            Bridge the gap between OT and IT security. Ensure the continuity of essential services with integrated physical and digital monitoring.
                        </p>
                        <div className="flex items-center gap-4">
                            <Button size="lg" className="rounded-full">
                                Secure Your Assets <ChevronRight className="w-4 h-4 ml-2" />
                            </Button>
                        </div>
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-16">
                        <div className="p-6 rounded-2xl bg-card border border-border/50 hover:border-amber-500/50 transition-colors group">
                            <div className="w-12 h-12 rounded-lg bg-amber-500/10 flex items-center justify-center mb-4 group-hover:bg-amber-500/20 transition-colors">
                                <Factory className="w-6 h-6 text-amber-500" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Perimeter Integrity</h3>
                            <p className="text-muted-foreground">
                                Detect breaches in fences, pipelines, and remote substations instantly with AI-enhanced video analytics.
                            </p>
                        </div>
                        <div className="p-6 rounded-2xl bg-card border border-border/50 hover:border-amber-500/50 transition-colors group">
                            <div className="w-12 h-12 rounded-lg bg-amber-500/10 flex items-center justify-center mb-4 group-hover:bg-amber-500/20 transition-colors">
                                <Cpu className="w-6 h-6 text-amber-500" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">SCADA Anomaly Detection</h3>
                            <p className="text-muted-foreground">
                                Monitor industrial control systems for unusual commands or states that could indicate a cyber-physical attack.
                            </p>
                        </div>
                        <div className="p-6 rounded-2xl bg-card border border-border/50 hover:border-amber-500/50 transition-colors group">
                            <div className="w-12 h-12 rounded-lg bg-amber-500/10 flex items-center justify-center mb-4 group-hover:bg-amber-500/20 transition-colors">
                                <AlertTriangle className="w-6 h-6 text-amber-500" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Early Warning</h3>
                            <p className="text-muted-foreground">
                                Predictive maintenance alerts for critical machinery to prevent catastrophic failures and hazardous leaks.
                            </p>
                        </div>
                    </div>

                    {/* Deep Dive Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20">
                        <div className="order-2 lg:order-1">
                            <h2 className="text-3xl font-bold font-heading mb-6">
                                Energy, Water, & Logistics
                            </h2>
                            <p className="text-muted-foreground mb-6">
                                The backbone of the economy requires defense-grade protection. FalconEdge delivers a unified view of dispersed assets, reducing the need for physical patrols while increasing coverage.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-full bg-amber-500/10 flex items-center justify-center mt-1 shrink-0">
                                        <Zap className="w-3 h-3 text-amber-500" />
                                    </div>
                                    <span className="text-sm text-foreground/80">Substation thermal monitoring</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-full bg-amber-500/10 flex items-center justify-center mt-1 shrink-0">
                                        <Server className="w-3 h-3 text-amber-500" />
                                    </div>
                                    <span className="text-sm text-foreground/80">Data center physical security</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-full bg-amber-500/10 flex items-center justify-center mt-1 shrink-0">
                                        <Box className="w-3 h-3 text-amber-500" />
                                    </div>
                                    <span className="text-sm text-foreground/80">Supply chain theft prevention</span>
                                </li>
                            </ul>
                        </div>
                        <div className="order-1 lg:order-2 relative h-[400px] rounded-2xl overflow-hidden border border-border/50 bg-muted/20">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-amber-500/20 via-background to-background" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <Zap className="w-32 h-32 text-amber-500/20" />
                            </div>
                            {/* Hazard stripes */}
                            <div className="absolute bottom-0 inset-x-0 h-4 bg-[repeating-linear-gradient(45deg,rgba(245,158,11,0.5),rgba(245,158,11,0.5)_10px,transparent_10px,transparent_20px)]" />
                        </div>
                    </div>
                </Container>
                <CTA />
            </Wrapper>
        </Background>
    );
}
