"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, FileText, Download, MousePointerClick } from "lucide-react";
import { Button } from "@/components/ui/button";
import { sdlcData, roles, SDLCLevel } from "@/lib/sdlc-data";
import { SDLCDetailModal } from "@/components/SDLCDetailModal";

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

            <div className="mb-4 flex items-center gap-2 text-sm text-muted-foreground bg-muted/50 p-2 rounded-lg w-fit">
                <MousePointerClick className="w-4 h-4" />
                <span>Click on any cell to view detailed behaviors and examples</span>
            </div>

            <div className="overflow-x-auto rounded-xl border border-border bg-card shadow-sm">
                <table className="w-full text-sm text-left border-collapse min-w-[1200px]">
                    <thead className="bg-muted text-muted-foreground">
                        <tr>
                            <th className="p-4 font-bold border-b-2 border-r border-border w-[200px] sticky left-0 bg-muted z-20 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)]">Domain</th>
                            {roles.map((role) => (
                                <th key={role} className="p-4 font-bold border-b-2 border-r border-border min-w-[180px] last:border-r-0">
                                    {role}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                        {sdlcData.map((domain) => (
                            <React.Fragment key={domain.name}>
                                {/* Main Domain Row */}
                                <tr className="group bg-card hover:bg-muted/5 transition-colors">
                                    <td className="p-4 font-semibold border-r-2 border-b border-border bg-card sticky left-0 z-10 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)] group-hover:bg-muted/5 transition-colors">
                                        <div>
                                            {domain.name}
                                            <p className="text-xs text-muted-foreground font-normal mt-1 line-clamp-2">
                                                {domain.description}
                                            </p>
                                        </div>
                                    </td>
                                    {roles.map((role) => {
                                        const levelData = domain.levels[role];
                                        return (
                                            <td
                                                key={role}
                                                className="p-4 align-top text-muted-foreground leading-relaxed border-r border-b border-border last:border-r-0 cursor-pointer hover:bg-blue-50/50 dark:hover:bg-blue-900/20 hover:text-foreground transition-all relative group/cell"
                                                onClick={() => setSelectedCell({ role, domain: domain.name, data: levelData })}
                                            >
                                                <div className="absolute inset-0 border-2 border-transparent group-hover/cell:border-primary/20 pointer-events-none transition-colors" />
                                                {levelData.summary}
                                                <div className="mt-2 text-xs font-medium text-primary opacity-0 group-hover/cell:opacity-100 transition-opacity">
                                                    Click to view details →
                                                </div>
                                            </td>
                                        );
                                    })}
                                </tr>

                                {/* Sub-rows for System/component design */}
                                {domain.name === "System/component design" && (
                                    <>
                                        {["Security", "Stability & Performance", "Observability"].map((subSectionTitle) => (
                                            <tr key={subSectionTitle} className="group bg-muted/5 hover:bg-muted/10 transition-colors">
                                                <td className="p-4 pl-8 font-medium text-muted-foreground border-r-2 border-b border-border bg-muted/10 sticky left-0 z-10 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)] group-hover:bg-muted/20 transition-colors border-l-4 border-l-primary/20">
                                                    <div className="flex items-center gap-2">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                                                        {subSectionTitle}
                                                    </div>
                                                </td>
                                                {roles.map((role) => {
                                                    const levelData = domain.levels[role];
                                                    const subSection = levelData.subSections?.find(s => s.title === subSectionTitle);

                                                    if (!subSection) return <td key={role} className="p-4 border-r border-b border-border last:border-r-0 bg-muted/5" />;

                                                    return (
                                                        <td
                                                            key={role}
                                                            className="p-4 align-top text-muted-foreground/80 text-xs leading-relaxed border-r border-b border-border last:border-r-0 cursor-pointer hover:bg-blue-50/50 dark:hover:bg-blue-900/20 hover:text-foreground transition-all relative group/cell bg-muted/5"
                                                            onClick={() => setSelectedCell({
                                                                role,
                                                                domain: `${domain.name} - ${subSectionTitle}`,
                                                                data: {
                                                                    behaviors: subSection.behaviors,
                                                                    examples: subSection.examples
                                                                }
                                                            })}
                                                        >
                                                            <div className="absolute inset-0 border-2 border-transparent group-hover/cell:border-primary/20 pointer-events-none transition-colors" />
                                                            <ul className="list-disc list-inside space-y-1">
                                                                {subSection.behaviors.slice(0, 2).map((b, i) => (
                                                                    <li key={i} className="line-clamp-2">{b}</li>
                                                                ))}
                                                            </ul>
                                                            {subSection.behaviors.length > 2 && (
                                                                <div className="mt-1 text-[10px] text-muted-foreground italic">
                                                                    +{subSection.behaviors.length - 2} more...
                                                                </div>
                                                            )}
                                                        </td>
                                                    );
                                                })}
                                            </tr>
                                        ))}
                                    </>
                                )}
                            </React.Fragment>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="mt-8 text-center text-sm text-muted-foreground">
                <p>
                    This matrix provides a summary of technical expectations. For detailed examples and specific scenarios,
                    please refer to the <a href="/Software-Engineering-Career-Framework-V1.html" target="_blank" className="underline hover:text-primary">full SDLC Reference document</a>.
                </p>
            </div>

            <SDLCDetailModal
                isOpen={!!selectedCell}
                onClose={() => setSelectedCell(null)}
                role={selectedCell?.role || ""}
                domain={selectedCell?.domain || ""}
                data={selectedCell?.data || null}
            />
        </div>
    );
}

