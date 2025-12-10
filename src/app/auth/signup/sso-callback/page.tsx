"use client";

import { AuthenticateWithRedirectCallback } from '@clerk/nextjs';
import ConditionalClerkProvider from "@/components/auth/conditional-clerk-provider";
import { useEffect } from 'react';

export default function SSOCallback() {
    useEffect(() => {
        // If Clerk is not configured, redirect to home
        if (!process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY) {
            window.location.href = "/";
        }
    }, []);

    // Only render the Clerk component if environment is available
    if (!process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY) {
        return null;
    }

    return (
        <ConditionalClerkProvider>
            <AuthenticateWithRedirectCallback
                signInForceRedirectUrl="/auth-callback"
                signUpForceRedirectUrl="/auth-callback"
            />
        </ConditionalClerkProvider>
    );
};
