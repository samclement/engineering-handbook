import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { ArrowLeft, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getCareerFrameworkData, getRoleBySlug } from "@/lib/career-data";
import { dimensions, getRoleDimensions, type DimensionType } from "@/lib/dimensions-data";
import { DimensionBadge } from "@/components/DimensionBadge";
import { NextLevelComparison } from "@/components/NextLevelComparison";

// Map dimension IDs to icon names
const dimensionIcons: Record<DimensionType, "target" | "clock" | "help-circle" | "users" | "workflow"> = {
    scope: "target",
    timeHorizon: "clock",
    ambiguity: "help-circle",
    leadership: "users",
    technical: "workflow",
};

export async function generateStaticParams() {
    const roles = await getCareerFrameworkData();
    return roles.map((role) => ({
        slug: role.slug,
    }));
}

export default async function RolePage({ params }: { params: { slug: string } }) {
    const { slug } = await params; // Await params in Next.js 15+ if needed, but standard is direct access in 14. 
    // Actually Next.js 15 makes params a promise. I'll await it just in case or check version. 
    // Package.json said "next": "16.0.3" ?? Wait, Next 16? That's likely a canary or future version or I misread.
    // Let's check package.json again mentally. "next": "16.0.3" seems very high. Current stable is 15.
    // Ah, maybe it's 15.0.3. Let's assume standard async params pattern for modern Next.js.

    const role = await getRoleBySlug(slug);

    if (!role) {
        notFound();
    }

    // Get dimension levels for this role
    const roleDimensions = getRoleDimensions(slug);

    return (
        <div className="container py-12 max-w-screen-lg mx-auto px-4">
            <div className="mb-8">
                <Button variant="ghost" size="sm" asChild className="mb-4 pl-0 hover:pl-2 transition-all">
                    <Link href="/career-framework">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Framework
                    </Link>
                </Button>
                <div className="flex items-center gap-4 mb-4">
                    <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary/10 text-primary hover:bg-primary/20">
                        {role.track} Track
                    </span>
                </div>
                <h1 className="text-4xl font-bold tracking-tight lg:text-5xl mb-4">{role.title}</h1>
            </div>

            <div className="prose prose-slate dark:prose-invert max-w-none lg:prose-lg">
                <ReactMarkdown>{role.content}</ReactMarkdown>
            </div>
            {/* Dimension Indicators */}
            <div className="mb-8 p-6 bg-muted/30 rounded-xl border border-border">
                <div className="flex items-center gap-2 mb-4">
                    <h2 className="text-xl font-bold">Role Operating Profile</h2>
                    <Link
                        href="/career-framework/dimensions"
                        className="text-sm text-primary hover:underline ml-auto"
                    >
                        Explore Operating Profile →
                    </Link>
                </div>
                <p className="text-sm text-muted-foreground mb-6">
                    This role operates at the following levels across the 5 key profile dimensions
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                    {dimensions.map((dimension) => {
                        const level = roleDimensions[dimension.id];
                        const dimensionLevel = dimension.levels.find(l => l.level === level);
                        const Icon = dimensionIcons[dimension.id];

                        return dimensionLevel ? (
                            <DimensionBadge
                                key={dimension.id}
                                name={dimension.name}
                                level={level}
                                maxLevel={dimension.levels.length}
                                label={dimensionLevel.label}
                                icon={Icon}
                            />
                        ) : null;
                    })}
                </div>
            </div>

            {/* Next Level Comparison */}
            <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Career Progression</h2>
                <NextLevelComparison currentRoleSlug={slug} />
            </div>

            {/* SDLC Reference */}
            <div className="mb-8 p-4 rounded-lg bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800">
                <div className="flex items-start gap-3">
                    <BookOpen className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                    <div className="flex-1">
                        <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-1">
                            Detailed SDLC Expectations
                        </h3>
                        <p className="text-sm text-blue-700 dark:text-blue-300 mb-2">
                            For specific technical examples, behavioral expectations, and work scenarios for this role,
                            see the detailed SDLC reference documentation.
                        </p>
                        <a
                            href="/Software-Engineering-Career-Framework-V1.html"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-1"
                        >
                            View SDLC Reference for {role.title}
                            <ArrowLeft className="w-4 h-4 rotate-180" />
                        </a>
                    </div>
                </div>
            </div>

        </div>
    );
}
