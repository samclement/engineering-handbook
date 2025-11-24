import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { ArrowLeft, BookOpen, Target, Clock, HelpCircle, Users, Workflow, BarChart3, GitGraph, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getCareerFrameworkData, getRoleBySlug } from "@/lib/career-data";
import { dimensions, getRoleDimensions, type DimensionType } from "@/lib/dimensions-data";
import { getNextRoles, getRoleTitleFromSlug } from "@/lib/role-progression";
import { getProgressionExamples } from "@/lib/dimension-progression-examples";
import { getCurrentLevelExamples } from "@/lib/current-level-examples";
import { DimensionBadge } from "@/components/DimensionBadge";
import { NextLevelComparison } from "@/components/NextLevelComparison";
import { getRoleMatrixKeys } from "@/lib/matrix-mapping";
import { sdlcData } from "@/lib/sdlc-data";
import { leadershipData } from "@/lib/leadership-data";

// Map dimension IDs to icon names (for DimensionBadge component)
const dimensionIcons: Record<DimensionType, "target" | "clock" | "help-circle" | "users" | "workflow"> = {
    scope: "target",
    timeHorizon: "clock",
    ambiguity: "help-circle",
    leadership: "users",
    technical: "workflow",
};

// Map dimension IDs to actual icon components (for progression examples)
const dimensionIconComponents: Record<DimensionType, React.ElementType> = {
    scope: Target,
    timeHorizon: Clock,
    ambiguity: HelpCircle,
    leadership: Users,
    technical: Workflow,
};

export async function generateStaticParams() {
    const roles = getCareerFrameworkData();
    return roles.map((role) => ({
        slug: role.slug,
    }));
}

export default async function RolePage({ params }: { params: { slug: string } }) {
    const { slug } = await params;

    const role = getRoleBySlug(slug);

    if (!role) {
        notFound();
    }

    // Get dimension levels for this role
    const roleDimensions = getRoleDimensions(slug);

    return (
        <div className="container py-12 max-w-screen-xl mx-auto px-4">
            <div className="mb-8">
                <Button variant="ghost" size="sm" asChild className="mb-4 pl-0 hover:pl-2 transition-all">
                    <Link href="/career-framework/roles">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Roles & Career Paths
                    </Link>
                </Button>
            </div>

            {/* SECTION 1: HERO - Compact & Visual */}
            <div className={`mb-10 rounded-2xl border p-8 relative overflow-hidden ${role.track === 'IC'
                ? 'bg-gradient-to-br from-blue-50 to-white dark:from-blue-950/30 dark:to-slate-950 border-blue-100 dark:border-blue-900/50'
                : role.track === 'Management'
                    ? 'bg-gradient-to-br from-purple-50 to-white dark:from-purple-950/30 dark:to-slate-950 border-purple-100 dark:border-purple-900/50'
                    : 'bg-gradient-to-br from-slate-50 to-white dark:from-slate-900/30 dark:to-slate-950 border-slate-200 dark:border-slate-800'
                }`}>
                <div className="relative z-10 grid lg:grid-cols-[1fr_320px] gap-8">
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors ${role.track === 'IC'
                                ? 'bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-900/50 dark:text-blue-300 dark:border-blue-800'
                                : role.track === 'Management'
                                    ? 'bg-purple-100 text-purple-700 border-purple-200 dark:bg-purple-900/50 dark:text-purple-300 dark:border-purple-800'
                                    : 'bg-slate-100 text-slate-700 border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700'
                                }`}>
                                {role.track} Track
                            </span>
                            <span className="text-muted-foreground text-sm">•</span>
                            <span className="text-muted-foreground text-sm font-medium">Level {roleDimensions.scope} Scope</span>
                        </div>

                        <h1 className="text-3xl font-bold tracking-tight lg:text-4xl mb-4">{role.title}</h1>

                        <div className="prose prose-slate dark:prose-invert max-w-none prose-p:text-muted-foreground prose-p:leading-relaxed mb-8">
                            <ReactMarkdown>{role.content}</ReactMarkdown>
                        </div>

                        {/* Matrix Summaries - Key Responsibilities */}
                        <div className="space-y-8">
                            {(() => {
                                const { sdlcKey, leadershipKey } = getRoleMatrixKeys(slug);
                                const sdlcItems: { title: string; summary: string; icon: React.ElementType }[] = [];
                                const leadershipItems: { title: string; summary: string; icon: React.ElementType }[] = [];

                                if (sdlcKey) {
                                    sdlcData.forEach(domain => {
                                        const level = domain.levels[sdlcKey];
                                        if (level) {
                                            sdlcItems.push({
                                                title: domain.name,
                                                summary: level.summary,
                                                icon: Code
                                            });
                                        }
                                    });
                                }

                                if (leadershipKey) {
                                    leadershipData.forEach(domain => {
                                        const level = domain.levels[leadershipKey];
                                        if (level) {
                                            leadershipItems.push({
                                                title: domain.name,
                                                summary: level.summary,
                                                icon: Users
                                            });
                                        }
                                    });
                                }

                                return (
                                    <>
                                        {leadershipItems.length > 0 && (
                                            <div>
                                                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-2">
                                                    <Users className="w-4 h-4" />
                                                    Leadership Responsibilities
                                                </h3>
                                                <div className="grid sm:grid-cols-2 gap-3">
                                                    {leadershipItems.map((item, idx) => (
                                                        <div key={idx} className="bg-white/60 dark:bg-slate-900/60 p-3 rounded-lg border border-slate-100 dark:border-slate-800 text-sm">
                                                            <div className="font-semibold text-slate-700 dark:text-slate-300 mb-1">
                                                                {item.title}
                                                            </div>
                                                            <div className="text-muted-foreground text-xs leading-relaxed">
                                                                {item.summary}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {sdlcItems.length > 0 && (
                                            <div>
                                                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-2">
                                                    <Code className="w-4 h-4" />
                                                    SDLC Responsibilities
                                                </h3>
                                                <div className="grid sm:grid-cols-2 gap-3">
                                                    {sdlcItems.map((item, idx) => (
                                                        <div key={idx} className="bg-white/60 dark:bg-slate-900/60 p-3 rounded-lg border border-slate-100 dark:border-slate-800 text-sm">
                                                            <div className="font-semibold text-slate-700 dark:text-slate-300 mb-1">
                                                                {item.title}
                                                            </div>
                                                            <div className="text-muted-foreground text-xs leading-relaxed">
                                                                {item.summary}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </>
                                );
                            })()}
                        </div>
                    </div>

                    {/* At a Glance Card */}
                    <div className="bg-white/50 dark:bg-slate-900/50 rounded-xl border border-border/50 p-5 backdrop-blur-sm h-fit">
                        <h3 className="font-semibold text-sm text-muted-foreground mb-4 uppercase tracking-wider">At a Glance</h3>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <Target className="w-5 h-5 text-primary mt-0.5" />
                                <div>
                                    <div className="text-xs text-muted-foreground font-medium">Primary Focus</div>
                                    <div className="text-sm font-medium">Execution & Impact</div>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Clock className="w-5 h-5 text-primary mt-0.5" />
                                <div>
                                    <div className="text-xs text-muted-foreground font-medium">Time Horizon</div>
                                    <div className="text-sm font-medium">
                                        {dimensions.find(d => d.id === 'timeHorizon')?.levels.find(l => l.level === roleDimensions.timeHorizon)?.label || 'Variable'}
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Users className="w-5 h-5 text-primary mt-0.5" />
                                <div>
                                    <div className="text-xs text-muted-foreground font-medium">Leadership</div>
                                    <div className="text-sm font-medium">
                                        {dimensions.find(d => d.id === 'leadership')?.levels.find(l => l.level === roleDimensions.leadership)?.label || 'Variable'}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* SECTION 3: PROGRESSION - Side-by-Side Grid */}
            {(() => {
                const nextRoleSlugs = getNextRoles(slug);
                const hasNextRoles = nextRoleSlugs.length > 0;

                if (!hasNextRoles) return null;

                return (
                    <div className="mb-12">
                        <div className="flex items-center gap-2 mb-6">
                            <GitGraph className="w-6 h-6 text-primary" />
                            <h2 className="text-2xl font-bold">Career Progression</h2>
                        </div>

                        <div className={`grid gap-6 ${nextRoleSlugs.length > 1 ? 'lg:grid-cols-2' : 'max-w-4xl'}`}>
                            {nextRoleSlugs.map((nextSlug) => {
                                const nextRoleTitle = getRoleTitleFromSlug(nextSlug);
                                const isIC = !nextSlug.includes('manager') && !nextSlug.includes('head');

                                // Get Matrix Data for the NEXT role
                                const { sdlcKey, leadershipKey } = getRoleMatrixKeys(nextSlug);
                                const sdlcItems: { title: string; summary: string; }[] = [];
                                const leadershipItems: { title: string; summary: string; }[] = [];

                                if (sdlcKey) {
                                    sdlcData.forEach(domain => {
                                        const level = domain.levels[sdlcKey];
                                        if (level) {
                                            sdlcItems.push({
                                                title: domain.name,
                                                summary: level.summary,
                                            });
                                        }
                                    });
                                }

                                if (leadershipKey) {
                                    leadershipData.forEach(domain => {
                                        const level = domain.levels[leadershipKey];
                                        if (level) {
                                            leadershipItems.push({
                                                title: domain.name,
                                                summary: level.summary,
                                            });
                                        }
                                    });
                                }

                                return (
                                    <div key={nextSlug} className={`rounded-xl border-2 transition-all hover:shadow-lg ${isIC
                                        ? 'border-blue-100 dark:border-blue-900/30 hover:border-blue-200 dark:hover:border-blue-800'
                                        : 'border-purple-100 dark:border-purple-900/30 hover:border-purple-200 dark:hover:border-purple-800'
                                        } bg-card overflow-hidden flex flex-col`}>
                                        {/* Header */}
                                        <div className={`p-6 border-b ${isIC
                                            ? 'bg-blue-50/50 dark:bg-blue-950/20 border-blue-100 dark:border-blue-900/30'
                                            : 'bg-purple-50/50 dark:bg-purple-950/20 border-purple-100 dark:border-purple-900/30'
                                            }`}>
                                            <div className="flex items-center justify-between mb-2">
                                                <span className={`text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wide ${isIC
                                                    ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300'
                                                    : 'bg-purple-100 text-purple-700 dark:bg-purple-900/50 dark:text-purple-300'
                                                    }`}>
                                                    {isIC ? 'IC Track' : 'Management Track'}
                                                </span>
                                                <ArrowLeft className={`w-4 h-4 rotate-180 ${isIC ? 'text-blue-400' : 'text-purple-400'
                                                    }`} />
                                            </div>
                                            <h3 className="text-xl font-bold">{nextRoleTitle}</h3>
                                        </div>

                                        {/* Content */}
                                        <div className="p-6 flex-1 space-y-6">
                                            {leadershipItems.length > 0 && (
                                                <div>
                                                    <h4 className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wider flex items-center gap-2">
                                                        <Users className="w-4 h-4" />
                                                        Leadership Expectations
                                                    </h4>
                                                    <div className="space-y-3">
                                                        {leadershipItems.map((item, idx) => (
                                                            <div key={idx} className="group">
                                                                <div className="flex items-start gap-2">
                                                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0" />
                                                                    <div>
                                                                        <span className="text-sm font-medium text-foreground block mb-0.5">{item.title}</span>
                                                                        <span className="text-xs text-muted-foreground leading-relaxed block">{item.summary}</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}

                                            {sdlcItems.length > 0 && (
                                                <div>
                                                    <h4 className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wider flex items-center gap-2">
                                                        <Code className="w-4 h-4" />
                                                        SDLC Expectations
                                                    </h4>
                                                    <div className="space-y-3">
                                                        {sdlcItems.map((item, idx) => (
                                                            <div key={idx} className="group">
                                                                <div className="flex items-start gap-2">
                                                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                                                                    <div>
                                                                        <span className="text-sm font-medium text-foreground block mb-0.5">{item.title}</span>
                                                                        <span className="text-xs text-muted-foreground leading-relaxed block">{item.summary}</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}

                                            {sdlcItems.length === 0 && leadershipItems.length === 0 && (
                                                <div className="text-center py-8 text-muted-foreground text-sm">
                                                    <p>Continue demonstrating excellence at your current level.</p>
                                                </div>
                                            )}
                                        </div>

                                        <div className="p-4 border-t bg-muted/20 mt-auto">
                                            <Button asChild variant="ghost" className="w-full justify-between group">
                                                <Link href={`/career-framework/${nextSlug}`}>
                                                    View Role Details
                                                    <ArrowLeft className="w-4 h-4 rotate-180 group-hover:translate-x-1 transition-transform" />
                                                </Link>
                                            </Button>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                );
            })()}

        </div>
    );
}
