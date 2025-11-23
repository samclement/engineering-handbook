"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { dimensions, getRoleDimensions, type Dimension, type DimensionType } from "@/lib/dimensions-data";
import { ChevronRight, LayoutGrid, User, Target, Clock, HelpCircle, Users, Workflow } from "lucide-react";

type ViewMode = 'dimension' | 'role';

// Helper function to get icon for each dimension
const getDimensionIcon = (dimensionId: DimensionType) => {
    const iconMap = {
        scope: Target,
        timeHorizon: Clock,
        ambiguity: HelpCircle,
        leadership: Users,
        technical: Workflow,
    };
    return iconMap[dimensionId];
};

// All available roles
const allRoles = [
    { slug: 'graduate-software-engineer-gse', title: 'Graduate Software Engineer (GSE)' },
    { slug: 'associate-software-engineer-ase', title: 'Associate Software Engineer (ASE)' },
    { slug: 'software-engineer-se', title: 'Software Engineer (SE)' },
    { slug: 'senior-software-engineer-sse', title: 'Senior Software Engineer (SSE)' },
    { slug: 'staff-software-engineer', title: 'Staff Software Engineer' },
    { slug: 'principal-software-engineer', title: 'Principal Software Engineer' },
    { slug: 'engineering-manager-em', title: 'Engineering Manager (EM)' },
    { slug: 'head-of-software-engineering-hose', title: 'Head of Software Engineering (HoSE)' },
    { slug: 'senior-head-of-software-engineering-shose', title: 'Senior Head of Software Engineering (SHoSE)' }
];

export function DimensionExplainer() {
    const [viewMode, setViewMode] = useState<ViewMode>('role');
    const [selectedDimension, setSelectedDimension] = useState<DimensionType>('scope');
    const [selectedRole, setSelectedRole] = useState<string>('software-engineer-se');

    const activeDimension = dimensions.find(d => d.id === selectedDimension);
    const roleDimensions = viewMode === 'role' ? getRoleDimensions(selectedRole) : null;

    return (
        <div className="space-y-6">
            <div className="text-center space-y-2">
                <h2 className="text-2xl font-bold">Understanding Role Dimensions</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    {viewMode === 'dimension'
                        ? 'Explore how each dimension progresses from junior to senior levels'
                        : 'See all dimension levels for a specific role'}
                </p>
            </div>

            {/* View Mode Toggle */}
            <div className="flex justify-center">
                <div className="inline-flex rounded-lg border border-border p-1 bg-secondary/50">
                    <button
                        onClick={() => setViewMode('role')}
                        className={`flex items-center gap-2 px-4 py-2 rounded-md font-medium text-sm transition-all ${viewMode === 'role'
                            ? 'bg-background shadow-sm'
                            : 'text-muted-foreground hover:text-foreground'
                            }`}
                    >
                        <User className="w-4 h-4" />
                        View by Role
                    </button>
                    <button
                        onClick={() => setViewMode('dimension')}
                        className={`flex items-center gap-2 px-4 py-2 rounded-md font-medium text-sm transition-all ${viewMode === 'dimension'
                            ? 'bg-background shadow-sm'
                            : 'text-muted-foreground hover:text-foreground'
                            }`}
                    >
                        <LayoutGrid className="w-4 h-4" />
                        View by Dimension
                    </button>
                </div>
            </div>

            {/* Dimension View */}
            {viewMode === 'dimension' && (
                <div className="flex gap-6">
                    {/* Dimension Navigation - Left Sidebar */}
                    <div className="w-64 flex-shrink-0">
                        <div className="sticky top-6 space-y-2">
                            {dimensions.map((dimension) => (
                                <button
                                    key={dimension.id}
                                    onClick={() => setSelectedDimension(dimension.id)}
                                    className={`w-full text-left px-4 py-3 rounded-lg font-medium text-sm transition-all ${selectedDimension === dimension.id
                                        ? 'bg-primary text-primary-foreground shadow-md'
                                        : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                                        }`}
                                >
                                    {dimension.name}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Active Dimension Display - Right Content */}
                    <div className="flex-1 min-w-0">
                        {activeDimension && (
                            <motion.div
                                key={selectedDimension}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="mb-6">
                                    <h3 className="text-xl font-bold mb-2">{activeDimension.name}</h3>
                                    <p className="text-muted-foreground">{activeDimension.description}</p>
                                </div>

                                {/* Progression Ladder */}
                                <div className="space-y-3">
                                    {activeDimension.levels.map((level, index) => (
                                        <motion.div
                                            key={level.level}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.3, delay: index * 0.05 }}
                                            className="relative"
                                        >
                                            <div className="flex items-start gap-4 p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors">
                                                {/* Level Number */}
                                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
                                                    {level.level}
                                                </div>

                                                {/* Content */}
                                                <div className="flex-1 min-w-0">
                                                    <div className="flex items-center gap-2 mb-1">
                                                        <h4 className="font-semibold text-sm">{level.label}</h4>
                                                        <ChevronRight className="w-4 h-4 text-muted-foreground" />
                                                    </div>
                                                    <p className="text-sm text-muted-foreground mb-2">{level.description}</p>

                                                    {/* Role Pills */}
                                                    <div className="flex flex-wrap gap-1">
                                                        {level.roles.map((roleSlug) => (
                                                            <span
                                                                key={roleSlug}
                                                                className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary"
                                                            >
                                                                {roleSlug.split('-').map(word =>
                                                                    word.charAt(0).toUpperCase() + word.slice(1)
                                                                ).join(' ').replace(/\s\([^)]*\)/g, '')}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* Progress Bar */}
                                                <div className="hidden lg:flex flex-shrink-0 w-24 items-center">
                                                    <div className="w-full bg-secondary rounded-full h-2">
                                                        <div
                                                            className="bg-primary h-2 rounded-full transition-all"
                                                            style={{ width: `${(level.level / activeDimension.levels.length) * 100}%` }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </div>
                </div>
            )}

            {/* Role View */}
            {viewMode === 'role' && (
                <div className="flex gap-6">
                    {/* Role Navigation - Left Sidebar */}
                    <div className="w-64 flex-shrink-0">
                        <div className="sticky top-6 space-y-2">
                            {allRoles.map((role) => (
                                <button
                                    key={role.slug}
                                    onClick={() => setSelectedRole(role.slug)}
                                    className={`w-full text-left px-4 py-3 rounded-lg font-medium text-sm transition-all ${selectedRole === role.slug
                                        ? 'bg-primary text-primary-foreground shadow-md'
                                        : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                                        }`}
                                >
                                    {role.title}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Role Dimensions Display - Right Content */}
                    <div className="flex-1 min-w-0">
                        {roleDimensions && (
                            <motion.div
                                key={selectedRole}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3 }}
                                className="space-y-4"
                            >
                                {dimensions.map((dimension, index) => {
                                    const levelNum = roleDimensions[dimension.id];
                                    const level = dimension.levels.find(l => l.level === levelNum);
                                    const Icon = getDimensionIcon(dimension.id);

                                    return (
                                        <motion.div
                                            key={dimension.id}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.3, delay: index * 0.05 }}
                                            className="bg-card rounded-xl border border-border overflow-hidden hover:border-primary/50 transition-colors"
                                        >
                                            {/* 1. DIMENSION HEADER - What is this dimension? */}
                                            <div className="p-5 pb-4 border-b border-border/50">
                                                <div className="flex items-center gap-3 mb-2">
                                                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center flex-shrink-0">
                                                        <Icon className="w-5 h-5 text-primary" />
                                                    </div>
                                                    <h3 className="font-bold text-lg">{dimension.name}</h3>
                                                </div>
                                                <p className="text-sm text-muted-foreground ml-13">
                                                    {dimension.description}
                                                </p>
                                            </div>

                                            {level && (
                                                <>
                                                    {/* 2. LEVEL VISUALIZATION - Where are you? */}
                                                    <div className="p-5 pb-4">
                                                        {/* Progression Bar */}
                                                        <div className="mb-3">
                                                            <div className="flex items-center justify-between mb-2">
                                                                <span className="text-xs font-medium text-muted-foreground">Level {level.level} of {dimension.levels.length}</span>
                                                                <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${level.level <= 2 ? 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400' :
                                                                        level.level <= 4 ? 'bg-blue-500/10 text-blue-700 dark:text-blue-400' :
                                                                            'bg-purple-500/10 text-purple-700 dark:text-purple-400'
                                                                    }`}>
                                                                    {level.level <= 2 ? 'Junior' : level.level <= 4 ? 'Mid-Level' : 'Senior'}
                                                                </span>
                                                            </div>

                                                            <div className="flex items-center gap-1">
                                                                {dimension.levels.map((dimLevel) => (
                                                                    <div
                                                                        key={dimLevel.level}
                                                                        className="relative flex-1 group"
                                                                    >
                                                                        <div className={`h-3 rounded-sm transition-all ${dimLevel.level === level.level
                                                                                ? level.level <= 2
                                                                                    ? 'bg-emerald-500 shadow-lg shadow-emerald-500/30'
                                                                                    : level.level <= 4
                                                                                        ? 'bg-blue-500 shadow-lg shadow-blue-500/30'
                                                                                        : 'bg-purple-500 shadow-lg shadow-purple-500/30'
                                                                                : dimLevel.level < level.level
                                                                                    ? 'bg-muted-foreground/20'
                                                                                    : 'bg-muted/40'
                                                                            }`}>
                                                                            {dimLevel.level === level.level && (
                                                                                <div className="absolute -top-7 left-1/2 -translate-x-1/2">
                                                                                    <div className="text-xs font-bold text-foreground whitespace-nowrap bg-background px-2 py-0.5 rounded shadow-sm border border-border">
                                                                                        You
                                                                                    </div>
                                                                                </div>
                                                                            )}
                                                                        </div>

                                                                        {/* Tooltip on hover */}
                                                                        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                                                                            <div className="text-xs text-muted-foreground whitespace-nowrap bg-popover px-2 py-1 rounded shadow-lg border border-border">
                                                                                {dimLevel.label}
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* 3. LEVEL DETAILS - What does this level mean? */}
                                                    <div className="px-5 pb-5">
                                                        <div className="bg-muted/50 rounded-lg p-4">
                                                            <div className="font-semibold text-sm mb-1 text-foreground">
                                                                {level.label}
                                                            </div>
                                                            <p className="text-sm text-muted-foreground leading-relaxed">
                                                                {level.description}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </>
                                            )}
                                        </motion.div>
                                    );
                                })}
                            </motion.div>
                        )}
                    </div>
                </div>
            )
            }
        </div >
    );
}
