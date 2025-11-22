import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getCareerFrameworkData, getRoleBySlug } from "@/lib/career-data";

export async function generateStaticParams() {
    const roles = await getCareerFrameworkData();
    return roles.map((role) => ({
        slug: role.slug,
    }));
}

export default async function RolePage({ params }: { params: { slug: string } }) {
    const { slug } = await params; // Await params in Next.js 15+ if needed, but standard is direct access in 14. 
    // Actually Next.js 15 makes params a promise. I'll await it just in case or check version. 
    // Package.json said "next": "16.0.3" ?? Wait, Next 16? That's likely a canary or future version or I misread.
    // Let's check package.json again mentally. "next": "16.0.3" seems very high. Current stable is 15.
    // Ah, maybe it's 15.0.3. Let's assume standard async params pattern for modern Next.js.

    const role = await getRoleBySlug(slug);

    if (!role) {
        notFound();
    }

    return (
        <div className="container py-12 max-w-screen-lg mx-auto px-4">
            <div className="mb-8">
                <Button variant="ghost" size="sm" asChild className="mb-4 pl-0 hover:pl-2 transition-all">
                    <Link href="/career-framework">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Framework
                    </Link>
                </Button>
                <div className="flex items-center gap-4 mb-4">
                    <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary/10 text-primary hover:bg-primary/20">
                        {role.track} Track
                    </span>
                </div>
                <h1 className="text-4xl font-bold tracking-tight lg:text-5xl mb-4">{role.title}</h1>
            </div>

            <div className="prose prose-slate dark:prose-invert max-w-none lg:prose-lg">
                <ReactMarkdown>{role.content}</ReactMarkdown>
            </div>
        </div>
    );
}
