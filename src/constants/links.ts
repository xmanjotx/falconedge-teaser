import { ClockIcon, MessageSquare, BarChart2, FileTextIcon, UserPlusIcon, CreditCardIcon, SettingsIcon, LogOut, Headphones, ChartPieIcon, LucideIcon, MessagesSquareIcon, NewspaperIcon, MegaphoneIcon, LineChartIcon, MessageSquareTextIcon, UsersIcon } from 'lucide-react';

type Link = {
    href: string;
    label: string;
    icon: LucideIcon;
}

export const SIDEBAR_LINKS: Link[] = [
    {
        href: "/dashboard",
        label: "Dashboard",
        icon: ChartPieIcon,
    },
    {
        href: "/dashboard/campaigns",
        label: "Campaigns",
        icon: MegaphoneIcon
    },
    {
        href: "/dashboard/analytics",
        label: "Analytics",
        icon: LineChartIcon
    },
    {
        href: "/dashboard/posts",
        label: "Posts",
        icon: MessageSquareTextIcon
    },
    {
        href: "/dashboard/engagement",
        label: "Engagement",
        icon: UsersIcon
    },
    {
        href: "/dashboard/billing",
        label: "Billing",
        icon: CreditCardIcon
    },
    {
        href: "/dashboard/settings",
        label: "Settings",
        icon: SettingsIcon
    },
];

export const FOOTER_LINKS = [
    {
        title: "Platform",
        links: [
            { name: "Overview", href: "/" },
            { name: "Capabilities", href: "#capabilities" },
            { name: "Architecture", href: "#architecture" },
            { name: "Security", href: "#security" },
        ],
    },
    {
        title: "Use Cases",
        links: [
            { name: "Defence", href: "/defence" },
            { name: "Metro & Smart Cities", href: "/metro" },
            { name: "Intelligence Agencies", href: "/intelligence" },
            { name: "Critical Infrastructure", href: "/infrastructure" },
        ],
    },
    {
        title: "Company",
        links: [
            { name: "About", href: "/about" },
            { name: "Contact", href: "/contact" },
            { name: "Careers", href: "/careers" },
            { name: "Press", href: "/press" },
        ],
    },
    {
        title: "Developers",
        links: [
            { name: "Documentation", href: "/docs" },
            { name: "API Reference", href: "/api" },
            { name: "SDKs", href: "/sdks" },
            { name: "Status", href: "/status" },
        ],
    },
];
