
import Link from "next/link";
import { CareerPathVisualizer } from "@/components/CareerPathVisualizer";
// I'll just use a span for now.

export default function CareerFrameworkPage() {
    return (
        <div className="container py-6 max-w-screen-xl mx-auto px-4">
            <div className="mb-6 text-center space-y-2">
                <h1 className="text-3xl font-bold tracking-tight lg:text-4xl">Career Framework</h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Explore the expectations, competencies, and growth paths for Software Engineering roles.
                </p>
            </div>

            <div className="bg-slate-50/50 dark:bg-slate-900/50 rounded-3xl border border-slate-200 dark:border-slate-800 p-4">
                <CareerPathVisualizer />
            </div>

            <div className="mt-8 text-center">
                <p className="text-sm text-muted-foreground">
                    Click on any role card above to view detailed expectations and competencies.
                </p>
            </div>
        </div>
    );
}
