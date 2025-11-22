import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, GitPullRequest, AlertTriangle, FileCode, TrendingUp } from "lucide-react";

const artefacts = [
    {
        title: "Architecture Decision Record (ADR)",
        description: "Captures a single architectural decision, such as a change to the technology stack or a significant structural change.",
        icon: FileCode,
        roles: ["Senior Software Engineer", "Staff Software Engineer", "Principal Software Engineer"],
    },
    {
        title: "Request for Comments (RFC)",
        description: "A proposal for a major change or new feature, inviting feedback from the wider engineering team.",
        icon: FileText,
        roles: ["Senior Software Engineer", "Staff Software Engineer", "Principal Software Engineer"],
    },
    {
        title: "Technical Design Document",
        description: "Detailed plan for implementing a specific feature or component.",
        icon: FileText,
        roles: ["Software Engineer", "Senior Software Engineer"],
    },
    {
        title: "Incident Report (Post-mortem)",
        description: "Analysis of a production incident, including root cause, impact, and remediation steps.",
        icon: AlertTriangle,
        roles: ["Software Engineer", "Senior Software Engineer", "Engineering Manager"],
    },
    {
        title: "Pull Request (PR)",
        description: "Proposed changes to the codebase, requiring review and approval.",
        icon: GitPullRequest,
        roles: ["Graduate Software Engineer", "Associate Software Engineer", "Software Engineer"],
    },
    {
        title: "Growth Plan",
        description: "A personal development plan outlining goals and actions for career progression.",
        icon: TrendingUp,
        roles: ["All Roles"],
    },
];

export default function ArtefactsPage() {
    return (
        <div className="container py-12 max-w-screen-xl mx-auto px-4">
            <div className="mb-12 text-center space-y-4">
                <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">Engineering Artefacts</h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Key documents and deliverables that drive our engineering culture and processes.
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {artefacts.map((artefact) => (
                    <Card key={artefact.title} className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-primary/10 hover:border-primary/30">
                        <CardHeader>
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                                <artefact.icon className="h-6 w-6 text-primary" />
                            </div>
                            <CardTitle>{artefact.title}</CardTitle>
                            <CardDescription>{artefact.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="mt-4">
                                <h4 className="text-sm font-semibold mb-2 text-foreground/80">Associated Roles:</h4>
                                <div className="flex flex-wrap gap-2">
                                    {artefact.roles.map((role) => (
                                        <span key={role} className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                                            {role}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
