import { Background, Container, Wrapper } from "@/components";
import { generateMetadata } from "@/functions/metadata";
import { CheckCircle2, AlertCircle, RefreshCw } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  title: "System Status - FalconEdge",
  description: "Real-time system operational status.",
});

export default function StatusPage() {
    return (
        <Background>
            <Wrapper className="py-20 relative min-h-screen">
                <Container className="relative">
                    <div className="max-w-3xl mx-auto">
                        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12">
                            <div>
                                <h1 className="text-3xl font-bold font-heading mb-2">System Status</h1>
                                <p className="text-muted-foreground">Current operational status of FalconEdge services.</p>
                            </div>
                            <div className="flex items-center gap-2 mt-4 md:mt-0 text-sm text-muted-foreground bg-muted/20 px-3 py-1 rounded-full border border-border/50">
                                <RefreshCw className="w-3 h-3 animate-spin" />
                                Updated just now
                            </div>
                        </div>

                        {/* Main Status Card */}
                        <div className="p-6 rounded-2xl bg-green-500/10 border border-green-500/20 mb-8 flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(34,197,94,0.3)]">
                                <CheckCircle2 className="w-6 h-6 text-black" />
                            </div>
                            <div>
                                <h2 className="text-xl font-bold text-green-500">All Systems Operational</h2>
                                <p className="text-green-500/80">No incidents reported in the last 24 hours.</p>
                            </div>
                        </div>

                        {/* Component Status */}
                        <div className="space-y-4">
                            <StatusItem name="API Gateway" status="operational" />
                            <StatusItem name="Dashboard Interface" status="operational" />
                            <StatusItem name="Real-time Processing Engine" status="operational" />
                            <StatusItem name="Data Ingestion Service" status="operational" />
                            <StatusItem name="Notification System" status="operational" />
                            <StatusItem name="Third-party Integrations" status="operational" />
                        </div>

                        {/* Maintenance Schedule */}
                        <div className="mt-12 p-6 rounded-xl bg-card border border-border/50">
                            <h3 className="text-lg font-bold mb-4">Scheduled Maintenance</h3>
                            <p className="text-muted-foreground text-sm">No maintenance scheduled for the next 7 days.</p>
                        </div>
                    </div>
                </Container>
            </Wrapper>
        </Background>
    );
}

function StatusItem({ name, status }: { name: string; status: "operational" | "degraded" | "down" }) {
    return (
        <div className="flex items-center justify-between p-4 rounded-xl bg-card border border-border/50">
            <span className="font-medium">{name}</span>
            <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground capitalize">{status}</span>
                <div className={`w-2 h-2 rounded-full ${status === 'operational' ? 'bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]' : 'bg-red-500'}`} />
            </div>
        </div>
    );
}
