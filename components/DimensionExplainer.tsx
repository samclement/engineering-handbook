"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { dimensions, getRoleDimensions, type Dimension, type DimensionType } from "@/lib/dimensions-data";
import { ChevronRight, LayoutGrid, User } from "lucide-react";

type ViewMode = 'dimension' | 'role';

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
                        onClick={() => setViewMode('dimension')}
                        className={`flex items-center gap-2 px-4 py-2 rounded-md font-medium text-sm transition-all ${viewMode === 'dimension'
                            ? 'bg-background shadow-sm'
                            : 'text-muted-foreground hover:text-foreground'
                            }`}
                    >
                        <LayoutGrid className="w-4 h-4" />
                        View by Dimension
                    </button>
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
                </div>
            </div>

            {/* Dimension View */}
            {viewMode === 'dimension' && (
                <>
                    {/* Dimension Tabs */}
                    <div className="flex flex-wrap gap-2 justify-center">
                        {dimensions.map((dimension) => (
                            <button
                                key={dimension.id}
                                onClick={() => setSelectedDimension(dimension.id)}
                                className={`px-4 py-2 rounded-lg font-medium transition-all ${selectedDimension === dimension.id
                                    ? 'bg-primary text-primary-foreground shadow-md'
                                    : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                                    }`}
                            >
                                {dimension.name}
                            </button>
                        ))}
                    </div>

                    {/* Active Dimension Display */}
                    {activeDimension && (
                        <motion.div
                            key={selectedDimension}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            className="bg-card rounded-xl border border-border p-6"
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
                                        <div className="flex items-start gap-4 p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors">
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
                </>
            )}

            {/* Role View */}
            {viewMode === 'role' && (
                <>
                    {/* Role Tabs */}
                    <div className="mb-6">
                        <div className="flex gap-2 flex-wrap justify-center">
                            {allRoles.map((role) => (
                                <button
                                    key={role.slug}
                                    onClick={() => setSelectedRole(role.slug)}
                                    className={`px-4 py-2.5 rounded-lg font-medium text-sm transition-all whitespace-nowrap ${selectedRole === role.slug
                                        ? 'bg-primary text-primary-foreground shadow-md'
                                        : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                                        }`}
                                >
                                    {role.title}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Role Dimensions Display */}
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

                                return (
                                    <motion.div
                                        key={dimension.id}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.3, delay: index * 0.05 }}
                                        className="bg-card rounded-xl border border-border p-5"
                                    >
                                        <div className="flex items-start gap-4">
                                            {/* Dimension Info */}
                                            <div className="flex-1 min-w-0">
                                                <h3 className="font-bold text-lg mb-1">{dimension.name}</h3>
                                                <p className="text-sm text-muted-foreground mb-3">{dimension.description}</p>

                                                {level && (
                                                    <div className="bg-secondary/50 rounded-lg p-3">
                                                        <div className="flex items-center gap-2 mb-2">
                                                            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xs">
                                                                {level.level}
                                                            </div>
                                                            <span className="font-semibold text-sm">{level.label}</span>
                                                        </div>
                                                        <p className="text-sm text-muted-foreground">{level.description}</p>
                                                    </div>
                                                )}
                                            </div>

                                            {/* Progress Indicator */}
                                            {level && (
                                                <div className="hidden sm:flex flex-col items-center gap-2 flex-shrink-0">
                                                    <div className="text-2xl font-bold text-primary">
                                                        {level.level}/{dimension.levels.length}
                                                    </div>
                                                    <div className="w-16 bg-secondary rounded-full h-2">
                                                        <div
                                                            className="bg-primary h-2 rounded-full transition-all"
                                                            style={{ width: `${(level.level / dimension.levels.length) * 100}%` }}
                                                        />
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    )}
                </>
            )
            }
        </div >
    );
}
