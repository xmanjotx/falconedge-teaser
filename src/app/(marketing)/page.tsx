import { Background, Companies, Connect, Container, CTA, Features, Hero, Perks, Wrapper } from "@/components";
import { Spotlight } from "@/components/ui/spotlight";
import { generateMetadata } from "@/functions/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  title: "FalconEdge - Advanced Tactical Analytics Platform",
  description: "Cutting-edge tactical analytics and intelligence platform. Real-time monitoring, threat detection, and strategic insights for security professionals.",
  keywords: ["tactical analytics", "security intelligence", "threat detection", "real-time monitoring"],
});

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "FalconEdge",
  "description": "Advanced tactical analytics and intelligence platform",
  "url": "https://falconedge-teaser.pages.dev",
  "logo": "https://falconedge-teaser.pages.dev/logo.png",
  "sameAs": [
    "https://twitter.com/falconedge"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "sales",
    "availableLanguage": "English"
  }
};

const HomePage = () => {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />
            <Background>
            <Wrapper className="py-20 relative">
                <Container className="relative">
                    <Spotlight
                        className="-top-40 left-0 md:left-60 md:-top-20"
                        fill="rgba(16, 185, 129, 0.15)"
                    />
                    <Hero />
                </Container>
                <Container className="py-8 lg:py-20">
                    <Companies />
                </Container>
                <Connect />
                <Features />
                <Perks />
                <CTA />
            </Wrapper>
        </Background>
        </>
    )
};

export default HomePage
