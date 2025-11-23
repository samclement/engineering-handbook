"use client";

import React from "react";
import { Target, Clock, HelpCircle, Users, Workflow } from "lucide-react";
import { cn } from "@/lib/utils";

type IconName = "target" | "clock" | "help-circle" | "users" | "workflow";

const iconMap = {
    "target": Target,
    "clock": Clock,
    "help-circle": HelpCircle,
    "users": Users,
    "workflow": Workflow,
};

interface DimensionBadgeProps {
    name: string;
    level: number;
    maxLevel?: number;
    label: string;
    icon: IconName;
    className?: string;
}

export function DimensionBadge({
    name,
    level,
    maxLevel = 7,
    label,
    icon,
    className
}: DimensionBadgeProps) {
    const Icon = iconMap[icon];

    // Color based on level
    const getColorClasses = () => {
        if (level <= 2) return "bg-emerald-50 dark:bg-emerald-950 border-emerald-200 dark:border-emerald-800";
        if (level <= 4) return "bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800";
        return "bg-purple-50 dark:bg-purple-950 border-purple-200 dark:border-purple-800";
    };

    const getIconColor = () => {
        if (level <= 2) return "text-emerald-600 dark:text-emerald-400";
        if (level <= 4) return "text-blue-600 dark:text-blue-400";
        return "text-purple-600 dark:text-purple-400";
    };

    const getProgressColor = () => {
        if (level <= 2) return "bg-emerald-500";
        if (level <= 4) return "bg-blue-500";
        return "bg-purple-500";
    };

    return (
        <div className={cn("p-4 rounded-lg border", getColorClasses(), className)}>
            <div className="flex items-center gap-2 mb-2">
                <Icon className={cn("w-4 h-4", getIconColor())} />
                <span className="font-semibold text-sm">{name}</span>
            </div>

            <div className="mb-2">
                <div className="flex items-baseline gap-1">
                    <span className={cn("text-2xl font-bold", getIconColor())}>
                        {level}
                    </span>
                    <span className="text-sm text-muted-foreground">
                        / {maxLevel}
                    </span>
                </div>
                <p className="text-xs text-muted-foreground mt-0.5">{label}</p>
            </div>

            {/* Progress bar */}
            <div className="w-full bg-muted rounded-full h-1.5">
                <div
                    className={cn("h-1.5 rounded-full transition-all", getProgressColor())}
                    style={{ width: `${(level / maxLevel) * 100}%` }}
                />
            </div>
        </div>
    );
}
