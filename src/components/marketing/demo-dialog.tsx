"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, CheckCircle, AlertCircle } from "lucide-react";

interface DemoDialogProps {
    children: React.ReactNode;
}

type FormStatus = "idle" | "loading" | "success" | "error";

const DemoDialog = ({ children }: DemoDialogProps) => {
    const [open, setOpen] = useState(false);
    const [status, setStatus] = useState<FormStatus>("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setStatus("loading");
        setErrorMessage("");

        const formData = new FormData(event.currentTarget);
        formData.append("access_key", "35f05ab2-c97d-4766-8ed9-9eb74a5a0f85");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });

            const data = await response.json();

            if (data.success) {
                setStatus("success");
                (event.target as HTMLFormElement).reset();
                // Close dialog after 2 seconds on success
                setTimeout(() => {
                    setOpen(false);
                    setStatus("idle");
                }, 2000);
            } else {
                setStatus("error");
                setErrorMessage(data.message || "Something went wrong. Please try again.");
            }
        } catch {
            setStatus("error");
            setErrorMessage("Network error. Please check your connection and try again.");
        }
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>{children}</DialogTrigger>
            <DialogContent className="sm:max-w-md border-border/50 bg-background/95 backdrop-blur-xl">
                <DialogHeader>
                    <DialogTitle className="text-xl font-heading">Request a Demo</DialogTitle>
                    <DialogDescription>
                        Fill out the form below and our team will get back to you within 24 hours.
                    </DialogDescription>
                </DialogHeader>

                {status === "success" ? (
                    <div className="flex flex-col items-center justify-center py-8 gap-3">
                        <CheckCircle className="w-12 h-12 text-green-500" />
                        <p className="text-lg font-medium">Thank you!</p>
                        <p className="text-sm text-muted-foreground text-center">
                            We&apos;ve received your request and will be in touch soon.
                        </p>
                    </div>
                ) : (
                    <form onSubmit={onSubmit} className="space-y-4 mt-4">
                        <div className="space-y-2">
                            <Label htmlFor="name">Name</Label>
                            <Input
                                id="name"
                                name="name"
                                placeholder="Your name"
                                required
                                disabled={status === "loading"}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="you@company.com"
                                required
                                disabled={status === "loading"}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="organization">Organization</Label>
                            <Input
                                id="organization"
                                name="organization"
                                placeholder="Your organization"
                                disabled={status === "loading"}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="message">Message</Label>
                            <Textarea
                                id="message"
                                name="message"
                                placeholder="Tell us about your use case..."
                                rows={3}
                                required
                                disabled={status === "loading"}
                            />
                        </div>

                        {status === "error" && (
                            <div className="flex items-center gap-2 text-sm text-red-500">
                                <AlertCircle className="w-4 h-4" />
                                <span>{errorMessage}</span>
                            </div>
                        )}

                        <Button
                            type="submit"
                            className="w-full"
                            size="lg"
                            disabled={status === "loading"}
                        >
                            {status === "loading" ? (
                                <>
                                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                    Sending...
                                </>
                            ) : (
                                "Submit Request"
                            )}
                        </Button>
                    </form>
                )}
            </DialogContent>
        </Dialog>
    );
};

export default DemoDialog;

