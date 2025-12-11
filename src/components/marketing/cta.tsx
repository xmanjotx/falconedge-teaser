"use client";

import Link from "next/link";
import Container from "../global/container";
import { Button } from "../ui/button";
import { Particles } from "../ui/particles";
import RetroGrid from "../ui/retro-grid";
import DemoDialog from "./demo-dialog";

const CTA = () => {
    return (
        <div className="flex flex-col items-center justify-center py-12 md:py-16 lg:py-24 w-full relative">
            <Container>
                <div className="flex flex-col items-center justify-center text-center w-full px-4 md:px-0 mx-auto h-[500px] border border-foreground/10 rounded-3xl overflow-hidden relative bg-gradient-to-b from-transparent via-primary/5 to-primary/10">
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-24 bg-primary blur-[8rem]"></div>
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
                    <div className="flex flex-col items-center justify-center w-full z-20">
                        <h2 className="text-4xl md:text-6xl font-heading heading font-semibold !leading-tight mt-6">
                            Ready for real-time <br className="hidden md:block" /> intelligence?
                        </h2>
                        <p className="text-base md:text-lg text-center text-accent-foreground/80 max-w-xl mx-auto mt-6">
                            Built for defense systems, metro operations, and intelligence agencies demanding mission-critical situational awareness.
                        </p>
                        <div className="flex flex-col md:flex-row items-center justify-center w-full gap-6 mt-8">
                            <DemoDialog>
                                <Button size="lg" className="w-full md:w-max px-8 py-6 text-base shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-shadow">
                                    Get Demo
                                </Button>
                            </DemoDialog>
                            <Button asChild size="lg" variant="secondary" className="w-full md:w-max">
                                <Link href="#capabilities">
                                    Explore Capabilities
                                </Link>
                            </Button>
                        </div>
                    </div>
                    <RetroGrid />
                    <Particles
                        refresh
                        ease={80}
                        color="#10b981"
                        quantity={100}
                        className="size-full absolute inset-0"
                    />
                </div>
            </Container>
        </div>
    )
};

export default CTA
