"use client";

import React from "react";
import Link from "next/link";
import { TrendingUp, Award } from "lucide-react";
import { DimensionProgression } from "./DimensionProgression";
import { getNextRoles, getRoleTitleFromSlug, isTerminalRole } from "@/lib/role-progression";
import { dimensions, getRoleDimensions, type DimensionType } from "@/lib/dimensions-data";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

type IconName = "target" | "clock" | "help-circle" | "users" | "workflow";

const dimensionIcons: Record<DimensionType, IconName> = {
    scope: "target",
    timeHorizon: "clock",
    ambiguity: "help-circle",
    leadership: "users",
    technical: "workflow",
};

interface NextLevelComparisonProps {
    currentRoleSlug: string;
}

export function NextLevelComparison({ currentRoleSlug }: NextLevelComparisonProps) {
    const nextRoleSlugs = getNextRoles(currentRoleSlug);

    // Terminal role - no next level
    if (isTerminalRole(currentRoleSlug)) {
        return (
            <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
                <CardHeader>
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                            <Award className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                            <CardTitle className="text-xl">Senior Leadership Role</CardTitle>
                            <CardDescription>
                                You've reached a senior leadership position
                            </CardDescription>
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-muted-foreground">
                        This is a terminal role in the career framework. Continued growth focuses on
                        expanding impact, mentoring senior leaders, and shaping organizational strategy.
                    </p>
                </CardContent>
            </Card>
        );
    }

    const currentDimensions = getRoleDimensions(currentRoleSlug);

    return (
        <div className="space-y-6">
            {nextRoleSlugs.map((nextRoleSlug) => {
                const nextRoleTitle = getRoleTitleFromSlug(nextRoleSlug);
                const nextDimensions = getRoleDimensions(nextRoleSlug);

                // Find dimensions that change
                const changedDimensions = dimensions.filter((dimension) => {
                    const currentLevel = currentDimensions[dimension.id];
                    const nextLevel = nextDimensions[dimension.id];
                    return currentLevel !== nextLevel;
                });

                return (
                    <Card
                        key={nextRoleSlug}
                        className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent"
                    >
                        <CardHeader>
                            <div className="flex items-start justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                        <TrendingUp className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <CardTitle className="text-xl">
                                            Path to {nextRoleTitle}
                                        </CardTitle>
                                        <CardDescription>
                                            {changedDimensions.length === 0
                                                ? "Role transition with refined expectations"
                                                : `${changedDimensions.length} dimension${changedDimensions.length > 1 ? 's' : ''} increase`
                                            }
                                        </CardDescription>
                                    </div>
                                </div>
                                <Link
                                    href={`/career-framework/${nextRoleSlug}`}
                                    className="text-sm text-primary hover:underline whitespace-nowrap"
                                >
                                    View role →
                                </Link>
                            </div>
                        </CardHeader>

                        {changedDimensions.length > 0 && (
                            <CardContent>
                                <p className="text-sm text-muted-foreground mb-4">
                                    To progress to this role, you'll need to demonstrate growth in:
                                </p>
                                <div className="space-y-2">
                                    {changedDimensions.map((dimension) => {
                                        const currentLevel = currentDimensions[dimension.id];
                                        const nextLevel = nextDimensions[dimension.id];
                                        const currentLevelData = dimension.levels.find(l => l.level === currentLevel);
                                        const nextLevelData = dimension.levels.find(l => l.level === nextLevel);

                                        if (!currentLevelData || !nextLevelData) return null;

                                        return (
                                            <DimensionProgression
                                                key={dimension.id}
                                                dimensionName={dimension.name}
                                                icon={dimensionIcons[dimension.id]}
                                                currentLevel={currentLevel}
                                                currentLabel={currentLevelData.label}
                                                nextLevel={nextLevel}
                                                nextLabel={nextLevelData.label}
                                            />
                                        );
                                    })}
                                </div>
                            </CardContent>
                        )}
                    </Card>
                );
            })}
        </div>
    );
}
