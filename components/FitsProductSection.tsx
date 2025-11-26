"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Layout, Target, Users, ArrowRight, CheckCircle2, Lightbulb, BarChart3 } from "lucide-react";

type Tab = "overview" | "initiatives" | "stakeholders";

export function FitsProductSection() {
    const [activeTab, setActiveTab] = useState<Tab>("overview");

    const tabs = [
        { id: "overview", label: "Overview", icon: Layout },
        { id: "initiatives", label: "Key Initiatives", icon: Target },
        { id: "stakeholders", label: "Stakeholders", icon: Users },
    ];

    return (
        <Card className="w-full h-full border-primary/10 shadow-xl bg-background">
            <CardHeader className="pb-4">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <CardTitle className="text-2xl">Product Vision</CardTitle>
                        <CardDescription className="mt-2 max-w-3xl text-base">
                            To accelerate improvement in Stock Loss and Stock Integrity and continually improve the end-to-end flow of goods, products and assets.
                        </CardDescription>
                    </div>

                    {/* Tabs Navigation */}
                    <div className="flex p-1 bg-secondary/50 rounded-lg self-start md:self-center">
                        {tabs.map((tab) => {
                            const Icon = tab.icon;
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id as Tab)}
                                    className={`
                                        flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200
                                        ${activeTab === tab.id
                                            ? "bg-background text-primary shadow-sm"
                                            : "text-muted-foreground hover:text-foreground hover:bg-background/50"}
                                    `}
                                >
                                    <Icon className="h-4 w-4" />
                                    {tab.label}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </CardHeader>

            <CardContent className="pt-2">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                    >
                        {activeTab === "overview" && <OverviewContent />}
                        {activeTab === "initiatives" && <InitiativesContent />}
                        {activeTab === "stakeholders" && <StakeholdersContent />}
                    </motion.div>
                </AnimatePresence>
            </CardContent>
        </Card>
    );
}

function OverviewContent() {
    return (
        <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
                <div>
                    <h3 className="text-lg font-semibold flex items-center gap-2 mb-1 text-primary">
                        <ArrowRight className="h-5 w-5" />
                        Core Objective
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                        For the M&S Foods Business that needs to drive P&L improvement, Foods Inventory is a product that validates stock movements across the end-to-end Supply Chain, providing real-time response, alerting and actionable insights, to drive every Foods purchase into sale.
                    </p>
                </div>

                <div>
                    <h3 className="text-lg font-semibold flex items-center gap-2 mb-1 text-primary">
                        <Lightbulb className="h-5 w-5" />
                        Strategic Value
                    </h3>
                    <ul className="space-y-1 text-muted-foreground text-sm">
                        <li className="flex items-start gap-2">
                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                            <span>Provide capability to cut through multiple dependencies and enterprise complexities.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                            <span>Realise opportunities and solve for business-critical requirements at pace.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                            <span>Deliver solutions ahead of long-term strategic implementations.</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="bg-secondary/20 rounded-xl p-4 border border-secondary">
                <h3 className="text-lg font-semibold mb-2">Business Capabilities</h3>
                <div className="grid gap-2">
                    {[
                        "Advance Shipment Notice (ASN)",
                        "Goods Receipt (GR)",
                        "Purchase Orders",
                        "Invoice & Debit Note",
                        "ASN Batching (GIST VAS)",
                        "Stock Reconciliation (EOD)",
                        "NDO Tactical Reports",
                        "Open PO & GR Extracts"
                    ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3 p-1.5 rounded-lg bg-background/80 border border-border/50">
                            <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-500" />
                            <span className="text-sm font-medium">{item}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

function InitiativesContent() {
    const initiatives = [
        {
            title: "Stock & Asset Movement",
            items: [
                "Movement of stock across all networks: Chill, Frozen, Ambient, Consignment",
                "Movement of assets across all networks",
                "Stock holding in Logistics and Store (date code compliance)",
                "C&H Movement of Stock",
                "Consignment Stock Loss"
            ]
        },
        {
            title: "Alerting & Automation",
            items: [
                "Create actionable insight by subscribing to data sets",
                "Create rules, notifications and alerts",
                "Analyse ASNs to PO and GR and trigger alerts",
                "Stock date/life and rotation alerting",
                "Evolve to ~100% automated alerting coverage"
            ]
        },
        {
            title: "Solutions & Innovation",
            items: [
                "ASN Generator Replacement",
                "Total E2E Visibility Dashboard",
                "Movement of Stock Chat Bot (GenAI)",
                "Invoice archiving",
                "NDC Allocation SAP Decoupling",
                "Supplier Hub - Ambient Supplier ASNs"
            ]
        },
        {
            title: "Compliance & Tracking",
            items: [
                "Directing RAS Checks (High stock loss areas)",
                "RAS Scanning",
                "Supplier Compliance Score Cards",
                "DC Compliance Score Cards",
                "Asset Traceability & RTW Process",
                "Tray Rental & Utilisation"
            ]
        }
    ];

    return (
        <div className="grid md:grid-cols-2 gap-4">
            {initiatives.map((group, idx) => (
                <div key={idx} className="space-y-2">
                    <h3 className="font-semibold text-primary flex items-center gap-2 text-sm">
                        <BarChart3 className="h-4 w-4" />
                        {group.title}
                    </h3>
                    <ul className="space-y-1">
                        {group.items.map((item, i) => (
                            <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                                <span className="mt-1.5 h-1 w-1 rounded-full bg-muted-foreground/50 flex-shrink-0" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}

function StakeholdersContent() {
    const stakeholders = [
        { name: "Supplier", type: "External" },
        { name: "Open Text", type: "Partner" },
        { name: "GIST", type: "Logistics" },
        { name: "Franchise/Partners", type: "External" },
        { name: "Business and Compliance Team", type: "Internal" },
        { name: "SAP Team", type: "Dependency" },
        { name: "CSSM (Retail)", type: "Dependency" },
        { name: "ES & BEAM", type: "Dependency" },
        { name: "RAS", type: "Dependency" }
    ];

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {stakeholders.map((stakeholder, i) => (
                <div key={i} className="flex flex-col p-2 rounded-lg bg-secondary/20 border border-secondary hover:bg-secondary/40 transition-colors">
                    <span className="font-medium text-sm">{stakeholder.name}</span>
                    <span className="text-[10px] text-muted-foreground mt-0.5">{stakeholder.type}</span>
                </div>
            ))}
        </div>
    );
}
