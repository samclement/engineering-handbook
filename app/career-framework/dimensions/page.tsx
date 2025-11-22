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
            label: "Understanding Dimensions",
            icon: BarChart3,
            description: "Learn about the 5 key dimensions that differentiate roles",
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
                        Role Dimensions & Examples
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                        Understand how roles differ across key dimensions and see concrete examples of work at each level
                    </p>
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
                    Dimensions are based on the{" "}
                    <Link href="/career-framework" className="underline hover:text-primary">
                        Software Engineering Career Framework
                    </Link>
                    . Examples are templates and should be adapted to your organization's context.
                </p>
            </div>
        </div>
    );
}
