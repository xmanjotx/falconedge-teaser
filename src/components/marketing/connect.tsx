"use client";

import { Shield, Train, Radio } from "lucide-react";
import Container from "../global/container";
import { SectionBadge } from "../ui/section-bade";

const Connect = () => {
    return (
        <div className="flex flex-col items-center justify-center py-8 md:py-12 w-full" id="mission">
            <Container>
                <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
                    <SectionBadge title="Use Cases" />
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug mt-6">
                        Built for mission-critical environments
                    </h2>
                    <p className="text-base md:text-lg text-center text-accent-foreground/80 mt-4">
                        One platform. Every domain. Complete operational clarity when it matters most.
                    </p>
                </div>
            </Container>
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 w-full">
                    <UseCaseCard
                        icon={Shield}
                        title="Defense"
                        headline="See the full picture. Act with certainty."
                        description="Real-time intelligence across distributed assets. Edge processing for operational security. Unified command visibility."
                    />
                    <UseCaseCard
                        icon={Train}
                        title="Metro & Smart Cities"
                        headline="Cities that see. Cities that respond."
                        description="Unified monitoring across transit, infrastructure, and public spaces. AI-powered anomaly detection. Real-time incident response."
                    />
                    <UseCaseCard
                        icon={Radio}
                        title="Intelligence Agencies"
                        headline="Patterns emerge. Threats don't hide."
                        description="Multi-source intelligence fusion at the edge. Pattern recognition at scale. Secure, sovereign data processing."
                    />
                </div>
            </Container>
        </div>
    )
};

const UseCaseCard = ({
    icon: Icon,
    title,
    headline,
    description
}: {
    icon: any;
    title: string;
    headline: string;
    description: string;
}) => (
    <div className="flex flex-col p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-primary/20 transition-all duration-300 group cursor-default">
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
            <Icon className="w-6 h-6 text-primary" />
        </div>
        <span className="text-xs text-primary font-medium uppercase tracking-wider mb-2">{title}</span>
        <h3 className="text-lg font-heading font-medium text-white mb-2">{headline}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
    </div>
);

export default Connect
