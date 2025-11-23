import { type DimensionType } from './dimensions-data';

export interface CurrentLevelExample {
    dimension: DimensionType;
    level: number;
    examples: string[];
}

// Examples of work currently performed at each role level
export const currentLevelExamples: Record<string, CurrentLevelExample[]> = {
    "graduate-software-engineer-gse": [
        {
            dimension: 'scope',
            level: 1,
            examples: [
                "Implement individual tasks within a component (e.g., add a new field to a form)",
                "Fix bugs in well-scoped areas with clear reproduction steps",
                "Make code changes following existing patterns in the codebase"
            ]
        },
        {
            dimension: 'timeHorizon',
            level: 1,
            examples: [
                "Plan and execute work on a daily basis",
                "Update ticket status and communicate progress in daily standups",
                "Complete assigned tasks within a sprint"
            ]
        },
        {
            dimension: 'ambiguity',
            level: 1,
            examples: [
                "Work on clearly defined tasks with acceptance criteria",
                "Ask clarifying questions when requirements are unclear",
                "Follow step-by-step instructions for setup and deployment"
            ]
        },
        {
            dimension: 'leadership',
            level: 1,
            examples: [
                "Actively participate in team ceremonies and discussions",
                "Share learnings from tasks with teammates",
                "Seek and act on feedback from senior engineers"
            ]
        },
        {
            dimension: 'technical',
            level: 1,
            examples: [
                "Write clean, readable code following team standards",
                "Submit PRs with clear descriptions and context",
                "Debug issues using logs and debugging tools"
            ]
        }
    ],
    "associate-software-engineer-ase": [
        {
            dimension: 'scope',
            level: 2,
            examples: [
                "Deliver small features from design through deployment",
                "Own bug fixes that span multiple files or components",
                "Contribute to feature planning discussions"
            ]
        },
        {
            dimension: 'timeHorizon',
            level: 2,
            examples: [
                "Plan work across multiple days or a full sprint",
                "Break down stories into implementable tasks",
                "Coordinate with QA on testing timelines"
            ]
        },
        {
            dimension: 'ambiguity',
            level: 2,
            examples: [
                "Make simple technical choices within established patterns",
                "Identify edge cases and ask about requirements",
                "Navigate minor requirement gaps independently"
            ]
        },
        {
            dimension: 'leadership',
            level: 2,
            examples: [
                "Help onboard new team members",
                "Share knowledge in team documentation",
                "Provide helpful code review feedback to peers"
            ]
        },
        {
            dimension: 'technical',
            level: 2,
            examples: [
                "Review peers' code for style and correctness",
                "Propose improvements to code you're working in",
                "Write unit tests for your features"
            ]
        }
    ],
    "software-engineer-se": [
        {
            dimension: 'scope',
            level: 3,
            examples: [
                "Own and maintain a component or small service",
                "Design and implement medium-sized features",
                "Drive cross-team coordination for your component"
            ]
        },
        {
            dimension: 'timeHorizon',
            level: 2,
            examples: [
                "Plan component improvements over multiple sprints",
                "Identify and schedule technical debt work",
                "Contribute to quarterly planning for your area"
            ]
        },
        {
            dimension: 'ambiguity',
            level: 2,
            examples: [
                "Clarify vague requirements with product and design",
                "Make trade-off decisions for your component",
                "Handle uncertainty in implementation approach"
            ]
        },
        {
            dimension: 'leadership',
            level: 2,
            examples: [
                "Mentor junior engineers on coding practices",
                "Lead technical discussions for your component",
                "Champion code quality and testing standards"
            ]
        },
        {
            dimension: 'technical',
            level: 3,
            examples: [
                "Propose architectural improvements for your component",
                "Write design docs for significant feature additions",
                "Review code with focus on maintainability and design"
            ]
        }
    ],
    "senior-software-engineer-sse": [
        {
            dimension: 'scope',
            level: 4,
            examples: [
                "Lead design for features spanning multiple services",
                "Own critical services or platform components",
                "Drive technical decisions for your product area"
            ]
        },
        {
            dimension: 'timeHorizon',
            level: 3,
            examples: [
                "Plan quarterly roadmap for your service area",
                "Anticipate scaling needs 1-2 quarters ahead",
                "Lead multi-sprint initiatives with dependencies"
            ]
        },
        {
            dimension: 'ambiguity',
            level: 3,
            examples: [
                "Navigate ambiguous product requirements and define solutions",
                "Make architectural decisions with incomplete information",
                "Scope and prioritize work in uncertain domains"
            ]
        },
        {
            dimension: 'leadership',
            level: 3,
            examples: [
                "Mentor engineers across experience levels",
                "Lead by example in code quality and practices",
                "Facilitate technical discussions and drive consensus"
            ]
        },
        {
            dimension: 'technical',
            level: 4,
            examples: [
                "Write RFCs for major architectural changes",
                "Lead design reviews and set quality standards",
                "Drive reliability improvements (SLOs, monitoring, testing)"
            ]
        }
    ],
    "staff-software-engineer": [
        {
            dimension: 'scope',
            level: 5,
            examples: [
                "Architect solutions across multiple teams",
                "Define technical strategy for a platform or domain",
                "Drive org-level architectural decisions"
            ]
        },
        {
            dimension: 'timeHorizon',
            level: 4,
            examples: [
                "Plan technical initiatives for 2-3 quarters",
                "Design evolutionary architecture with migration paths",
                "Set annual technical priorities for your domain"
            ]
        },
        {
            dimension: 'ambiguity',
            level: 4,
            examples: [
                "Define technical problems from vague business needs",
                "Navigate complex architectural decisions (build/buy/partner)",
                "Create structure in poorly defined technical domains"
            ]
        },
        {
            dimension: 'leadership',
            level: 4,
            examples: [
                "Coach senior engineers on technical leadership",
                "Align stakeholders across multiple teams",
                "Set technical direction and standards for domain"
            ]
        },
        {
            dimension: 'technical',
            level: 5,
            examples: [
                "Design systems for high availability and scale",
                "Establish platform standards and best practices",
                "Lead critical cross-org technical initiatives"
            ]
        }
    ],
    "principal-software-engineer": [
        {
            dimension: 'scope',
            level: 6,
            examples: [
                "Define architectural vision across product portfolios",
                "Drive org-wide technical strategy and standards",
                "Lead company-level technical transformations"
            ]
        },
        {
            dimension: 'timeHorizon',
            level: 5,
            examples: [
                "Set annual technical roadmap and priorities",
                "Plan multi-year architectural evolution",
                "Anticipate technology shifts affecting company strategy"
            ]
        },
        {
            dimension: 'ambiguity',
            level: 5,
            examples: [
                "Navigate highly ambiguous technical and business landscapes",
                "Define new technical domains and opportunities",
                "Make strategic bets with long-term organizational impact"
            ]
        },
        {
            dimension: 'leadership',
            level: 5,
            examples: [
                "Mentor Staff engineers and build leadership pipeline",
                "Represent engineering in executive forums",
                "Influence company-wide technical culture"
            ]
        },
        {
            dimension: 'technical',
            level: 6,
            examples: [
                "Set technical direction for multiple product groups",
                "Lead company-wide technical transformations",
                "Establish engineering excellence standards at scale"
            ]
        }
    ],
    "engineering-manager-em": [
        {
            dimension: 'scope',
            level: 5,
            examples: [
                "Manage a team of 5-8 engineers",
                "Drive product roadmap with PM/Design partners",
                "Own team delivery and operational excellence"
            ]
        },
        {
            dimension: 'timeHorizon',
            level: 3,
            examples: [
                "Plan quarterly OKRs and team priorities",
                "Manage hiring and team growth plans",
                "Balance short-term delivery with long-term health"
            ]
        },
        {
            dimension: 'ambiguity',
            level: 3,
            examples: [
                "Navigate unclear product direction and define team priorities",
                "Make resourcing decisions with incomplete information",
                "Balance competing stakeholder needs and expectations"
            ]
        },
        {
            dimension: 'leadership',
            level: 4,
            examples: [
                "Coach engineers on career development",
                "Build team culture and psychological safety",
                "Navigate stakeholder expectations and priorities"
            ]
        },
        {
            dimension: 'technical',
            level: 3,
            examples: [
                "Maintain technical credibility through code reviews",
                "Guide team on technical decisions and architecture",
                "Ensure technical quality and maintainability"
            ]
        }
    ],
    "head-of-software-engineering-hose": [
        {
            dimension: 'scope',
            level: 6,
            examples: [
                "Lead 2-5 teams across a product portfolio",
                "Define org structure and ownership boundaries",
                "Drive group-level strategy with leadership team"
            ]
        },
        {
            dimension: 'timeHorizon',
            level: 5,
            examples: [
                "Plan annual roadmap and resource allocation",
                "Build succession plans for leadership roles",
                "Set multi-quarter strategic bets and investments"
            ]
        },
        {
            dimension: 'ambiguity',
            level: 5,
            examples: [
                "Navigate strategic ambiguity in product and org direction",
                "Define new organizational capabilities and structures",
                "Balance multiple conflicting strategic priorities"
            ]
        },
        {
            dimension: 'leadership',
            level: 5,
            examples: [
                "Develop engineering managers through coaching",
                "Set culture and operating model for group",
                "Influence cross-org strategy and priorities"
            ]
        },
        {
            dimension: 'technical',
            level: 4,
            examples: [
                "Set technical standards across multiple teams",
                "Drive architectural decisions at group level",
                "Ensure technical alignment with business strategy"
            ]
        }
    ],
    "senior-head-of-software-engineering-shose": [
        {
            dimension: 'scope',
            level: 7,
            examples: [
                "Lead engineering across multiple portfolios",
                "Shape company-wide technical and org strategy",
                "Partner with exec team on business outcomes"
            ]
        },
        {
            dimension: 'timeHorizon',
            level: 6,
            examples: [
                "Set multi-year strategic direction",
                "Plan organizational evolution for 2-3 year growth",
                "Anticipate market shifts affecting business model"
            ]
        },
        {
            dimension: 'ambiguity',
            level: 6,
            examples: [
                "Navigate extreme uncertainty in market and technology",
                "Define company-level strategic opportunities",
                "Make transformative decisions affecting entire organization"
            ]
        },
        {
            dimension: 'leadership',
            level: 6,
            examples: [
                "Build executive leadership pipeline",
                "Steer company culture and values at scale",
                "Influence cross-company strategy (Product, Design, Data)"
            ]
        },
        {
            dimension: 'technical',
            level: 5,
            examples: [
                "Set company-wide technical vision and strategy",
                "Guide transformation efforts across all engineering",
                "Ensure technical capabilities support business growth"
            ]
        }
    ]
};

export function getCurrentLevelExamples(roleSlug: string): CurrentLevelExample[] {
    return currentLevelExamples[roleSlug] || [];
}
