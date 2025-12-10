"use client";

import { useSignIn as useSignInOriginal } from "@clerk/nextjs";

export const useSignIn = () => {
    try {
        return useSignInOriginal();
    } catch (error) {
        // Return mock values when Clerk is not available
        return {
            isLoaded: false,
            signIn: null,
            setActive: async () => {},
        };
    }
};
