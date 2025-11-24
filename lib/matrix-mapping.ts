
export interface MatrixKeys {
    sdlcKey?: string;
    leadershipKey?: string;
}

export function getRoleMatrixKeys(slug: string): MatrixKeys {
    const mapping: Record<string, MatrixKeys> = {
        // Foundation
        "graduate-software-engineer-gse": { sdlcKey: "Graduate/Associate" },
        "associate-software-engineer-ase": { sdlcKey: "Graduate/Associate" },
        "software-engineer-se": { sdlcKey: "Engineer" },
        "senior-software-engineer-sse": { sdlcKey: "Senior Engineer" },

        // IC Track
        "staff-software-engineer": { sdlcKey: "Staff", leadershipKey: "Staff Engineer" },
        "principal-software-engineer": { sdlcKey: "Staff", leadershipKey: "Principal Engineer" }, // Principal maps to Staff SDLC as base

        // Management Track
        "engineering-manager-em": { sdlcKey: "Engineering Manager", leadershipKey: "Engineering Manager" },
        "head-of-software-engineering-hose": { leadershipKey: "Head of Software Engineering" },
        "senior-head-of-software-engineering-shose": { leadershipKey: "Senior Head of Software Engineering" },
    };

    return mapping[slug] || {};
}
