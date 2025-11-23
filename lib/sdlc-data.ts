export type SDLCSubSection = {
    title: string;
    behaviors: string[];
    examples: string[];
};

export type SDLCLevel = {
    summary: string;
    behaviors: string[];
    examples: string[];
    subSections?: SDLCSubSection[];
};

export type SDLCDomain = {
    name: string;
    description: string;
    levels: Record<string, SDLCLevel>;
};

export const roles = [
    "Graduate",
    "Associate",
    "Senior Engineer",
    "Staff",
    "Engineering Manager"
];

export const sdlcData: SDLCDomain[] = [
    {
        name: "System/component design",
        description: "The ability to design software systems, from small components to large-scale distributed architectures.",
        levels: {
            "Graduate": {
                summary: "Assists with design of minor features/fixes. Understands basic patterns.",
                behaviors: [
                    "Implements designs provided by more senior engineers.",
                    "Asks clarifying questions about requirements before coding.",
                    "Recognizes common patterns (e.g., MVC, Singleton) in the codebase."
                ],
                examples: [
                    "Implemented a new API endpoint following the pattern of existing endpoints.",
                    "Added a new column to a database table and updated the corresponding model.",
                    "Refactored a long function into smaller helper functions for readability."
                ],
                subSections: [
                    {
                        title: "Security",
                        behaviors: [
                            "Avoids committing secrets/credentials.",
                            "Sanitizes user inputs to prevent XSS/SQLi."
                        ],
                        examples: [
                            "Moved an API key from code to environment variables.",
                            "Used the framework's built-in escaping to render user content safely."
                        ]
                    },
                    {
                        title: "Stability & Performance",
                        behaviors: [
                            "Uses logging to aid debugging.",
                            "Aware of basic performance implications of loops and queries."
                        ],
                        examples: [
                            "Added log statements to trace a request through a function.",
                            "Avoided a nested loop that would have caused O(n^2) complexity."
                        ]
                    },
                    {
                        title: "Observability",
                        behaviors: [
                            "Checks logs when debugging issues.",
                            "Understands what metrics are available."
                        ],
                        examples: [
                            "Used Splunk/Datadog to find the error log for a failed request.",
                            "Checked the dashboard to see if the error rate was elevated."
                        ]
                    }
                ]
            },
            "Associate": {
                summary: "Designs small components/features with guidance. Follows established patterns.",
                behaviors: [
                    "Writes mini-design docs or notes for their features.",
                    "Considers error handling and edge cases in design.",
                    "Seeks feedback on design choices early."
                ],
                examples: [
                    "Designed a new React component for the user settings page, reusing existing UI library atoms.",
                    "Proposed a JSON schema for a new internal tool configuration file.",
                    "Mapped out the flow for a simple background job to process user uploads."
                ],
                subSections: [
                    {
                        title: "Security",
                        behaviors: [
                            "Follows least-privilege principles for permissions.",
                            "Identifies potential IDOR vulnerabilities."
                        ],
                        examples: [
                            "Configured an S3 bucket policy to restrict public access.",
                            "Added a check to ensure users can only access their own data."
                        ]
                    },
                    {
                        title: "Stability & Performance",
                        behaviors: [
                            "Identifies N+1 query problems.",
                            "Adds structured logging to features."
                        ],
                        examples: [
                            "Optimized a database query that was fetching unnecessary columns.",
                            "Added structured JSON logs to the payment processing worker."
                        ]
                    },
                    {
                        title: "Observability",
                        behaviors: [
                            "Adds custom metrics for new features.",
                            "Creates basic dashboards for their features."
                        ],
                        examples: [
                            "Added a counter metric for 'successful_uploads'.",
                            "Created a Grafana dashboard to track the usage of the new feature."
                        ]
                    }
                ]
            },
            "Senior Engineer": {
                summary: "Leads system design for complex features. Defines API contracts and data models.",
                behaviors: [
                    "Writes detailed technical design documents (RFCs) for major features.",
                    "Evaluates trade-offs between different approaches (e.g., consistency vs availability).",
                    "Reviews designs from others to ensure scalability and maintainability."
                ],
                examples: [
                    "Designed the data model and API for the new 'Teams' feature, handling permissions and migration from the legacy system.",
                    "Chose Redis for caching session data to improve login performance, documenting the TTL strategy.",
                    "Refactored a tightly coupled module into a standalone service to enable independent scaling."
                ],
                subSections: [
                    {
                        title: "Security",
                        behaviors: [
                            "Leads security reviews for features.",
                            "Implements secure coding practices (OWASP Top 10)."
                        ],
                        examples: [
                            "Identified a potential CSRF vulnerability in a peer's design.",
                            "Implemented rate limiting to protect the API from abuse."
                        ]
                    },
                    {
                        title: "Stability & Performance",
                        behaviors: [
                            "Conducts load testing and performance profiling.",
                            "Defines Service Level Indicators (SLIs)."
                        ],
                        examples: [
                            "Profiled the application memory usage to fix a memory leak.",
                            "Defined 'Request Latency' and 'Error Rate' SLIs for the search service."
                        ]
                    },
                    {
                        title: "Observability",
                        behaviors: [
                            "Ensures distributed tracing is implemented.",
                            "Defines alerting thresholds."
                        ],
                        examples: [
                            "Added trace IDs to all log messages to enable cross-service debugging.",
                            "Configured an alert to page on-call if the error rate exceeds 1%."
                        ]
                    }
                ]
            },
            "Staff": {
                summary: "Architects cross-system solutions. Defines technical strategy and standards.",
                behaviors: [
                    "Designs systems that span multiple teams or services.",
                    "Defines communication protocols (gRPC, REST, GraphQL) and standards.",
                    "Makes high-level build vs buy decisions."
                ],
                examples: [
                    "Architected the migration from a monolith to microservices for the checkout flow.",
                    "Defined the event-driven architecture strategy using Kafka for inter-service communication.",
                    "Evaluated and selected a third-party identity provider (Auth0) replacing a custom solution."
                ],
                subSections: [
                    {
                        title: "Security",
                        behaviors: [
                            "Conducts threat modeling for major architectural changes.",
                            "Audits security posture of the platform."
                        ],
                        examples: [
                            "Led a threat modeling session for the new public API.",
                            "Designed the secrets management strategy using HashiCorp Vault."
                        ]
                    },
                    {
                        title: "Stability & Performance",
                        behaviors: [
                            "Defines Service Level Objectives (SLOs) and Error Budgets.",
                            "Designs systems for failover and high availability."
                        ],
                        examples: [
                            "Designed a multi-region failover strategy for the core database.",
                            "Established a 99.9% availability SLO for the authentication service."
                        ]
                    },
                    {
                        title: "Observability",
                        behaviors: [
                            "Defines the observability strategy (logs, metrics, traces).",
                            "Standardizes observability tools across the org."
                        ],
                        examples: [
                            "Standardized on OpenTelemetry for all services.",
                            "Designed the centralized logging architecture to handle 1TB/day."
                        ]
                    }
                ]
            },
            "Engineering Manager": {
                summary: "Reviews designs for alignment with business goals. Ensures scalability/maintainability.",
                behaviors: [
                    "Ensures technical designs support product roadmap and future needs.",
                    "Asks probing questions to uncover risks in architectural choices.",
                    "Prevents over-engineering by keeping the team focused on the problem at hand."
                ],
                examples: [
                    "Reviewed the technical proposal for the mobile app rewrite to ensure it met the Q4 launch timeline.",
                    "Challenged the team to simplify a proposed architecture that introduced unnecessary infrastructure complexity.",
                    "Facilitated a decision-making meeting between two senior engineers disagreeing on a database choice."
                ],
                subSections: [
                    {
                        title: "Security",
                        behaviors: [
                            "Champions a culture of security awareness.",
                            "Prioritizes remediation of critical vulnerabilities."
                        ],
                        examples: [
                            "Budgeted for an external security audit before a major launch.",
                            "Prioritized the remediation of critical vulnerabilities found in a pen test."
                        ]
                    },
                    {
                        title: "Stability & Performance",
                        behaviors: [
                            "Negotiates SLAs with business stakeholders.",
                            "Ensures post-incident action items are prioritized."
                        ],
                        examples: [
                            "Agreed on a 99.9% uptime SLA with the Enterprise sales team.",
                            "Ensured the team had time to fix the root cause of the last outage."
                        ]
                    },
                    {
                        title: "Observability",
                        behaviors: [
                            "Ensures the team has visibility into system health.",
                            "Uses metrics to drive business decisions."
                        ],
                        examples: [
                            "Requested a dashboard to track the business impact of a new feature.",
                            "Used latency metrics to justify an investment in performance improvements."
                        ]
                    }
                ]
            }
        }
    },
    {
        name: "Eng practices",
        description: "Habits and practices that ensure code quality, maintainability, and team collaboration.",
        levels: {
            "Graduate": {
                summary: "Participates in code reviews. Learns team standards and workflows.",
                behaviors: [
                    "Follows the team's style guide and linting rules.",
                    "Writes clear commit messages.",
                    "Responds constructively to code review feedback."
                ],
                examples: [
                    "Fixed linting errors before requesting review.",
                    "Squashed commits into logical units before merging.",
                    "Added comments explaining 'why' not just 'what' for complex logic."
                ]
            },
            "Associate": {
                summary: "Conducts code reviews. Pairs effectively. Follows coding standards.",
                behaviors: [
                    "Reviews peers' code for basic correctness and style.",
                    "Proactively pairs with others to unblock or learn.",
                    "Updates documentation when code changes."
                ],
                examples: [
                    "Caught a potential null pointer exception in a peer's PR.",
                    "Paired with a Graduate engineer to help them set up their local environment.",
                    "Updated the README to reflect changes in the build process."
                ]
            },
            "Senior Engineer": {
                summary: "Leads code reviews. Mentors others. Enforces and improves standards.",
                behaviors: [
                    "Provides high-value feedback in code reviews (architecture, security, performance).",
                    "Mentors junior engineers on clean code principles.",
                    "Introduces new tools or practices to improve developer velocity."
                ],
                examples: [
                    "Suggested a design pattern change in a PR that simplified the code significantly.",
                    "Ran a 'lunch and learn' session on advanced TypeScript types.",
                    "Automated a manual release step using a GitHub Action."
                ]
            },
            "Staff": {
                summary: "Defines engineering standards. Drives best practices across teams.",
                behaviors: [
                    "Sets the bar for code quality across the organization.",
                    "Resolves disputes over coding standards or practices.",
                    "Champions technical debt reduction initiatives."
                ],
                examples: [
                    "Established the organization-wide API versioning strategy.",
                    "Standardized the logging format across all backend services to enable better observability.",
                    "Led a 'Bug Bash' week to pay down critical technical debt."
                ]
            },
            "Engineering Manager": {
                summary: "Ensures team efficiency. Removes blockers. Fosters healthy engineering culture.",
                behaviors: [
                    "Monitors cycle time and PR throughput to identify bottlenecks.",
                    "Encourages a culture of psychological safety in code reviews.",
                    "Allocates time for technical debt and learning."
                ],
                examples: [
                    "Implemented a 'no meeting Wednesday' to give the team deep work time.",
                    "Coach a senior engineer on how to give more constructive and less critical feedback.",
                    "Protected 20% of sprint capacity for platform improvements."
                ]
            }
        }
    },
    {
        name: "Testing & QA",
        description: "Ensuring software correctness, reliability, and quality through automated and manual testing.",
        levels: {
            "Graduate": {
                summary: "Writes unit tests for own code. Executes manual test plans.",
                behaviors: [
                    "Adds unit tests for new functions.",
                    "Runs existing test suite locally to prevent regressions.",
                    "Manually verifies their changes in a staging environment."
                ],
                examples: [
                    "Added Jest tests for a new date formatting utility.",
                    "Verified the 'Forgot Password' flow manually on different browsers.",
                    "Fixed a flaky test that was failing in their PR."
                ]
            },
            "Associate": {
                summary: "Writes unit/integration tests. Understands test automation basics.",
                behaviors: [
                    "Writes integration tests for API endpoints.",
                    "Uses mocks and stubs effectively.",
                    "Identifies gaps in test coverage."
                ],
                examples: [
                    "Wrote an integration test using Supertest for the user registration endpoint.",
                    "Mocked the external payment gateway in tests to avoid hitting the real API.",
                    "Refactored a large test file to use shared setup helpers."
                ]
            },
            "Senior Engineer": {
                summary: "Defines test strategy for features. Improves test coverage and automation.",
                behaviors: [
                    "Designs the testing strategy for complex features (unit vs integration vs E2E).",
                    "Optimizes test suite performance.",
                    "Champions TDD or other quality-first practices."
                ],
                examples: [
                    "Defined the test data strategy for the new analytics dashboard.",
                    "Reduced the CI test run time by 50% by parallelizing test execution.",
                    "Introduced Cypress for end-to-end testing of critical user flows."
                ]
            },
            "Staff": {
                summary: "Sets quality standards. Drives automated testing strategy across systems.",
                behaviors: [
                    "Defines the pyramid of testing for the organization.",
                    "Establishes contract testing between services.",
                    "Drives adoption of quality metrics (coverage, escape rate)."
                ],
                examples: [
                    "Implemented Pact for consumer-driven contract testing between frontend and backend teams.",
                    "Established a 'Quality Gate' in the deployment pipeline that blocks builds with dropping coverage.",
                    "Designed a synthetic monitoring strategy to test production flows continuously."
                ]
            },
            "Engineering Manager": {
                summary: "Monitors quality metrics. Ensures team prioritizes quality and technical debt.",
                behaviors: [
                    "Tracks bug arrival and resolution rates.",
                    "Ensures QA is integrated early in the development process.",
                    "Balances speed of delivery with quality risks."
                ],
                examples: [
                    "Established a 'Zero Bug Policy' for critical severity issues.",
                    "Negotiated with Product to delay a release to fix a critical stability issue.",
                    "Budgeted for an external security audit before a major launch."
                ]
            }
        }
    },
    {
        name: "Build & Deploy",
        description: "The tools and processes used to build, test, and deploy software to production.",
        levels: {
            "Graduate": {
                summary: "Uses CI/CD pipelines. Deploys minor changes with supervision.",
                behaviors: [
                    "Understands the stages of the deployment pipeline.",
                    "Can revert a bad commit if needed.",
                    "Follows the release checklist."
                ],
                examples: [
                    "Watched the CI pipeline to ensure tests passed before merging.",
                    "Deployed a documentation fix to production using the standard command.",
                    "Checked the staging environment after deployment to verify the fix."
                ]
            },
            "Associate": {
                summary: "Troubleshoots basic build issues. Deploys features independently.",
                behaviors: [
                    "Fixes broken CI builds (e.g., dependency issues).",
                    "Manages feature flags for safe rollout.",
                    "Creates simple build scripts."
                ],
                examples: [
                    "Updated a deprecated npm package that was causing the build to fail.",
                    "Wrapped a new feature in a feature flag to allow for dark launching.",
                    "Wrote a script to automate the generation of release notes."
                ]
            },
            "Senior Engineer": {
                summary: "Maintains CI/CD pipelines. Improves build performance and reliability.",
                behaviors: [
                    "Optimizes Dockerfiles for smaller image sizes.",
                    "Configures deployment strategies (blue/green, canary).",
                    "Automates manual toil in the release process."
                ],
                examples: [
                    "Refactored the Dockerfile to use multi-stage builds, reducing image size by 60%.",
                    "Configured a canary deployment for the payment service to reduce risk.",
                    "Automated the database migration step in the deployment pipeline."
                ]
            },
            "Staff": {
                summary: "Designs release strategies. Optimizes delivery metrics (DORA).",
                behaviors: [
                    "Architects the continuous delivery platform.",
                    "Defines the strategy for managing multiple environments.",
                    "Drives improvements in Lead Time and Deployment Frequency."
                ],
                examples: [
                    "Designed a GitOps workflow using ArgoCD for Kubernetes deployments.",
                    "Implemented ephemeral environments for every Pull Request.",
                    "Reduced the lead time for changes from 3 days to 4 hours by streamlining the approval process."
                ]
            },
            "Engineering Manager": {
                summary: "Ensures smooth delivery flow. Unblocks deployment issues. Tracks DORA metrics.",
                behaviors: [
                    "Monitors DORA metrics (Deployment Frequency, Lead Time, etc.).",
                    "Removes process bottlenecks preventing frequent deployment.",
                    "Ensures the team has the tools they need to deploy safely."
                ],
                examples: [
                    "Presented DORA metrics to the team and set a goal to double deployment frequency.",
                    "Authorized the purchase of a faster build server to reduce wait times.",
                    "Changed the change approval board process to be asynchronous for low-risk changes."
                ]
            }
        }
    },
    {
        name: "Support & Operations",
        description: "Running software in production, handling incidents, and supporting users.",
        levels: {
            "Graduate": {
                summary: "Assists in debugging production issues. Updates runbooks.",
                behaviors: [
                    "Helps reproduce bugs reported by support.",
                    "Updates documentation/runbooks when they are unclear.",
                    "Observes incident response to learn."
                ],
                examples: [
                    "Reproduced a customer-reported UI bug in the staging environment.",
                    "Updated the on-call wiki page with correct contact numbers.",
                    "Sat in on a post-mortem meeting to understand what went wrong."
                ]
            },
            "Associate": {
                summary: "Shadows on-call. Resolves known issues. Improves documentation.",
                behaviors: [
                    "Participates in on-call rotation (shadow or secondary).",
                    "Triages incoming bug reports.",
                    "Fixes low-severity production issues."
                ],
                examples: [
                    "Shadowed a senior engineer during an on-call shift.",
                    "Triaged 10 tickets from the support queue, closing duplicates.",
                    "Fixed a data inconsistency issue using a documented runbook script."
                ]
            },
            "Senior Engineer": {
                summary: "Primary on-call. Leads incident resolution. Conducts root cause analysis.",
                behaviors: [
                    "Serves as primary on-call engineer.",
                    "Leads the technical response during incidents.",
                    "Writes detailed post-mortems (RCAs)."
                ],
                examples: [
                    "Resolved a production outage caused by a database lock pile-up.",
                    "Coordinated with the infrastructure team to mitigate a DDoS attack.",
                    "Wrote the RCA for the checkout outage, identifying the root cause as a bad config change."
                ]
            },
            "Staff": {
                summary: "Leads major incident response. Drives systemic reliability improvements.",
                behaviors: [
                    "Acts as Incident Commander for major cross-team incidents.",
                    "Identifies systemic risks and drives architectural fixes.",
                    "Conducts 'Pre-mortems' for high-risk launches."
                ],
                examples: [
                    "Commanded the response to a region-wide outage, coordinating 5 different teams.",
                    "Identified a single point of failure in the message bus and architected a redundant solution.",
                    "Led a pre-mortem for the Black Friday sale, identifying 3 critical risks to address."
                ]
            },
            "Engineering Manager": {
                summary: "Manages on-call schedules. Facilitates post-mortems. Ensures team health.",
                behaviors: [
                    "Ensures on-call load is sustainable and compensated.",
                    "Facilitates blameless post-mortems.",
                    "Communicates incident status to business stakeholders."
                ],
                examples: [
                    "Adjusted the on-call rotation to prevent burnout after a rough week.",
                    "Facilitated a post-mortem where the focus was kept on process failure, not human error.",
                    "Sent hourly updates to the VP of Engineering during a critical outage."
                ]
            }
        }
    }
];
