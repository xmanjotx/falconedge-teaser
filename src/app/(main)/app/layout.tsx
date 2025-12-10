import DashboardNavbar from "@/components/dashboard/dashboard-navbar";
import DashboardSidebar from "@/components/dashboard/dashboard-sidebar";
import React from 'react';
import { generateMetadata } from "@/functions/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  title: "Dashboard",
  description: "Access your FalconEdge dashboard for tactical analytics and intelligence insights.",
  noIndex: true, // Don't index dashboard pages
});

interface Props {
    children: React.ReactNode;
}

const DashboardLayout = ({ children }: Props) => {
    return (
        <div className="flex flex-col min-h-screen w-full">
            <DashboardNavbar />
            <main className="flex flex-col lg:flex-row flex-1 size-full">
                <DashboardSidebar />
                <div className="w-full pt-14 lg:ml-72">
                    {children}
                </div>
            </main>
        </div>
    );
};

export default DashboardLayout;