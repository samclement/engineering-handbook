"use client";

import { useState } from "react";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronDown, GitBranch, Monitor, Server, BookOpen } from "lucide-react";

interface Repo {
    name: string;
    description: string;
    links: {
        github: string;
        sonarqube?: string;
        security?: string;
    };
}

interface Application {
    name: string;
    description: string;
    status: "Active" | "Deprecated" | "Development";
    repos: Repo[];
    observability: {
        apm?: string;
        logs?: string;
        alerts?: string;
    };
    environments: {
        production?: string;
        staging?: string;
        dbConsole?: string;
    };
    info: {
        runbooks?: string;
        slas?: string;
        userList?: string;
    };
}

const applications: Application[] = [
    {
        name: "Core Platform Service",
        description: "Primary backend service for user management and authentication.",
        status: "Active",
        repos: [
            {
                name: "platform-api",
                description: "Main API service",
                links: {
                    github: "#",
                    sonarqube: "#",
                    security: "#",
                },
            },
            {
                name: "platform-worker",
                description: "Background job processor",
                links: {
                    github: "#",
                    sonarqube: "#",
                },
            },
        ],
        observability: {
            apm: "#",
            logs: "#",
            alerts: "#",
        },
        environments: {
            production: "#",
            staging: "#",
            dbConsole: "#",
        },
        info: {
            runbooks: "#",
            slas: "#",
            userList: "#",
        },
    },
    {
        name: "API Gateway",
        description: "Central API gateway handling routing, authentication, rate limiting, and request transformation. Serves as the primary entry point for all external API requests.",
        status: "Active",
        repos: [
            {
                name: "gateway-service",
                description: "Main gateway service",
                links: {
                    github: "#",
                    sonarqube: "#",
                    security: "#",
                },
            },
        ],
        observability: {
            apm: "#",
            logs: "#",
            alerts: "#",
        },
        environments: {
            production: "#",
            staging: "#",
        },
        info: {
            runbooks: "#",
            slas: "#",
        },
    },
];

export function ApplicationsSection() {
    const [expandedApps, setExpandedApps] = useState<Set<string>>(new Set());

    const toggleApp = (appName: string) => {
        const newExpanded = new Set(expandedApps);
        if (newExpanded.has(appName)) {
            newExpanded.delete(appName);
        } else {
            newExpanded.add(appName);
        }
        setExpandedApps(newExpanded);
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case "Active":
                return "bg-green-500/15 text-green-700 border-transparent";
            case "Development":
                return "bg-blue-500/15 text-blue-700 border-transparent";
            case "Deprecated":
                return "bg-gray-500/15 text-gray-700 border-transparent";
            default:
                return "bg-gray-500/15 text-gray-700 border-transparent";
        }
    };

    return (
        <div className="space-y-3">
            {applications.map((app) => {
                const isExpanded = expandedApps.has(app.name);
                return (
                    <Card
                        key={app.name}
                        className="transition-all duration-300 hover:shadow-md border-primary/10 hover:border-primary/30"
                    >
                        <CardHeader>
                            <div className="grid grid-cols-3 gap-6">
                                {/* Left side - App info (1 column) */}
                                <div>
                                    <div className="flex items-center gap-3 mb-2">
                                        <CardTitle className="text-base">{app.name}</CardTitle>
                                        <span
                                            className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors ${getStatusColor(
                                                app.status
                                            )}`}
                                        >
                                            {app.status}
                                        </span>
                                    </div>
                                    <CardDescription className="line-clamp-2">{app.description}</CardDescription>
                                    <div className="mt-2 text-xs text-muted-foreground">
                                        {app.repos.length} {app.repos.length === 1 ? "repository" : "repositories"}
                                    </div>
                                </div>

                                {/* Right side - Observability, Environments, Info (2 columns) */}
                                <div className="col-span-2 grid gap-4 grid-cols-3">
                                    {/* Observability */}
                                    <div className="space-y-2">
                                        <h4 className="text-sm font-medium flex items-center gap-2 text-primary">
                                            <Monitor className="h-4 w-4" /> Observability
                                        </h4>
                                        <ul className="text-sm space-y-1 text-muted-foreground">
                                            {app.observability.apm && (
                                                <li>
                                                    <Link
                                                        href={app.observability.apm}
                                                        className="hover:text-primary transition-colors hover:underline"
                                                    >
                                                        APM Dashboard
                                                    </Link>
                                                </li>
                                            )}
                                            {app.observability.logs && (
                                                <li>
                                                    <Link
                                                        href={app.observability.logs}
                                                        className="hover:text-primary transition-colors hover:underline"
                                                    >
                                                        Logs
                                                    </Link>
                                                </li>
                                            )}
                                            {app.observability.alerts && (
                                                <li>
                                                    <Link
                                                        href={app.observability.alerts}
                                                        className="hover:text-primary transition-colors hover:underline"
                                                    >
                                                        Alerts
                                                    </Link>
                                                </li>
                                            )}
                                        </ul>
                                    </div>

                                    {/* Environments */}
                                    <div className="space-y-2">
                                        <h4 className="text-sm font-medium flex items-center gap-2 text-primary">
                                            <Server className="h-4 w-4" /> Environments
                                        </h4>
                                        <ul className="text-sm space-y-1 text-muted-foreground">
                                            {app.environments.production && (
                                                <li>
                                                    <Link
                                                        href={app.environments.production}
                                                        className="hover:text-primary transition-colors hover:underline"
                                                    >
                                                        Production
                                                    </Link>
                                                </li>
                                            )}
                                            {app.environments.staging && (
                                                <li>
                                                    <Link
                                                        href={app.environments.staging}
                                                        className="hover:text-primary transition-colors hover:underline"
                                                    >
                                                        Staging
                                                    </Link>
                                                </li>
                                            )}
                                            {app.environments.dbConsole && (
                                                <li>
                                                    <Link
                                                        href={app.environments.dbConsole}
                                                        className="hover:text-primary transition-colors hover:underline"
                                                    >
                                                        DB Console
                                                    </Link>
                                                </li>
                                            )}
                                        </ul>
                                    </div>

                                    {/* Info */}
                                    <div className="space-y-2">
                                        <h4 className="text-sm font-medium flex items-center gap-2 text-primary">
                                            <BookOpen className="h-4 w-4" /> Info
                                        </h4>
                                        <ul className="text-sm space-y-1 text-muted-foreground">
                                            {app.info.runbooks && (
                                                <li>
                                                    <Link
                                                        href={app.info.runbooks}
                                                        className="hover:text-primary transition-colors hover:underline"
                                                    >
                                                        Runbooks
                                                    </Link>
                                                </li>
                                            )}
                                            {app.info.slas && (
                                                <li>
                                                    <Link
                                                        href={app.info.slas}
                                                        className="hover:text-primary transition-colors hover:underline"
                                                    >
                                                        SLAs
                                                    </Link>
                                                </li>
                                            )}
                                            {app.info.userList && (
                                                <li>
                                                    <Link
                                                        href={app.info.userList}
                                                        className="hover:text-primary transition-colors hover:underline"
                                                    >
                                                        User List
                                                    </Link>
                                                </li>
                                            )}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </CardHeader>

                        {/* Repositories - At bottom, collapsible */}
                        <CardContent>
                            <div>
                                <div
                                    className="flex items-center gap-2 cursor-pointer mb-3 group"
                                    onClick={() => toggleApp(app.name)}
                                >
                                    <h4 className="text-sm font-medium flex items-center gap-2 text-primary">
                                        <GitBranch className="h-4 w-4" /> Repositories
                                    </h4>
                                    <ChevronDown
                                        className={`h-4 w-4 text-muted-foreground transition-transform duration-200 group-hover:text-primary ${isExpanded ? "rotate-180" : ""
                                            }`}
                                    />
                                </div>
                                {isExpanded && (
                                    <div className="flex flex-wrap gap-2">
                                        {app.repos.map((repo) => (
                                            <div
                                                key={repo.name}
                                                className="flex-1 min-w-[200px] max-w-[300px] p-3 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors border border-border/50"
                                            >
                                                <div className="space-y-2">
                                                    <div className="font-medium text-sm">{repo.name}</div>
                                                    <div className="text-xs text-muted-foreground">
                                                        {repo.description}
                                                    </div>
                                                    <div className="flex gap-2 text-xs">
                                                        <Link
                                                            href={repo.links.github}
                                                            className="text-primary hover:underline"
                                                        >
                                                            GitHub
                                                        </Link>
                                                        {repo.links.sonarqube && (
                                                            <Link
                                                                href={repo.links.sonarqube}
                                                                className="text-primary hover:underline"
                                                            >
                                                                SonarQube
                                                            </Link>
                                                        )}
                                                        {repo.links.security && (
                                                            <Link
                                                                href={repo.links.security}
                                                                className="text-primary hover:underline"
                                                            >
                                                                Security
                                                            </Link>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </CardContent>
                    </Card>
                );
            })}
        </div>
    );
}
