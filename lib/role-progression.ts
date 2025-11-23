// Role progression mapping for career paths
// null indicates terminal roles with no further progression
export const roleProgression: Record<string, string | string[] | null> = {
    // Foundation Track
    "graduate-software-engineer-gse": "associate-software-engineer-ase",
    "associate-software-engineer-ase": "software-engineer-se",
    "software-engineer-se": "senior-software-engineer-sse",

    // SSE splits into IC or Management
    "senior-software-engineer-sse": ["staff-software-engineer", "engineering-manager-em"],

    // IC Track
    "staff-software-engineer": "principal-software-engineer",

    // Management Track
    "engineering-manager-em": "head-of-software-engineering-hose",
    "head-of-software-engineering-hose": "senior-head-of-software-engineering-shose",

    // Terminal roles (no next level)
    "principal-software-engineer": null,
    "senior-head-of-software-engineering-shose": null,
};

export interface NextRole {
    slug: string;
    title: string;
}

/**
 * Get the next role(s) in the career progression
 * @param currentRoleSlug - The current role slug
 * @returns Array of next roles (can be empty for terminal roles, or have multiple for split paths)
 */
export function getNextRoles(currentRoleSlug: string): string[] {
    const nextRole = roleProgression[currentRoleSlug];

    if (!nextRole) {
        return [];
    }

    if (Array.isArray(nextRole)) {
        return nextRole;
    }

    return [nextRole];
}

/**
 * Check if a role is a terminal role (no further progression)
 */
export function isTerminalRole(roleSlug: string): boolean {
    return getNextRoles(roleSlug).length === 0;
}

/**
 * Get role title from slug (simple conversion)
 */
export function getRoleTitleFromSlug(slug: string): string {
    const titleMap: Record<string, string> = {
        "graduate-software-engineer-gse": "Graduate Software Engineer",
        "associate-software-engineer-ase": "Associate Software Engineer",
        "software-engineer-se": "Software Engineer",
        "senior-software-engineer-sse": "Senior Software Engineer",
        "staff-software-engineer": "Staff Software Engineer",
        "principal-software-engineer": "Principal Software Engineer",
        "engineering-manager-em": "Engineering Manager",
        "head-of-software-engineering-hose": "Head of Software Engineering",
        "senior-head-of-software-engineering-shose": "Senior Head of Software Engineering",
    };

    return titleMap[slug] || slug;
}
