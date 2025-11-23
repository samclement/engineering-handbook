"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { getCareerFrameworkData } from "@/lib/career-data";
import { dimensions, getRoleDimensions, type DimensionType } from "@/lib/dimensions-data";
import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface RoleComparatorProps {
    roles: ReturnType<typeof getCareerFrameworkData>;
}

export function RoleComparator({ roles }: RoleComparatorProps) {
    const [selectedRoles, setSelectedRoles] = useState<string[]>([]);
    const [selectedDimensions, setSelectedDimensions] = useState<DimensionType[]>([
        'scope', 'timeHorizon', 'ambiguity', 'leadership', 'technical'
    ]);

    const toggleRole = (slug: string) => {
        setSelectedRoles(prev =>
            prev.includes(slug)
                ? prev.filter(s => s !== slug)
                : prev.length < 4
                    ? [...prev, slug]
                    : prev
        );
    };

    const toggleDimension = (dimensionId: DimensionType) => {
        setSelectedDimensions(prev =>
            prev.includes(dimensionId)
                ? prev.filter(d => d !== dimensionId)
                : [...prev, dimensionId]
        );
    };

    const comparisonData = selectedRoles.map(roleSlug => {
        const role = roles.find(r => r.slug === roleSlug);
        const dimensionLevels = getRoleDimensions(roleSlug);
        return {
            role,
            dimensionLevels
        };
    });

    return (
        <div className="space-y-6">
            <div className="text-center space-y-2">
                <h2 className="text-2xl font-bold">Compare Roles</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    Select up to 4 roles to compare side-by-side across different dimensions
                </p>
            </div>

            {/* Role Selection */}
            <div>
                <h3 className="text-sm font-semibold mb-3">Select Roles (max 4)</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                    {roles.map((role) => (
                        <button
                            key={role.slug}
                            onClick={() => toggleRole(role.slug)}
                            disabled={!selectedRoles.includes(role.slug) && selectedRoles.length >= 4}
                            className={cn(
                                "p-3 rounded-lg border-2 text-left transition-all text-sm",
                                selectedRoles.includes(role.slug)
                                    ? "border-primary bg-primary/10"
                                    : "border-border hover:border-primary/50",
                                !selectedRoles.includes(role.slug) && selectedRoles.length >= 4 && "opacity-50 cursor-not-allowed"
                            )}
                        >
                            <div className="flex items-start justify-between gap-2">
                                <span className="font-medium line-clamp-2">{role.title}</span>
                                {selectedRoles.includes(role.slug) && (
                                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                                )}
                            </div>
                        </button>
                    ))}
                </div>
            </div>

            {/* Dimension Selection */}
            <div>
                <h3 className="text-sm font-semibold mb-3">Select Dimensions</h3>
                <div className="flex flex-wrap gap-2">
                    {dimensions.map((dimension) => (
                        <button
                            key={dimension.id}
                            onClick={() => toggleDimension(dimension.id)}
                            className={cn(
                                "px-3 py-1.5 rounded-full text-sm font-medium transition-all",
                                selectedDimensions.includes(dimension.id)
                                    ? "bg-primary text-primary-foreground"
                                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                            )}
                        >
                            {dimension.name}
                        </button>
                    ))}
                </div>
            </div>

            {/* Comparison Table */}
            {selectedRoles.length > 0 && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="overflow-x-auto"
                >
                    <table className="w-full border-collapse bg-card rounded-lg overflow-hidden">
                        <thead>
                            <tr className="bg-secondary">
                                <th className="p-3 text-left font-semibold text-sm">Dimension</th>
                                {comparisonData.map(({ role }) => (
                                    <th key={role?.slug} className="p-3 text-left font-semibold text-sm">
                                        {role?.title}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {selectedDimensions.map((dimensionId) => {
                                const dimension = dimensions.find(d => d.id === dimensionId);
                                if (!dimension) return null;

                                return (
                                    <tr key={dimensionId} className="border-t border-border">
                                        <td className="p-3 font-medium text-sm align-top">
                                            <div>
                                                <div className="font-semibold">{dimension.name}</div>
                                                <div className="text-xs text-muted-foreground mt-1">
                                                    {dimension.description}
                                                </div>
                                            </div>
                                        </td>
                                        {comparisonData.map(({ role, dimensionLevels }) => {
                                            const levelNum = dimensionLevels[dimensionId];
                                            const level = dimension.levels.find(l => l.level === levelNum);

                                            return (
                                                <td key={role?.slug} className="p-3 align-top">
                                                    {level ? (
                                                        <div>
                                                            <div className="font-semibold text-sm mb-1">{level.label}</div>
                                                            <div className="text-xs text-muted-foreground mb-2">
                                                                {level.description}
                                                            </div>
                                                            {/* Progress indicator */}
                                                            <div className="w-full bg-secondary rounded-full h-1.5">
                                                                <div
                                                                    className="bg-primary h-1.5 rounded-full"
                                                                    style={{ width: `${(level.level / dimension.levels.length) * 100}%` }}
                                                                />
                                                            </div>
                                                        </div>
                                                    ) : (
                                                        <span className="text-muted-foreground text-sm">—</span>
                                                    )}
                                                </td>
                                            );
                                        })}
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </motion.div>
            )}

            {selectedRoles.length === 0 && (
                <div className="text-center py-12 text-muted-foreground">
                    Select roles above to start comparing
                </div>
            )}
        </div>
    );
}
