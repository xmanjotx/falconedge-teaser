"use client";

import { useSignUp as useSignUpOriginal } from "@clerk/nextjs";

export const useSignUp = () => {
    try {
        return useSignUpOriginal();
    } catch (error) {
        // Return mock values when Clerk is not available
        return {
            isLoaded: false,
            signUp: null,
            setActive: async () => {},
        };
    }
};
