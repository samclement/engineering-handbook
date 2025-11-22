import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BookOpen, Layout, Users, Activity } from "lucide-react";

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 max-w-screen-2xl items-center justify-between px-4">
                <div className="flex items-center gap-2">
                    <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tight">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                            <BookOpen className="h-5 w-5" />
                        </div>
                        <span>Engineering Handbook</span>
                    </Link>
                </div>
                <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
                    <Link href="/career-framework" className="transition-colors hover:text-foreground/80 text-foreground/60 flex items-center gap-2">
                        <Layout className="h-4 w-4" />
                        Career Framework
                    </Link>
                    <Link href="/artefacts" className="transition-colors hover:text-foreground/80 text-foreground/60 flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        Artefacts
                    </Link>
                    <Link href="/team-health" className="transition-colors hover:text-foreground/80 text-foreground/60 flex items-center gap-2">
                        <Activity className="h-4 w-4" />
                        Team Health
                    </Link>
                </nav>
                <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm" asChild>
                        <Link href="https://github.com" target="_blank">GitHub</Link>
                    </Button>
                </div>
            </div>
        </header>
    );
}
