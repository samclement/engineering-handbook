import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Calendar, BarChart3, PieChart, CheckCircle2, AlertCircle } from "lucide-react";

export default function TeamHealthPage() {
    return (
        <div className="container py-12 max-w-screen-xl mx-auto px-4">
            <div className="mb-12 text-center space-y-4">
                <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">Team Health & Reporting</h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Monitoring team performance, wellbeing, and operational excellence.
                </p>
            </div>

            <div className="grid gap-8">
                {/* Health Indicators Section */}
                <section>
                    <h2 className="text-2xl font-bold tracking-tight mb-6 flex items-center gap-2">
                        <Activity className="h-6 w-6 text-primary" />
                        Health Indicators
                    </h2>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        <Card>
                            <CardHeader className="pb-2">
                                <CardTitle className="text-sm font-medium text-muted-foreground">Deployment Frequency</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">Daily</div>
                                <p className="text-xs text-muted-foreground mt-1 text-green-600 flex items-center">
                                    <CheckCircle2 className="h-3 w-3 mr-1" /> Elite Performer
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="pb-2">
                                <CardTitle className="text-sm font-medium text-muted-foreground">Lead Time for Changes</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">&lt; 1 Day</div>
                                <p className="text-xs text-muted-foreground mt-1 text-green-600 flex items-center">
                                    <CheckCircle2 className="h-3 w-3 mr-1" /> Elite Performer
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="pb-2">
                                <CardTitle className="text-sm font-medium text-muted-foreground">Change Failure Rate</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">0-15%</div>
                                <p className="text-xs text-muted-foreground mt-1 text-green-600 flex items-center">
                                    <CheckCircle2 className="h-3 w-3 mr-1" /> Elite Performer
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="pb-2">
                                <CardTitle className="text-sm font-medium text-muted-foreground">Team Sentiment</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">4.2/5</div>
                                <p className="text-xs text-muted-foreground mt-1 text-green-600 flex items-center">
                                    <TrendingUp className="h-3 w-3 mr-1" /> +0.2 vs last month
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* Reporting Section */}
                <section>
                    <h2 className="text-2xl font-bold tracking-tight mb-6 flex items-center gap-2">
                        <BarChart3 className="h-6 w-6 text-primary" />
                        Reporting Cadence
                    </h2>
                    <div className="grid gap-6 md:grid-cols-3">
                        <Card className="border-l-4 border-l-blue-500">
                            <CardHeader>
                                <div className="flex items-center justify-between mb-2">
                                    <CardTitle>Weekly Team Reporting</CardTitle>
                                    <Calendar className="h-5 w-5 text-blue-500" />
                                </div>
                                <CardDescription>Operational & Delivery Focus</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-sm">
                                    <li className="flex items-start gap-2">
                                        <span className="bg-blue-100 text-blue-700 rounded-full w-5 h-5 flex items-center justify-center text-xs mt-0.5">1</span>
                                        <span>Sprint/Kanban Board Review</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="bg-blue-100 text-blue-700 rounded-full w-5 h-5 flex items-center justify-center text-xs mt-0.5">2</span>
                                        <span>Blockers & Risks</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="bg-blue-100 text-blue-700 rounded-full w-5 h-5 flex items-center justify-center text-xs mt-0.5">3</span>
                                        <span>Incident Review (if any)</span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="border-l-4 border-l-purple-500">
                            <CardHeader>
                                <div className="flex items-center justify-between mb-2">
                                    <CardTitle>Monthly Business Reporting</CardTitle>
                                    <PieChart className="h-5 w-5 text-purple-500" />
                                </div>
                                <CardDescription>Strategic & Outcome Focus</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-sm">
                                    <li className="flex items-start gap-2">
                                        <span className="bg-purple-100 text-purple-700 rounded-full w-5 h-5 flex items-center justify-center text-xs mt-0.5">1</span>
                                        <span>OKR Progress Update</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="bg-purple-100 text-purple-700 rounded-full w-5 h-5 flex items-center justify-center text-xs mt-0.5">2</span>
                                        <span>Hiring & Headcount</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="bg-purple-100 text-purple-700 rounded-full w-5 h-5 flex items-center justify-center text-xs mt-0.5">3</span>
                                        <span>Product Roadmap Alignment</span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="border-l-4 border-l-orange-500">
                            <CardHeader>
                                <div className="flex items-center justify-between mb-2">
                                    <CardTitle>Quarterly Vendor Reporting</CardTitle>
                                    <AlertCircle className="h-5 w-5 text-orange-500" />
                                </div>
                                <CardDescription>Compliance & Budget Focus</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-sm">
                                    <li className="flex items-start gap-2">
                                        <span className="bg-orange-100 text-orange-700 rounded-full w-5 h-5 flex items-center justify-center text-xs mt-0.5">1</span>
                                        <span>SLA/SLO Performance Review</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="bg-orange-100 text-orange-700 rounded-full w-5 h-5 flex items-center justify-center text-xs mt-0.5">2</span>
                                        <span>Budget Utilization</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="bg-orange-100 text-orange-700 rounded-full w-5 h-5 flex items-center justify-center text-xs mt-0.5">3</span>
                                        <span>Security & Compliance Audit</span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </section>
            </div>
        </div>
    );
}

function TrendingUp({ className }: { className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
            <polyline points="17 6 23 6 23 12" />
        </svg>
    )
}
