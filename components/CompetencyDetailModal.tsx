import React, { useEffect, useRef } from "react";
import { X, CheckCircle2, Lightbulb, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CompetencyDetailModalProps {
    isOpen: boolean;
    onClose: () => void;
    role: string;
    domain: string;
    data: {
        summary?: string;
        behaviors: string[];
        examples: string[];
    } | null;
}

export function CompetencyDetailModal({ isOpen, onClose, role, domain, data }: CompetencyDetailModalProps) {
    const modalRef = useRef<HTMLDivElement>(null);

    // Close on escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        if (isOpen) {
            document.addEventListener("keydown", handleEscape);
            document.body.style.overflow = "hidden"; // Prevent background scrolling
        }
        return () => {
            document.removeEventListener("keydown", handleEscape);
            document.body.style.overflow = "unset";
        };
    }, [isOpen, onClose]);

    // Close on click outside
    const handleBackdropClick = (e: React.MouseEvent) => {
        if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
            onClose();
        }
    };

    if (!isOpen || !data) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-in fade-in duration-200"
            onClick={handleBackdropClick}
        >
            <div
                ref={modalRef}
                className="bg-background rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto border border-border animate-in zoom-in-95 duration-200"
                role="dialog"
                aria-modal="true"
            >
                {/* Header */}
                <div className="sticky top-0 z-10 bg-background/95 backdrop-blur border-b border-border p-6 flex items-start justify-between">
                    <div>
                        <div className="text-sm font-medium text-muted-foreground mb-1">
                            {domain}
                        </div>
                        <h2 className="text-2xl font-bold tracking-tight text-foreground">
                            {role}
                        </h2>
                    </div>
                    <Button variant="ghost" size="icon" onClick={onClose} className="rounded-full">
                        <X className="w-5 h-5" />
                        <span className="sr-only">Close</span>
                    </Button>
                </div>

                {/* Content */}
                <div className="p-6 space-y-8">
                    {/* Summary - Only render if present */}
                    {data.summary && (
                        <div>
                            <p className="text-lg text-foreground leading-relaxed font-medium">
                                {data.summary}
                            </p>
                        </div>
                    )}

                    {/* Key Behaviors */}
                    <div>
                        <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                            <CheckCircle2 className="w-4 h-4 text-green-600" />
                            Key Behaviors
                        </h3>
                        <ul className="space-y-3">
                            {data.behaviors.map((behavior, idx) => (
                                <li key={idx} className="flex items-start gap-3 bg-muted/30 p-3 rounded-lg border border-border/50">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                                    <span className="text-sm leading-relaxed">{behavior}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Concrete Examples */}
                    <div>
                        <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                            <Lightbulb className="w-4 h-4 text-amber-500" />
                            Concrete Examples
                        </h3>
                        <div className="grid gap-3">
                            {data.examples.map((example, idx) => (
                                <div key={idx} className="bg-blue-50 dark:bg-blue-950/30 p-4 rounded-lg border border-blue-100 dark:border-blue-900">
                                    <p className="text-sm text-blue-900 dark:text-blue-100 italic">
                                        "{example}"
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="sticky bottom-0 bg-muted/50 border-t border-border p-4 flex justify-end">
                    <Button onClick={onClose}>Close</Button>
                </div>
            </div>
        </div>
    );
}
