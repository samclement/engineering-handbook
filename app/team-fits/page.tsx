import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FitsApplicationsSection } from "@/components/FitsApplicationsSection"
import { FitsProductSection } from "@/components/FitsProductSection"
import {
    Activity,
    BookOpen,
    Code2,
    GitBranch,
    Layout,
    LifeBuoy,
    Monitor,
    Server,
    Users,
    Wrench,
} from "lucide-react"

export default function TeamFitsPage() {
    return (
        <div className="min-h-screen bg-background">
            <div className="container mx-auto max-w-screen-xl px-4 py-8 md:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold tracking-tight">FITS Team</h1>
                    <p className="mt-2 text-muted-foreground">
                        Food Inventory Transaction Services - Accelerating improvement in Stock Loss and Stock Integrity
                    </p>
                </div>

                {/* Top Section - Product, Team, Delivery (Bento Grid) */}
                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Left Column: Product Vision (2/3 width) */}
                    <div className="lg:col-span-2 h-full">
                        <FitsProductSection />
                    </div>

                    {/* Right Column: Team & Delivery (1/3 width) */}
                    <div className="flex flex-col gap-6 h-full">
                        {/* Team Members */}
                        <Card className="flex-1 transition-all duration-300 shadow-xl bg-background hover:shadow-2xl hover:-translate-y-1 border-primary/10 hover:border-primary/30">
                            <CardHeader className="pb-3">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 rounded-lg bg-primary/10">
                                        <Users className="h-5 w-5 text-primary" />
                                    </div>
                                    <CardTitle className="text-xl">Team Members</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-2">
                                    {/* Product Manager */}
                                    <Link href="mailto:sukanya.thirumalai@company.com" className="group" title="Product Manager">
                                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/20 border-2 border-purple-500/40 hover:bg-purple-500/30 transition-colors">
                                            <span className="text-sm font-semibold text-purple-800 dark:text-purple-300">Sukanya Thirumalai</span>
                                            <span className="text-xs text-purple-600/70 dark:text-purple-400/70">PM</span>
                                        </div>
                                    </Link>

                                    {/* Engineering Manager */}
                                    <Link href="mailto:bhuvaneswari.sundaravadivelu@company.com" className="group" title="Engineering Manager">
                                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-600/20 border-2 border-emerald-600/40 hover:bg-emerald-600/30 transition-colors">
                                            <span className="text-sm font-semibold text-emerald-800 dark:text-emerald-300">Bhuvaneswari Sundaravadivelu</span>
                                            <span className="text-xs text-emerald-600/70 dark:text-emerald-400/70">EM</span>
                                        </div>
                                    </Link>

                                    {/* TPM */}
                                    <Link href="mailto:sathish.thirumoorthi@company.com" className="group" title="Technical Program Manager">
                                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/20 border-2 border-blue-500/40 hover:bg-blue-500/30 transition-colors">
                                            <span className="text-sm font-semibold text-blue-800 dark:text-blue-300">Sathish Thirumoorthi</span>
                                            <span className="text-xs text-blue-600/70 dark:text-blue-400/70">TPM</span>
                                        </div>
                                    </Link>

                                    {/* Senior Engineers */}
                                    <Link href="mailto:saravanan.jeyabalan@company.com" className="group" title="Senior Engineer">
                                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 hover:bg-green-500/20 transition-colors">
                                            <span className="text-sm font-medium text-green-700 dark:text-green-300">Saravanan Jeyabalan</span>
                                            <span className="text-xs text-green-600/70 dark:text-green-400/70">Senior Eng</span>
                                        </div>
                                    </Link>

                                    <Link href="mailto:kishore.kumarm@company.com" className="group" title="Senior Engineer">
                                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 hover:bg-green-500/20 transition-colors">
                                            <span className="text-sm font-medium text-green-700 dark:text-green-300">Kishore Kumarm</span>
                                            <span className="text-xs text-green-600/70 dark:text-green-400/70">Senior Eng</span>
                                        </div>
                                    </Link>

                                    {/* Engineers */}
                                    <Link href="mailto:ravi.ranjan@company.com" className="group" title="Engineer">
                                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 hover:bg-green-500/20 transition-colors">
                                            <span className="text-sm font-medium text-green-700 dark:text-green-300">Ravi Ranjan</span>
                                            <span className="text-xs text-green-600/70 dark:text-green-400/70">Eng</span>
                                        </div>
                                    </Link>

                                    <Link href="mailto:lahari.lakshmi@company.com" className="group" title="Engineer">
                                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 hover:bg-green-500/20 transition-colors">
                                            <span className="text-sm font-medium text-green-700 dark:text-green-300">Lahari Lakshmi</span>
                                            <span className="text-xs text-green-600/70 dark:text-green-400/70">Eng</span>
                                        </div>
                                    </Link>

                                    <Link href="mailto:rahul.lyagala@company.com" className="group" title="Engineer">
                                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 hover:bg-green-500/20 transition-colors">
                                            <span className="text-sm font-medium text-green-700 dark:text-green-300">Rahul Lyagala</span>
                                            <span className="text-xs text-green-600/70 dark:text-green-400/70">Eng</span>
                                        </div>
                                    </Link>

                                    <Link href="mailto:buvaneshwaran.shanmugakumar@company.com" className="group" title="Engineer">
                                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 hover:bg-green-500/20 transition-colors">
                                            <span className="text-sm font-medium text-green-700 dark:text-green-300">Buvaneshwaran Shanmugakumar</span>
                                            <span className="text-xs text-green-600/70 dark:text-green-400/70">Eng</span>
                                        </div>
                                    </Link>

                                    <Link href="mailto:gowthaman.thangamani@company.com" className="group" title="Engineer">
                                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 hover:bg-green-500/20 transition-colors">
                                            <span className="text-sm font-medium text-green-700 dark:text-green-300">Gowthaman Thangamani</span>
                                            <span className="text-xs text-green-600/70 dark:text-green-400/70">Eng</span>
                                        </div>
                                    </Link>

                                    <Link href="mailto:gopinath.sundararajan@company.com" className="group" title="Engineer">
                                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 hover:bg-green-500/20 transition-colors">
                                            <span className="text-sm font-medium text-green-700 dark:text-green-300">Gopinath Sundararajan</span>
                                            <span className="text-xs text-green-600/70 dark:text-green-400/70">Eng</span>
                                        </div>
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Delivery - Moved from Engineering */}
                        <Card className="flex-1 transition-all duration-300 shadow-xl bg-background hover:shadow-2xl hover:-translate-y-1 border-primary/10 hover:border-primary/30">
                            <CardHeader className="pb-3">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 rounded-lg bg-primary/10">
                                        <Activity className="h-5 w-5 text-primary" />
                                    </div>
                                    <CardTitle className="text-xl">Delivery</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    <li><Link href="https://jira-marksandspencer-app.atlassian.net/jira/software/c/projects/FINVC/boards/481/backlog" className="hover:text-primary transition-colors hover:underline">Jira Board (FINVC)</Link></li>
                                    <li><Link href="https://marksandspencer.monday.com/boards/1752721254/" className="hover:text-primary transition-colors">Monday.com Features</Link></li>
                                    <li><Link href="https://mnscorp.sharepoint.com/:x:/r/sites/FoodsInventory14/_layouts/15/Doc.aspx?sourcedoc=%7B42095B53-927F-43BB-9EF9-201B6BEDC341%7D&file=Sprint%20Retro%20Tracker%20v1.2.xlsx.xlsx&action=default&mobileredirect=true" className="hover:text-primary transition-colors hover:underline">Sprint Retro Tracker</Link></li>
                                    <li><Link href="https://marksandspencer.monday.com/boards/1867198105/views/27094385" className="hover:text-primary transition-colors">Team OKRs</Link></li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                {/* Engineering & Ecosystem Section */}
                <div className="-mt-20 pt-28 pb-8 px-6 md:px-8 rounded-3xl border bg-slate-50 dark:bg-slate-900/50 shadow-sm space-y-10">
                    {/* Engineering */}
                    <section className="space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-primary/10">
                                <Code2 className="h-5 w-5 text-primary" />
                            </div>
                            <h2 className="text-2xl font-bold tracking-tight">Engineering</h2>
                        </div>

                        {/* Engineering Content Columns */}
                        <div className="grid gap-6 md:grid-cols-2">
                            {/* Technical Resources */}
                            <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-primary/10 hover:border-primary/30 bg-background/60">
                                <CardHeader>
                                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                                        <Wrench className="h-6 w-6 text-primary" />
                                    </div>
                                    <CardTitle>Technical Resources</CardTitle>
                                    <CardDescription>Architecture and infrastructure.</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 text-sm text-muted-foreground">
                                        <li><Link href="https://jira-marksandspencer-app.atlassian.net/wiki/pages/viewpage.action?pageId=154114880" className="hover:text-primary transition-colors hover:underline">Architecture Vision & Solution Intent</Link></li>
                                        <li><Link href="https://mnscorp.sharepoint.com/:x:/r/sites/FoodsInventory14/_layouts/15/Doc.aspx?sourcedoc=%7BE3CED5C8-E952-4492-9586-476B2A7C0429%7D&file=FITS%20-%20FLOW%20Details%20-%20Latest.xlsx&action=default&mobileredirect=true" className="hover:text-primary transition-colors hover:underline">FITS Critical Flows</Link></li>
                                        <li><Link href="https://jira-marksandspencer-app.atlassian.net/wiki/display/FOODS/Foods+Learning" className="hover:text-primary transition-colors hover:underline">Training & Learning Materials</Link></li>
                                        <li><Link href="#" className="hover:text-primary transition-colors">Azure Resources</Link></li>
                                    </ul>
                                </CardContent>
                            </Card>

                            {/* Support & Operations */}
                            <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-primary/10 hover:border-primary/30 bg-background/60">
                                <CardHeader>
                                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                                        <LifeBuoy className="h-6 w-6 text-primary" />
                                    </div>
                                    <CardTitle>Support & Operations</CardTitle>
                                    <CardDescription>Incident management and support.</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 text-sm text-muted-foreground">
                                        <li><Link href="https://mands.pagerduty.com/incidents?status=acknowledged" className="hover:text-primary transition-colors">PagerDuty</Link></li>
                                        <li><Link href="https://mnscorp.sharepoint.com/:x:/r/sites/FoodsInventory14/_layouts/15/Doc.aspx?sourcedoc=%7BAD87CBF4-88FC-4042-966E-DF0AAC824B50%7D&file=FITS_ROTA_Shift%20Planning.xlsx&action=default&mobileredirect=true" className="hover:text-primary transition-colors">Support Rota</Link></li>
                                        <li><Link href="https://apps.powerapps.com/play/e/default-bd5c6713-7399-4b31-be79-78f2d078e543/a/ae6cf827-0024-4153-90ba-98154bd17b7f?tenantId=bd5c6713-7399-4b31-be79-78f2d078e543&source=sharebutton&sourcetime=1722425045142" className="hover:text-primary transition-colors">Contact Repository</Link></li>
                                        <li><Link href="https://mnscorp-rod.onbmc.com/arsys/forms/onbmc-s/SHR%3ALandingConsole/Default+Administrator+View/?cacheid=ee45f3c7" className="hover:text-primary transition-colors">Remedy Queue</Link></li>
                                        <li><Link href="https://teams.microsoft.com/l/chat/19:meeting_YTRhYjZmYjYtYTIxNy00OWRmLTk4NjEtYTAxYTA5ZjdhZThj@thread.v2/conversations?context=%7B%22contextType%22%3A%22chat%22%7D" className="hover:text-primary transition-colors">Teams Channel</Link></li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </div>
                    </section>

                    {/* Applications List */}
                    <section className="space-y-4">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border/50 to-transparent"></div>
                            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-background/50 border border-border/50 shadow-sm">
                                <Monitor className="h-4 w-4 text-primary" />
                                <h2 className="text-sm font-semibold text-muted-foreground">Applications</h2>
                            </div>
                            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border/50 to-transparent"></div>
                        </div>
                        <FitsApplicationsSection />
                    </section>

                    {/* 3rd Parties Section */}
                    <section className="space-y-4">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border/50 to-transparent"></div>
                            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-background/50 border border-border/50 shadow-sm">
                                <GitBranch className="h-4 w-4 text-primary" />
                                <h2 className="text-sm font-semibold text-muted-foreground">3rd Parties & Stakeholders</h2>
                            </div>
                            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border/50 to-transparent"></div>
                        </div>

                        <div className="grid gap-4 md:grid-cols-3">
                            <Card className="transition-all duration-300 hover:shadow-md border-primary/10 hover:border-primary/30 bg-background/60">
                                <CardHeader>
                                    <CardTitle className="text-base">GIST</CardTitle>
                                    <CardDescription>Logistics partner</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground">Service Desk: GISTServiceDesk@scc.com</p>
                                    <p className="text-xs text-muted-foreground mt-2">SLA: Live</p>
                                </CardContent>
                            </Card>

                            <Card className="transition-all duration-300 hover:shadow-md border-primary/10 hover:border-primary/30 bg-background/60">
                                <CardHeader>
                                    <CardTitle className="text-base">OpenText</CardTitle>
                                    <CardDescription>Integration platform</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground">Premium Support: mkspnpremiumsupport@opentext.com</p>
                                    <p className="text-xs text-muted-foreground mt-2">SLA: Live</p>
                                </CardContent>
                            </Card>

                            <Card className="transition-all duration-300 hover:shadow-md border-primary/10 hover:border-primary/30 bg-background/60">
                                <CardHeader>
                                    <CardTitle className="text-base">Franchise Partners</CardTitle>
                                    <CardDescription>Business partners</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground">Ocado, Nicolas Pansier</p>
                                    <p className="text-xs text-muted-foreground mt-2">SLA: Live</p>
                                </CardContent>
                            </Card>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}
