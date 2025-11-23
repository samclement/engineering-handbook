import { type DimensionType } from './dimensions-data';

export interface DimensionProgressionExample {
    dimension: DimensionType;
    fromLevel: number;
    toLevel: number;
    examples: string[];
}

// Examples for dimension progression inspired by SDLC competencies
export const dimensionProgressionExamples: Record<string, DimensionProgressionExample[]> = {
    // GSE → ASE
    "graduate-software-engineer-gse": [
        {
            dimension: 'scope',
            fromLevel: 1,
            toLevel: 2,
            examples: [
                "Take ownership of small stories from grooming through deployment",
                "Design simple components following established patterns",
                "Coordinate with QA for end-to-end feature testing"
            ]
        },
        {
            dimension: 'timeHorizon',
            fromLevel: 1,
            toLevel: 2,
            examples: [
                "Estimate work for the upcoming sprint",
                "Plan task breakdowns for multi-day features",
                "Participate in sprint planning discussions"
            ]
        },
        {
            dimension: 'ambiguity',
            fromLevel: 1,
            toLevel: 2,
            examples: [
                "Ask clarifying questions to reduce requirement ambiguity",
                "Make simple technical choices within established patterns",
                "Handle edge cases in well-defined problem spaces"
            ]
        }
    ],
    // ASE → SE
    "associate-software-engineer-ase": [
        {
            dimension: 'scope',
            fromLevel: 2,
            toLevel: 3,
            examples: [
                "Own a component's reliability and maintenance",
                "Lead feature development from design to deployment",
                "Coordinate across engineering and product for component changes"
            ]
        },
        {
            dimension: 'timeHorizon',
            fromLevel: 2,
            toLevel: 2,
            examples: [
                "Plan component improvements across multiple sprints",
                "Identify and schedule technical debt work",
                "Forecast capacity for quarterly roadmap items"
            ]
        },
        {
            dimension: 'technical',
            fromLevel: 2,
            toLevel: 3,
            examples: [
                "Propose architectural improvements within your component",
                "Evaluate trade-offs between different implementation approaches",
                "Review PRs with focus on design patterns and maintainability"
            ]
        }
    ],
    // SE → SSE
    "software-engineer-se": [
        {
            dimension: 'scope',
            fromLevel: 3,
            toLevel: 4,
            examples: [
                "Design solutions spanning multiple components or services",
                "Lead cross-functional initiatives (Eng, Product, Design)",
                "Define APIs and contracts between services"
            ]
        },
        {
            dimension: 'timeHorizon',
            fromLevel: 2,
            toLevel: 3,
            examples: [
                "Plan quarterly roadmap for your service area",
                "Anticipate scaling needs 1-2 quarters ahead",
                "Coordinate multi-sprint initiatives with dependencies"
            ]
        },
        {
            dimension: 'technical',
            fromLevel: 3,
            toLevel: 4,
            examples: [
                "Write technical design docs (RFCs) for major features",
                "Mentor engineers on system design principles",
                "Drive reliability improvements (SLOs, monitoring, testing)"
            ]
        },
        {
            dimension: 'leadership',
            fromLevel: 2,
            toLevel: 3,
            examples: [
                "Mentor junior engineers on best practices",
                "Lead design reviews for your team",
                "Champion engineering standards and quality bar"
            ]
        }
    ],
    // SSE → Staff or EM (split)
    "senior-software-engineer-sse": [
        {
            dimension: 'scope',
            fromLevel: 4,
            toLevel: 5,
            examples: [
                "Architect solutions across multiple teams or product areas",
                "Define technical strategy for a platform or domain",
                "Influence roadmap and prioritization across teams"
            ]
        },
        {
            dimension: 'timeHorizon',
            fromLevel: 3,
            toLevel: 4,
            examples: [
                "Plan technical initiatives for 2-3 quarters",
                "Design evolutionary architecture with migration paths",
                "Anticipate product and technical inflection points"
            ]
        },
        {
            dimension: 'ambiguity',
            fromLevel: 3,
            toLevel: 4,
            examples: [
                "Define problems from vague business requirements",
                "Navigate ambiguous technical decisions (build vs buy, architecture choices)",
                "Create structure from poorly scoped initiatives"
            ]
        },
        {
            dimension: 'leadership',
            fromLevel: 3,
            toLevel: 4,
            examples: [
                "Coach senior engineers on technical leadership",
                "Align stakeholders across multiple teams",
                "Set technical direction and standards for domain"
            ]
        },
        {
            dimension: 'technical',
            fromLevel: 4,
            toLevel: 5,
            examples: [
                "Design systems for high availability and scale",
                "Drive cross-team architectural decisions",
                "Establish observability and operational excellence standards"
            ]
        }
    ],
    // Staff → Principal
    "staff-software-engineer": [
        {
            dimension: 'scope',
            fromLevel: 5,
            toLevel: 6,
            examples: [
                "Define architectural vision across multiple product groups",
                "Drive org-wide technical standards and platform strategy",
                "Lead cross-org migrations and technical transformations"
            ]
        },
        {
            dimension: 'timeHorizon',
            fromLevel: 4,
            toLevel: 5,
            examples: [
                "Set annual technical roadmap and priorities",
                "Plan multi-year architectural evolution",
                "Anticipate technology shifts affecting org strategy"
            ]
        },
        {
            dimension: 'leadership',
            fromLevel: 4,
            toLevel: 5,
            examples: [
                "Mentor Staff engineers and build leadership bench",
                "Represent engineering in executive forums",
                "Align leaders across orgs on technical principles"
            ]
        }
    ],
    // EM → HoSE
    "engineering-manager-em": [
        {
            dimension: 'scope',
            fromLevel: 5,
            toLevel: 6,
            examples: [
                "Lead 2-5 teams across a product portfolio",
                "Define org structure and ownership boundaries",
                "Drive group-level strategy with Product/Design partners"
            ]
        },
        {
            dimension: 'timeHorizon',
            fromLevel: 3,
            toLevel: 5,
            examples: [
                "Plan annual roadmap and resource allocation",
                "Build succession plans for leadership roles",
                "Set multi-quarter OKRs and investment priorities"
            ]
        },
        {
            dimension: 'leadership',
            fromLevel: 4,
            toLevel: 5,
            examples: [
                "Develop engineering managers through coaching",
                "Set culture and operating model for group",
                "Navigate complex stakeholder landscapes"
            ]
        }
    ],
    // HoSE → SHoSE
    "head-of-software-engineering-hose": [
        {
            dimension: 'scope',
            fromLevel: 6,
            toLevel: 7,
            examples: [
                "Lead engineering across multiple portfolios",
                "Shape company-wide technical and organizational strategy",
                "Partner with exec team on business outcomes"
            ]
        },
        {
            dimension: 'timeHorizon',
            fromLevel: 5,
            toLevel: 6,
            examples: [
                "Set multi-year strategic bets",
                "Plan org evolution for 2-3 year growth",
                "Anticipate market/technology shifts affecting business"
            ]
        },
        {
            dimension: 'leadership',
            fromLevel: 5,
            toLevel: 6,
            examples: [
                "Build executive leadership pipeline",
                "Steer company culture and values at scale",
                "Influence cross-company strategy (Product, Design, Data, etc.)"
            ]
        }
    ]
};

export function getProgressionExamples(currentRoleSlug: string): DimensionProgressionExample[] {
    return dimensionProgressionExamples[currentRoleSlug] || [];
}
