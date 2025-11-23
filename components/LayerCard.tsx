import React from "react";
import Link from "next/link";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

interface LayerCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
    href: string;
    badge: string;
    external?: boolean;
    className?: string;
}

export function LayerCard({
    icon: Icon,
    title,
    description,
    href,
    badge,
    external = false,
    className,
}: LayerCardProps) {
    const CardWrapper = external ? "a" : Link;
    const linkProps = external ? { href, target: "_blank", rel: "noopener noreferrer" } : { href };

    return (
        <CardWrapper {...linkProps} className="group block h-full">
            <Card className={cn(
                "h-full transition-all duration-300 hover:shadow-lg hover:border-primary/50",
                className
            )}>
                <CardHeader>
                    <div className="flex items-start justify-between mb-3">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                            <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors bg-secondary text-secondary-foreground">
                            {badge}
                        </span>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {title}
                    </CardTitle>
                    <CardDescription className="text-sm">
                        {description}
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex items-center text-sm font-medium text-primary">
                        <span>Learn more</span>
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                </CardContent>
            </Card>
        </CardWrapper>
    );
}
