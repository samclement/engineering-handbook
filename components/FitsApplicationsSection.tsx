"use client";

import { useState } from "react";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronDown, GitBranch, Monitor, Server, BookOpen } from "lucide-react";

interface Repo {
    name: string;
    description: string;
    links: {
        github?: string;
        muziris?: string;
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
        dashboard?: string;
    };
    environments: {
        production?: string;
        preProd?: string;
        sit?: string;
        dev?: string;
    };
    info: {
        runbooks?: string;
        slas?: string;
        docs?: string;
    };
}

const fitsApplications: Application[] = [
    {
        name: "ASN Services",
        description: "Advance Shipment Notice validation and orchestration services.",
        status: "Active",
        repos: [
            {
                name: "foods-fits-asn-validation-service",
                description: "ASN validation service",
                links: {
                    github: "https://github.com/DigitalInnovation/foods-fits-asn-validation-service",
                },
            },
            {
                name: "foods-fits-asn-orchestration",
                description: "ASN orchestration service",
                links: {
                    github: "https://github.com/DigitalInnovation/foods-fits-asn-orchestration",
                },
            },
        ],
        observability: {
            dashboard: "https://hso67908.apps.dynatrace.com/ui/apps/dynatrace.dashboards/dashboard/7079f18d-dcbc-40e0-aa04-e5740aaa0a41",
            logs: "https://hso67908.apps.dynatrace.com/ui/apps/dynatrace.classic.settings/ui/settings/builtin:logmonitoring.log-events?gtf=-2h&gf=all&filter=summary%3Afits",
        },
        environments: {
            production: "https://foods-fits-asn-validation-service.k8s.mnscorp.net",
        },
        info: {
            docs: "https://jira-marksandspencer-app.atlassian.net/wiki/pages/viewpage.action?pageId=154114880",
        },
    },
    {
        name: "Stock Management",
        description: "Stock reconciliation, goods receipt, and purchase order management.",
        status: "Active",
        repos: [
            {
                name: "foods-fits-stock-recon",
                description: "Stock reconciliation service",
                links: {
                    github: "https://github.com/DigitalInnovation/foods-fits-stock-recon",
                },
            },
            {
                name: "foods-fits-gr",
                description: "Goods Receipt service",
                links: {
                    github: "https://github.com/DigitalInnovation/foods-fits-gr",
                },
            },
            {
                name: "foods-fits-po",
                description: "Purchase Order service",
                links: {
                    github: "https://github.com/DigitalInnovation/foods-fits-po",
                },
            },
        ],
        observability: {
            dashboard: "https://hso67908.apps.dynatrace.com/ui/apps/dynatrace.dashboards/dashboard/7079f18d-dcbc-40e0-aa04-e5740aaa0a41",
        },
        environments: {},
        info: {},
    },
    {
        name: "Financials & Invoicing",
        description: "EVM, Debit Notes, and Invoicing services.",
        status: "Active",
        repos: [
            {
                name: "foods-fits-evm",
                description: "EVM service",
                links: {
                    github: "https://github.com/DigitalInnovation/foods-fits-evm",
                },
            },
            {
                name: "foods-fits-evm-ui",
                description: "EVM UI",
                links: {
                    github: "https://github.com/DigitalInnovation/foods-fits-evm-ui",
                },
            },
            {
                name: "foods-fits-debitnote-ui",
                description: "Debit Note UI",
                links: {
                    github: "https://github.com/DigitalInnovation/foods-fits-debitnote-ui",
                },
            },
            {
                name: "foods-fits-invoice",
                description: "Invoice service",
                links: {
                    github: "https://github.com/DigitalInnovation/foods-fits-invoice",
                },
            },
        ],
        observability: {
            dashboard: "https://hso67908.apps.dynatrace.com/ui/apps/dynatrace.dashboards/dashboard/7079f18d-dcbc-40e0-aa04-e5740aaa0a41",
        },
        environments: {},
        info: {},
    },
    {
        name: "Common & Infrastructure",
        description: "Shared components and infrastructure services.",
        status: "Active",
        repos: [
            {
                name: "foods-fits-common-component",
                description: "Common shared components",
                links: {
                    github: "https://github.com/DigitalInnovation/foods-fits-common-component",
                },
            },
            {
                name: "foods-fits-masnn",
                description: "MASNN service",
                links: {
                    github: "https://github.com/DigitalInnovation/foods-fits-masnn",
                },
            },
        ],
        observability: {
            dashboard: "https://hso67908.apps.dynatrace.com/ui/apps/dynatrace.dashboards/dashboard/7079f18d-dcbc-40e0-aa04-e5740aaa0a41",
        },
        environments: {},
        info: {},
    },
];

export function FitsApplicationsSection() {
    const [expandedApps, setExpandedApps] = useState<Set<string>>(new Set());

    const toggleApp = (appName: string) => {
        setExpandedApps((prev) => {
            const newSet = new Set(prev);
            if (newSet.has(appName)) {
                newSet.delete(appName);
            } else {
                newSet.add(appName);
            }
            return newSet;
        });
    };

    const getStatusColor = (status: Application["status"]) => {
        switch (status) {
            case "Active":
                return "bg-green-500/15 text-green-700 border-transparent";
            case "Development":
                return "bg-blue-500/15 text-blue-700 border-transparent";
            case "Deprecated":
                return "bg-orange-500/15 text-orange-700 border-transparent";
            default:
                return "bg-gray-500/15 text-gray-700 border-transparent";
        }
    };

    return (
        <div className="space-y-4">
            {fitsApplications.map((app) => {
                const isExpanded = expandedApps.has(app.name);
                return (
                    <Card
                        key={app.name}
                        className="transition-all duration-300 hover:shadow-md border-primary/10 hover:border-primary/30"
                    >
                        <CardHeader className="p-5">
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                                {/* Left side - App info (1 column) */}
                                <div className="flex flex-col h-full">
                                    <div className="flex items-center gap-3 mb-2">
                                        <CardTitle className="text-lg">{app.name}</CardTitle>
                                        <span
                                            className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors ${getStatusColor(
                                                app.status
                                            )}`}
                                        >
                                            {app.status}
                                        </span>
                                    </div>
                                    <CardDescription className="line-clamp-2 text-sm mb-3">{app.description}</CardDescription>

                                    <div className="mt-auto pt-2">
                                        <button
                                            onClick={() => toggleApp(app.name)}
                                            className="inline-flex items-center gap-2 text-xs font-medium text-primary hover:underline group"
                                        >
                                            <GitBranch className="h-3.5 w-3.5" />
                                            {app.repos.length} {app.repos.length === 1 ? "repository" : "repositories"}
                                            <ChevronDown
                                                className={`h-3 w-3 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}
                                            />
                                        </button>
                                    </div>
                                </div>

                                {/* Right side - Observability, Environments, Info (2 columns) */}
                                <div className="lg:col-span-2 flex flex-col justify-center gap-3">
                                    {/* Observability */}
                                    {(app.observability.apm || app.observability.logs || app.observability.alerts || app.observability.dashboard) && (
                                        <div className="flex items-start gap-3">
                                            <div className="flex items-center gap-2 min-w-[120px] text-sm font-medium text-primary">
                                                <Monitor className="h-4 w-4" /> Observability
                                            </div>
                                            <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
                                                {app.observability.apm && (
                                                    <Link href={app.observability.apm} className="hover:text-primary transition-colors hover:underline">Dynatrace APM</Link>
                                                )}
                                                {app.observability.logs && (
                                                    <Link href={app.observability.logs} className="hover:text-primary transition-colors hover:underline">Logs</Link>
                                                )}
                                                {app.observability.alerts && (
                                                    <Link href={app.observability.alerts} className="hover:text-primary transition-colors hover:underline">Alerts</Link>
                                                )}
                                                {app.observability.dashboard && (
                                                    <Link href={app.observability.dashboard} className="hover:text-primary transition-colors hover:underline">Cost Dashboard</Link>
                                                )}
                                            </div>
                                        </div>
                                    )}

                                    {/* Environments */}
                                    {(app.environments.production || app.environments.preProd || app.environments.sit || app.environments.dev) && (
                                        <div className="flex items-start gap-3">
                                            <div className="flex items-center gap-2 min-w-[120px] text-sm font-medium text-primary">
                                                <Server className="h-4 w-4" /> Environments
                                            </div>
                                            <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
                                                {app.environments.production && (
                                                    <Link href={app.environments.production} className="hover:text-primary transition-colors hover:underline">Production (AKS)</Link>
                                                )}
                                                {app.environments.preProd && (
                                                    <Link href={app.environments.preProd} className="hover:text-primary transition-colors hover:underline">Pre-Prod</Link>
                                                )}
                                                {app.environments.sit && (
                                                    <Link href={app.environments.sit} className="hover:text-primary transition-colors hover:underline">SIT</Link>
                                                )}
                                                {app.environments.dev && (
                                                    <Link href={app.environments.dev} className="hover:text-primary transition-colors hover:underline">Dev</Link>
                                                )}
                                            </div>
                                        </div>
                                    )}

                                    {/* Info */}
                                    {(app.info.runbooks || app.info.slas || app.info.docs) && (
                                        <div className="flex items-start gap-3">
                                            <div className="flex items-center gap-2 min-w-[120px] text-sm font-medium text-primary">
                                                <BookOpen className="h-4 w-4" /> Info
                                            </div>
                                            <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
                                                {app.info.runbooks && (
                                                    <Link href={app.info.runbooks} className="hover:text-primary transition-colors hover:underline">Runbooks & SOPs</Link>
                                                )}
                                                {app.info.slas && (
                                                    <Link href={app.info.slas} className="hover:text-primary transition-colors hover:underline">SLAs</Link>
                                                )}
                                                {app.info.docs && (
                                                    <Link href={app.info.docs} className="hover:text-primary transition-colors hover:underline">Documentation</Link>
                                                )}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </CardHeader>

                        {/* Repositories - Collapsible Content */}
                        {isExpanded && (
                            <CardContent className="p-5 pt-0 border-t border-border/50 bg-secondary/5">
                                <div className="pt-4 flex flex-wrap gap-4">
                                    {app.repos.map((repo) => (
                                        <div
                                            key={repo.name}
                                            className="flex-1 min-w-[250px] max-w-[350px] p-3 rounded-lg bg-slate-50 dark:bg-slate-900/50 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors border border-border/50 shadow-sm"
                                        >
                                            <div className="space-y-2">
                                                <div className="font-medium text-sm flex items-center gap-2">
                                                    <GitBranch className="h-3.5 w-3.5 text-muted-foreground" />
                                                    {repo.name}
                                                </div>
                                                <div className="text-xs text-muted-foreground line-clamp-2">
                                                    {repo.description}
                                                </div>
                                                <div className="flex gap-3 text-xs pt-1">
                                                    {repo.links.github && (
                                                        <Link
                                                            href={repo.links.github}
                                                            className="text-primary hover:underline font-medium"
                                                        >
                                                            GitHub
                                                        </Link>
                                                    )}
                                                    {repo.links.muziris && (
                                                        <Link
                                                            href={repo.links.muziris}
                                                            className="text-primary hover:underline font-medium"
                                                        >
                                                            Muziris
                                                        </Link>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        )}
                    </Card>
                );
            })}
        </div>
    );
}
