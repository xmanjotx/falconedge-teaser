"use client";

import React from "react";
import { ClerkProvider } from "@clerk/nextjs";

interface ConditionalClerkProviderProps {
    children: React.ReactNode;
}

const ConditionalClerkProvider = ({ children }: ConditionalClerkProviderProps) => {
    const publishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;
    
    // Only render ClerkProvider if the publishable key is available
    if (!publishableKey) {
        return <>{children}</>;
    }

    return (
        <ClerkProvider publishableKey={publishableKey}>
            {children}
        </ClerkProvider>
    );
};

export default ConditionalClerkProvider;
