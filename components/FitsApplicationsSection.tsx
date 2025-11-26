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
                        <CardHeader className="p-6 pb-4">
                            <div className="grid grid-cols-3 gap-6">
                                {/* Left side - App info (1 column) */}
                                <div>
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
                                    <CardDescription className="line-clamp-2 text-sm">{app.description}</CardDescription>
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
                                                        Dynatrace APM
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
                                            {app.observability.dashboard && (
                                                <li>
                                                    <Link
                                                        href={app.observability.dashboard}
                                                        className="hover:text-primary transition-colors hover:underline"
                                                    >
                                                        Cost Dashboard
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
                                                        Production (AKS)
                                                    </Link>
                                                </li>
                                            )}
                                            {app.environments.preProd && (
                                                <li>
                                                    <Link
                                                        href={app.environments.preProd}
                                                        className="hover:text-primary transition-colors hover:underline"
                                                    >
                                                        Pre-Prod
                                                    </Link>
                                                </li>
                                            )}
                                            {app.environments.sit && (
                                                <li>
                                                    <Link
                                                        href={app.environments.sit}
                                                        className="hover:text-primary transition-colors hover:underline"
                                                    >
                                                        SIT
                                                    </Link>
                                                </li>
                                            )}
                                            {app.environments.dev && (
                                                <li>
                                                    <Link
                                                        href={app.environments.dev}
                                                        className="hover:text-primary transition-colors hover:underline"
                                                    >
                                                        Dev
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
                                                        Runbooks & SOPs
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
                                            {app.info.docs && (
                                                <li>
                                                    <Link
                                                        href={app.info.docs}
                                                        className="hover:text-primary transition-colors hover:underline"
                                                    >
                                                        Documentation
                                                    </Link>
                                                </li>
                                            )}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </CardHeader>

                        {/* Repositories - At bottom, collapsible */}
                        <CardContent className="p-6 pt-0">
                            <div>
                                <div
                                    className="flex items-center gap-2 cursor-pointer mb-4 group"
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
                                    <div className="flex flex-wrap gap-4">
                                        {app.repos.map((repo) => (
                                            <div
                                                key={repo.name}
                                                className="flex-1 min-w-[250px] max-w-[350px] p-3 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors border border-border/50"
                                            >
                                                <div className="space-y-2">
                                                    <div className="font-medium text-sm">{repo.name}</div>
                                                    <div className="text-xs text-muted-foreground">
                                                        {repo.description}
                                                    </div>
                                                    <div className="flex gap-3 text-xs">
                                                        {repo.links.github && (
                                                            <Link
                                                                href={repo.links.github}
                                                                className="text-primary hover:underline"
                                                            >
                                                                GitHub
                                                            </Link>
                                                        )}
                                                        {repo.links.muziris && (
                                                            <Link
                                                                href={repo.links.muziris}
                                                                className="text-primary hover:underline"
                                                            >
                                                                Muziris
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
