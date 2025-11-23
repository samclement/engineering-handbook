export interface RoleData {
    title: string;
    slug: string;
    track: 'IC' | 'Management';
    summary: string;
    content: string;
}

export const roles: RoleData[] = [
    // IC Track
    {
        title: "Graduate Software Engineer (GSE)",
        slug: "graduate-software-engineer-gse",
        track: "IC",
        summary: "Learn the SDLC, quality, and team ways of working.",
        content: `- **Primary Focus:** Learn the SDLC, quality, and team ways of working.
- **Scope:** Tasks within a component; time horizon days to a week; low ambiguity.
- **Competence:**
  - **SDLC:** Follows standards; writes small changes with review; learns testing/CI basics.
  - **Code Quality:** Applies feedback; begins to refactor safely.
  - **Collaboration:** Communicates progress; asks for help early.
  - **Operations:** Learns runbooks and environment basics.
- **Leadership Crossover:** None expected; models curiosity and reliability.`
    },
    {
        title: "Associate Software Engineer (ASE)",
        slug: "associate-software-engineer-ase",
        track: "IC",
        summary: "Deliver small stories end‑to‑end under guidance.",
        content: `- **Primary Focus:** Deliver small stories end‑to‑end under guidance.
- **Scope:** Small stories/features in a component; days to a few weeks; low ambiguity.
- **Competence:**
  - **SDLC:** Implements with tests; debugs with support; contributes to CI/CD scripts.
  - **Design:** Chooses simple patterns; recognises code smells.
  - **Collaboration:** Participates in grooming; improves estimates with feedback.
  - **Operations:** Handles basic on‑call/runbook steps with pairing.
- **Leadership Crossover:** Influences peers via good PRs and documentation.`
    },
    {
        title: "Software Engineer (SE)",
        slug: "software-engineer-se",
        track: "IC",
        summary: "Reliable delivery of features with solid engineering practice.",
        content: `- **Primary Focus:** Reliable delivery of features with solid engineering practice.
- **Scope:** Component ownership; few weeks horizon; moderate ambiguity within known domain.
- **Competence:**
  - **SDLC:** Plans and delivers features; writes reliable tests; improves pipelines.
  - **Design:** Breaks problems down; proposes straightforward designs.
  - **Quality/Operability:** Instruments code; participates in on‑call; fixes classes of issues.
  - **Product:** Understands user impact; weighs trade‑offs.
- **Leadership Crossover:** Leads small tasks; mentors juniors informally.`
    },
    {
        title: "Senior Software Engineer (SSE)",
        slug: "senior-software-engineer-sse",
        track: "IC",
        summary: "Technical depth plus velocity; raising the team's engineering bar.",
        content: `- **Primary Focus:** Technical depth plus velocity; raising the team's engineering bar.
- **Scope:** Multiple components or a service; 1–2 quarter horizon; medium ambiguity.
- **Competence:**
  - **System Design:** Designs services with reliability, scalability, and security in mind.
  - **Delivery:** Unblocks others; coordinates across functions to land features.
  - **Quality/Operations:** Drives reliability testing; improves SLOs and incident response.
  - **Product/Stakeholders:** Shapes scope; aligns with PM/Design.
- **Leadership Crossover:** Leads small initiatives; mentors; champions engineering standards.`
    },
    {
        title: "Staff Software Engineer",
        slug: "staff-software-engineer",
        track: "IC",
        summary: "Technical leadership and cross‑team influence; still hands‑on.",
        content: `- **Primary Focus:** Technical leadership and cross‑team influence; still hands‑on.
- **Scope:** A product area or critical platform; 2–3 quarter horizon; high ambiguity.
- **Competence:**
  - **Architecture:** Sets technical direction; chooses long‑term trade‑offs.
  - **Execution:** Orchestrates multi‑team initiatives; de‑risks with spikes/iterations.
  - **Reliability/Security:** Bakes in SLOs, resilience, and secure defaults.
  - **Org Influence:** Shapes roadmaps with PMs; aligns stakeholders.
  - **Finance:** Understands platform costs; optimizes resource usage.
- **Leadership Crossover:** Coaches seniors; leads design reviews; sets bar for quality and operational excellence.`
    },
    {
        title: "Principal Software Engineer",
        slug: "principal-software-engineer",
        track: "IC",
        summary: "Org‑level technical leadership and strategy; multipliers over teams.",
        content: `- **Primary Focus:** Org‑level technical leadership and strategy; multipliers over teams.
- **Scope:** Multiple product groups or a portfolio; annual horizon; very high ambiguity.
- **Competence:**
  - **Strategy:** Defines architectural vision and evolutionary paths.
  - **Platforms:** Designs shared systems and contracts; reduces org‑wide complexity.
  - **Change Leadership:** Drives cross‑org migrations and standards adoption.
  - **External:** Represents engineering in cross‑functional/exec forums.
  - **Finance:** Helps plan technical investments; evaluates build vs. buy decisions.
- **Leadership Crossover:** Mentors Staff/Senior; builds leadership bench; aligns leaders on principles and outcomes.`
    },
    // Management Track
    {
        title: "Engineering Manager (EM)",
        slug: "engineering-manager-em",
        track: "Management",
        summary: "Outcomes through people; delivery, quality, growth, and health.",
        content: `- **Primary Focus:** Outcomes through people; delivery, quality, growth, and health.
- **Scope:** One team; 1–2 quarter horizon; medium ambiguity.
- **Competence:**
  - **People:** Hiring, onboarding, feedback, performance, growth plans.
  - **Delivery:** Backlog health, predictability, cross‑functional collaboration.
  - **Operations:** On‑call/process ownership; escalations; risk management.
  - **Technical:** Staff‑level technical literacy; reviews for direction/quality.
  - **Finance:** Understands platform costs, team costs, and capabilities.
- **Leadership Crossover:** Facilitates team‑level leadership; aligns with partners; cultivates culture and standards.`
    },
    {
        title: "Head of Software Engineering (HoSE)",
        slug: "head-of-software-engineering-hose",
        track: "Management",
        summary: "Multi‑team leadership; strategy, resourcing, and execution at group level.",
        content: `- **Primary Focus:** Multi‑team leadership; strategy, resourcing, and execution at group level.
- **Scope:** 2–5 teams/one portfolio; annual horizon; high ambiguity.
- **Competence:**
  - **Org Design:** Team topology, ownership boundaries, succession planning.
  - **Strategy/Planning:** Roadmap shaping, investment trade‑offs, metrics.
  - **Execution:** Leads cross‑team programs; resolves systemic blockers.
  - **Technical:** Principal‑level judgement; governs architecture via leaders.
  - **Finance:** Plans costs across product group; allocates budget.
- **Leadership Crossover:** Dovetails into org leadership—sets culture, principles, and operating model with peers.`
    },
    {
        title: "Senior Head of Software Engineering (SHoSE)",
        slug: "senior-head-of-software-engineering-shose",
        track: "Management",
        summary: "Org and company‑level leadership across portfolios.",
        content: `- **Primary Focus:** Org and company‑level leadership across portfolios.
- **Scope:** Several portfolios; multi‑year horizon; very high ambiguity.
- **Competence:**
  - **Strategy/Vision:** Long‑range bets; portfolio shaping; value and risk framing.
  - **Org Health:** Leadership pipeline, performance systems, operating cadence.
  - **Cross‑Company:** Aligns with product, design, data, security, finance.
  - **Technical Governance:** Distinguished‑level guidance through councils/principles.
  - **Finance:** Plans costs across the portfolio; sets overall budget.
- **Leadership Crossover:** Executive‑level leadership; steers culture and outcomes at scale.`
    }
];

export function getRoleBySlug(slug: string): RoleData | undefined {
    return roles.find(role => role.slug === slug);
}

export function getAllRoles(): RoleData[] {
    return roles;
}
