import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Activity,
    BookOpen,
    ChevronDown,
    Code2,
    GitBranch,
    Layout,
    LifeBuoy,
    Monitor,
    Server,
    Users,
    Wrench,
} from "lucide-react";

export default function TeamPage() {
    return (
        <div className="container py-8 max-w-screen-xl mx-auto px-4">
            {/* Header */}
            <div className="mb-8 text-center space-y-3">
                <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">Team Structure & Resources</h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Quick links to your team's product, delivery, engineering resources, and applications.
                </p>
            </div>

            <div className="space-y-8">
                {/* Top Section: Product, Delivery, Team Members */}
                <div className="grid gap-4 md:grid-cols-3">
                    {/* Product Strategy */}
                    <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-primary/10 hover:border-primary/30">
                        <CardHeader>
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                                <Layout className="h-6 w-6 text-primary" />
                            </div>
                            <CardTitle>Product</CardTitle>
                            <CardDescription>Vision, roadmap, and requirements.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li><Link href="#" className="hover:text-primary transition-colors">Product Vision & Strategy</Link></li>
                                <li><Link href="#" className="hover:text-primary transition-colors">Roadmap</Link></li>
                                <li><Link href="#" className="hover:text-primary transition-colors">Requirements (PRDs)</Link></li>
                                <li><Link href="#" className="hover:text-primary transition-colors">User Research</Link></li>
                            </ul>
                        </CardContent>
                    </Card>

                    {/* Delivery Process */}
                    <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-primary/10 hover:border-primary/30">
                        <CardHeader>
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                                <Activity className="h-6 w-6 text-primary" />
                            </div>
                            <CardTitle>Delivery</CardTitle>
                            <CardDescription>Agile methodology and tracking.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li><Link href="#" className="hover:text-primary transition-colors">Ways of Working</Link></li>
                                <li><Link href="#" className="hover:text-primary transition-colors">Sprint Board</Link></li>
                                <li><Link href="#" className="hover:text-primary transition-colors">Backlog</Link></li>
                                <li><Link href="#" className="hover:text-primary transition-colors">Release Calendar</Link></li>
                                <li><Link href="#" className="hover:text-primary transition-colors">Team Rituals</Link></li>
                            </ul>
                        </CardContent>
                    </Card>

                    {/* Team Members */}
                    <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-primary/10 hover:border-primary/30">
                        <CardHeader>
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                                <Users className="h-6 w-6 text-primary" />
                            </div>
                            <CardTitle>Team Members</CardTitle>
                            <CardDescription>8 team members across product, delivery, and engineering.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-wrap gap-2">
                                {/* Product Manager */}
                                <Link href="mailto:sarah.thompson@company.com" className="group" title="Product Manager">
                                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/20 border-2 border-purple-500/40 hover:bg-purple-500/30 transition-colors">
                                        <span className="text-sm font-semibold text-purple-800 dark:text-purple-200">Sarah Thompson</span>
                                        <span className="text-xs font-medium text-purple-700/80 dark:text-purple-300/80">PM</span>
                                    </div>
                                </Link>

                                {/* Engineering Manager */}
                                <Link href="mailto:rajesh.kumar@company.com" className="group" title="Engineering Manager">
                                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-600/20 border-2 border-emerald-600/40 hover:bg-emerald-600/30 transition-colors">
                                        <span className="text-sm font-semibold text-emerald-800 dark:text-emerald-200">Rajesh Kumar</span>
                                        <span className="text-xs font-medium text-emerald-700/80 dark:text-emerald-300/80">EM</span>
                                    </div>
                                </Link>

                                {/* Senior Engineer */}
                                <Link href="mailto:priya.patel@company.com" className="group" title="Senior Engineer">
                                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 hover:bg-green-500/20 transition-colors">
                                        <span className="text-sm font-medium text-green-700 dark:text-green-300">Priya Patel</span>
                                        <span className="text-xs text-green-600/70 dark:text-green-400/70">Senior Eng</span>
                                    </div>
                                </Link>

                                {/* Engineers */}
                                <Link href="mailto:james.wilson@company.com" className="group" title="Engineer">
                                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 hover:bg-green-500/20 transition-colors">
                                        <span className="text-sm font-medium text-green-700 dark:text-green-300">James Wilson</span>
                                        <span className="text-xs text-green-600/70 dark:text-green-400/70">Eng</span>
                                    </div>
                                </Link>

                                <Link href="mailto:aisha.sharma@company.com" className="group" title="Engineer">
                                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 hover:bg-green-500/20 transition-colors">
                                        <span className="text-sm font-medium text-green-700 dark:text-green-300">Aisha Sharma</span>
                                        <span className="text-xs text-green-600/70 dark:text-green-400/70">Eng</span>
                                    </div>
                                </Link>

                                <Link href="mailto:oliver.brown@company.com" className="group" title="Engineer">
                                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 hover:bg-green-500/20 transition-colors">
                                        <span className="text-sm font-medium text-green-700 dark:text-green-300">Oliver Brown</span>
                                        <span className="text-xs text-green-600/70 dark:text-green-400/70">Eng</span>
                                    </div>
                                </Link>

                                <Link href="mailto:kavya.reddy@company.com" className="group" title="Engineer">
                                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 hover:bg-green-500/20 transition-colors">
                                        <span className="text-sm font-medium text-green-700 dark:text-green-300">Kavya Reddy</span>
                                        <span className="text-xs text-green-600/70 dark:text-green-400/70">Eng</span>
                                    </div>
                                </Link>

                                <Link href="mailto:emily.jones@company.com" className="group" title="Engineer">
                                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 hover:bg-green-500/20 transition-colors">
                                        <span className="text-sm font-medium text-green-700 dark:text-green-300">Emily Jones</span>
                                        <span className="text-xs text-green-600/70 dark:text-green-400/70">Eng</span>
                                    </div>
                                </Link>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Engineering Section */}
                <section className="space-y-4 pt-4">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent"></div>
                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/50">
                            <Code2 className="h-4 w-4 text-primary" />
                            <h2 className="text-lg font-semibold">Engineering</h2>
                        </div>
                        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent"></div>
                    </div>

                    {/* Engineering Content Columns */}
                    <div className="grid gap-4 md:grid-cols-3">
                        {/* Technical Resources */}
                        <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-primary/10 hover:border-primary/30">
                            <CardHeader>
                                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                                    <Wrench className="h-6 w-6 text-primary" />
                                </div>
                                <CardTitle>Technical Resources</CardTitle>
                                <CardDescription>Architecture and infrastructure.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    <li><Link href="#" className="hover:text-primary transition-colors">Tech Radar</Link></li>
                                    <li><Link href="#" className="hover:text-primary transition-colors">Architecture Diagrams</Link></li>
                                    <li><Link href="#" className="hover:text-primary transition-colors">Cloud Costs</Link></li>
                                </ul>
                            </CardContent>
                        </Card>

                        {/* Documentation */}
                        <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-primary/10 hover:border-primary/30">
                            <CardHeader>
                                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                                    <BookOpen className="h-6 w-6 text-primary" />
                                </div>
                                <CardTitle>Documentation</CardTitle>
                                <CardDescription>Runbooks and guides.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    <li><Link href="#" className="hover:text-primary transition-colors">Engineering Wiki</Link></li>
                                    <li><Link href="#" className="hover:text-primary transition-colors">API Documentation</Link></li>
                                    <li><Link href="#" className="hover:text-primary transition-colors">Architecture Guides</Link></li>
                                </ul>
                            </CardContent>
                        </Card>

                        {/* Support & Operations */}
                        <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-primary/10 hover:border-primary/30">
                            <CardHeader>
                                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                                    <LifeBuoy className="h-6 w-6 text-primary" />
                                </div>
                                <CardTitle>Support & Operations</CardTitle>
                                <CardDescription>On-call and incident management.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    <li><Link href="#" className="hover:text-primary transition-colors">On-call Rota</Link></li>
                                    <li><Link href="#" className="hover:text-primary transition-colors">Incident Log</Link></li>
                                    <li><Link href="#" className="hover:text-primary transition-colors">Comms Channels</Link></li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Applications List */}
                    <div className="space-y-4 mt-6">
                        <h3 className="text-lg font-semibold">Applications</h3>

                        {/* Example Application 1 */}
                        <Card className="transition-all duration-300 hover:shadow-md border-primary/10 hover:border-primary/30">
                            <CardHeader>
                                <div className="flex items-start justify-between">
                                    <div>
                                        <CardTitle className="text-lg">Core Platform Service</CardTitle>
                                        <CardDescription>Primary backend service for user management and authentication.</CardDescription>
                                    </div>
                                    <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors border-transparent bg-green-500/15 text-green-700">Active</span>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                                    {/* Source & Quality */}
                                    <div className="space-y-3">
                                        <h4 className="text-sm font-medium flex items-center gap-2 text-primary">
                                            <GitBranch className="h-4 w-4" /> Source & Quality
                                        </h4>
                                        <ul className="text-sm space-y-2 text-muted-foreground">
                                            <li><Link href="#" className="hover:text-primary transition-colors hover:underline">GitHub Repository</Link></li>
                                            <li><Link href="#" className="hover:text-primary transition-colors hover:underline">SonarQube</Link></li>
                                            <li><Link href="#" className="hover:text-primary transition-colors hover:underline">Security Scan</Link></li>
                                        </ul>
                                    </div>

                                    {/* Observability */}
                                    <div className="space-y-3">
                                        <h4 className="text-sm font-medium flex items-center gap-2 text-primary">
                                            <Monitor className="h-4 w-4" /> Observability
                                        </h4>
                                        <ul className="text-sm space-y-2 text-muted-foreground">
                                            <li><Link href="#" className="hover:text-primary transition-colors hover:underline">APM Dashboard</Link></li>
                                            <li><Link href="#" className="hover:text-primary transition-colors hover:underline">Logs (Splunk/ELK)</Link></li>
                                            <li><Link href="#" className="hover:text-primary transition-colors hover:underline">Alerts</Link></li>
                                        </ul>
                                    </div>

                                    {/* Environments */}
                                    <div className="space-y-3">
                                        <h4 className="text-sm font-medium flex items-center gap-2 text-primary">
                                            <Server className="h-4 w-4" /> Environments
                                        </h4>
                                        <ul className="text-sm space-y-2 text-muted-foreground">
                                            <li><Link href="#" className="hover:text-primary transition-colors hover:underline">Production</Link></li>
                                            <li><Link href="#" className="hover:text-primary transition-colors hover:underline">Staging</Link></li>
                                            <li><Link href="#" className="hover:text-primary transition-colors hover:underline">DB Console</Link></li>
                                        </ul>
                                    </div>

                                    {/* Info & Runbooks */}
                                    <div className="space-y-3">
                                        <h4 className="text-sm font-medium flex items-center gap-2 text-primary">
                                            <BookOpen className="h-4 w-4" /> Info
                                        </h4>
                                        <ul className="text-sm space-y-2 text-muted-foreground">
                                            <li><Link href="#" className="hover:text-primary transition-colors hover:underline">Runbooks</Link></li>
                                            <li><Link href="#" className="hover:text-primary transition-colors hover:underline">SLAs</Link></li>
                                            <li><Link href="#" className="hover:text-primary transition-colors hover:underline">User List</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Example Application 2 */}
                        <Card className="transition-all duration-300 hover:shadow-md border-primary/10 hover:border-primary/30">
                            <CardHeader>
                                <div className="flex items-start justify-between">
                                    <div>
                                        <CardTitle className="text-lg">API Gateway</CardTitle>
                                        <CardDescription>Central API gateway handling routing and authentication.</CardDescription>
                                    </div>
                                    <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors border-transparent bg-green-500/15 text-green-700">Active</span>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                                    {/* Source & Quality */}
                                    <div className="space-y-3">
                                        <h4 className="text-sm font-medium flex items-center gap-2 text-primary">
                                            <GitBranch className="h-4 w-4" /> Source & Quality
                                        </h4>
                                        <ul className="text-sm space-y-2 text-muted-foreground">
                                            <li><Link href="#" className="hover:text-primary transition-colors hover:underline">GitHub Repository</Link></li>
                                            <li><Link href="#" className="hover:text-primary transition-colors hover:underline">SonarQube</Link></li>
                                            <li><Link href="#" className="hover:text-primary transition-colors hover:underline">Security Scan</Link></li>
                                        </ul>
                                    </div>

                                    {/* Observability */}
                                    <div className="space-y-3">
                                        <h4 className="text-sm font-medium flex items-center gap-2 text-primary">
                                            <Monitor className="h-4 w-4" /> Observability
                                        </h4>
                                        <ul className="text-sm space-y-2 text-muted-foreground">
                                            <li><Link href="#" className="hover:text-primary transition-colors hover:underline">APM Dashboard</Link></li>
                                            <li><Link href="#" className="hover:text-primary transition-colors hover:underline">Logs (Splunk/ELK)</Link></li>
                                            <li><Link href="#" className="hover:text-primary transition-colors hover:underline">Alerts</Link></li>
                                        </ul>
                                    </div>

                                    {/* Environments */}
                                    <div className="space-y-3">
                                        <h4 className="text-sm font-medium flex items-center gap-2 text-primary">
                                            <Server className="h-4 w-4" /> Environments
                                        </h4>
                                        <ul className="text-sm space-y-2 text-muted-foreground">
                                            <li><Link href="#" className="hover:text-primary transition-colors hover:underline">Production</Link></li>
                                            <li><Link href="#" className="hover:text-primary transition-colors hover:underline">Staging</Link></li>
                                            <li><Link href="#" className="hover:text-primary transition-colors hover:underline">DB Console</Link></li>
                                        </ul>
                                    </div>

                                    {/* Info & Runbooks */}
                                    <div className="space-y-3">
                                        <h4 className="text-sm font-medium flex items-center gap-2 text-primary">
                                            <BookOpen className="h-4 w-4" /> Info
                                        </h4>
                                        <ul className="text-sm space-y-2 text-muted-foreground">
                                            <li><Link href="#" className="hover:text-primary transition-colors hover:underline">Runbooks</Link></li>
                                            <li><Link href="#" className="hover:text-primary transition-colors hover:underline">SLAs</Link></li>
                                            <li><Link href="#" className="hover:text-primary transition-colors hover:underline">User List</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* 3rd Parties Section */}
                    <div className="space-y-4 mt-6">
                        <h3 className="text-lg font-semibold">3rd Parties</h3>

                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                            {/* Example 3rd Party 1 */}
                            <Card className="transition-all duration-300 hover:shadow-md border-primary/10 hover:border-primary/30">
                                <CardHeader>
                                    <CardTitle className="text-base">Auth0</CardTitle>
                                    <CardDescription>Authentication and authorization service.</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul className="text-sm space-y-2 text-muted-foreground">
                                        <li><Link href="#" className="hover:text-primary transition-colors hover:underline">Dashboard</Link></li>
                                        <li><Link href="#" className="hover:text-primary transition-colors hover:underline">Documentation</Link></li>
                                        <li><Link href="#" className="hover:text-primary transition-colors hover:underline">Support</Link></li>
                                    </ul>
                                </CardContent>
                            </Card>

                            {/* Example 3rd Party 2 */}
                            <Card className="transition-all duration-300 hover:shadow-md border-primary/10 hover:border-primary/30">
                                <CardHeader>
                                    <CardTitle className="text-base">Stripe</CardTitle>
                                    <CardDescription>Payment processing platform.</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul className="text-sm space-y-2 text-muted-foreground">
                                        <li><Link href="#" className="hover:text-primary transition-colors hover:underline">Dashboard</Link></li>
                                        <li><Link href="#" className="hover:text-primary transition-colors hover:underline">API Docs</Link></li>
                                        <li><Link href="#" className="hover:text-primary transition-colors hover:underline">Webhooks</Link></li>
                                    </ul>
                                </CardContent>
                            </Card>

                            {/* Example 3rd Party 3 */}
                            <Card className="transition-all duration-300 hover:shadow-md border-primary/10 hover:border-primary/30">
                                <CardHeader>
                                    <CardTitle className="text-base">SendGrid</CardTitle>
                                    <CardDescription>Email delivery service.</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul className="text-sm space-y-2 text-muted-foreground">
                                        <li><Link href="#" className="hover:text-primary transition-colors hover:underline">Dashboard</Link></li>
                                        <li><Link href="#" className="hover:text-primary transition-colors hover:underline">Templates</Link></li>
                                        <li><Link href="#" className="hover:text-primary transition-colors hover:underline">Analytics</Link></li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
