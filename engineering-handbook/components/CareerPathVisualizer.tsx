"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ChevronRight, Users, Briefcase, Code, Network } from "lucide-react";

interface RoleNode {
    id: string;
    title: string;
    slug: string;
    level: string;
    track: "IC" | "Management" | "Shared";
    description: string;
}

const roles: RoleNode[] = [
    // Shared Base
    {
        id: "gse",
        title: "Graduate Software Engineer",
        slug: "graduate-software-engineer-gse",
        level: "Junior",
        track: "Shared",
        description: "Focus: Learn SDLC, quality, and team ways of working.",
    },
    {
        id: "ase",
        title: "Associate Software Engineer",
        slug: "associate-software-engineer-ase",
        level: "Mid",
        track: "Shared",
        description: "Focus: Deliver small stories end-to-end under guidance.",
    },
    {
        id: "se",
        title: "Software Engineer",
        slug: "software-engineer-se",
        level: "Mid",
        track: "Shared",
        description: "Focus: Reliable delivery of features with solid engineering practice.",
    },
    {
        id: "sse",
        title: "Senior Software Engineer",
        slug: "senior-software-engineer-sse",
        level: "Senior",
        track: "Shared",
        description: "Focus: Technical depth plus velocity; raising the team's engineering bar.",
    },
    // IC Track
    {
        id: "staff",
        title: "Staff Software Engineer",
        slug: "staff-software-engineer",
        level: "Staff",
        track: "IC",
        description: "Focus: Technical leadership and cross-team influence.",
    },
    {
        id: "principal",
        title: "Principal Software Engineer",
        slug: "principal-software-engineer",
        level: "Principal",
        track: "IC",
        description: "Focus: Org-level technical leadership and strategy.",
    },
    // Management Track
    {
        id: "em",
        title: "Engineering Manager",
        slug: "engineering-manager-em",
        level: "Manager",
        track: "Management",
        description: "Focus: Outcomes through people; delivery, quality, growth.",
    },
    {
        id: "hose",
        title: "Head of Software Engineering",
        slug: "head-of-software-engineering-hose",
        level: "Head",
        track: "Management",
        description: "Focus: Multi-team leadership; strategy and execution.",
    },
    {
        id: "shose",
        title: "Senior Head of Software Engineering",
        slug: "senior-head-of-software-engineering-shose",
        level: "Director",
        track: "Management",
        description: "Focus: Org and company-level leadership across portfolios.",
    },
];

const Node = ({ role, className }: { role: RoleNode; className?: string }) => {
    const isShared = role.track === "Shared";
    const isIC = role.track === "IC";
    const isManager = role.track === "Management";

    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={cn("relative z-10", className)}
        >
            <Link href={`/career-framework/${role.slug}`}>
                <div
                    className={cn(
                        "w-64 p-3 rounded-xl border-2 shadow-sm transition-all duration-300 bg-card hover:shadow-md cursor-pointer",
                        isShared && "border-slate-200 hover:border-slate-400",
                        isIC && "border-blue-200 hover:border-blue-400 bg-blue-50",
                        isManager && "border-purple-200 hover:border-purple-400 bg-purple-50"
                    )}
                >
                    <div className="flex items-start justify-between mb-2">
                        <span
                            className={cn(
                                "text-xs font-bold px-2 py-0.5 rounded-full",
                                isShared && "bg-slate-100 text-slate-700",
                                isIC && "bg-blue-100 text-blue-700",
                                isManager && "bg-purple-100 text-purple-700"
                            )}
                        >
                            {role.level}
                        </span>
                        {isIC && <Code className="w-4 h-4 text-blue-500" />}
                        {isManager && <Users className="w-4 h-4 text-purple-500" />}
                        {isShared && <Briefcase className="w-4 h-4 text-slate-500" />}
                    </div>
                    <h3 className="font-bold text-sm mb-1 leading-tight">{role.title}</h3>
                    <p className="text-xs text-muted-foreground line-clamp-2">{role.description}</p>
                </div>
            </Link>
        </motion.div>
    );
};

export function CareerPathVisualizer() {
    return (
        <div className="relative pt-24 pb-4 px-4 bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
            {/* Background Zones (Venn Diagram) */}
            <div className="absolute inset-0 pointer-events-none">
                <svg className="w-full h-full overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <defs>
                        <linearGradient id="leadershipGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="rgb(168 85 247)" stopOpacity="0.15" />
                            <stop offset="100%" stopColor="rgb(168 85 247)" stopOpacity="0.08" />
                        </linearGradient>
                        <linearGradient id="sdlcGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="rgb(59 130 246)" stopOpacity="0.08" />
                            <stop offset="100%" stopColor="rgb(59 130 246)" stopOpacity="0.15" />
                        </linearGradient>
                        <linearGradient id="lineGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="rgb(203 213 225)" />
                            <stop offset="100%" stopColor="rgb(203 213 225)" />
                        </linearGradient>
                    </defs>

                    {/* Leadership Zone (Top) - Covers Rows 1-3 */}
                    <rect
                        x="0"
                        y="0"
                        width="100"
                        height="52"
                        rx="40"
                        fill="url(#leadershipGrad)"
                    />

                    {/* SDLC Zone (Bottom) - Covers Rows 3-7 */}
                    <rect
                        x="0"
                        y="33"
                        width="100"
                        height="67"
                        rx="40"
                        fill="url(#sdlcGrad)"
                    />

                    {/* Connecting Lines */}
                    {/* Principal (Col 1, Row 2) -> Staff (Col 2, Row 3) */}
                    <path d="M 28 20 C 28 25, 33.33 23, 33.33 32" fill="none" stroke="rgb(203 213 225)" strokeWidth="2" strokeDasharray="4 4" />

                    {/* SHoSE (Col 5, Row 1) -> HoSE (Col 5, Row 2) */}
                    <path d="M 72 10 L 72 20" fill="none" stroke="rgb(203 213 225)" strokeWidth="2" strokeDasharray="4 4" />

                    {/* HoSE (Col 5, Row 2) -> EM (Col 4, Row 3) */}
                    <path d="M 72 20 C 72 25, 66.66 23, 66.66 32" fill="none" stroke="rgb(203 213 225)" strokeWidth="2" strokeDasharray="4 4" />

                    {/* Staff (Col 2, Row 3) -> SSE (Col 3, Row 4) */}
                    <path d="M 33.33 32 C 33.33 40, 50 38, 50 45" fill="none" stroke="rgb(203 213 225)" strokeWidth="2" strokeDasharray="4 4" />

                    {/* EM (Col 4, Row 3) -> SSE (Col 3, Row 4) */}
                    <path d="M 66.66 32 C 66.66 40, 50 38, 50 45" fill="none" stroke="rgb(203 213 225)" strokeWidth="2" strokeDasharray="4 4" />

                    {/* SDLC Vertical Line */}
                    <path d="M 50 45 L 50 100" fill="none" stroke="rgb(203 213 225)" strokeWidth="2" strokeDasharray="4 4" />

                </svg>
                {/* Zone Labels */}
                <div className="absolute top-[2%] left-1/2 -translate-x-1/2 text-purple-500/30 font-bold text-4xl tracking-widest uppercase pointer-events-none select-none">
                    Leadership
                </div>
                <div className="absolute bottom-[2%] left-1/2 -translate-x-1/2 text-blue-500/30 font-bold text-4xl tracking-widest uppercase pointer-events-none select-none">
                    SDLC
                </div>

                {/* Leadership Focus Label */}
                <div className="absolute top-[15%] left-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:block text-center w-40 pointer-events-none">
                    <h4 className="text-sm font-bold text-slate-600">Leadership Focus</h4>
                    <p className="text-xs text-muted-foreground">Strategy, People, Org Impact</p>
                </div>

                {/* SDLC Focus Label */}
                <div className="absolute top-[60%] right-[20%] hidden lg:block text-left max-w-[150px] pointer-events-none">
                    <h4 className="text-sm font-bold text-slate-600">SDLC Focus</h4>
                    <p className="text-xs text-muted-foreground">Execution, Craft, Delivery</p>
                </div>

            </div>

            <div className="grid grid-cols-6 gap-y-4 relative">
                {/* Row 1 */}
                <div className="col-start-5 col-span-2 flex justify-start relative">
                    <div className="absolute -top-13 left-0 text-center w-48">
                        <h4 className="text-lg font-bold text-purple-600 flex items-center justify-center gap-2">
                            <Users className="w-5 h-5" /> Management
                        </h4>
                        <p className="text-xs text-muted-foreground">People, Org Design, Strategy</p>
                    </div>
                    <Node role={roles.find((r) => r.id === "shose")!} />
                </div>

                {/* Row 2 */}
                <div className="col-start-1 col-span-2 flex justify-end relative">
                    <div className="absolute -top-13 right-0 text-center w-48">
                        <h4 className="text-lg font-bold text-blue-600 flex items-center justify-center gap-2">
                            <Code className="w-5 h-5" /> IC Leadership
                        </h4>
                        <p className="text-xs text-muted-foreground">Strategy, Architecture, Influence</p>
                    </div>
                    <Node role={roles.find((r) => r.id === "principal")!} />
                </div>
                <div className="col-start-5 col-span-2 flex justify-start">
                    <Node role={roles.find((r) => r.id === "hose")!} />
                </div>

                {/* Row 3 - Intersection */}
                <div className="col-start-2 col-span-2 flex justify-center mt-4">
                    <Node role={roles.find((r) => r.id === "staff")!} />
                </div>
                <div className="col-start-4 col-span-2 flex justify-center mt-4">
                    <Node role={roles.find((r) => r.id === "em")!} />
                </div>

                {/* Split Point Graphic - Positioned between Row 3 and 4 */}
                <div className="col-start-3 col-span-2 h-0 relative flex justify-center items-center">
                    <div className="absolute -top-4 w-full h-8 pointer-events-none">
                        <svg className="absolute inset-0 w-full h-full text-slate-200" preserveAspectRatio="none">
                            <path d="M50% 100% C 50% 50%, 0% 50%, 0% 0%" fill="none" stroke="currentColor" strokeWidth="2" vectorEffect="non-scaling-stroke" />
                            <path d="M50% 100% C 50% 50%, 100% 50%, 100% 0%" fill="none" stroke="currentColor" strokeWidth="2" vectorEffect="non-scaling-stroke" />
                        </svg>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background border border-slate-200 text-[10px] font-medium px-2 py-0.5 rounded-full shadow-sm text-muted-foreground whitespace-nowrap z-20">
                            Leadership Split
                        </div>
                    </div>
                </div>

                {/* Row 4 */}
                <div className="col-start-3 col-span-2 flex justify-center">
                    <Node role={roles.find((r) => r.id === "sse")!} />
                </div>

                {/* Row 5 */}
                <div className="col-start-3 col-span-2 flex justify-center">
                    <Node role={roles.find((r) => r.id === "se")!} />
                </div>

                {/* Row 6 */}
                <div className="col-start-3 col-span-2 flex justify-center">
                    <Node role={roles.find((r) => r.id === "ase")!} />
                </div>

                {/* Row 7 */}
                <div className="col-start-3 col-span-2 flex justify-center">
                    <Node role={roles.find((r) => r.id === "gse")!} />
                </div>
            </div>
        </div>
    );
}
