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

    const [activeTab, setActiveTab] = useState<'comparison' | 'growth'>('comparison');
    const [expandedSections, setExpandedSections] = useState<string[]>(['scope']);

    const toggleSection = (section: string) => {
        setExpandedSections(prev =>
            prev.includes(section) ? prev.filter(s => s !== section) : [...prev, section]
        );
    };

    const sdlcComparison = getComparisonItems(sdlcData, currentMatrix.sdlcKey || null, targetMatrix.sdlcKey || null);
    const leadershipComparison = getComparisonItems(leadershipData, currentMatrix.leadershipKey || null, targetMatrix.leadershipKey || null);

    // Collect all examples for the Growth Plan
    const growthPlan = [
        ...sdlcComparison.flatMap(item => item.examples?.map(ex => ({ category: "SDLC: " + item.title, text: ex })) || []),
        ...leadershipComparison.flatMap(item => item.examples?.map(ex => ({ category: "Leadership: " + item.title, text: ex })) || [])
    ];

    return (
        <div className="container py-8 max-w-screen-xl mx-auto px-4">
            {/* Header and Context */}
            <div className="mb-8 space-y-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Link href="/career-framework" className="hover:text-primary transition-colors flex items-center gap-1">
                        <ArrowLeft className="w-4 h-4" /> Back to Framework
                    </Link>
                </div>

                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                    <div className="space-y-2 max-w-2xl">
                        <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
                            Progression Gap Analysis
                        </h1>
                        <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                            Compare your current role against the next level to identify specific growth areas.
                            Use the <strong>Comparison</strong> view to understand the differences, and the <strong>Growth Plan</strong> to see actionable steps.
                        </p>
                    </div>

                    {/* Role Selector */}
                    <div className="flex flex-col sm:flex-row items-center gap-3 bg-white dark:bg-slate-900 p-2 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                        <div className="relative group">
                            <label className="absolute -top-2 left-2 bg-white dark:bg-slate-900 px-1 text-[10px] font-medium text-slate-500 uppercase tracking-wider">Current Role</label>
                            <select
                                value={currentRoleSlug}
                                onChange={(e) => setCurrentRoleSlug(e.target.value)}
                                className="w-[200px] h-10 text-sm bg-transparent border border-slate-200 dark:border-slate-700 rounded-lg pl-3 pr-8 appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/20 hover:border-slate-300 transition-colors"
                            >
                                {roles.map(role => (
                                    <option key={role.slug} value={role.slug}>{role.title}</option>
                                ))}
                            </select>
                            <ChevronDown className="absolute right-2 top-3 h-4 w-4 text-slate-400 pointer-events-none group-hover:text-slate-600 transition-colors" />
                        </div>

                        <ArrowRight className="w-4 h-4 text-slate-300 hidden sm:block" />
                        <div className="w-full h-px bg-slate-100 sm:hidden" />

                        <div className="relative group">
                            <label className="absolute -top-2 left-2 bg-white dark:bg-slate-900 px-1 text-[10px] font-medium text-primary uppercase tracking-wider">Target Role</label>
                            <select
                                value={targetRoleSlug}
                                onChange={(e) => setTargetRoleSlug(e.target.value)}
                                className="w-[200px] h-10 text-sm bg-transparent border border-primary/30 rounded-lg pl-3 pr-8 appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/20 hover:border-primary/50 transition-colors font-medium text-primary"
                            >
                                {roles.map(role => (
                                    <option key={role.slug} value={role.slug}>{role.title}</option>
                                ))}
                            </select>
                            <ChevronDown className="absolute right-2 top-3 h-4 w-4 text-primary/50 pointer-events-none group-hover:text-primary transition-colors" />
                        </div>
                    </div>
                </div>
            </div>

            {/* View Toggle */}
            <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800/50 p-1 rounded-lg w-fit mb-8">
                <button
                    onClick={() => setActiveTab('comparison')}
                    className={cn(
                        "px-4 py-2 text-sm font-medium rounded-md transition-all",
                        activeTab === 'comparison'
                            ? "bg-white dark:bg-slate-950 text-primary shadow-sm"
                            : "text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
                    )}
                >
                    Comparison View
                </button>
                <button
                    onClick={() => setActiveTab('growth')}
                    className={cn(
                        "px-4 py-2 text-sm font-medium rounded-md transition-all",
                        activeTab === 'growth'
                            ? "bg-white dark:bg-slate-950 text-primary shadow-sm"
                            : "text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
                    )}
                >
                    Growth Plan
                </button>
            </div>

            {activeTab === 'comparison' ? (
                <div className="space-y-4">
                    {/* SECTION: Scope & Impact */}
                    <div className="border rounded-lg bg-white dark:bg-slate-950 overflow-hidden">
                        <button
                            onClick={() => toggleSection('scope')}
                            className="w-full flex items-center justify-between p-4 bg-slate-50/50 dark:bg-slate-900/50 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors text-left"
                        >
                            <div className="flex items-center gap-2 font-semibold text-slate-900 dark:text-slate-100">
                                <Target className="w-5 h-5 text-emerald-500" />
                                Scope & Impact
                            </div>
                            <ChevronDown className={cn("w-5 h-5 text-slate-400 transition-transform", expandedSections.includes('scope') ? "rotate-180" : "")} />
                        </button>

                        {expandedSections.includes('scope') && (
                            <div className="border-t">
                                <div className="grid grid-cols-[1fr_1fr_1fr] bg-slate-50/30 text-xs font-medium text-muted-foreground border-b">
                                    <div className="p-3 pl-6">Dimension</div>
                                    <div className="p-3 border-l">Current: {currentRole?.title}</div>
                                    <div className="p-3 border-l text-primary font-semibold">Target: {targetRole?.title}</div>
                                </div>
                                {(['scope', 'timeHorizon', 'ambiguity'] as const).map(dimId => {
                                    const dimension = dimensions.find(d => d.id === dimId)!;
                                    const currentLevelNum = getRoleDimensions(currentRoleSlug)[dimId];
                                    const targetLevelNum = getRoleDimensions(targetRoleSlug)[dimId];
                                    const isDelta = currentLevelNum !== targetLevelNum;

                                    const currentLevelObj = dimension.levels.find(l => l.level === currentLevelNum);
                                    const targetLevelObj = dimension.levels.find(l => l.level === targetLevelNum);

                                    return (
                                        <div key={dimId} className="grid grid-cols-[1fr_1fr_1fr] text-sm hover:bg-slate-50/50 transition-colors border-b last:border-0">
                                            <div className="p-4 pl-6 font-medium text-slate-700 dark:text-slate-300">
                                                {dimension.name}
                                                <div className="text-xs font-normal text-muted-foreground mt-0.5">{dimension.description}</div>
                                            </div>
                                            <div className="p-4 border-l text-muted-foreground">
                                                {currentLevelObj?.label || "N/A"}
                                            </div>
                                            <div className={cn("p-4 border-l font-medium", isDelta ? "bg-emerald-50/30 text-emerald-700 dark:text-emerald-400" : "text-slate-700 dark:text-slate-300")}>
                                                {isDelta && <Sparkles className="w-3.5 h-3.5 text-emerald-500 inline mr-1.5" />}
                                                {targetLevelObj?.label || "N/A"}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </div>

                    {/* SECTION: SDLC */}
                    <div className="border rounded-lg bg-white dark:bg-slate-950 overflow-hidden">
                        <button
                            onClick={() => toggleSection('sdlc')}
                            className="w-full flex items-center justify-between p-4 bg-slate-50/50 dark:bg-slate-900/50 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors text-left"
                        >
                            <div className="flex items-center gap-2 font-semibold text-slate-900 dark:text-slate-100">
                                <Code className="w-5 h-5 text-blue-500" />
                                SDLC Expectations
                            </div>
                            <ChevronDown className={cn("w-5 h-5 text-slate-400 transition-transform", expandedSections.includes('sdlc') ? "rotate-180" : "")} />
                        </button>

                        {expandedSections.includes('sdlc') && (
                            <div className="border-t">
                                <div className="grid grid-cols-[1fr_1fr_1fr] bg-slate-50/30 text-xs font-medium text-muted-foreground border-b">
                                    <div className="p-3 pl-6">Competency</div>
                                    <div className="p-3 border-l">Current: {currentRole?.title}</div>
                                    <div className="p-3 border-l text-primary font-semibold">Target: {targetRole?.title}</div>
                                </div>
                                {sdlcComparison.map((item, idx) => {
                                    const isDelta = item.current !== item.target;
                                    return (
                                        <div key={idx} className="grid grid-cols-[1fr_1fr_1fr] text-sm hover:bg-slate-50/50 transition-colors border-b last:border-0">
                                            <div className="p-4 pl-6 font-medium text-slate-700 dark:text-slate-300">{item.title}</div>
                                            <div className="p-4 border-l text-muted-foreground text-xs leading-relaxed">
                                                {item.current || "Not applicable"}
                                            </div>
                                            <div className={cn("p-4 border-l text-xs leading-relaxed", isDelta ? "bg-blue-50/30 text-slate-900 dark:text-slate-100" : "text-muted-foreground")}>
                                                {isDelta && <Sparkles className="w-3.5 h-3.5 text-blue-500 inline mr-1.5" />}
                                                {item.target || "Not applicable"}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </div>

                    {/* SECTION: Leadership */}
                    <div className="border rounded-lg bg-white dark:bg-slate-950 overflow-hidden">
                        <button
                            onClick={() => toggleSection('leadership')}
                            className="w-full flex items-center justify-between p-4 bg-slate-50/50 dark:bg-slate-900/50 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors text-left"
                        >
                            <div className="flex items-center gap-2 font-semibold text-slate-900 dark:text-slate-100">
                                <Users className="w-5 h-5 text-purple-500" />
                                Leadership Expectations
                            </div>
                            <ChevronDown className={cn("w-5 h-5 text-slate-400 transition-transform", expandedSections.includes('leadership') ? "rotate-180" : "")} />
                        </button>

                        {expandedSections.includes('leadership') && (
                            <div className="border-t">
                                <div className="grid grid-cols-[1fr_1fr_1fr] bg-slate-50/30 text-xs font-medium text-muted-foreground border-b">
                                    <div className="p-3 pl-6">Competency</div>
                                    <div className="p-3 border-l">Current: {currentRole?.title}</div>
                                    <div className="p-3 border-l text-primary font-semibold">Target: {targetRole?.title}</div>
                                </div>
                                {leadershipComparison.map((item, idx) => {
                                    const isDelta = item.current !== item.target;
                                    return (
                                        <div key={idx} className="grid grid-cols-[1fr_1fr_1fr] text-sm hover:bg-slate-50/50 transition-colors border-b last:border-0">
                                            <div className="p-4 pl-6 font-medium text-slate-700 dark:text-slate-300">{item.title}</div>
                                            <div className="p-4 border-l text-muted-foreground text-xs leading-relaxed">
                                                {item.current || "Not applicable"}
                                            </div>
                                            <div className={cn("p-4 border-l text-xs leading-relaxed", isDelta ? "bg-purple-50/30 text-slate-900 dark:text-slate-100" : "text-muted-foreground")}>
                                                {isDelta && <Sparkles className="w-3.5 h-3.5 text-purple-500 inline mr-1.5" />}
                                                {item.target || "Not applicable"}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                </div>
            ) : (
                <div className="space-y-6 max-w-3xl mx-auto">
                    <div className="bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900/50 rounded-lg p-4 flex gap-3">
                        <Lightbulb className="w-5 h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                        <div>
                            <h3 className="font-semibold text-emerald-900 dark:text-emerald-100">Action Plan for {targetRole?.title}</h3>
                            <p className="text-sm text-emerald-700 dark:text-emerald-300 mt-1">
                                To transition to the next level, focus on demonstrating these specific behaviors.
                                Use this checklist to track your progress in 1:1s with your manager.
                            </p>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-slate-950 rounded-xl border shadow-sm divide-y">
                        {growthPlan.length > 0 ? growthPlan.map((item, i) => (
                            <div key={i} className="p-4 flex gap-4 hover:bg-slate-50 transition-colors group">
                                <div className="mt-1">
                                    <div className="w-5 h-5 rounded border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 flex items-center justify-center group-hover:border-primary transition-colors cursor-pointer">
                                        {/* Checkbox placeholder */}
                                    </div>
                                </div>
                                <div>
                                    <div className="text-xs font-medium text-muted-foreground mb-1 uppercase tracking-wider">{item.category}</div>
                                    <div className="text-slate-700 dark:text-slate-200 leading-relaxed">{item.text}</div>
                                </div>
                            </div>
                        )) : (
                            <div className="p-8 text-center text-muted-foreground italic">
                                No specific examples available for this transition yet.
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
