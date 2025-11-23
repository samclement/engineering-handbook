export interface LeadershipLevel {
    summary: string;
    behaviors: string[];
    examples: string[];
}

export interface LeadershipDomain {
    name: string;
    description: string;
    levels: Record<string, LeadershipLevel>;
}

export const roles = [
    "Staff Engineer",
    "Principal Engineer",
    "Engineering Manager",
    "Head of Software Engineering",
    "Senior Head of Software Engineering"
];

export const leadershipData: LeadershipDomain[] = [
    {
        name: "Technical Direction",
        description: "Setting technical vision, architecture, and standards.",
        levels: {
            "Staff Engineer": {
                summary: "Sets technical direction. Chooses long-term trade-offs. Owns technical vision for product area.",
                behaviors: [
                    "Sets technical direction for a product area",
                    "Chooses long-term trade-offs between speed and quality",
                    "Defines architectural patterns for the team",
                    "Identifies technical enablers for product goals"
                ],
                examples: [
                    "Defined the API strategy for the new mobile app backend",
                    "Chose to adopt GraphQL to solve over-fetching issues",
                    "Created a migration plan for the legacy billing system"
                ]
            },
            "Principal Engineer": {
                summary: "Defines architectural vision and evolutionary paths. Designs shared systems and contracts. Reduces org-wide complexity.",
                behaviors: [
                    "Defines architectural vision and evolutionary paths",
                    "Designs shared systems and contracts",
                    "Reduces org-wide complexity",
                    "Governs architecture via leaders"
                ],
                examples: [
                    "Designed the event-driven architecture for the entire platform",
                    "Standardized the microservices chassis across all teams",
                    "Reduced cloud costs by 30% through architectural optimization"
                ]
            },
            "Engineering Manager": {
                summary: "Staff-level technical literacy. Reviews for direction and quality. Balances tech debt with delivery.",
                behaviors: [
                    "Maintains Staff-level technical literacy",
                    "Reviews technical proposals for direction and quality",
                    "Balances tech debt repayment with feature delivery",
                    "Ensures team follows engineering standards"
                ],
                examples: [
                    "Advocated for a refactoring sprint to address critical tech debt",
                    "Reviewed and approved the design for the new payment gateway",
                    "Ensured the team adopted the new security guidelines"
                ]
            },
            "Head of Software Engineering": {
                summary: "Principal-level judgement. Governs architecture via leaders. Ensures technical strategy aligns with business.",
                behaviors: [
                    "Applies Principal-level technical judgement",
                    "Governs architecture through technical leaders",
                    "Ensures technical strategy aligns with business goals",
                    "Sponsors major technical initiatives"
                ],
                examples: [
                    "Approved the move to a multi-cloud strategy",
                    "Established the Architecture Review Board",
                    "Aligned the technical roadmap with the company's 3-year vision"
                ]
            },
            "Senior Head of Software Engineering": {
                summary: "Distinguished-level guidance. Sets principles and governance through councils. Defines company-wide technical culture.",
                behaviors: [
                    "Provides Distinguished-level technical guidance",
                    "Sets principles and governance through councils",
                    "Defines company-wide technical culture",
                    "Steers major technology investments"
                ],
                examples: [
                    "Defined the 'Cloud First' strategy for the entire organization",
                    "Chaired the Technical Steering Committee",
                    "Established the company's open source contribution policy"
                ]
            }
        }
    },
    {
        name: "Strategy & Planning",
        description: "Roadmapping, investment decisions, and long-term thinking.",
        levels: {
            "Staff Engineer": {
                summary: "Shapes roadmaps with PMs. Identifies technical enablers for product goals. 2-3 quarter horizon.",
                behaviors: [
                    "Shapes roadmaps in collaboration with PMs",
                    "Identifies technical enablers for product goals",
                    "Plans with a 2-3 quarter horizon",
                    "Aligns technical work with business value"
                ],
                examples: [
                    "Partnered with PM to define the Q3-Q4 roadmap",
                    "Identified the need for a new search index to support future features",
                    "Proposed a phased rollout for the new dashboard"
                ]
            },
            "Principal Engineer": {
                summary: "Defines architectural strategy. Aligns technical roadmap with long-term business goals. Annual horizon.",
                behaviors: [
                    "Defines architectural strategy",
                    "Aligns technical roadmap with long-term business goals",
                    "Plans with an annual horizon",
                    "Identifies strategic technical opportunities"
                ],
                examples: [
                    "Created the 1-year technical roadmap for the platform",
                    "Aligned the engineering strategy with the company's expansion plans",
                    "Identified AI as a strategic enabler for the next year"
                ]
            },
            "Engineering Manager": {
                summary: "Plans and executes quarterly team roadmaps. Balances feature work with technical improvements.",
                behaviors: [
                    "Plans and executes quarterly team roadmaps",
                    "Balances feature work with technical improvements",
                    "Manages team capacity and velocity",
                    "Communicates roadmap progress and risks"
                ],
                examples: [
                    "Delivered the Q2 roadmap on time and within budget",
                    "Negotiated scope with PM to ensure technical tasks were included",
                    "Managed team capacity during the holiday season"
                ]
            },
            "Head of Software Engineering": {
                summary: "Shapes roadmaps and investment trade-offs. Defines metrics for success. Owns portfolio strategy.",
                behaviors: [
                    "Shapes roadmaps and investment trade-offs",
                    "Defines metrics for success",
                    "Owns portfolio strategy",
                    "Allocates resources across teams"
                ],
                examples: [
                    "Defined the investment strategy for the mobile portfolio",
                    "Set the OKRs for the engineering department",
                    "Reallocated resources to support the launch of a new product"
                ]
            },
            "Senior Head of Software Engineering": {
                summary: "Long-range bets and portfolio shaping. Frames value and risk. Sets multi-year strategic vision.",
                behaviors: [
                    "Makes long-range bets and shapes portfolios",
                    "Frames value and risk for the executive team",
                    "Sets multi-year strategic vision",
                    "Drives organizational alignment on strategy"
                ],
                examples: [
                    "Proposed a multi-year investment in machine learning",
                    "Framed the risk of legacy systems to the board",
                    "Aligned the entire engineering org around the 'Platform as a Product' vision"
                ]
            }
        }
    },
    {
        name: "Execution & Operations",
        description: "Delivery, reliability, processes, and operational excellence.",
        levels: {
            "Staff Engineer": {
                summary: "Orchestrates multi-team initiatives. De-risks with spikes. Bakes in SLOs, resilience, and security.",
                behaviors: [
                    "Orchestrates multi-team initiatives",
                    "De-risks complex projects with spikes",
                    "Bakes in SLOs, resilience, and security",
                    "Unblocks critical paths"
                ],
                examples: [
                    "Led the migration of the auth system across 5 teams",
                    "Ran a spike to validate the performance of the new database",
                    "Defined the SLOs for the checkout service"
                ]
            },
            "Principal Engineer": {
                summary: "Drives cross-org migrations and standards adoption. Ensures platform reliability and scalability.",
                behaviors: [
                    "Drives cross-org migrations and standards adoption",
                    "Ensures platform reliability and scalability",
                    "Resolves systemic blockers",
                    "Optimizes org-level execution"
                ],
                examples: [
                    "Led the company-wide migration to Kubernetes",
                    "Established the incident response process for the platform",
                    "Resolved a major scalability bottleneck in the core API"
                ]
            },
            "Engineering Manager": {
                summary: "Owns backlog health and predictability. Manages on-call, escalations, and risk. Ensures delivery flow.",
                behaviors: [
                    "Owns backlog health and predictability",
                    "Manages on-call rotations and escalations",
                    "Ensures delivery flow and removes blockers",
                    "Manages operational risk"
                ],
                examples: [
                    "Improved team velocity by 20% through process improvements",
                    "Managed a critical production incident to resolution",
                    "Ensured the team had a healthy backlog of ready work"
                ]
            },
            "Head of Software Engineering": {
                summary: "Leads cross-team programs. Resolves systemic blockers. Optimizes org-level execution.",
                behaviors: [
                    "Leads cross-team programs",
                    "Resolves systemic blockers",
                    "Optimizes org-level execution",
                    "Ensures operational excellence at scale"
                ],
                examples: [
                    "Led the program to improve site reliability by 99.9%",
                    "Resolved a conflict between two teams blocking a release",
                    "Optimized the CI/CD pipeline for the entire department"
                ]
            },
            "Senior Head of Software Engineering": {
                summary: "Defines operating cadence. Establishes performance systems. Drives operational excellence at scale.",
                behaviors: [
                    "Defines operating cadence for the organization",
                    "Establishes performance systems",
                    "Drives operational excellence at scale",
                    "Sets the bar for operational maturity"
                ],
                examples: [
                    "Established the quarterly business review process",
                    "Implemented a new performance management system",
                    "Drove the initiative to achieve ISO 27001 certification"
                ]
            }
        }
    },
    {
        name: "People & Organization",
        description: "Hiring, growth, culture, and organizational design.",
        levels: {
            "Staff Engineer": {
                summary: "Coaches seniors. Leads design reviews. Sets bar for quality. Influences without authority.",
                behaviors: [
                    "Coaches Senior Engineers",
                    "Leads design reviews",
                    "Sets the bar for code quality",
                    "Influences without authority"
                ],
                examples: [
                    "Mentored a Senior Engineer to promotion",
                    "Led the design review for the new search architecture",
                    "Established the code review guidelines for the team"
                ]
            },
            "Principal Engineer": {
                summary: "Change Leadership: Drives standards adoption. Mentors Staff/Senior. Builds leadership bench.",
                behaviors: [
                    "Drives adoption of engineering standards",
                    "Mentors Staff and Senior Engineers",
                    "Builds the technical leadership bench",
                    "Leads organizational change"
                ],
                examples: [
                    "Drove the adoption of TypeScript across the organization",
                    "Mentored two Staff Engineers",
                    "Led the transition to a remote-first engineering culture"
                ]
            },
            "Engineering Manager": {
                summary: "Hiring, onboarding, feedback, performance, and growth plans. Cultivates team culture and standards.",
                behaviors: [
                    "Manages hiring and onboarding",
                    "Provides regular feedback and performance reviews",
                    "Creates growth plans for team members",
                    "Cultivates a positive team culture"
                ],
                examples: [
                    "Hired 3 engineers to grow the team",
                    "Helped an underperforming engineer get back on track",
                    "Promoted a healthy work-life balance within the team"
                ]
            },
            "Head of Software Engineering": {
                summary: "Org design: Team topology, ownership boundaries, succession planning. Develops managers.",
                behaviors: [
                    "Designs team topology and ownership boundaries",
                    "Plans for succession in key roles",
                    "Develops Engineering Managers",
                    "Fosters a culture of learning"
                ],
                examples: [
                    "Restructured the mobile team into two squads",
                    "Identified and groomed a successor for the EM role",
                    "Coached a new EM through their first 90 days"
                ]
            },
            "Senior Head of Software Engineering": {
                summary: "Org health: Leadership pipeline, performance systems. Steers culture and outcomes at scale.",
                behaviors: [
                    "Ensures a healthy leadership pipeline",
                    "Oversees performance systems",
                    "Steers culture and outcomes at scale",
                    "Builds a diverse and inclusive organization"
                ],
                examples: [
                    "Launched a leadership development program",
                    "Revamped the performance review process",
                    "Championed diversity and inclusion initiatives"
                ]
            }
        }
    },
    {
        name: "Influence & Stakeholders",
        description: "Communication, alignment, and cross-functional leadership.",
        levels: {
            "Staff Engineer": {
                summary: "Aligns stakeholders across teams. Influences product direction. Navigates high ambiguity.",
                behaviors: [
                    "Aligns stakeholders across multiple teams",
                    "Influences product direction",
                    "Navigates high ambiguity",
                    "Communicates complex technical concepts to non-technical audiences"
                ],
                examples: [
                    "Aligned the mobile and web teams on a unified API strategy",
                    "Influenced the product roadmap to prioritize performance",
                    "Clarified the technical requirements for a vague feature request"
                ]
            },
            "Principal Engineer": {
                summary: "Represents engineering in cross-functional/exec forums. Aligns leaders on principles and outcomes.",
                behaviors: [
                    "Represents engineering in cross-functional forums",
                    "Aligns leaders on principles and outcomes",
                    "Influences executive decision-making",
                    "Builds bridges between engineering and other departments"
                ],
                examples: [
                    "Presented the technical strategy to the executive team",
                    "Aligned the VP of Product and VP of Engineering on the platform vision",
                    "Collaborated with Sales to unblock a major deal"
                ]
            },
            "Engineering Manager": {
                summary: "Facilitates team-level leadership. Aligns with partners (PM, Design). Shields team from distractions.",
                behaviors: [
                    "Facilitates team-level leadership",
                    "Aligns with PM and Design partners",
                    "Shields the team from distractions",
                    "Manages stakeholder expectations"
                ],
                examples: [
                    "Facilitated a workshop to define team values",
                    "Aligned with PM on the sprint goals",
                    "Protected the team from ad-hoc requests during the sprint"
                ]
            },
            "Head of Software Engineering": {
                summary: "Dovetails into org leadership. Sets culture and operating model with peers. Manages stakeholder expectations.",
                behaviors: [
                    "Collaborates with org leadership",
                    "Sets culture and operating model with peers",
                    "Manages stakeholder expectations at the group level",
                    "Negotiates cross-functional dependencies"
                ],
                examples: [
                    "Collaborated with the Head of Product to define the quarterly goals",
                    "Established the operating model for the mobile group",
                    "Managed expectations with the CEO regarding the launch timeline"
                ]
            },
            "Senior Head of Software Engineering": {
                summary: "Aligns with product, design, data, security, finance. Executive-level leadership and influence.",
                behaviors: [
                    "Aligns with executive peers (Product, Design, Finance)",
                    "Provides executive-level leadership",
                    "Influences company strategy",
                    "Represents the company externally"
                ],
                examples: [
                    "Aligned with the CFO on the engineering budget",
                    "Represented the company at a major tech conference",
                    "Influenced the company's M&A strategy"
                ]
            }
        }
    },
    {
        name: "Finance & Budgets",
        description: "Managing costs, budgets, and technical investments.",
        levels: {
            "Staff Engineer": {
                summary: "Understands platform costs. Optimizes resource usage and considers cost implications of technical decisions.",
                behaviors: [
                    "Monitors and optimizes cloud infrastructure costs",
                    "Considers cost implications in design and architecture",
                    "Identifies opportunities for resource efficiency",
                    "Understands the cost model of their product area"
                ],
                examples: [
                    "Identified and decommissioned unused cloud resources, saving $2k/month",
                    "Optimized database queries to reduce compute costs",
                    "Chose a serverless architecture to minimize idle costs"
                ]
            },
            "Principal Engineer": {
                summary: "Helps plan technical investments. Defines cost strategies and evaluates build vs. buy decisions.",
                behaviors: [
                    "Plans strategic technical investments",
                    "Evaluates build vs. buy decisions with financial rigor",
                    "Defines cost allocation models for shared services",
                    "Aligns technical spend with business strategy"
                ],
                examples: [
                    "Created a cost model for the new microservices architecture",
                    "Evaluated vendor pricing for a new observability tool",
                    "Justified the investment in a new developer platform"
                ]
            },
            "Engineering Manager": {
                summary: "Understands platform costs, team costs, and capabilities. Manages team budget and resource allocation.",
                behaviors: [
                    "Tracks and manages team cloud spend",
                    "Manages team headcount and hiring budget",
                    "Optimizes team efficiency and ROI",
                    "Forecasts future resource needs"
                ],
                examples: [
                    "Managed the team's AWS budget within 5% variance",
                    "Forecasted hiring costs for the next fiscal year",
                    "Justified the ROI of a new SaaS tool for the team"
                ]
            },
            "Head of Software Engineering": {
                summary: "Plans costs across product group. Allocates budget and optimizes portfolio-level spend.",
                behaviors: [
                    "Plans and manages budget across a product group",
                    "Allocates resources to high-priority initiatives",
                    "Tracks and reports on group-level financial performance",
                    "Negotiates contracts with key vendors"
                ],
                examples: [
                    "Set the annual budget for the mobile product group",
                    "Reallocated budget from maintenance to innovation projects",
                    "Negotiated a volume discount with a cloud provider"
                ]
            },
            "Senior Head of Software Engineering": {
                summary: "Plans costs across the portfolio. Sets overall engineering budget and drives financial efficiency at scale.",
                behaviors: [
                    "Sets the overall engineering budget and strategy",
                    "Drives financial efficiency across the entire organization",
                    "Aligns engineering spend with company financial goals",
                    "Reports on financial health to the board/exec team"
                ],
                examples: [
                    "Defined the global engineering budget for the fiscal year",
                    "Implemented a FinOps practice to control cloud spend",
                    "Presented the engineering financial efficiency report to the board"
                ]
            }
        }
    }
];
