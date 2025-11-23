"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, BookOpen, GitCompare, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DimensionExplainer } from "@/components/DimensionExplainer";
import { RoleComparator } from "@/components/RoleComparator";
import { WorkExamplesExplorer } from "@/components/WorkExamplesExplorer";

type TabType = "dimensions" | "compare" | "examples";

interface Role {
    title: string;
    slug: string;
    track: 'IC' | 'Management';
    content: string;
    summary: string;
}

export default function DimensionsPage() {
    const [activeTab, setActiveTab] = useState<TabType>("dimensions");
    const [roles, setRoles] = useState<Role[]>([]);

    useEffect(() => {
        // Fetch role data from API route
        fetch('/api/career-framework')
            .then(res => res.json())
            .then(setRoles)
            .catch(err => console.error('Failed to fetch roles:', err));
    }, []);

    const tabs = [
        {
            id: "dimensions" as TabType,
            label: "Understanding Your Operating Profile",
            icon: BarChart3,
            description: "Learn about the 5 key profile dimensions that differentiate roles",
        },
        {
            id: "compare" as TabType,
            label: "Compare Roles",
            icon: GitCompare,
            description: "Side-by-side comparison of roles across dimensions",
        },
        {
            id: "examples" as TabType,
            label: "Work Examples",
            icon: BookOpen,
            description: "Concrete scenarios showing what good looks like",
        },
    ];

    return (
        <div className="container py-12 max-w-screen-xl mx-auto px-4">
            {/* Header */}
            <div className="mb-8">
                <Button variant="ghost" size="sm" asChild className="mb-4 pl-0 hover:pl-2 transition-all">
                    <Link href="/career-framework">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Framework
                    </Link>
                </Button>

                <div className="text-center space-y-4 mb-12">
                    <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
                        Role Operating Profile & Examples
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                        Understand how roles differ across key profile dimensions and see concrete examples of work at each level
                    </p>
                </div>

                {/* Measurement Layer Context */}
                <div className="mb-8 p-6 bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-xl border-2 border-primary/20">
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                            <BarChart3 className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                            <h2 className="text-xl font-bold mb-2">The Measurement Layer</h2>
                            <p className="text-muted-foreground mb-3">
                                These 5 dimensions provide an <strong>objective framework</strong> for understanding
                                role progression. Each role maps to specific levels (1-7) across all dimensions,
                                making growth measurable and career advancement clear.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary">
                                    Objective
                                </span>
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary">
                                    Measurable
                                </span>
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary">
                                    Cross-Role
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tab Navigation */}
            <div className="grid md:grid-cols-3 gap-4 mb-12">
                {tabs.map((tab) => {
                    const Icon = tab.icon;
                    const isActive = activeTab === tab.id;

                    return (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`group p-6 rounded-xl border-2 transition-all text-left ${isActive
                                ? "border-primary bg-primary/5 shadow-md"
                                : "border-border bg-card hover:border-primary hover:shadow-md"
                                }`}
                        >
                            <Icon className={`w-8 h-8 mb-3 ${isActive ? "text-primary" : "text-primary"}`} />
                            <h3 className={`font-bold mb-2 transition-colors ${isActive ? "text-primary" : "group-hover:text-primary"
                                }`}>
                                {tab.label}
                            </h3>
                            <p className="text-sm text-muted-foreground">{tab.description}</p>
                        </button>
                    );
                })}
            </div>

            {/* Tab Content */}
            <div className="bg-slate-50/50 dark:bg-slate-900/50 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 lg:p-8">
                {activeTab === "dimensions" && <DimensionExplainer />}
                {activeTab === "compare" && <RoleComparator roles={roles} />}
                {activeTab === "examples" && <WorkExamplesExplorer />}
            </div>

            {/* Footer Note */}
            <div className="mt-16 text-center text-sm text-muted-foreground">
                <p>
                    Profile dimensions are based on the{" "}
                    <Link href="/career-framework" className="underline hover:text-primary">
                        Software Engineering Career Framework
                    </Link>
                    . Examples are templates and should be adapted to your organization's context.
                </p>
            </div>
        </div>
    );
}
