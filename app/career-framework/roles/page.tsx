import React from "react";
import Link from "next/link";
import { ArrowLeft, GitGraph } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CareerPathVisualizer } from "@/components/CareerPathVisualizer";

export default function RolesAndPathsPage() {
    return (
        <div className="container py-12 max-w-screen-xl mx-auto px-4">
            <div className="mb-8">
                <Button variant="ghost" size="sm" asChild className="mb-4 pl-0 hover:pl-2 transition-all">
                    <Link href="/career-framework">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Framework
                    </Link>
                </Button>

                <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <GitGraph className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                        <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">Roles & Career Paths</h1>
                        <p className="text-muted-foreground">Explore the progression paths across IC and Management tracks</p>
                    </div>
                </div>
            </div>

            <div className="bg-slate-50/50 dark:bg-slate-900/50 rounded-3xl border border-slate-200 dark:border-slate-800 p-4 mb-8">
                <CareerPathVisualizer />
            </div>

            <p className="text-center text-sm text-muted-foreground">
                Click on any role card to view detailed expectations and operating profile levels
            </p>
        </div>
    );
}
