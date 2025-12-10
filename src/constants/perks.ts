import { Icons } from "@/components";
import { ZapIcon, ChartSplineIcon, LifeBuoyIcon, PaletteIcon, ShieldCheckIcon, WaypointsIcon, BrainCircuitIcon, SparklesIcon, Target, Clock, Eye, Lock, Wifi, Cpu } from "lucide-react";
import React from "react";

export const PERKS = [
    {
        icon: Target,
        title: "Precision",
        description: "Every signal matters. Every decision counts. Accuracy that catches what others miss."
    },
    {
        icon: ZapIcon,
        title: "Speed",
        description: "Sub-second latency or it didn't happen. Real-time processing at the edge."
    },
    {
        icon: Eye,
        title: "Clarity",
        description: "Complexity hidden. Understanding delivered. Unified views across all data sources."
    },
    {
        icon: Lock,
        title: "Trust",
        description: "Mission-critical systems require absolute reliability. Zero-trust architecture by default."
    },
    {
        icon: Wifi,
        title: "Resilience",
        description: "Works when the internet doesn't. Autonomous edge operation with graceful degradation."
    },
    {
        icon: Cpu,
        title: "Edge-Native",
        description: "Intelligence processed where it's captured. No cloud dependency for critical decisions."
    },
];