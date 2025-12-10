import { Background, Container, CTA, Wrapper } from "@/components";
import { generateMetadata } from "@/functions/metadata";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronRight, Database, Search, Network, FileText, Globe, Fingerprint } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  title: "Intelligence Agencies - FalconEdge",
  description: "High-level data fusion and investigative analytics for intelligence communities.",
});

export default function IntelligencePage() {
    return (
        <Background>
            <Wrapper className="py-20 relative">
                <Container className="relative">
                    {/* Hero Section */}
                    <div className="flex flex-col items-center text-center max-w-4xl mx-auto py-16">
                        <Badge variant="outline" className="mb-6 border-indigo-500/20 bg-indigo-500/10 text-indigo-500">
                            TOP SECRET / NOFORN
                        </Badge>
                        <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6 tracking-tight">
                            Strategic <span className="text-indigo-500">Intelligence Fusion</span>
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl">
                            Connect the dots across millions of data points. Empower analysts with AI that uncovers hidden networks and predicts geopolitical shifts.
                        </p>
                        <div className="flex items-center gap-4">
                            <Button size="lg" className="rounded-full">
                                Access Capabilities <ChevronRight className="w-4 h-4 ml-2" />
                            </Button>
                        </div>
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-16">
                        <div className="p-6 rounded-2xl bg-card border border-border/50 hover:border-indigo-500/50 transition-colors group">
                            <div className="w-12 h-12 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-4 group-hover:bg-indigo-500/20 transition-colors">
                                <Globe className="w-6 h-6 text-indigo-500" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">OSINT Aggregation</h3>
                            <p className="text-muted-foreground">
                                Automatically scrape and analyze open-source data from social media, news feeds, and dark web forums.
                            </p>
                        </div>
                        <div className="p-6 rounded-2xl bg-card border border-border/50 hover:border-indigo-500/50 transition-colors group">
                            <div className="w-12 h-12 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-4 group-hover:bg-indigo-500/20 transition-colors">
                                <Network className="w-6 h-6 text-indigo-500" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Link Analysis</h3>
                            <p className="text-muted-foreground">
                                Visualise complex relationships between entities, uncovering criminal rings and terror financing networks.
                            </p>
                        </div>
                        <div className="p-6 rounded-2xl bg-card border border-border/50 hover:border-indigo-500/50 transition-colors group">
                            <div className="w-12 h-12 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-4 group-hover:bg-indigo-500/20 transition-colors">
                                <Fingerprint className="w-6 h-6 text-indigo-500" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Pattern of Life</h3>
                            <p className="text-muted-foreground">
                                Establish baseline behaviors for high-value targets and receive alerts on deviations that indicate imminent action.
                            </p>
                        </div>
                    </div>

                    {/* Deep Dive Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20">
                        <div className="relative h-[400px] rounded-2xl overflow-hidden border border-border/50 bg-muted/20">
                            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(99,102,241,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(99,102,241,0.1)_1px,transparent_1px)] bg-[size:40px_40px]" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <Database className="w-32 h-32 text-indigo-500/20" />
                            </div>
                             {/* Code snippet decoration */}
                             <div className="absolute top-4 left-4 font-mono text-xs text-indigo-400 opacity-50">
                                 {`> INITIATING DEEP SCAN...`}
                                 <br/>
                                 {`> TARGET ACQUIRED: NODE_492`}
                                 <br/>
                                 {`> DECRYPTING LAYER 7...`}
                             </div>
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold font-heading mb-6">
                                The Analyst's Multiplier
                            </h2>
                            <p className="text-muted-foreground mb-6">
                                Data overload is the enemy of insight. FalconEdge automates the drudgery of data collection and normalization, allowing analysts to focus on the "so what?" and "what next?".
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-full bg-indigo-500/10 flex items-center justify-center mt-1 shrink-0">
                                        <Search className="w-3 h-3 text-indigo-500" />
                                    </div>
                                    <span className="text-sm text-foreground/80">Semantic search across unstructured documents</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-full bg-indigo-500/10 flex items-center justify-center mt-1 shrink-0">
                                        <FileText className="w-3 h-3 text-indigo-500" />
                                    </div>
                                    <span className="text-sm text-foreground/80">Auto-generation of intelligence briefs</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-full bg-indigo-500/10 flex items-center justify-center mt-1 shrink-0">
                                        <Database className="w-3 h-3 text-indigo-500" />
                                    </div>
                                    <span className="text-sm text-foreground/80">Secure, air-gapped deployment options</span>
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
