export type DimensionType = 'scope' | 'timeHorizon' | 'ambiguity' | 'leadership' | 'technical';

export interface DimensionLevel {
    level: number;
    label: string;
    description: string;
    roles: string[]; // Role slugs that typically operate at this level
}

export interface Dimension {
    id: DimensionType;
    name: string;
    description: string;
    levels: DimensionLevel[];
}

export interface WorkExample {
    id: string;
    dimension: DimensionType;
    level: number;
    title: string;
    description: string;
    scenario: string;
    roleExamples: string[]; // Role slugs where this applies
}

export const dimensions: Dimension[] = [
    {
        id: 'scope',
        name: 'Scope',
        description: 'The breadth and complexity of work you\'re expected to handle',
        levels: [
            {
                level: 1,
                label: 'Tasks',
                description: 'Individual tasks within a single component',
                roles: ['graduate-software-engineer-gse']
            },
            {
                level: 2,
                label: 'Small Stories',
                description: 'Small features within a component',
                roles: ['associate-software-engineer-ase']
            },
            {
                level: 3,
                label: 'Component',
                description: 'Ownership of a component or small service',
                roles: ['software-engineer-se']
            },
            {
                level: 4,
                label: 'Service/Multiple Components',
                description: 'Multiple components or a full service',
                roles: ['senior-software-engineer-sse']
            },
            {
                level: 5,
                label: 'Product Area',
                description: 'A product area or critical platform',
                roles: ['staff-software-engineer', 'engineering-manager-em']
            },
            {
                level: 6,
                label: 'Portfolio',
                description: 'Multiple product groups or a portfolio',
                roles: ['principal-software-engineer', 'head-of-software-engineering-hose']
            },
            {
                level: 7,
                label: 'Organization',
                description: 'Org-level or company-wide scope',
                roles: ['senior-head-of-software-engineering-shose']
            }
        ]
    },
    {
        id: 'timeHorizon',
        name: 'Time Horizon',
        description: 'How far ahead you need to plan and think',
        levels: [
            {
                level: 1,
                label: 'Days',
                description: 'Day-to-day execution',
                roles: ['graduate-software-engineer-gse']
            },
            {
                level: 2,
                label: 'Weeks',
                description: 'Planning work over weeks',
                roles: ['associate-software-engineer-ase', 'software-engineer-se']
            },
            {
                level: 3,
                label: '1-2 Quarters',
                description: 'Quarterly planning and execution',
                roles: ['senior-software-engineer-sse', 'engineering-manager-em']
            },
            {
                level: 4,
                label: '2-3 Quarters',
                description: 'Multi-quarter initiatives',
                roles: ['staff-software-engineer']
            },
            {
                level: 5,
                label: 'Annual',
                description: 'Year-long planning horizon',
                roles: ['principal-software-engineer', 'head-of-software-engineering-hose']
            },
            {
                level: 6,
                label: 'Multi-Year',
                description: 'Strategic multi-year vision',
                roles: ['senior-head-of-software-engineering-shose']
            }
        ]
    },
    {
        id: 'ambiguity',
        name: 'Ambiguity',
        description: 'How much uncertainty and unknowns you handle',
        levels: [
            {
                level: 1,
                label: 'Low',
                description: 'Clear requirements, well-defined problems',
                roles: ['graduate-software-engineer-gse', 'associate-software-engineer-ase']
            },
            {
                level: 2,
                label: 'Medium',
                description: 'Some unknowns within a known domain',
                roles: ['software-engineer-se']
            },
            {
                level: 3,
                label: 'High',
                description: 'Significant ambiguity requiring discovery',
                roles: ['senior-software-engineer-sse', 'staff-software-engineer', 'engineering-manager-em', 'head-of-software-engineering-hose']
            },
            {
                level: 4,
                label: 'Very High',
                description: 'Navigating extreme uncertainty and complexity',
                roles: ['principal-software-engineer', 'senior-head-of-software-engineering-shose']
            }
        ]
    },
    {
        id: 'leadership',
        name: 'Leadership',
        description: 'Your sphere of influence and leadership impact',
        levels: [
            {
                level: 1,
                label: 'None',
                description: 'Focus on learning and individual contribution',
                roles: ['graduate-software-engineer-gse']
            },
            {
                level: 2,
                label: 'Local',
                description: 'Influencing peers through good work',
                roles: ['associate-software-engineer-ase', 'software-engineer-se']
            },
            {
                level: 3,
                label: 'Team',
                description: 'Leading initiatives within your team',
                roles: ['senior-software-engineer-sse', 'engineering-manager-em']
            },
            {
                level: 4,
                label: 'Multi-Team',
                description: 'Cross-team influence and leadership',
                roles: ['staff-software-engineer', 'head-of-software-engineering-hose']
            },
            {
                level: 5,
                label: 'Organization',
                description: 'Org-level leadership and influence',
                roles: ['principal-software-engineer']
            },
            {
                level: 6,
                label: 'Company',
                description: 'Company-wide leadership and impact',
                roles: ['senior-head-of-software-engineering-shose']
            }
        ]
    },
    {
        id: 'technical',
        name: 'Technical Judgement',
        description: 'The depth and breadth of technical decision-making',
        levels: [
            {
                level: 1,
                label: 'Follows',
                description: 'Follows established patterns and gets guidance',
                roles: ['graduate-software-engineer-gse', 'associate-software-engineer-ase']
            },
            {
                level: 2,
                label: 'Chooses',
                description: 'Chooses between established patterns',
                roles: ['software-engineer-se']
            },
            {
                level: 3,
                label: 'Defines',
                description: 'Defines new patterns for the team',
                roles: ['senior-software-engineer-sse']
            },
            {
                level: 4,
                label: 'Sets Direction',
                description: 'Sets technical direction across teams',
                roles: ['staff-software-engineer', 'engineering-manager-em']
            },
            {
                level: 5,
                label: 'Sets Strategy',
                description: 'Defines architectural vision and strategy',
                roles: ['principal-software-engineer', 'head-of-software-engineering-hose']
            },
            {
                level: 6,
                label: 'Sets Governance',
                description: 'Sets principles and governance at scale',
                roles: ['senior-head-of-software-engineering-shose']
            }
        ]
    }
];

export const workExamples: WorkExample[] = [
    // Scope Examples
    {
        id: 'scope-1-bug-fix',
        dimension: 'scope',
        level: 1,
        title: 'Fix a UI Button Bug',
        description: 'A button on the login page is misaligned',
        scenario: 'You receive a bug report that a button is 5px too far to the right. You identify the CSS issue, make the fix, write a test, and submit a PR. The work is contained to one file in one component.',
        roleExamples: ['graduate-software-engineer-gse']
    },
    {
        id: 'scope-3-auth-feature',
        dimension: 'scope',
        level: 3,
        title: 'Implement OAuth Integration',
        description: 'Add Google OAuth as a login option',
        scenario: 'You own the authentication component. You design the OAuth flow, implement both frontend and backend changes, update the database schema, write comprehensive tests, and coordinate with DevOps for environment variable setup. This touches multiple files across frontend, backend, and database.',
        roleExamples: ['software-engineer-se']
    },
    {
        id: 'scope-5-platform',
        dimension: 'scope',
        level: 5,
        title: 'Build Notification Platform',
        description: 'Create a company-wide notification system',
        scenario: 'You design and build a notification platform that serves 5+ product teams. This involves architecting the system, coordinating with multiple teams on integration points, defining APIs, handling scale and reliability concerns, and creating documentation and support processes.',
        roleExamples: ['staff-software-engineer']
    },
    {
        id: 'scope-7-architecture',
        dimension: 'scope',
        level: 7,
        title: 'Microservices Migration Strategy',
        description: 'Lead company-wide architectural transformation',
        scenario: 'You define the multi-year strategy to migrate from monolith to microservices across the entire engineering organization. This involves portfolio-level planning, setting standards, coordinating with 20+ teams, managing risk, and ensuring business continuity throughout the transition.',
        roleExamples: ['senior-head-of-software-engineering-shose']
    },

    // Ambiguity Examples
    {
        id: 'ambiguity-1-clear-task',
        dimension: 'ambiguity',
        level: 1,
        title: 'Implement Specified API Endpoint',
        description: 'Create an endpoint with clear requirements',
        scenario: 'You receive a detailed spec: "Create GET /api/users/:id endpoint that returns user data matching this exact JSON structure." The requirements are crystal clear, there\'s an existing pattern to follow, and success criteria are well-defined.',
        roleExamples: ['graduate-software-engineer-gse']
    },
    {
        id: 'ambiguity-2-some-unknowns',
        dimension: 'ambiguity',
        level: 2,
        title: 'Optimize Slow Page Load',
        description: 'Improve performance of a specific page',
        scenario: 'The product team reports "the dashboard is slow." You need to profile the page, identify bottlenecks (could be N+1 queries, large payload, or client-side rendering issues), and implement optimizations. The problem is clear but the solution requires investigation.',
        roleExamples: ['software-engineer-se']
    },
    {
        id: 'ambiguity-3-high',
        dimension: 'ambiguity',
        level: 3,
        title: 'Design New Product Feature',
        description: 'Figure out how to build a feature with unclear requirements',
        scenario: 'Leadership says "we need real-time collaboration." You need to: research existing solutions, prototype different approaches, understand technical constraints, work with PM/Design to refine requirements, make build vs. buy decisions, and propose a concrete implementation plan from a vague starting point.',
        roleExamples: ['senior-software-engineer-sse', 'staff-software-engineer']
    },
    {
        id: 'ambiguity-4-very-high',
        dimension: 'ambiguity',
        level: 4,
        title: 'Navigate Market Uncertainty',
        description: 'Define strategy when the market itself is unclear',
        scenario: 'The company wants to enter a new market segment but it\'s unclear what customers need, what competition exists, or what the right technical approach is. You lead technical discovery: evaluate multiple architectural approaches, build prototypes, gather feedback, and make strategic bets with incomplete information.',
        roleExamples: ['principal-software-engineer', 'senior-head-of-software-engineering-shose']
    },

    // Leadership Examples
    {
        id: 'leadership-2-peer-influence',
        dimension: 'leadership',
        level: 2,
        title: 'Improve Team PR Standards',
        description: 'Raise the bar through example',
        scenario: 'You consistently write excellent PR descriptions, thorough tests, and helpful code comments. Team members start asking you for review and adopting your practices. You\'re leading through doing great work, not through formal authority.',
        roleExamples: ['associate-software-engineer-ase', 'software-engineer-se']
    },
    {
        id: 'leadership-3-initiative',
        dimension: 'leadership',
        level: 3,
        title: 'Lead Testing Infrastructure Improvement',
        description: 'Drive a team-level initiative',
        scenario: 'Tests are flaky and slowing the team down. You propose a solution, get buy-in, coordinate with 4-5 engineers to make improvements, run retros on progress, and ensure the initiative lands successfully. You\'re leading without being a manager.',
        roleExamples: ['senior-software-engineer-sse']
    },
    {
        id: 'leadership-4-multi-team',
        dimension: 'leadership',
        level: 4,
        title: 'Coordinate Cross-Team Migration',
        description: 'Lead across organizational boundaries',
        scenario: 'Three teams need to migrate to a new API version. You create the migration guide, run workshops, coordinate timelines, unblock teams when they hit issues, and ensure everyone migrates successfully. You\'re influencing teams you don\'t directly work with.',
        roleExamples: ['staff-software-engineer', 'head-of-software-engineering-hose']
    },

    // Technical Judgement Examples
    {
        id: 'technical-1-follows',
        dimension: 'technical',
        level: 1,
        title: 'Use Existing Component Library',
        description: 'Apply established patterns with guidance',
        scenario: 'You need to add a form to the app. A senior engineer shows you the team\'s form library and validation patterns. You follow the examples, ask questions when stuck, and implement the form using the established approach.',
        roleExamples: ['graduate-software-engineer-gse']
    },
    {
        id: 'technical-2-chooses',
        dimension: 'technical',
        level: 2,
        title: 'Select Right Data Structure',
        description: 'Choose between known patterns',
        scenario: 'You need to cache some data. The codebase has examples of both in-memory caching and Redis. You evaluate the trade-offs (data size, persistence needs, access patterns) and pick the right approach for your use case.',
        roleExamples: ['software-engineer-se']
    },
    {
        id: 'technical-3-defines',
        dimension: 'technical',
        level: 3,
        title: 'Establish Team API Standards',
        description: 'Create new patterns for your team',
        scenario: 'Your team is building several new APIs and the approaches are inconsistent. You research best practices, propose a standard (RESTful conventions, error handling, versioning), document it, and help the team adopt it.',
        roleExamples: ['senior-software-engineer-sse']
    },
    {
        id: 'technical-4-direction',
        dimension: 'technical',
        level: 4,
        title: 'Define Service Architecture',
        description: 'Set technical direction for multiple teams',
        scenario: 'Your product area is growing and the monolith is becoming a bottleneck. You design a service-oriented architecture, define boundaries between services, establish contracts, choose technologies, and guide three teams through the implementation.',
        roleExamples: ['staff-software-engineer']
    },
    {
        id: 'technical-5-strategy',
        dimension: 'technical',
        level: 5,
        title: 'Architectural Vision for Platform',
        description: 'Define long-term technical strategy',
        scenario: 'You create the 2-year technical roadmap for the platform: defining the evolution from current state to target architecture, identifying key migrations, choosing strategic technologies, and aligning 10+ teams on the vision.',
        roleExamples: ['principal-software-engineer']
    }
];

export function getDimensionById(id: DimensionType): Dimension | undefined {
    return dimensions.find(d => d.id === id);
}

export function getWorkExamplesByDimension(dimension: DimensionType, level?: number): WorkExample[] {
    return workExamples.filter(ex =>
        ex.dimension === dimension && (level === undefined || ex.level === level)
    );
}

export function getRoleDimensions(roleSlug: string): Record<DimensionType, number> {
    const result: Partial<Record<DimensionType, number>> = {};

    dimensions.forEach(dimension => {
        const level = dimension.levels.find(l => l.roles.includes(roleSlug));
        if (level) {
            result[dimension.id] = level.level;
        }
    });

    return result as Record<DimensionType, number>;
}
