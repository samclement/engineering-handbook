import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { ArrowLeft, BookOpen, Target, Clock, HelpCircle, Users, Workflow, BarChart3, GitGraph } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getCareerFrameworkData, getRoleBySlug } from "@/lib/career-data";
import { dimensions, getRoleDimensions, type DimensionType } from "@/lib/dimensions-data";
import { getNextRoles, getRoleTitleFromSlug } from "@/lib/role-progression";
import { getProgressionExamples } from "@/lib/dimension-progression-examples";
import { getCurrentLevelExamples } from "@/lib/current-level-examples";
import { DimensionBadge } from "@/components/DimensionBadge";
import { NextLevelComparison } from "@/components/NextLevelComparison";

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
                <div className="relative z-10 grid lg:grid-cols-[1fr_300px] gap-8">
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

                        <div className="prose prose-slate dark:prose-invert max-w-none prose-p:text-muted-foreground prose-p:leading-relaxed">
                            <ReactMarkdown>{role.content}</ReactMarkdown>
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

            {/* SECTION 2: OPERATING PROFILE - High Density Grid */}
            <div className="mb-16">
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                        <BarChart3 className="w-6 h-6 text-primary" />
                        <h2 className="text-2xl font-bold">Operating Profile</h2>
                    </div>
                    <Link
                        href="/career-framework/dimensions"
                        className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                    >
                        View all dimensions <ArrowLeft className="w-3 h-3 rotate-180" />
                    </Link>
                </div>

                {(() => {
                    const currentExamples = getCurrentLevelExamples(slug);

                    return (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {/* Render dimensions with examples first */}
                            {currentExamples.map((current) => {
                                const dimension = dimensions.find(d => d.id === current.dimension);
                                if (!dimension) return null;

                                const currentLevel = roleDimensions[dimension.id];
                                const dimensionLevel = dimension.levels.find(l => l.level === currentLevel);
                                const IconComponent = dimensionIconComponents[current.dimension];

                                // Color coding based on dimension type could be added here
                                const borderColor = 'border-l-4 border-l-primary';

                                return (
                                    <div key={current.dimension} className="group rounded-xl border bg-card text-card-foreground shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col">
                                        <div className="p-5 flex-1">
                                            <div className="flex items-start justify-between mb-4">
                                                <div className="flex items-center gap-3">
                                                    <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                                                        <IconComponent className="w-5 h-5" />
                                                    </div>
                                                    <div>
                                                        <h3 className="font-semibold leading-none mb-1">{dimension.name}</h3>
                                                        <span className="text-xs text-muted-foreground font-medium">Level {currentLevel}</span>
                                                    </div>
                                                </div>
                                            </div>

                                            {dimensionLevel && (
                                                <div className="mb-4 text-sm font-medium text-foreground/80 bg-muted/50 p-2 rounded border border-border/50">
                                                    {dimensionLevel.label}
                                                </div>
                                            )}

                                            <ul className="space-y-2">
                                                {current.examples.map((example, idx) => (
                                                    <li key={idx} className="flex items-start gap-2 text-xs text-muted-foreground leading-relaxed">
                                                        <span className="mt-1.5 w-1 h-1 rounded-full bg-primary/50 flex-shrink-0" />
                                                        <span>{example}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                );
                            })}

                            {/* Fallback for dimensions without specific examples if needed, or just ensure we have examples for all */}
                        </div>
                    );
                })()}
            </div>

            {/* SECTION 3: PROGRESSION - Side-by-Side Grid */}
            {(() => {
                const nextRoleSlugs = getNextRoles(slug);
                const hasNextRoles = nextRoleSlugs.length > 0;
                const progressionExamples = getProgressionExamples(slug);

                if (!hasNextRoles) return null;

                return (
                    <div className="mb-12">
                        <div className="flex items-center gap-2 mb-6">
                            <GitGraph className="w-6 h-6 text-primary" />
                            <h2 className="text-2xl font-bold">Career Progression</h2>
                        </div>

                        <div className={`grid gap-6 ${nextRoleSlugs.length > 1 ? 'lg:grid-cols-2' : 'max-w-4xl'}`}>
                            {nextRoleSlugs.map((nextSlug) => {
                                const nextRoleDimensions = getRoleDimensions(nextSlug);
                                const nextRoleTitle = getRoleTitleFromSlug(nextSlug);
                                const isIC = !nextSlug.includes('manager') && !nextSlug.includes('head');
                                const trackColor = isIC ? 'blue' : 'purple';

                                // Filter examples relevant to this next role's dimension changes
                                const relevantExamples = progressionExamples.filter(p => {
                                    const currentLevel = roleDimensions[p.dimension];
                                    const targetLevel = nextRoleDimensions[p.dimension];
                                    return targetLevel > currentLevel;
                                });

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
                                        <div className="p-6 flex-1">
                                            <h4 className="text-sm font-semibold text-muted-foreground mb-4 uppercase tracking-wider">Growth Focus</h4>

                                            {relevantExamples.length > 0 ? (
                                                <div className="space-y-4">
                                                    {relevantExamples.map((progression) => {
                                                        const dimension = dimensions.find(d => d.id === progression.dimension);
                                                        if (!dimension) return null;

                                                        const IconComponent = dimensionIconComponents[progression.dimension];
                                                        const currentLevel = roleDimensions[dimension.id];
                                                        const targetLevel = nextRoleDimensions[progression.dimension];

                                                        return (
                                                            <div key={progression.dimension} className="group">
                                                                <div className="flex items-center gap-2 mb-2">
                                                                    <IconComponent className="w-4 h-4 text-muted-foreground" />
                                                                    <span className="text-sm font-medium">{dimension.name}</span>
                                                                    <span className="text-xs font-mono bg-muted px-1.5 py-0.5 rounded text-muted-foreground ml-auto">
                                                                        L{currentLevel} → L{targetLevel}
                                                                    </span>
                                                                </div>
                                                                <ul className="pl-6 border-l-2 border-muted group-hover:border-primary/30 transition-colors space-y-2">
                                                                    {progression.examples.map((example, idx) => (
                                                                        <li key={idx} className="text-xs text-muted-foreground leading-relaxed">
                                                                            {example}
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            ) : (
                                                <div className="text-center py-8 text-muted-foreground text-sm">
                                                    <p>Continue demonstrating excellence at your current level across all dimensions.</p>
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
