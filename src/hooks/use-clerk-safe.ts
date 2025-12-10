"use client";

import { useClerk as useClerkOriginal } from "@clerk/nextjs";

export const useClerk = () => {
    try {
        return useClerkOriginal();
    } catch (error) {
        // Return a mock signOut function when Clerk is not available
        return {
            signOut: async () => {
                console.warn("Clerk is not configured. Redirecting to home...");
                window.location.href = "/";
            },
            user: null,
            isSignedIn: false,
            isLoaded: false,
        };
    }
};
