import Link from "next/link";
import { Compass, GitGraph, BarChart3, FileText, Users, Sparkles, Target, Code, ArrowLeft, CheckCircle2 } from "lucide-react";
import { LayerCard } from "@/components/LayerCard";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

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

                {/* TIER 1: PRIMARY (Roles & Operating Profile) */}
                <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                    {/* Roles & Career Paths */}
                    <Link href="/career-framework/roles" className="group block h-full relative">
                        <Card className="h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-2 border-blue-100 dark:border-blue-900/50 bg-gradient-to-b from-white to-blue-50/30 dark:from-slate-950 dark:to-blue-950/10">
                            <CardHeader>
                                <div className="flex items-start justify-between mb-4">
                                    <div className="w-14 h-14 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50 transition-colors">
                                        <GitGraph className="w-7 h-7 text-blue-600 dark:text-blue-400" />
                                    </div>
                                    <span className="inline-flex items-center rounded-full border border-blue-200 dark:border-blue-800 px-2.5 py-0.5 text-xs font-semibold transition-colors bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300">
                                        Expectations
                                    </span>
                                </div>
                                <CardTitle className="text-2xl group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2">
                                    Roles & Career Paths
                                </CardTitle>
                                <CardDescription className="text-base">
                                    Define the path: Explore role summaries, core competencies, and progression patterns.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="text-sm space-y-3 mb-8">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                                        <span>Role summaries and primary focus</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                                        <span>Core competencies by category</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                                        <span>Career progression patterns</span>
                                    </li>
                                </ul>
                                <div className={cn(buttonVariants({ variant: "default" }), "w-full bg-blue-600 hover:bg-blue-700 text-white")}>
                                    View Roles
                                </div>
                            </CardContent>
                        </Card>
                    </Link>

                    {/* Operating Profile */}
                    <Link href="/career-framework/dimensions" className="group block h-full relative">
                        <Card className="h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-2 border-emerald-100 dark:border-emerald-900/50 bg-gradient-to-b from-white to-emerald-50/30 dark:from-slate-950 dark:to-emerald-950/10">
                            <CardHeader>
                                <div className="flex items-start justify-between mb-4">
                                    <div className="w-14 h-14 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center group-hover:bg-emerald-200 dark:group-hover:bg-emerald-900/50 transition-colors">
                                        <BarChart3 className="w-7 h-7 text-emerald-600 dark:text-emerald-400" />
                                    </div>
                                    <span className="inline-flex items-center rounded-full border border-emerald-200 dark:border-emerald-800 px-2.5 py-0.5 text-xs font-semibold transition-colors bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300">
                                        Measurement
                                    </span>
                                </div>
                                <CardTitle className="text-2xl group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors mb-2">
                                    Operating Profile
                                </CardTitle>
                                <CardDescription className="text-base">
                                    Measure progress: Assess your level across 5 key dimensions with objective criteria.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="text-sm space-y-3 mb-8">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                                        <span>Quantified levels (1-7) per dimension</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                                        <span>Cross-role progression visibility</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                                        <span>Identify specific growth areas</span>
                                    </li>
                                </ul>
                                <div className={cn(buttonVariants({ variant: "default" }), "w-full bg-emerald-600 hover:bg-emerald-700 text-white")}>
                                    Explore Operating Profile
                                </div>
                            </CardContent>
                        </Card>
                    </Link>
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
