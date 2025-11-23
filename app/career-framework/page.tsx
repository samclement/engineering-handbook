import Link from "next/link";
import { Compass, GitGraph, BarChart3, FileText, Users, Sparkles, Target, Code, ArrowLeft } from "lucide-react";
import { LayerCard } from "@/components/LayerCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const roles = [
    { slug: "graduate-software-engineer-gse", title: "Graduate Software Engineer", track: "Foundation", abbr: "GSE" },
    { slug: "associate-software-engineer-ase", title: "Associate Software Engineer", track: "Foundation", abbr: "ASE" },
    { slug: "software-engineer-se", title: "Software Engineer", track: "Foundation", abbr: "SE" },
    { slug: "senior-software-engineer-sse", title: "Senior Software Engineer", track: "Foundation", abbr: "SSE" },
    { slug: "staff-software-engineer", title: "Staff Software Engineer", track: "IC", abbr: "Staff" },
    { slug: "principal-software-engineer", title: "Principal Software Engineer", track: "IC", abbr: "Principal" },
    { slug: "engineering-manager-em", title: "Engineering Manager", track: "Management", abbr: "EM" },
    { slug: "head-of-software-engineering-hose", title: "Head of Software Engineering", track: "Management", abbr: "HoSE" },
    { slug: "senior-head-of-software-engineering-shose", title: "Senior Head of Software Engineering", track: "Management", abbr: "SHoSE" },
];

export default function CareerFrameworkPage() {
    return (
        <div className="container py-6 max-w-screen-xl mx-auto px-4">
            {/* Header */}
            <div className="mb-12 text-center space-y-4">
                <h1 className="text-3xl font-bold tracking-tight lg:text-4xl">Career Framework</h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Explore the expectations, competencies, and growth paths for Software Engineering roles.
                </p>
            </div>

            {/* Three-Layer System */}
            <div className="mb-16 space-y-6">
                <div className="text-center mb-6">
                    <h2 className="text-2xl font-bold mb-2">Three-Layer Framework System</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Our career framework consists of three complementary layers working together
                    </p>
                </div>

                {/* Tier 1: Roles & Career Paths */}
                <LayerCard
                    icon={GitGraph}
                    title="Roles & Career Paths"
                    description="Start here: Explore career paths, role expectations, and progression patterns"
                    href="/career-framework/roles"
                    badge="Primary Framing"
                    className="w-full"
                />

                {/* Tier 2: Operating Profile */}
                <LayerCard
                    icon={BarChart3}
                    title="Operating Profile"
                    description="Measure progress across 5 key axes with objective levels (1-7)"
                    href="/career-framework/dimensions"
                    badge="Measurement"
                    className="w-full border-2 border-primary"
                />

                {/* Tier 3: Reference Links */}
                <div className="grid md:grid-cols-2 gap-6">
                    <LayerCard
                        icon={FileText}
                        title="SDLC Reference"
                        description="Deep dive into detailed technical expectations and work examples"
                        href="/career-framework/sdlc"
                        badge="Detail Layer"
                    />

                    <LayerCard
                        icon={Users}
                        title="Leadership Reference"
                        description="Detailed breakdown of leadership expectations and influence spheres"
                        href="/career-framework/leadership"
                        badge="Detail Layer"
                    />
                </div>
            </div>

            {/* Where Should I Start? */}
            <div className="mb-16">
                <h2 className="text-2xl font-bold mb-6">Where Should I Start?</h2>

                <div className="grid md:grid-cols-2 gap-6">
                    <Card className="bg-gradient-to-br from-blue-50 to-blue-100/50 dark:from-blue-950 dark:to-blue-900/30 border-blue-200 dark:border-blue-800">
                        <CardHeader>
                            <div className="flex items-center gap-3">
                                <Sparkles className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                                <CardTitle>New to the Framework?</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            <p className="text-sm">Start with <strong>Roles & Career Paths</strong> to:</p>
                            <ul className="text-sm space-y-2 ml-4">
                                <li>• Understand your current role expectations</li>
                                <li>• See what competencies matter at your level</li>
                                <li>• Learn about career progression patterns</li>
                            </ul>
                            <Button asChild variant="default" className="w-full mt-4">
                                <Link href="/career-framework/roles">
                                    Explore Roles
                                </Link>
                            </Button>
                        </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-br from-purple-50 to-purple-100/50 dark:from-purple-950 dark:to-purple-900/30 border-purple-200 dark:border-purple-800">
                        <CardHeader>
                            <div className="flex items-center gap-3">
                                <Target className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                                <CardTitle>Planning Career Growth?</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            <p className="text-sm">Use <strong>Operating Profile</strong> to:</p>
                            <ul className="text-sm space-y-2 ml-4">
                                <li>• Measure where you are on each axis</li>
                                <li>• Identify specific gaps to close</li>
                                <li>• Track progress numerically (levels 1-7)</li>
                            </ul>
                            <Button asChild variant="default" className="w-full mt-4">
                                <Link href="/career-framework/dimensions">
                                    Explore Operating Profile
                                </Link>
                            </Button>
                        </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-br from-emerald-50 to-emerald-100/50 dark:from-emerald-950 dark:to-emerald-900/30 border-emerald-200 dark:border-emerald-800">
                        <CardHeader>
                            <div className="flex items-center gap-3">
                                <FileText className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                                <CardTitle>Preparing for Review?</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            <p className="text-sm">Reference <strong>SDLC Details</strong> for:</p>
                            <ul className="text-sm space-y-2 ml-4">
                                <li>• Specific technical expectations</li>
                                <li>• Concrete behavioral examples</li>
                                <li>• Performance calibration details</li>
                            </ul>
                            <Button asChild variant="default" className="w-full mt-4">
                                <Link href="/career-framework/sdlc">
                                    View SDLC Details
                                </Link>
                            </Button>
                        </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-br from-orange-50 to-orange-100/50 dark:from-orange-950 dark:to-orange-900/30 border-orange-200 dark:border-orange-800">
                        <CardHeader>
                            <div className="flex items-center gap-3">
                                <Users className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                                <CardTitle>Exploring Leadership?</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            <p className="text-sm">View <strong>Leadership Reference</strong> for:</p>
                            <ul className="text-sm space-y-2 ml-4">
                                <li>• Influence spheres by role</li>
                                <li>• Strategic impact expectations</li>
                                <li>• People management competencies</li>
                            </ul>
                            <Button asChild variant="default" className="w-full mt-4">
                                <Link href="/career-framework/leadership">
                                    View Leadership Matrix
                                </Link>
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>

            {/* Role Quick Links */}
            <div className="mb-16">
                <h2 className="text-2xl font-bold mb-6">Browse by Role</h2>

                {/* Foundation Roles */}
                <div className="mb-8">
                    <div className="flex items-center gap-2 mb-4">
                        <Code className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                        <h3 className="text-lg font-semibold">Foundation Track</h3>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {roles.filter(r => r.track === "Foundation").map((role) => (
                            <Link
                                key={role.slug}
                                href={`/career-framework/${role.slug}`}
                                className="group"
                            >
                                <Card className="h-full transition-all hover:border-primary hover:shadow-md">
                                    <CardHeader className="pb-3">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-xs font-semibold px-2 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                                                {role.abbr}
                                            </span>
                                            <ArrowLeft className="w-4 h-4 rotate-180 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                                        </div>
                                        <CardTitle className="text-base leading-tight">{role.title}</CardTitle>
                                    </CardHeader>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* IC Track */}
                <div className="mb-8">
                    <div className="flex items-center gap-2 mb-4">
                        <Target className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        <h3 className="text-lg font-semibold">Individual Contributor Track</h3>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {roles.filter(r => r.track === "IC").map((role) => (
                            <Link
                                key={role.slug}
                                href={`/career-framework/${role.slug}`}
                                className="group"
                            >
                                <Card className="h-full transition-all hover:border-primary hover:shadow-md">
                                    <CardHeader className="pb-3">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-xs font-semibold px-2 py-1 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300">
                                                {role.abbr}
                                            </span>
                                            <ArrowLeft className="w-4 h-4 rotate-180 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                                        </div>
                                        <CardTitle className="text-base leading-tight">{role.title}</CardTitle>
                                    </CardHeader>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Management Track */}
                <div>
                    <div className="flex items-center gap-2 mb-4">
                        <Users className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                        <h3 className="text-lg font-semibold">Management Track</h3>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {roles.filter(r => r.track === "Management").map((role) => (
                            <Link
                                key={role.slug}
                                href={`/career-framework/${role.slug}`}
                                className="group"
                            >
                                <Card className="h-full transition-all hover:border-primary hover:shadow-md">
                                    <CardHeader className="pb-3">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-xs font-semibold px-2 py-1 rounded-full bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300">
                                                {role.abbr}
                                            </span>
                                            <ArrowLeft className="w-4 h-4 rotate-180 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                                        </div>
                                        <CardTitle className="text-base leading-tight">{role.title}</CardTitle>
                                    </CardHeader>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            {/* Quick Tips */}
            <Card className="bg-muted/50">
                <CardHeader>
                    <CardTitle className="text-lg">💡 Navigation Tips</CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                            <span className="text-primary font-bold">•</span>
                            <span><strong>Start broad, then go deep:</strong> Begin with Roles & Career Paths to understand the landscape, then use Operating Profile to measure, and Reference Layers for specifics</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-primary font-bold">•</span>
                            <span><strong>Operating Profile is your measurement tool:</strong> The 5 profile dimensions provide objective levels (1-7) that help you track progress</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-primary font-bold">•</span>
                            <span><strong>Role pages show dimension levels:</strong> Each individual role page displays where that role sits across all 5 dimensions</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-primary font-bold">•</span>
                            <span><strong>Don't duplicate—reference:</strong> Use each layer for its strength and cross-reference between them</span>
                        </li>
                    </ul>
                </CardContent>
            </Card>
        </div>
    );
}
