"use client";

import { 
    Activity, 
    AlertTriangle, 
    BarChart3, 
    Bell, 
    ChevronRight,
    Command, 
    Cpu, 
    LayoutDashboard, 
    LogOut, 
    MapPin, 
    Radio, 
    Search, 
    Settings, 
    Shield,
    Wifi
} from "lucide-react";

const DashboardMockup = () => {
    return (
        <div className="w-full h-full min-h-[500px] lg:min-h-[600px] bg-[#0a0a0f] rounded-lg lg:rounded-[20px] overflow-hidden flex text-sm">
            {/* Sidebar */}
            <div className="hidden md:flex flex-col w-52 border-r border-white/5 bg-[#0a0a0f] p-4">
                {/* Logo */}
                <div className="flex items-center gap-2 mb-8">
                    <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                        <Shield className="w-4 h-4 text-primary" />
                    </div>
                    <span className="font-semibold text-white">FalconEdge</span>
                </div>

                {/* Search */}
                <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 mb-6">
                    <Search className="w-4 h-4 text-white/40" />
                    <span className="text-white/40 text-xs">Search...</span>
                    <span className="ml-auto text-[10px] text-white/30 bg-white/5 px-1.5 py-0.5 rounded">⌘K</span>
                </div>

                {/* Nav Items */}
                <nav className="flex flex-col gap-1">
                    <NavItem icon={LayoutDashboard} label="Command Center" active />
                    <NavItem icon={MapPin} label="Sites" badge="12" />
                    <NavItem icon={Radio} label="Sensors" badge="847" />
                    <NavItem icon={Bell} label="Alerts" badge="3" badgeColor="bg-red-500" />
                    <NavItem icon={BarChart3} label="Analytics" />
                    <NavItem icon={Settings} label="Settings" />
                </nav>

                {/* Bottom */}
                <div className="mt-auto pt-4 border-t border-white/5">
                    <div className="flex items-center gap-2 px-3 py-2 text-white/50 hover:text-white/70 cursor-pointer">
                        <LogOut className="w-4 h-4" />
                        <span className="text-xs">Logout</span>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-white/5">
                    <div className="flex items-center gap-2 md:hidden">
                        <Shield className="w-5 h-5 text-primary" />
                        <span className="font-semibold text-white text-sm">FalconEdge</span>
                    </div>
                    <div className="hidden md:block" />
                    <div className="flex items-center gap-3">
                        <span className="text-xs text-primary flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                            System Online
                        </span>
                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                            <Command className="w-4 h-4 text-white/60" />
                        </div>
                    </div>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 p-4">
                    <StatCard 
                        label="Active Sensors" 
                        value="847" 
                        change="+12 online" 
                        icon={Radio}
                        positive 
                    />
                    <StatCard 
                        label="Threat Level" 
                        value="Low" 
                        change="Normal operations" 
                        icon={Shield}
                        positive
                    />
                    <StatCard 
                        label="Sites Online" 
                        value="12/12" 
                        change="All operational" 
                        icon={Wifi}
                        positive 
                    />
                    <StatCard 
                        label="Alerts Today" 
                        value="3" 
                        change="-2 from yesterday" 
                        icon={AlertTriangle}
                        positive 
                    />
                </div>

                {/* Main Grid */}
                <div className="flex-1 grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-4 p-4 pt-0 overflow-hidden">
                    {/* Chart Area */}
                    <div className="bg-white/[0.02] border border-white/5 rounded-xl p-4 flex flex-col">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-white font-medium">Sensor Activity Overview</h3>
                            <div className="flex items-center gap-2 text-xs text-white/40">
                                <span className="flex items-center gap-1">
                                    <span className="w-2 h-2 rounded-full bg-primary" />
                                    Detections
                                </span>
                                <span className="flex items-center gap-1">
                                    <span className="w-2 h-2 rounded-full bg-cyan-500" />
                                    Processed
                                </span>
                            </div>
                        </div>
                        
                        {/* Fake Chart */}
                        <div className="flex-1 relative min-h-[200px]">
                            <svg className="w-full h-full" viewBox="0 0 400 150" preserveAspectRatio="none">
                                {/* Grid lines */}
                                <line x1="0" y1="37.5" x2="400" y2="37.5" stroke="rgba(255,255,255,0.05)" />
                                <line x1="0" y1="75" x2="400" y2="75" stroke="rgba(255,255,255,0.05)" />
                                <line x1="0" y1="112.5" x2="400" y2="112.5" stroke="rgba(255,255,255,0.05)" />
                                
                                {/* Area 1 - Primary/Green */}
                                <defs>
                                    <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" stopColor="rgb(16, 185, 129)" stopOpacity="0.3" />
                                        <stop offset="100%" stopColor="rgb(16, 185, 129)" stopOpacity="0" />
                                    </linearGradient>
                                    <linearGradient id="grad2" x1="0%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" stopColor="rgb(6, 182, 212)" stopOpacity="0.2" />
                                        <stop offset="100%" stopColor="rgb(6, 182, 212)" stopOpacity="0" />
                                    </linearGradient>
                                </defs>
                                
                                {/* Cyan area (behind) */}
                                <path 
                                    d="M0,120 Q50,100 100,90 T200,70 T300,85 T400,60 L400,150 L0,150 Z" 
                                    fill="url(#grad2)"
                                />
                                <path 
                                    d="M0,120 Q50,100 100,90 T200,70 T300,85 T400,60" 
                                    fill="none" 
                                    stroke="rgb(6, 182, 212)" 
                                    strokeWidth="2"
                                />
                                
                                {/* Green area (front) */}
                                <path 
                                    d="M0,100 Q50,80 100,70 T200,50 T300,65 T400,40 L400,150 L0,150 Z" 
                                    fill="url(#grad1)"
                                />
                                <path 
                                    d="M0,100 Q50,80 100,70 T200,50 T300,65 T400,40" 
                                    fill="none" 
                                    stroke="rgb(16, 185, 129)" 
                                    strokeWidth="2"
                                />
                            </svg>
                            
                            {/* X-axis labels */}
                            <div className="absolute bottom-0 left-0 right-0 flex justify-between text-[10px] text-white/30 px-2">
                                <span>00:00</span>
                                <span>04:00</span>
                                <span>08:00</span>
                                <span>12:00</span>
                                <span>16:00</span>
                                <span>20:00</span>
                                <span>Now</span>
                            </div>
                        </div>
                    </div>

                    {/* Recent Alerts */}
                    <div className="bg-white/[0.02] border border-white/5 rounded-xl p-4 flex flex-col overflow-hidden">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-white font-medium">Recent Alerts</h3>
                            <span className="text-xs text-white/40">Last 24h</span>
                        </div>
                        
                        <div className="flex-1 flex flex-col gap-3 overflow-auto">
                            <AlertItem 
                                title="Perimeter Breach Detected"
                                location="Site Alpha - Zone 3"
                                time="2 min ago"
                                severity="high"
                            />
                            <AlertItem 
                                title="Anomaly Pattern Identified"
                                location="Metro Central Hub"
                                time="18 min ago"
                                severity="medium"
                            />
                            <AlertItem 
                                title="Sensor Offline"
                                location="Site Delta - Cam 47"
                                time="1 hr ago"
                                severity="low"
                            />
                            <AlertItem 
                                title="Motion Detected"
                                location="Site Beta - Entry Point"
                                time="3 hr ago"
                                severity="info"
                            />
                            <AlertItem 
                                title="System Health Check"
                                location="All Sites"
                                time="6 hr ago"
                                severity="info"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const NavItem = ({ 
    icon: Icon, 
    label, 
    active = false, 
    badge,
    badgeColor = "bg-white/10"
}: { 
    icon: any; 
    label: string; 
    active?: boolean;
    badge?: string;
    badgeColor?: string;
}) => (
    <div className={`flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer transition-colors ${
        active 
            ? "bg-primary/10 text-primary" 
            : "text-white/50 hover:text-white/70 hover:bg-white/5"
    }`}>
        <Icon className="w-4 h-4" />
        <span className="text-xs">{label}</span>
        {badge && (
            <span className={`ml-auto text-[10px] px-1.5 py-0.5 rounded ${badgeColor} ${
                badgeColor === "bg-red-500" ? "text-white" : "text-white/60"
            }`}>
                {badge}
            </span>
        )}
    </div>
);

const StatCard = ({ 
    label, 
    value, 
    change, 
    icon: Icon,
    positive 
}: { 
    label: string; 
    value: string; 
    change: string; 
    icon: any;
    positive?: boolean;
}) => (
    <div className="bg-white/[0.02] border border-white/5 rounded-xl p-3 lg:p-4">
        <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] lg:text-xs text-white/50">{label}</span>
            <Icon className="w-3.5 h-3.5 text-white/30" />
        </div>
        <div className="text-lg lg:text-2xl font-semibold text-white font-mono">{value}</div>
        <div className={`text-[10px] lg:text-xs mt-1 ${positive ? "text-primary" : "text-red-400"}`}>
            {change}
        </div>
    </div>
);

const AlertItem = ({ 
    title, 
    location, 
    time, 
    severity 
}: { 
    title: string; 
    location: string; 
    time: string; 
    severity: "high" | "medium" | "low" | "info";
}) => {
    const severityColors = {
        high: "bg-red-500",
        medium: "bg-amber-500",
        low: "bg-yellow-500",
        info: "bg-primary"
    };
    
    return (
        <div className="flex items-start gap-3 p-2 rounded-lg hover:bg-white/5 cursor-pointer transition-colors">
            <div className={`w-2 h-2 rounded-full mt-1.5 ${severityColors[severity]}`} />
            <div className="flex-1 min-w-0">
                <div className="text-xs text-white font-medium truncate">{title}</div>
                <div className="text-[10px] text-white/40 truncate">{location}</div>
            </div>
            <span className="text-[10px] text-white/30 whitespace-nowrap">{time}</span>
        </div>
    );
};

export default DashboardMockup;
