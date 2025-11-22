"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { dimensions, workExamples, getWorkExamplesByDimension, type DimensionType } from "@/lib/dimensions-data";
import { BookOpen, ChevronDown } from "lucide-react";

export function WorkExamplesExplorer() {
    const [selectedDimension, setSelectedDimension] = useState<DimensionType>('scope');
    const [selectedLevel, setSelectedLevel] = useState<number | null>(null);
    const [expandedExample, setExpandedExample] = useState<string | null>(null);

    const activeDimension = dimensions.find(d => d.id === selectedDimension);
    const filteredExamples = getWorkExamplesByDimension(selectedDimension, selectedLevel || undefined);

    return (
        <div className="space-y-6">
            <div className="text-center space-y-2">
                <h2 className="text-2xl font-bold">Work Examples Explorer</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    See concrete examples of work at different levels for each dimension
                </p>
            </div>

            {/* Controls */}
            <div className="grid md:grid-cols-2 gap-4">
                {/* Dimension Selector */}
                <div>
                    <label className="block text-sm font-semibold mb-2">Dimension</label>
                    <select
                        value={selectedDimension}
                        onChange={(e) => {
                            setSelectedDimension(e.target.value as DimensionType);
                            setSelectedLevel(null);
                        }}
                        className="w-full p-3 rounded-lg border border-border bg-background"
                    >
                        {dimensions.map((dimension) => (
                            <option key={dimension.id} value={dimension.id}>
                                {dimension.name}
                            </option>
                        ))}
                    </select>
                    {activeDimension && (
                        <p className="text-xs text-muted-foreground mt-2">
                            {activeDimension.description}
                        </p>
                    )}
                </div>

                {/* Level Selector */}
                <div>
                    <label className="block text-sm font-semibold mb-2">Filter by Level (Optional)</label>
                    <select
                        value={selectedLevel || ''}
                        onChange={(e) => setSelectedLevel(e.target.value ? parseInt(e.target.value) : null)}
                        className="w-full p-3 rounded-lg border border-border bg-background"
                    >
                        <option value="">All Levels</option>
                        {activeDimension?.levels.map((level) => (
                            <option key={level.level} value={level.level}>
                                Level {level.level}: {level.label}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Examples Grid */}
            <div className="grid gap-4">
                {filteredExamples.length > 0 ? (
                    filteredExamples.map((example, index) => {
                        const level = activeDimension?.levels.find(l => l.level === example.level);
                        const isExpanded = expandedExample === example.id;

                        return (
                            <motion.div
                                key={example.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                className="bg-card rounded-lg border border-border overflow-hidden"
                            >
                                <button
                                    onClick={() => setExpandedExample(isExpanded ? null : example.id)}
                                    className="w-full p-4 text-left hover:bg-secondary/50 transition-colors"
                                >
                                    <div className="flex items-start justify-between gap-4">
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center gap-2 mb-2">
                                                <BookOpen className="w-4 h-4 text-primary flex-shrink-0" />
                                                <h3 className="font-semibold">{example.title}</h3>
                                                {level && (
                                                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                                                        Level {level.level}: {level.label}
                                                    </span>
                                                )}
                                            </div>
                                            <p className="text-sm text-muted-foreground">
                                                {example.description}
                                            </p>
                                        </div>
                                        <ChevronDown
                                            className={`w-5 h-5 text-muted-foreground transition-transform flex-shrink-0 ${isExpanded ? 'transform rotate-180' : ''
                                                }`}
                                        />
                                    </div>
                                </button>

                                {isExpanded && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                        className="border-t border-border p-4 bg-secondary/20"
                                    >
                                        <div className="space-y-3">
                                            <div>
                                                <h4 className="font-semibold text-sm mb-1">Scenario</h4>
                                                <p className="text-sm text-muted-foreground">
                                                    {example.scenario}
                                                </p>
                                            </div>

                                            <div>
                                                <h4 className="font-semibold text-sm mb-2">Typical Roles</h4>
                                                <div className="flex flex-wrap gap-1">
                                                    {example.roleExamples.map((roleSlug) => (
                                                        <span
                                                            key={roleSlug}
                                                            className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-secondary text-secondary-foreground"
                                                        >
                                                            {roleSlug.split('-').map(word =>
                                                                word.charAt(0).toUpperCase() + word.slice(1)
                                                            ).join(' ').replace(/\s\([^)]*\)/g, '')}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </motion.div>
                        );
                    })
                ) : (
                    <div className="text-center py-12 text-muted-foreground">
                        No examples found for this dimension and level. More examples coming soon!
                    </div>
                )}
            </div>

            {/* Add more prompt */}
            {filteredExamples.length > 0 && (
                <div className="text-center text-sm text-muted-foreground mt-6 p-4 bg-secondary/30 rounded-lg">
                    <p>
                        These examples are templates. Consider expanding them with scenarios specific to your organization's context and domain.
                    </p>
                </div>
            )}
        </div>
    );
}
