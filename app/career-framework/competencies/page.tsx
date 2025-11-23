import React from "react";
import Link from "next/link";
import { ArrowLeft, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CompetenciesPage() {
    return (
        <div className="container py-12 max-w-screen-lg mx-auto px-4">
            <div className="mb-8">
                <Button variant="ghost" size="sm" asChild className="mb-4 pl-0 hover:pl-2 transition-all">
                    <Link href="/career-framework">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Framework
                    </Link>
                </Button>

                <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <BookOpen className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                        <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">Role Competencies</h1>
                        <p className="text-muted-foreground">Primary framing for the career framework</p>
                    </div>
                </div>
            </div>

            {/* Context Card */}
            <div className="mb-8 p-6 bg-gradient-to-r from-blue-50 to-blue-100/50 dark:from-blue-950 dark:to-blue-900/30 rounded-xl border-2 border-blue-200 dark:border-blue-800">
                <h2 className="text-xl font-bold mb-2">About Role Competencies</h2>
                <p className="text-sm text-muted-foreground mb-4">
                    This document provides high-level framing for all engineering roles, organized by competency
                    categories (SDLC, Leadership, Design, etc.). It serves as the entry point for understanding
                    role expectations and progression patterns.
                </p>
                <div className="flex flex-wrap gap-4 text-sm">
                    <Link href="/career-framework/dimensions" className="text-primary hover:underline">
                        → Explore Dimensions (Measurement)
                    </Link>
                    <a href="/Software-Engineering-Career-Framework-V1.html" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                        → View SDLC Details
                    </a>
                </div>
            </div>

            {/* Embedded Document */}
            <div className="prose prose-slate dark:prose-invert max-w-none lg:prose-lg">
                <iframe
                    src="/role-competencies.md"
                    className="w-full border rounded-lg"
                    style={{ height: "80vh", minHeight: "600px" }}
                    title="Role Competencies Document"
                />

                <div className="mt-6 p-4 bg-muted rounded-lg">
                    <p className="text-sm text-muted-foreground mb-2">
                        <strong>Note:</strong> If the document doesn't display above, you can access it directly:
                    </p>
                    <a
                        href="/role-competencies.md"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-primary hover:underline inline-flex items-center gap-1"
                    >
                        Open role-competencies.md in new tab
                        <ArrowLeft className="w-4 h-4 rotate-180" />
                    </a>
                </div>
            </div>
        </div>
    );
}
