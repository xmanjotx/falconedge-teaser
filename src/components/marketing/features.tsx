"use client";

import { Cpu, Radio, Eye, Shield, Wifi } from "lucide-react";
import Container from "../global/container";
import Icons from "../global/icons";
import { BorderBeam } from "../ui/border-beam";
import { DotPattern } from "../ui/dot-pattern";
import MagicCard from "../ui/magic-card";
import RetroGrid from "../ui/retro-grid";
import { Ripple } from "../ui/ripple";
import { SectionBadge } from "../ui/section-bade";

const Features = () => {
    return (
        <div id="capabilities" className="flex flex-col items-center justify-center py-12 md:py-16 lg:py-24 w-full">
            <Container>
                <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
                    <SectionBadge title="Capabilities" />
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug mt-6">
                        See everything. <br /> Miss nothing.
                    </h2>
                    <p className="text-base md:text-lg text-center text-muted-foreground mt-6">
                        From raw sensor data to actionable insight in milliseconds — before threats become incidents.
                    </p>
                </div>
            </Container>
            <div className="mt-16 w-full">
                <div className="flex flex-col items-center gap-5 lg:gap-5 w-full">
                    <Container>
                        <div className="grid grid-cols-1 lg:grid-cols-[1fr_.65fr] w-full gap-5 lg:gap-5">
                            <MagicCard particles={true} className="flex flex-col items-start size-full bg-primary/[0.08]">
                                <div className="bento-card flex items-center justify-center min-h-72">
                                    <span className="text-muted-foreground group-hover:text-foreground mx-auto relative">
                                        <Icons.stars className="w-20 h-20" />
                                    </span>
                                    <Ripple />
                                    <div className="absolute bottom-6 text-center w-full px-4">
                                        <h4 className="text-xl font-heading font-medium heading">AI-Native Intelligence</h4>
                                        <p className="text-sm text-muted-foreground mt-2">Machine learning that sees patterns humans miss. Predictive, not reactive.</p>
                                    </div>
                                </div>
                            </MagicCard>
                            <MagicCard particles={true} className="flex flex-col items-start w-full bg-primary/[0.08]">
                                <div className="bento-card w-full flex-row gap-6 relative overflow-hidden">
                                    <div className="w-full h-40 flex items-center justify-center relative">
                                        <Radio className="w-16 h-16 text-primary/60 group-hover/card:text-primary group-hover/card:scale-110 transition-all duration-300 z-10" />
                                        <Ripple mainCircleSize={80} mainCircleOpacity={0.15} numCircles={5} />
                                    </div>
                                    <div className="flex flex-col relative z-10">
                                        <h4 className="text-xl font-heading font-medium heading ">
                                            Real-Time Awareness
                                        </h4>
                                        <p className="text-sm md:text-base mt-2 text-muted-foreground">
                                            Intelligence processed at the edge, not in distant clouds. Milliseconds, not minutes.
                                        </p>
                                    </div>
                                </div>
                            </MagicCard>
                        </div>
                    </Container>
                    <Container>
                        <div className="grid grid-cols-1 lg:grid-cols-3 w-full gap-5 lg:gap-5">
                            <MagicCard particles={true} className="flex flex-col items-start w-full row-span-1 bg-primary/[0.08]">
                                <div className="bento-card w-full flex-row gap-6 relative overflow-hidden">
                                    <RetroGrid className="opacity-30" angle={55} />
                                    <div className="w-full h-52 relative flex items-center justify-center">
                                        <Eye className="w-20 h-20 text-primary/60 group-hover/card:text-primary group-hover/card:scale-110 transition-all duration-300 z-10" />
                                        <div className="w-40 h-40 rounded-full bg-primary/10 blur-3xl -z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                                        {/* Scanning crosshair lines */}
                                        <div className="absolute w-32 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent top-1/2 left-1/2 -translate-x-1/2"></div>
                                        <div className="absolute h-32 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent top-1/2 left-1/2 -translate-y-1/2"></div>
                                    </div>
                                    <div className="flex flex-col mt-auto relative z-10">
                                        <h4 className="text-xl font-heading font-medium heading">
                                            Unified Understanding
                                        </h4>
                                        <p className="text-sm md:text-base mt-2 text-muted-foreground">
                                            Every sensor, every camera, every signal — one view. Cross-site, cross-system, cross-domain.
                                        </p>
                                    </div>
                                </div>
                            </MagicCard>
                            <div className="grid grid-rows gap-5 lg:gap-5">
                                <MagicCard particles={true} className="flex flex-col items-start w-full row-span- row-start-[0.5] h-32 bg-primary/[0.08] relative overflow-hidden">
                                    <DotPattern
                                        width={12}
                                        height={12}
                                        cx={1}
                                        cy={1}
                                        cr={0.5}
                                        className="opacity-20 [mask-image:radial-gradient(ellipse_at_center,white,transparent_80%)]"
                                    />
                                    <BorderBeam
                                        size={80}
                                        duration={8}
                                        colorFrom="hsl(var(--primary))"
                                        colorTo="hsl(var(--primary)/0.2)"
                                        borderWidth={1}
                                    />
                                    <div className="bento-card w-full relative items-center justify-center">
                                        <div className="w-full h-16 relative flex items-center justify-center">
                                            <Cpu className="w-10 h-10 text-primary/60 group-hover/card:text-primary group-hover/card:scale-110 transition-all duration-300 z-10" />
                                            <div className="w-20 h-20 rounded-full bg-primary/10 blur-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                                        </div>
                                    </div>
                                </MagicCard>
                                <MagicCard particles={true} className="flex flex-col items-start w-full row-start-2 !h-max bg-primary/[0.08] relative overflow-hidden">
                                    {/* Hex grid pattern background */}
                                    <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
                                        <defs>
                                            <pattern id="hexagons" width="28" height="49" patternUnits="userSpaceOnUse" patternTransform="scale(1.5)">
                                                <path d="M14 0l14 8v16l-14 8L0 24V8l14-8zm0 49l14-8V25l-14-8-14 8v16l14 8z" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary"/>
                                            </pattern>
                                        </defs>
                                        <rect width="100%" height="100%" fill="url(#hexagons)" />
                                    </svg>
                                    <Ripple mainCircleSize={100} mainCircleOpacity={0.08} numCircles={4} />
                                    <div className="bento-card w-full gap-6 relative z-10">
                                        <div className="w-full h-48 relative flex items-center justify-center">
                                            <Shield className="w-20 h-20 text-primary/60 group-hover/card:text-primary group-hover/card:scale-110 transition-all duration-300 z-10" />
                                        </div>
                                        <div className="w-28 h-28 rounded-full bg-primary/10 blur-3xl -z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                                        <div className="text-center mt-4 relative z-10">
                                            <h4 className="text-xl font-heading font-medium heading">Mission-Critical Reliability</h4>
                                            <p className="text-sm text-muted-foreground mt-2">Zero tolerance for downtime. Works when the internet doesn&apos;t.</p>
                                        </div>
                                    </div>
                                </MagicCard>
                            </div>
                            <MagicCard particles={true} className="flex flex-col items-start w-full row-span-1 bg-primary/[0.08] relative overflow-hidden">
                                {/* Network node pattern */}
                                <DotPattern
                                    width={24}
                                    height={24}
                                    cx={1}
                                    cy={1}
                                    cr={1.5}
                                    className="opacity-15 [mask-image:linear-gradient(to_bottom,white_30%,transparent)]"
                                />
                                {/* Connecting lines animation */}
                                <div className="absolute inset-0 overflow-hidden opacity-20">
                                    <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse"></div>
                                    <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-primary via-transparent to-primary animate-pulse" style={{animationDelay: '0.5s'}}></div>
                                    <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse" style={{animationDelay: '1s'}}></div>
                                </div>
                                <div className="bento-card w-full flex-row gap-6 relative z-10">
                                    <div className="flex flex-col mb-auto">
                                        <h4 className="text-xl font-heading font-medium heading ">
                                            Edge-to-Core Architecture
                                        </h4>
                                        <p className="text-sm md:text-base mt-2 text-muted-foreground">
                                            Intelligence where it&apos;s captured. Insight where it&apos;s needed.
                                        </p>
                                    </div>
                                    <div className="w-full h-28 relative flex items-center justify-center">
                                        <Wifi className="w-14 h-14 text-primary/60 group-hover/card:text-primary group-hover/card:scale-110 transition-all duration-300 z-10" />
                                        <div className="w-28 h-28 rounded-full bg-primary/10 blur-3xl -z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full"></div>
                                    </div>
                                </div>
                            </MagicCard>
                        </div>
                    </Container>
                </div>
            </div>
        </div>
    )
};

export default Features
