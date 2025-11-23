"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
    ArrowLeft, FileText, Download, MousePointerClick,
    Layout, Code, TestTube, Shield, Activity, Eye, Box, LifeBuoy,
    ChevronRight, GraduationCap, User, Users, Briefcase, Award
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { sdlcData, roles, SDLCLevel } from "@/lib/sdlc-data";
import { CompetencyDetailModal } from "@/components/CompetencyDetailModal";

// Map domains to icons and colors
const domainConfig: Record<string, { icon: React.ElementType, color: string }> = {
    "System/component design": { icon: Layout, color: "text-blue-500" },
    "Eng practices": { icon: Code, color: "text-green-500" },
    "Testing & QA": { icon: TestTube, color: "text-purple-500" },
    "Build & Deploy": { icon: Box, color: "text-orange-500" },
    "Support & Operations": { icon: LifeBuoy, color: "text-red-500" },
};

// Map roles to icons
const roleIcons: Record<string, React.ElementType> = {
    "Graduate": GraduationCap,
    "Associate": User,
    "Senior Engineer": Code,
    "Staff": Briefcase,
    "Engineering Manager": Users,
};

export default function SDLCPage() {
    const [selectedCell, setSelectedCell] = useState<{
        role: string;
        domain: string;
        data: {
            summary?: string;
            behaviors: string[];
            examples: string[];
        };
    } | null>(null);

    return (
        <div className="container py-12 max-w-screen-2xl mx-auto px-4">
            <div className="mb-8">
                <Button variant="ghost" size="sm" asChild className="mb-4 pl-0 hover:pl-2 transition-all">
                    <Link href="/career-framework">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Framework
                    </Link>
                </Button>

                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center">
                            <FileText className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold tracking-tight lg:text-4xl">SDLC Competency Matrix</h1>
                            <p className="text-muted-foreground mt-1">
                                Detailed technical expectations across the Software Development Life Cycle
                            </p>
                        </div>
                    </div>

                    <Button variant="outline" asChild>
                        <a href="/Software-Engineering-Career-Framework-V1.html" target="_blank">
                            <Download className="mr-2 h-4 w-4" />
                            View Full Reference (HTML)
                        </a>
                    </Button>
                </div>
            </div>

            <div className="mb-4 flex items-center gap-2 text-sm text-muted-foreground bg-muted/50 p-2 rounded-lg w-fit border border-border/50">
                <MousePointerClick className="w-4 h-4" />
                <span>Click on any cell to view detailed behaviors and examples</span>
            </div>

            <div className="overflow-x-auto rounded-xl border border-border bg-card shadow-sm">
                <table className="w-full text-sm text-left border-collapse min-w-[1200px]">
                    <thead className="bg-muted/30 text-muted-foreground">
                        {/* Track Labels Row */}
                        <tr className="text-xs uppercase tracking-wider">
                            <th className="sticky left-0 bg-muted/95 backdrop-blur-sm z-20"></th>
                            <th colSpan={4} className="text-center py-2 font-semibold bg-blue-50/50 dark:bg-blue-950/30 border-b border-blue-200/50 dark:border-blue-800/50">
                                <span className="text-blue-700 dark:text-blue-300">Individual Contributor Track</span>
                            </th>
                            <th className="text-center py-2 font-semibold bg-purple-50/50 dark:bg-purple-950/30 border-b border-purple-200/50 dark:border-purple-800/50">
                                <span className="text-purple-700 dark:text-purple-300">Management Track</span>
                            </th>
                        </tr>
                        {/* Role Headers Row */}
                        <tr>
                            <th className="p-4 font-bold border-b-2 border-r border-border w-[240px] sticky left-0 bg-muted/95 backdrop-blur-sm z-20 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)]">
                                <span className="flex items-center gap-2">
                                    <Award className="w-4 h-4" />
                                    Domain
                                </span>
                            </th>
                            {roles.map((role, index) => {
                                const RoleIcon = roleIcons[role] || User;
                                const isManager = role === "Engineering Manager";
                                return (
                                    <th key={role} className={`p-4 font-bold border-b-2 border-r border-border min-w-[200px] last:border-r-0 relative ${isManager
                                        ? 'bg-purple-50/30 dark:bg-purple-950/20'
                                        : 'bg-blue-50/30 dark:bg-blue-950/20'
                                        }`}>
                                        <div className="flex items-center gap-2 mb-1">
                                            <RoleIcon className="w-4 h-4 opacity-70" />
                                            {role}
                                        </div>
                                        {/* Progression Arrow */}
                                        {index < roles.length - 1 && (
                                            <div className="absolute top-1/2 -right-3 transform -translate-y-1/2 z-10 text-muted-foreground/20">
                                                <ChevronRight className="w-6 h-6" />
                                            </div>
                                        )}
                                    </th>
                                );
                            })}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                        {sdlcData.map((domain) => {
                            const config = domainConfig[domain.name] || { icon: FileText, color: "text-gray-500" };
                            const DomainIcon = config.icon;

                            return (
                                <React.Fragment key={domain.name}>
                                    {/* Main Domain Row */}
                                    <tr className="group bg-card hover:bg-muted/5 transition-colors">
                                        <td className="p-4 font-semibold border-r-2 border-b border-border bg-card sticky left-0 z-10 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)] group-hover:bg-muted/5 transition-colors">
                                            <div className="flex items-start gap-3">
                                                <div className={`mt - 1 p - 1.5 rounded - md bg - muted / 50 ${config.color} `}>
                                                    <DomainIcon className="w-5 h-5" />
                                                </div>
                                                <div>
                                                    <div className="text-foreground">{domain.name}</div>
                                                    <p className="text-xs text-muted-foreground font-normal mt-1 line-clamp-2 leading-snug">
                                                        {domain.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </td>
                                        {roles.map((role) => {
                                            const levelData = domain.levels[role];
                                            const isManager = role === "Engineering Manager";
                                            if (!levelData) return <td key={role} className={`p-4 border-r border-b border-border last:border-r-0 text-muted-foreground italic ${isManager ? 'bg-purple-50/20 dark:bg-purple-950/10' : 'bg-blue-50/20 dark:bg-blue-950/10'
                                                }`}>—</td>;

                                            return (
                                                <td
                                                    key={role}
                                                    className={`p-4 align-top text-muted-foreground leading-relaxed border-r border-b border-border last:border-r-0 cursor-pointer hover:text-foreground transition-all relative group/cell ${isManager
                                                        ? 'bg-purple-50/20 dark:bg-purple-950/10 hover:bg-purple-100/50 dark:hover:bg-purple-900/30'
                                                        : 'bg-blue-50/20 dark:bg-blue-950/10 hover:bg-blue-100/50 dark:hover:bg-blue-900/30'
                                                        }`}
                                                    onClick={() => setSelectedCell({ role, domain: domain.name, data: levelData })}
                                                >
                                                    <div className="absolute inset-0 border-2 border-transparent group-hover/cell:border-primary/20 pointer-events-none transition-colors" />
                                                    <div className="relative z-10">
                                                        {levelData.summary}
                                                    </div>
                                                    <div className="mt-3 flex items-center text-xs font-medium text-primary opacity-0 group-hover/cell:opacity-100 transition-opacity">
                                                        <span>View Details</span>
                                                        <ChevronRight className="w-3 h-3 ml-1" />
                                                    </div>
                                                </td>
                                            );
                                        })}
                                    </tr>

                                    {/* Sub-rows for System/component design */}
                                    {domain.name === "System/component design" && (
                                        <>
                                            {["Security", "Stability & Performance", "Observability"].map((subSectionTitle, idx, arr) => {
                                                const isLast = idx === arr.length - 1;
                                                let SubIcon = Shield;
                                                if (subSectionTitle.includes("Stability")) SubIcon = Activity;
                                                if (subSectionTitle.includes("Observability")) SubIcon = Eye;

                                                return (
                                                    <tr key={subSectionTitle} className="group bg-muted/5 hover:bg-muted/10 transition-colors">
                                                        <td className="p-0 border-r-2 border-b border-border bg-muted/5 sticky left-0 z-10 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)] group-hover:bg-muted/20 transition-colors">
                                                            <div className="flex h-full">
                                                                {/* Tree Structure Visuals */}
                                                                <div className="w-8 flex-shrink-0 flex flex-col items-center">
                                                                    <div className="w-px h-full bg-border/50 relative">
                                                                        <div className="absolute top-1/2 left-0 w-4 h-px bg-border/50" />
                                                                    </div>
                                                                </div>
                                                                <div className="flex-1 p-4 pl-0 flex items-center gap-2">
                                                                    <div className="p-1 rounded bg-background border border-border/50 shadow-sm">
                                                                        <SubIcon className="w-3.5 h-3.5 text-muted-foreground" />
                                                                    </div>
                                                                    <span className="text-sm font-medium text-muted-foreground">
                                                                        {subSectionTitle}
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        {roles.map((role) => {
                                                            const subData = domain.levels[role]?.subSections?.find(s => s.title === subSectionTitle);
                                                            const isManager = role === "Engineering Manager";
                                                            if (!subData) return <td key={role} className={`p-3 border-r border-b border-border last:border-r-0 text-muted-foreground italic text-xs ${isManager ? 'bg-purple-50/20 dark:bg-purple-950/10' : 'bg-blue-50/20 dark:bg-blue-950/10'
                                                                }`}>—</td>;

                                                            return (
                                                                <td
                                                                    key={role}
                                                                    className={`p-3 align-top text-muted-foreground leading-relaxed border-r border-b border-border last:border-r-0 text-xs cursor-pointer hover:text-foreground transition-all relative group/cell ${isManager
                                                                        ? 'bg-purple-50/20 dark:bg-purple-950/10 hover:bg-purple-100/50 dark:hover:bg-purple-900/30'
                                                                        : 'bg-blue-50/20 dark:bg-blue-950/10 hover:bg-blue-100/50 dark:hover:bg-blue-900/30'
                                                                        }`}
                                                                    onClick={() => setSelectedCell({
                                                                        role,
                                                                        domain: `${domain.name} - ${subSectionTitle}`,
                                                                        data: subData
                                                                    })}
                                                                >
                                                                    <div className="absolute inset-0 border-2 border-transparent group-hover/cell:border-primary/20 pointer-events-none transition-colors" />
                                                                    <div className="relative z-10">
                                                                        <div className="font-semibold mb-1 text-foreground/70">{subSectionTitle}</div>
                                                                        <ul className="list-disc list-inside space-y-1 text-muted-foreground/80">
                                                                            {subData.behaviors.slice(0, 2).map((b, i) => (
                                                                                <li key={i} className="line-clamp-2">{b}</li>
                                                                            ))}
                                                                        </ul>
                                                                    </div>
                                                                    {/* Click indicator */}
                                                                    <div className="absolute bottom-2 right-2 opacity-0 group-hover/cell:opacity-100 transition-opacity flex items-center gap-1 text-xs text-primary">
                                                                        <span>View Details</span>
                                                                        <ChevronRight className="w-3 h-3" />
                                                                    </div>
                                                                </td>
                                                            );
                                                        })}
                                                    </tr>
                                                );
                                            })}
                                        </>
                                    )}
                                </React.Fragment>
                            );
                        })}
                    </tbody>
                </table>
            </div>


            <div className="mt-8 text-center text-sm text-muted-foreground">
                <p>
                    This matrix provides a summary of technical expectations. For detailed examples and specific scenarios,
                    please refer to the <a href="/Software-Engineering-Career-Framework-V1.html" target="_blank" className="underline hover:text-primary">full SDLC Reference document</a>.
                </p>
            </div>

            <CompetencyDetailModal
                isOpen={!!selectedCell}
                onClose={() => setSelectedCell(null)}
                role={selectedCell?.role || ""}
                domain={selectedCell?.domain || ""}
                data={selectedCell?.data || null}
            />
        </div>
    );
}

