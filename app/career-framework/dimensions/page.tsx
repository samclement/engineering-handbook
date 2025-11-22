import Link from "next/link";
import { ArrowLeft, BookOpen, GitCompare, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getCareerFrameworkData } from "@/lib/career-data";
import { DimensionExplainer } from "@/components/DimensionExplainer";
import { RoleComparator } from "@/components/RoleComparator";
import { WorkExamplesExplorer } from "@/components/WorkExamplesExplorer";

export default async function DimensionsPage() {
    const roles = await getCareerFrameworkData();

    return (
        <div className="container py-12 max-w-screen-xl mx-auto px-4">
            {/* Header */}
            <div className="mb-8">
                <Button variant="ghost" size="sm" asChild className="mb-4 pl-0 hover:pl-2 transition-all">
                    <Link href="/career-framework">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Framework
                    </Link>
                </Button>

                <div className="text-center space-y-4 mb-12">
                    <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
                        Role Dimensions & Examples
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                        Understand how roles differ across key dimensions and see concrete examples of work at each level
                    </p>
                </div>
            </div>

            {/* Navigation Cards */}
            <div className="grid md:grid-cols-3 gap-4 mb-12">
                <a href="#dimensions" className="group p-6 rounded-xl border border-border bg-card hover:border-primary hover:shadow-md transition-all">
                    <BarChart3 className="w-8 h-8 text-primary mb-3" />
                    <h3 className="font-bold mb-2 group-hover:text-primary transition-colors">Understanding Dimensions</h3>
                    <p className="text-sm text-muted-foreground">Learn about the 5 key dimensions that differentiate roles</p>
                </a>

                <a href="#compare" className="group p-6 rounded-xl border border-border bg-card hover:border-primary hover:shadow-md transition-all">
                    <GitCompare className="w-8 h-8 text-primary mb-3" />
                    <h3 className="font-bold mb-2 group-hover:text-primary transition-colors">Compare Roles</h3>
                    <p className="text-sm text-muted-foreground">Side-by-side comparison of roles across dimensions</p>
                </a>

                <a href="#examples" className="group p-6 rounded-xl border border-border bg-card hover:border-primary hover:shadow-md transition-all">
                    <BookOpen className="w-8 h-8 text-primary mb-3" />
                    <h3 className="font-bold mb-2 group-hover:text-primary transition-colors">Work Examples</h3>
                    <p className="text-sm text-muted-foreground">Concrete scenarios showing what good looks like</p>
                </a>
            </div>

            {/* Sections */}
            <div className="space-y-16">
                {/* Dimension Explainer Section */}
                <section id="dimensions" className="scroll-mt-8">
                    <div className="bg-slate-50/50 dark:bg-slate-900/50 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 lg:p-8">
                        <DimensionExplainer />
                    </div>
                </section>

                {/* Role Comparator Section */}
                <section id="compare" className="scroll-mt-8">
                    <div className="bg-slate-50/50 dark:bg-slate-900/50 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 lg:p-8">
                        <RoleComparator roles={roles} />
                    </div>
                </section>

                {/* Work Examples Section */}
                <section id="examples" className="scroll-mt-8">
                    <div className="bg-slate-50/50 dark:bg-slate-900/50 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 lg:p-8">
                        <WorkExamplesExplorer />
                    </div>
                </section>
            </div>

            {/* Footer Note */}
            <div className="mt-16 text-center text-sm text-muted-foreground">
                <p>
                    Dimensions are based on the{" "}
                    <Link href="/career-framework" className="underline hover:text-primary">
                        Software Engineering Career Framework
                    </Link>
                    . Examples are templates and should be adapted to your organization's context.
                </p>
            </div>
        </div>
    );
}
