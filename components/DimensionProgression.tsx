"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type IconName = "target" | "clock" | "help-circle" | "users" | "workflow";

interface DimensionProgressionProps {
    dimensionName: string;
    icon: IconName;
    currentLevel: number;
    currentLabel: string;
    nextLevel: number;
    nextLabel: string;
}

const iconMap = {
    "target": "🎯",
    "clock": "⏰",
    "help-circle": "❓",
    "users": "👥",
    "workflow": "⚙️",
};

export function DimensionProgression({
    dimensionName,
    icon,
    currentLevel,
    currentLabel,
    nextLevel,
    nextLabel,
}: DimensionProgressionProps) {
    const increase = nextLevel - currentLevel;

    return (
        <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 border border-border">
            {/* Icon */}
            <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <span className="text-lg">{iconMap[icon]}</span>
            </div>

            {/* Dimension Info */}
            <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-semibold text-sm">{dimensionName}</span>
                    <div className="flex items-center gap-2 text-sm">
                        <span className="text-muted-foreground">
                            {currentLevel} <span className="text-xs">({currentLabel})</span>
                        </span>
                        <ArrowRight className="w-4 h-4 text-primary" />
                        <span className="font-semibold text-primary">
                            {nextLevel} <span className="text-xs">({nextLabel})</span>
                        </span>
                    </div>
                </div>
            </div>

            {/* Increase Badge */}
            {increase > 0 && (
                <div className={cn(
                    "flex-shrink-0 px-2 py-1 rounded-full text-xs font-bold",
                    "bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300"
                )}>
                    +{increase}
                </div>
            )}
        </div>
    );
}
