import React from "react";
import Link from "next/link";
import { ArrowLeft, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LeadershipPage() {
    const roles = [
        "Engineering Manager",
        "Head of Software Engineering",
        "Senior Head of Software Engineering",
        "Staff Engineer",
        "Principal Engineer"
    ];

    const domains = [
        {
            name: "Technical Direction",
            levels: [
                "Staff-level technical literacy. Reviews for direction and quality. Balances tech debt with delivery.",
                "Principal-level judgement. Governs architecture via leaders. Ensures technical strategy aligns with business.",
                "Distinguished-level guidance. Sets principles and governance through councils. Defines company-wide technical culture.",
                "Sets technical direction. Chooses long-term trade-offs. Owns technical vision for product area.",
                "Defines architectural vision and evolutionary paths. Designs shared systems and contracts. Reduces org-wide complexity."
            ]
        },
        {
            name: "Strategy & Planning",
            levels: [
                "Plans and executes quarterly team roadmaps. Balances feature work with technical improvements.",
                "Shapes roadmaps and investment trade-offs. Defines metrics for success. Owns portfolio strategy.",
                "Long-range bets and portfolio shaping. Frames value and risk. Sets multi-year strategic vision.",
                "Shapes roadmaps with PMs. Identifies technical enablers for product goals. 2-3 quarter horizon.",
                "Defines architectural strategy. Aligns technical roadmap with long-term business goals. Annual horizon."
            ]
        },
        {
            name: "Execution & Operations",
            levels: [
                "Owns backlog health and predictability. Manages on-call, escalations, and risk. Ensures delivery flow.",
                "Leads cross-team programs. Resolves systemic blockers. Optimizes org-level execution.",
                "Defines operating cadence. Establishes performance systems. Drives operational excellence at scale.",
                "Orchestrates multi-team initiatives. De-risks with spikes. Bakes in SLOs, resilience, and security.",
                "Drives cross-org migrations and standards adoption. Ensures platform reliability and scalability."
            ]
        },
        {
            name: "People & Organization",
            levels: [
                "Hiring, onboarding, feedback, performance, and growth plans. Cultivates team culture and standards.",
                "Org design: Team topology, ownership boundaries, succession planning. Develops managers.",
                "Org health: Leadership pipeline, performance systems. Steers culture and outcomes at scale.",
                "Coaches seniors. Leads design reviews. Sets bar for quality. Influences without authority.",
                "Change Leadership: Drives standards adoption. Mentors Staff/Senior. Builds leadership bench."
            ]
        },
        {
            name: "Influence & Stakeholders",
            levels: [
                "Facilitates team-level leadership. Aligns with partners (PM, Design). Shields team from distractions.",
                "Dovetails into org leadership. Sets culture and operating model with peers. Manages stakeholder expectations.",
                "Aligns with product, design, data, security, finance. Executive-level leadership and influence.",
                "Aligns stakeholders across teams. Influences product direction. Navigates high ambiguity.",
                "Represents engineering in cross-functional/exec forums. Aligns leaders on principles and outcomes."
            ]
        }
    ];

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
                </div>
            </div>

            <div className="overflow-x-auto rounded-xl border border-border bg-card shadow-sm">
                <table className="w-full text-sm text-left border-collapse min-w-[1200px]">
                    <thead className="bg-muted/50 text-muted-foreground">
                        <tr>
                            <th className="p-4 font-semibold border-b border-border w-[200px] sticky left-0 bg-muted/50 backdrop-blur-sm z-10">Competency Domain</th>
                            {roles.map((role) => (
                                <th key={role} className="p-4 font-semibold border-b border-border min-w-[200px]">
                                    {role}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                        {domains.map((domain) => (
                            <tr key={domain.name} className="hover:bg-muted/5 transition-colors">
                                <td className="p-4 font-medium border-r border-border bg-card sticky left-0 z-10 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)]">
                                    {domain.name}
                                </td>
                                {domain.levels.map((level, i) => (
                                    <td key={i} className="p-4 align-top text-muted-foreground leading-relaxed border-r border-border/50 last:border-r-0">
                                        {level}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="mt-8 text-center text-sm text-muted-foreground">
                <p>
                    This matrix synthesizes leadership expectations from individual role competencies.
                    For full role details, visit the <Link href="/career-framework/roles" className="underline hover:text-primary">Roles & Career Paths</Link> page.
                </p>
            </div>
        </div>
    );
}
