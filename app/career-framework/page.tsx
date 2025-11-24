import Link from "next/link";
import { Compass, GitGraph, BarChart3, FileText, Users, Sparkles, Target, Code, ArrowLeft, CheckCircle2 } from "lucide-react";
import { LayerCard } from "@/components/LayerCard";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CareerPathVisualizer } from "@/components/CareerPathVisualizer";

const roles = [
    { slug: "graduate-software-engineer-gse", title: "Graduate Software Engineer", track: "Foundation", abbr: "GSE" },
    { slug: "associate-software-engineer-ase", title: "Associate Software Engineer", track: "Foundation", abbr: "ASE" },
    { slug: "software-engineer-se", title: "Software Engineer", track: "Foundation", abbr: "SE" },
    { slug: "senior-software-engineer-sse", title: "Senior Software Engineer", track: "Foundation", abbr: "SSE" },
    { slug: "staff-software-engineer", title: "Staff Software Engineer", track: "IC", abbr: "Staff" },
    { slug: "principal-software-engineer", title: "Principal Software Engineer", track: "IC", abbr: "Principal" },
    { slug: "engineering-manager-em", title: "Engineering Manager", track: "Management", abbr: "EM" },
    { slug: "head-of-software-engineering-hose", title: "Head of Software Engineering", track: "Management", abbr: "HoSE" },
    { slug: "senior-head-of-software-engineering-shose", title: "Senior Head of Software Engineering", track: "Management", abbr: "SHoSE" },
];

export default function CareerFrameworkPage() {
    return (
        <div className="container py-6 max-w-screen-xl mx-auto px-4">
            {/* Header */}
            <div className="mb-12 text-center space-y-4">
                <h1 className="text-3xl font-bold tracking-tight lg:text-4xl">Career Framework</h1>

                <p className="text-xl max-w-3xl text-muted-foreground leading-relaxed mx-auto text-center">
                    <strong className="text-foreground">Roles</strong> define your path. <strong className="text-foreground">Operating Profiles</strong> measure your growth. Both are built on a foundation of clear <strong className="text-foreground">Reference</strong> expectations.
                </p>
            </div>

            {/* Main Layout - 2 Tiers */}
            <div className="mb-24 space-y-8">

                {/* TIER 1: PRIMARY (Visualizer) */}
                <div className="mb-8">
                    <CareerPathVisualizer />
                </div>

                {/* Connection / Divider */}
                <div className="relative py-4 flex items-center justify-center">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-slate-200 dark:border-slate-800"></div>
                    </div>
                    <div className="relative bg-background px-4 text-sm text-muted-foreground font-medium uppercase tracking-wider">
                        Built on a Foundation of Evidence
                    </div>
                </div>

                {/* TIER 2: FOUNDATION (References) */}
                <div className="grid md:grid-cols-2 gap-6">
                    {/* SDLC Reference */}
                    <Link href="/career-framework/sdlc" className="group block h-full">
                        <Card className="h-full transition-all duration-300 hover:shadow-lg hover:border-slate-400 dark:hover:border-slate-600 border-2 border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/20">
                            <CardHeader>
                                <div className="flex items-start justify-between mb-4">
                                    <div className="w-12 h-12 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center group-hover:border-slate-400 transition-colors">
                                        <FileText className="w-6 h-6 text-slate-600 dark:text-slate-400" />
                                    </div>
                                    <span className="inline-flex items-center rounded-full border border-slate-200 dark:border-slate-700 px-2.5 py-0.5 text-xs font-semibold transition-colors bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                                        Reference
                                    </span>
                                </div>
                                <CardTitle className="text-xl group-hover:text-slate-800 dark:group-hover:text-slate-200 transition-colors">
                                    SDLC Reference
                                </CardTitle>
                                <CardDescription>
                                    Detailed technical expectations and evidence for SDLC competencies.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="flex items-center text-sm font-medium text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-slate-200 transition-colors">
                                    <span>View SDLC Matrix</span>
                                    <ArrowLeft className="ml-2 h-4 w-4 rotate-180 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </CardContent>
                        </Card>
                    </Link>

                    {/* Leadership Reference */}
                    <Link href="/career-framework/leadership" className="group block h-full">
                        <Card className="h-full transition-all duration-300 hover:shadow-lg hover:border-slate-400 dark:hover:border-slate-600 border-2 border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/20">
                            <CardHeader>
                                <div className="flex items-start justify-between mb-4">
                                    <div className="w-12 h-12 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center group-hover:border-slate-400 transition-colors">
                                        <Users className="w-6 h-6 text-slate-600 dark:text-slate-400" />
                                    </div>
                                    <span className="inline-flex items-center rounded-full border border-slate-200 dark:border-slate-700 px-2.5 py-0.5 text-xs font-semibold transition-colors bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                                        Reference
                                    </span>
                                </div>
                                <CardTitle className="text-xl group-hover:text-slate-800 dark:group-hover:text-slate-200 transition-colors">
                                    Leadership Reference
                                </CardTitle>
                                <CardDescription>
                                    Detailed breakdown of leadership expectations and influence spheres.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="flex items-center text-sm font-medium text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-slate-200 transition-colors">
                                    <span>View Leadership Matrix</span>
                                    <ArrowLeft className="ml-2 h-4 w-4 rotate-180 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </CardContent>
                        </Card>
                    </Link>
                </div>
            </div>

            {/* Secondary Navigation - Demoted */}
            <div className="grid lg:grid-cols-3 gap-12 mb-16">
                {/* Where Should I Start? */}
                <div className="lg:col-span-2">
                    <h3 className="text-xl font-semibold mb-6 text-muted-foreground">Common Scenarios</h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                        <Card className="bg-muted/30 border-dashed hover:border-solid transition-all">
                            <CardHeader className="pb-2">
                                <div className="flex items-center gap-2 mb-1">
                                    <Sparkles className="w-4 h-4 text-blue-500" />
                                    <span className="font-semibold text-sm">New to the Framework?</span>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground mb-3">
                                    Start with <strong>Roles & Career Paths</strong> to understand expectations and progression.
                                </p>
                                <Link href="/career-framework/roles" className="text-sm font-medium text-blue-600 hover:underline">
                                    Explore Roles →
                                </Link>
                            </CardContent>
                        </Card>

                        <Card className="bg-muted/30 border-dashed hover:border-solid transition-all">
                            <CardHeader className="pb-2">
                                <div className="flex items-center gap-2 mb-1">
                                    <Target className="w-4 h-4 text-purple-500" />
                                    <span className="font-semibold text-sm">Planning Growth?</span>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground mb-3">
                                    Use <strong>Operating Profile</strong> to measure your level and identify gaps.
                                </p>
                                <Link href="/career-framework/dimensions" className="text-sm font-medium text-purple-600 hover:underline">
                                    Check Profile →
                                </Link>
                            </CardContent>
                        </Card>

                        <Card className="bg-muted/30 border-dashed hover:border-solid transition-all">
                            <CardHeader className="pb-2">
                                <div className="flex items-center gap-2 mb-1">
                                    <FileText className="w-4 h-4 text-emerald-500" />
                                    <span className="font-semibold text-sm">Preparing for Review?</span>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground mb-3">
                                    Reference <strong>SDLC Details</strong> for concrete examples and evidence.
                                </p>
                                <Link href="/career-framework/sdlc" className="text-sm font-medium text-emerald-600 hover:underline">
                                    View SDLC →
                                </Link>
                            </CardContent>
                        </Card>

                        <Card className="bg-muted/30 border-dashed hover:border-solid transition-all">
                            <CardHeader className="pb-2">
                                <div className="flex items-center gap-2 mb-1">
                                    <Users className="w-4 h-4 text-orange-500" />
                                    <span className="font-semibold text-sm">Exploring Leadership?</span>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground mb-3">
                                    View <strong>Leadership Reference</strong> for influence spheres and impact.
                                </p>
                                <Link href="/career-framework/leadership" className="text-sm font-medium text-orange-600 hover:underline">
                                    View Leadership →
                                </Link>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                {/* Quick Links / Browse by Role */}
                <div>
                    <h3 className="text-xl font-semibold mb-6 text-muted-foreground">Quick Links</h3>
                    <Card className="bg-muted/30 border-none shadow-none">
                        <CardContent className="pt-6">
                            <div className="space-y-6">
                                <div>
                                    <div className="flex items-center gap-2 mb-2 text-sm font-semibold text-slate-600 dark:text-slate-400">
                                        <Code className="w-4 h-4" />
                                        <span>Foundation</span>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {roles.filter(r => r.track === "Foundation").map((role) => (
                                            <Link key={role.slug} href={`/career-framework/${role.slug}`}>
                                                <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-primary hover:text-primary transition-colors cursor-pointer">
                                                    {role.abbr}
                                                </span>
                                            </Link>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <div className="flex items-center gap-2 mb-2 text-sm font-semibold text-blue-600 dark:text-blue-400">
                                        <Target className="w-4 h-4" />
                                        <span>IC Track</span>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {roles.filter(r => r.track === "IC").map((role) => (
                                            <Link key={role.slug} href={`/career-framework/${role.slug}`}>
                                                <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-blue-500 hover:text-blue-600 transition-colors cursor-pointer">
                                                    {role.abbr}
                                                </span>
                                            </Link>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <div className="flex items-center gap-2 mb-2 text-sm font-semibold text-purple-600 dark:text-purple-400">
                                        <Users className="w-4 h-4" />
                                        <span>Management Track</span>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {roles.filter(r => r.track === "Management").map((role) => (
                                            <Link key={role.slug} href={`/career-framework/${role.slug}`}>
                                                <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-purple-500 hover:text-purple-600 transition-colors cursor-pointer">
                                                    {role.abbr}
                                                </span>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
