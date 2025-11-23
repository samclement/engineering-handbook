"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
    ArrowLeft, Users, Download, MousePointerClick,
    Compass, Map, Zap, Heart, MessageSquare, CircleDollarSign,
    ChevronRight, Briefcase, Award, UserCheck, UserPlus, UserCog
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { leadershipData, roles } from "@/lib/leadership-data";
import { CompetencyDetailModal } from "@/components/CompetencyDetailModal";

// Map domains to icons and colors
const domainConfig: Record<string, { icon: React.ElementType, color: string }> = {
    "Technical Direction": { icon: Compass, color: "text-blue-500" },
    "Strategy & Planning": { icon: Map, color: "text-purple-500" },
    "Execution & Operations": { icon: Zap, color: "text-orange-500" },
    "People & Organization": { icon: Heart, color: "text-pink-500" },
    "Influence & Stakeholders": { icon: MessageSquare, color: "text-green-500" },
    "Finance & Budgets": { icon: CircleDollarSign, color: "text-emerald-500" },
};

// Map roles to icons
const roleIcons: Record<string, React.ElementType> = {
    "Staff Engineer": Briefcase,
    "Principal Engineer": Award,
    "Engineering Manager": UserCheck,
    "Head of Software Engineering": UserPlus,
    "Senior Head of Software Engineering": UserCog,
};

export default function LeadershipPage() {
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
                        <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center">
                            <Users className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold tracking-tight lg:text-4xl">Leadership Competency Matrix</h1>
                            <p className="text-muted-foreground mt-1">
                                Expectations for technical and organizational leadership across senior roles
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
                        <tr>
                            <th className="p-4 font-bold border-b-2 border-r border-border w-[240px] sticky left-0 bg-muted/95 backdrop-blur-sm z-20 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)]">
                                <span className="flex items-center gap-2">
                                    <Award className="w-4 h-4" />
                                    Domain
                                </span>
                            </th>
                            {roles.map((role, index) => {
                                const RoleIcon = roleIcons[role] || Briefcase;
                                return (
                                    <th key={role} className="p-4 font-bold border-b-2 border-r border-border min-w-[200px] last:border-r-0 relative">
                                        <div className="flex items-center gap-2 mb-1">
                                            <RoleIcon className="w-4 h-4 opacity-70" />
                                            {role}
                                        </div>
                                        {/* Progression Arrow - Only between similar tracks if applicable, or generally left-to-right */}
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
                        {leadershipData.map((domain) => {
                            const config = domainConfig[domain.name] || { icon: Compass, color: "text-gray-500" };
                            const DomainIcon = config.icon;

                            return (
                                <tr key={domain.name} className="group bg-card hover:bg-muted/5 transition-colors">
                                    <td className="p-4 font-semibold border-r-2 border-b border-border bg-card sticky left-0 z-10 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)] group-hover:bg-muted/5 transition-colors">
                                        <div className="flex items-start gap-3">
                                            <div className={`mt-1 p-1.5 rounded-md bg-muted/50 ${config.color}`}>
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
                                        return (
                                            <td
                                                key={role}
                                                className="p-4 align-top text-muted-foreground leading-relaxed border-r border-b border-border last:border-r-0 cursor-pointer hover:bg-purple-50/50 dark:hover:bg-purple-900/20 hover:text-foreground transition-all relative group/cell"
                                                onClick={() => setSelectedCell({ role, domain: domain.name, data: levelData })}
                                            >
                                                <div className="absolute inset-0 border-2 border-transparent group-hover/cell:border-purple-500/20 pointer-events-none transition-colors" />
                                                <div className="relative z-10">
                                                    {levelData.summary}
                                                </div>
                                                <div className="mt-3 flex items-center text-xs font-medium text-purple-600 dark:text-purple-400 opacity-0 group-hover/cell:opacity-100 transition-opacity">
                                                    <span>View Details</span>
                                                    <ChevronRight className="w-3 h-3 ml-1" />
                                                </div>
                                            </td>
                                        );
                                    })}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>

            <div className="mt-8 text-center text-sm text-muted-foreground">
                <p>
                    This matrix synthesizes leadership expectations from individual role competencies.
                    For full role details, visit the <Link href="/career-framework/roles" className="underline hover:text-primary">Roles & Career Paths</Link> page.
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
