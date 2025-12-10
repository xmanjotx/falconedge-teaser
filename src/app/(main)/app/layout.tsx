import DashboardNavbar from "@/components/dashboard/dashboard-navbar";
import DashboardSidebar from "@/components/dashboard/dashboard-sidebar";
import React from 'react';
import ConditionalClerkProvider from "@/components/auth/conditional-clerk-provider";

interface Props {
    children: React.ReactNode;
}

const DashboardLayout = ({ children }: Props) => {
    return (
        <ConditionalClerkProvider>
            <div className="flex flex-col min-h-screen w-full">
                <DashboardNavbar />
                <main className="flex flex-col lg:flex-row flex-1 size-full">
                    <DashboardSidebar />
                    <div className="w-full pt-14 lg:ml-72">
                        {children}
                    </div>
                </main>
            </div>
        </ConditionalClerkProvider>
    );
};

export default DashboardLayout;