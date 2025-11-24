"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, Code, Users, Sparkles, Target, Clock, HelpCircle, ChevronRight, Lightbulb, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getRoleMatrixKeys } from "@/lib/matrix-mapping";
import { sdlcData } from "@/lib/sdlc-data";
import { leadershipData } from "@/lib/leadership-data";
import { dimensions, getRoleDimensions } from "@/lib/dimensions-data";
import { cn } from "@/lib/utils";

const roles = [
    { slug: "graduate-software-engineer-gse", title: "Graduate Software Engineer", track: "Foundation" },
    { slug: "associate-software-engineer-ase", title: "Associate Software Engineer", track: "Foundation" },
    { slug: "software-engineer-se", title: "Software Engineer", track: "Foundation" },
    { slug: "senior-software-engineer-sse", title: "Senior Software Engineer", track: "Foundation" },
    { slug: "staff-software-engineer", title: "Staff Software Engineer", track: "IC" },
    { slug: "principal-software-engineer", title: "Principal Software Engineer", track: "IC" },
    { slug: "engineering-manager-em", title: "Engineering Manager", track: "Management" },
    { slug: "head-of-software-engineering-hose", title: "Head of Software Engineering", track: "Management" },
    { slug: "senior-head-of-software-engineering-shose", title: "Senior Head of Software Engineering", track: "Management" },
];

export default function CareerProgressionPage() {
    const [currentRoleSlug, setCurrentRoleSlug] = useState("senior-software-engineer-sse");
    const [targetRoleSlug, setTargetRoleSlug] = useState("staff-software-engineer");

    const currentRole = roles.find(r => r.slug === currentRoleSlug);
    const targetRole = roles.find(r => r.slug === targetRoleSlug);

    const currentMatrix = getRoleMatrixKeys(currentRoleSlug);
    const targetMatrix = getRoleMatrixKeys(targetRoleSlug);

    const currentDimensions = getRoleDimensions(currentRoleSlug);
    const targetDimensions = getRoleDimensions(targetRoleSlug);

    const getComparisonItems = (data: typeof sdlcData | typeof leadershipData, currentKey: string | null, targetKey: string | null) => {
        const items: { title: string; current: string | null; target: string | null; examples: string[] }[] = [];

        data.forEach(domain => {
            const currentLevel = currentKey ? domain.levels[currentKey] : null;
            const targetLevel = targetKey ? domain.levels[targetKey] : null;

            if (currentLevel || targetLevel) {
                items.push({
                    title: domain.name,
                    current: currentLevel?.summary || null,
                    target: targetLevel?.summary || null,
                    examples: targetLevel?.examples || []
                });
            }
        });
        return items;
    };

    const sdlcComparison = getComparisonItems(sdlcData, currentMatrix.sdlcKey, targetMatrix.sdlcKey);
    const leadershipComparison = getComparisonItems(leadershipData, currentMatrix.leadershipKey, targetMatrix.leadershipKey);

    return (
        <div className="container py-6 max-w-screen-2xl mx-auto px-4">
            {/* Header */}
            <div className="mb-6">
                <Button variant="ghost" size="sm" asChild className="mb-2 pl-0 hover:pl-2 transition-all">
                    <Link href="/career-framework">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Framework
                    </Link>
                </Button>

                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight lg:text-3xl mb-1">
                            Career Progression
                        </h1>
                        <p className="text-sm text-muted-foreground max-w-2xl">
                            Compare roles side-by-side to understand the specific growth requirements.
                        </p>
                    </div>

                    {/* Compact Role Selector */}
                    <div className="flex flex-col sm:flex-row items-center gap-2 bg-slate-100 dark:bg-slate-900 p-1.5 rounded-lg border border-slate-200 dark:border-slate-800">
                        <div className="relative">
                            <select
                                value={currentRoleSlug}
                                onChange={(e) => setCurrentRoleSlug(e.target.value)}
                                className="w-[220px] h-9 text-sm bg-white dark:bg-slate-950 border-0 shadow-sm rounded-md pl-3 pr-8 appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/20"
                            >
                                {roles.map(role => (
                                    <option key={role.slug} value={role.slug}>{role.title}</option>
                                ))}
                            </select>
                            <ChevronDown className="absolute right-2 top-2.5 h-4 w-4 text-muted-foreground pointer-events-none" />
                        </div>

                        <ArrowRight className="w-3 h-3 text-muted-foreground hidden sm:block" />
                        <div className="w-full h-px bg-slate-300 sm:hidden" />

                        <div className="relative">
                            <select
                                value={targetRoleSlug}
                                onChange={(e) => setTargetRoleSlug(e.target.value)}
                                className="w-[220px] h-9 text-sm bg-white dark:bg-slate-950 border-0 shadow-sm rounded-md pl-3 pr-8 appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/20"
                            >
                                {roles.map(role => (
                                    <option key={role.slug} value={role.slug}>{role.title}</option>
                                ))}
                            </select>
                            <ChevronDown className="absolute right-2 top-2.5 h-4 w-4 text-muted-foreground pointer-events-none" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Unified Comparison Grid */}
            <div className="border rounded-lg overflow-hidden bg-white dark:bg-slate-950 shadow-sm text-sm">

                {/* Sticky Header */}
                <div className="sticky top-0 z-10 grid grid-cols-[200px_1fr_1fr_1fr] bg-slate-50/95 dark:bg-slate-900/95 backdrop-blur border-b border-slate-200 dark:border-slate-800 font-semibold text-muted-foreground text-xs uppercase tracking-wider">
                    <div className="p-3 pl-4">Competency</div>
                    <div className="p-3 border-l border-slate-200 dark:border-slate-800 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
                        {currentRole?.title}
                    </div>
                    <div className="p-3 border-l border-slate-200 dark:border-slate-800 flex items-center gap-2 text-primary">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                        {targetRole?.title}
                    </div>
                    <div className="p-3 border-l border-slate-200 dark:border-slate-800 flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
                        <Lightbulb className="w-3 h-3" />
                        Concrete Suggestions
                    </div>
                </div>

                {/* SECTION: Scope & Impact */}
                <div className="bg-emerald-50/50 dark:bg-emerald-950/10 border-b border-emerald-100 dark:border-emerald-900/30 p-2 pl-4 flex items-center gap-2 font-bold text-emerald-800 dark:text-emerald-400 text-xs uppercase tracking-wider">
                    <Target className="w-4 h-4" />
                    Scope & Impact
                </div>

                <div className="divide-y divide-slate-100 dark:divide-slate-800">
                    {(['scope', 'timeHorizon', 'ambiguity'] as const).map(dimId => {
                        const dimension = dimensions.find(d => d.id === dimId);
                        if (!dimension) return null;

                        const currentLevelNum = currentDimensions[dimId];
                        const targetLevelNum = targetDimensions[dimId];
                        const currentLevel = dimension.levels.find(l => l.level === currentLevelNum);
                        const targetLevel = dimension.levels.find(l => l.level === targetLevelNum);
                        const isDelta = targetLevelNum > currentLevelNum;

                        return (
                            <div key={dimId} className="grid grid-cols-[200px_1fr_1fr_1fr] group hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors">
                                <div className="p-3 pl-4 font-medium text-slate-700 dark:text-slate-300 flex items-center gap-2">
                                    {dimId === 'scope' && <Target className="w-3.5 h-3.5 text-emerald-500" />}
                                    {dimId === 'timeHorizon' && <Clock className="w-3.5 h-3.5 text-emerald-500" />}
                                    {dimId === 'ambiguity' && <HelpCircle className="w-3.5 h-3.5 text-emerald-500" />}
                                    {dimension.name}
                                </div>
                                <div className="p-3 border-l border-slate-100 dark:border-slate-800 text-muted-foreground">
                                    <div className="font-semibold text-slate-900 dark:text-slate-100 mb-0.5 text-xs">{currentLevel?.label || "N/A"}</div>
                                    <div className="text-xs leading-snug opacity-80">{currentLevel?.description}</div>
                                </div>
                                <div className={cn(
                                    "p-3 border-l border-slate-100 dark:border-slate-800 relative",
                                    isDelta ? "bg-emerald-50/30 dark:bg-emerald-900/10" : ""
                                )}>
                                    {isDelta && <Sparkles className="w-3.5 h-3.5 text-emerald-500 absolute top-3 right-3" />}
                                    <div className={cn("font-semibold mb-0.5 text-xs", isDelta ? "text-emerald-700 dark:text-emerald-400" : "text-slate-900 dark:text-slate-100")}>
                                        {targetLevel?.label || "N/A"}
                                    </div>
                                    <div className="text-xs leading-snug opacity-80 text-muted-foreground">{targetLevel?.description}</div>
                                </div>
                                <div className="p-3 border-l border-slate-100 dark:border-slate-800 bg-slate-50/30 dark:bg-slate-900/10 text-xs text-muted-foreground italic">
                                    Contextual changes inherent to the role.
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* SECTION: SDLC */}
                <div className="bg-blue-50/50 dark:bg-blue-950/10 border-y border-blue-100 dark:border-blue-900/30 p-2 pl-4 flex items-center gap-2 font-bold text-blue-800 dark:text-blue-400 mt-2 text-xs uppercase tracking-wider">
                    <Code className="w-4 h-4" />
                    SDLC Expectations
                </div>

                <div className="divide-y divide-slate-100 dark:divide-slate-800">
                    {sdlcComparison.map((item, idx) => {
                        const isDelta = item.target !== item.current;
                        return (
                            <div key={idx} className="grid grid-cols-[200px_1fr_1fr_1fr] group hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors">
                                <div className="p-3 pl-4 font-medium text-slate-700 dark:text-slate-300">
                                    {item.title}
                                </div>
                                <div className="p-3 border-l border-slate-100 dark:border-slate-800 text-muted-foreground text-xs leading-relaxed">
                                    {item.current || <span className="italic opacity-50">Not applicable</span>}
                                </div>
                                <div className={cn(
                                    "p-3 border-l border-slate-100 dark:border-slate-800 text-xs leading-relaxed relative",
                                    isDelta ? "bg-blue-50/30 dark:bg-blue-900/10 text-slate-900 dark:text-slate-100" : "text-muted-foreground"
                                )}>
                                    {isDelta && <Sparkles className="w-3.5 h-3.5 text-blue-500 absolute top-3 right-3" />}
                                    {item.target || <span className="italic opacity-50">Not applicable</span>}
                                </div>
                                <div className="p-3 border-l border-slate-100 dark:border-slate-800 bg-slate-50/30 dark:bg-slate-900/10 text-xs">
                                    {item.examples && item.examples.length > 0 ? (
                                        <ul className="list-disc list-outside ml-3 space-y-1 text-muted-foreground">
                                            {item.examples.slice(0, 2).map((ex, i) => (
                                                <li key={i}>{ex}</li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <span className="text-muted-foreground italic opacity-50">No specific examples</span>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* SECTION: Leadership */}
                <div className="bg-purple-50/50 dark:bg-purple-950/10 border-y border-purple-100 dark:border-purple-900/30 p-2 pl-4 flex items-center gap-2 font-bold text-purple-800 dark:text-purple-400 mt-2 text-xs uppercase tracking-wider">
                    <Users className="w-4 h-4" />
                    Leadership Expectations
                </div>

                <div className="divide-y divide-slate-100 dark:divide-slate-800">
                    {leadershipComparison.map((item, idx) => {
                        const isDelta = item.target !== item.current;
                        return (
                            <div key={idx} className="grid grid-cols-[200px_1fr_1fr_1fr] group hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors">
                                <div className="p-3 pl-4 font-medium text-slate-700 dark:text-slate-300">
                                    {item.title}
                                </div>
                                <div className="p-3 border-l border-slate-100 dark:border-slate-800 text-muted-foreground text-xs leading-relaxed">
                                    {item.current || <span className="italic opacity-50">Not applicable</span>}
                                </div>
                                <div className={cn(
                                    "p-3 border-l border-slate-100 dark:border-slate-800 text-xs leading-relaxed relative",
                                    isDelta ? "bg-purple-50/30 dark:bg-purple-900/10 text-slate-900 dark:text-slate-100" : "text-muted-foreground"
                                )}>
                                    {isDelta && <Sparkles className="w-3.5 h-3.5 text-purple-500 absolute top-3 right-3" />}
                                    {item.target || <span className="italic opacity-50">Not applicable</span>}
                                </div>
                                <div className="p-3 border-l border-slate-100 dark:border-slate-800 bg-slate-50/30 dark:bg-slate-900/10 text-xs">
                                    {item.examples && item.examples.length > 0 ? (
                                        <ul className="list-disc list-outside ml-3 space-y-1 text-muted-foreground">
                                            {item.examples.slice(0, 2).map((ex, i) => (
                                                <li key={i}>{ex}</li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <span className="text-muted-foreground italic opacity-50">No specific examples</span>
                                    )}
                                </div>
                            </div>
                        );
                    })}

                    {leadershipComparison.length === 0 && (
                        <div className="p-6 text-center text-muted-foreground text-xs italic">
                            No specific leadership expectations defined for these roles.
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
}
