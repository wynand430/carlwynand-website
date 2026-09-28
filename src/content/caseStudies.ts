export type CaseStudy = {
  slug: string;
  label: string;
  title: string;
  lede: string;
  image?: string;
  imageAlt?: string;
  imageCaption?: string;
  gallery?: { src: string; alt: string; caption: string }[];
  siteUrl?: string;
  siteLabel?: string;
  metrics: { value: string; label: string }[];
  problem: string;
  solution: string;
  clientProfile: string[];
  contextTitle: string;
  context: string;
  causesTitle: string;
  causesIntro: string;
  causes: { title: string; body: string }[];
  quote?: { text: string; attribution: string };
  metricNote?: string;
  approach?: { title: string; intro: string; steps: { title: string; body: string }[] };
  highlights?: { value: string; label: string }[];
  results?: { title: string; body: string };
  lesson?: { title: string; body: string };
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "yukon",
    label: "Enterprise product leadership",
    title: "Project Yukon",
    lede: "$34M finance-approved benefit within 9-months for a Salesforce backed seller workflow",
    image: "/photos/yukon.jpg",
    imageAlt: "Project Yukon team collaborating during a workshop",
    imageCaption: "Facilitating 5-day Google Venture style sprint",
    metrics: [
      { value: "12 → 1", label: "Seller tools consolidated into one primary experience" },
      { value: "83%", label: "Reduction in deal-entry time" },
      { value: "5,000", label: "Sellers reached through nationwide rollout" },
      { value: "20%", label: "Improvement in qualified lead volume and quality" },
      { value: "$34M", label: "Finance-approved benefit within 9 months" },
    ],
    problem:
      "B2B sellers depended on 12 disconnected tools, conflicting eligibility data, and a Salesforce process that could take approximately an hour to complete.",
    solution:
      "A single Salesforce-powered experience that turned an address into authoritative eligibility, installation timing, relevant product options, and a ready-to-create deal.",
    clientProfile: [
      "A nationwide B2B sales organization selling fiber, with Salesforce as the system of record for the deal.",
      "About 5,000 sellers had to leave Salesforce for eligibility, installation timing, and product answers.",
      "Those answers lived in 12 tools that could disagree about the same address.",
      "Recording the order itself could take about an hour, so deals waited until the end of the day.",
    ],
    contextTitle: "Selling fiber required sellers to become systems experts.",
    context:
      "Eligibility depended on the address, type of property, nearby infrastructure, available equipment, installation schedules, and several product rules. The information existed, but it was spread across 12 tools that could return conflicting answers. Recording a completed order in Salesforce involved a lengthy sequence of forms and repeatable data entry. The process could take approximately 60 minutes, so sellers often postponed it until the end of the day—or several days later.",
    causesTitle: "Sellers were not avoiding the process. They were responding rationally to it.",
    causesIntro:
      "A four-month research effort—including a time-and-motion study and an end-to-end service blueprint—revealed four connected causes.",
    causes: [
      {
        title: "Fragmented tools",
        body: "Sellers had to move between 12 systems to complete one sales journey.",
      },
      {
        title: "Conflicting data",
        body: "Different tools could produce different eligibility answers for the same address.",
      },
      {
        title: "Complex business rules",
        body: "Correct decisions required technical knowledge that most sellers could not reasonably be expected to maintain.",
      },
      {
        title: "A burdensome transaction process",
        body: "Salesforce remained essential, but its generic workflow did not reflect the way these sellers worked.",
      },
    ],
    quote: {
      text: "This is the best tool we’ve been given access to. I use it every day, and it makes me feel like the business is investing in how I work.",
      attribution: "Composite paraphrase of recurring feedback from B2B sellers",
    },
  },
  {
    slug: "sasha",
    label: "Enterprise Wi-Fi support",
    title: "SASHA workflow",
    lede: "$3M estimated annual Tier 1 savings by bringing handle time from 12 minutes to under 9",
    image: "/photos/sasha.png",
    imageAlt: "Team gathered at a wall of workflow notes",
    imageCaption: "Reviewing the support workflow with the team",
    metrics: [
      { value: "800+", label: "Agents working in the workflow" },
      { value: "1–2M", label: "Support calls guided each year" },
      { value: "12 → <9", label: "Average handle time, in minutes" },
      { value: "25%", label: "Increase in agent satisfaction with the workflow" },
      { value: "$3M", label: "Estimated annual Tier 1 savings" },
    ],
    metricNote:
      "Savings are an annualized estimate from the call volumes and operating costs measured at the time. Customer NPS, first-call resolution, and transfers to Tier 2 improved; the exact figures for those outcomes were not retained.",
    problem:
      "A business-critical workflow guided up to two million support calls a year, but the people using it had no practical way to change it. Improvements stalled, trust declined, and average handle time climbed past 12 minutes.",
    solution:
      "Put product ownership between operations and development. Capture feedback inside the workflow, test ideas as clickable prototypes, and ship smaller releases the existing delivery system could actually finish.",
    clientProfile: [
      "A national managed Wi-Fi operation supporting hospitality, restaurant, and retail venues.",
      "The support center handled one to two million calls a year from venue staff, guests, and field technicians.",
      "Agents lived in one browser workflow: identify the caller and location, follow the script, troubleshoot, and open the ticket.",
      "Company, product, and customer names are generalized. SASHA is the name used here for that workflow. This was in-house product leadership.",
    ],
    contextTitle: "Every weak step was multiplied by hundreds of agents.",
    context:
      "SASHA was the agents’ single pane of glass. It started the interaction, identified the location, presented the approved script, guided troubleshooting, created the ticket, and stored what happened. New agents became productive through it. Experienced agents depended on it to move through hundreds of support scenarios. Calls cost about one to two dollars a minute, so a confusing instruction or an extra step was not a paper cut. It was a cost that showed up across one to two million calls a year.",
    causesTitle: "This was not a people problem. It was a learning-system problem.",
    causesIntro:
      "Agents had to stay ready for the next call. Even in a quiet stretch they might have 30 to 60 seconds. The official feedback path was an email to a supervisor, then a monthly rollup. Quality assurance checked whether agents followed SASHA. It did not check whether SASHA was right. Leadership first treated the gaps as a training problem.",
    causes: [
      {
        title: "No path for frontline evidence",
        body: "Most of what agents knew never survived the email-and-monthly-meeting filter. They had little reason to believe a note would reach someone who could act.",
      },
      {
        title: "Adherence was measured. The workflow was not.",
        body: "Experienced agents could see where the script, the link, or the step was wrong. The scorecard still treated the deviation as an agent failure.",
      },
      {
        title: "Development received documents, not the work",
        body: "Requirements arrived as write-ups. Engineers had to rebuild the call in meetings before they could change it. Only a small share of the development organization knew managed Wi-Fi support in any depth.",
      },
      {
        title: "Nobody owned the loop",
        body: "Acquisitions had separated operations, support tiers, hardware teams, and developers. A major workflow overhaul had already sat unfinished for about two and a half years.",
      },
    ],
    quote: {
      text: "The agents were not resisting the workflow. They were showing us where the product was failing.",
      attribution: "Carl, on the support operation",
    },
    approach: {
      title: "Product ownership where the calls met the software.",
      intro:
        "The work did not replace the enterprise’s SAFe delivery model. It added a product layer in front of it: a product manager, an operations manager, an experienced Wi-Fi representative, and the development and DevOps teams already in place. Discovery got sharper, batches got smaller, and the existing system could ship.",
      steps: [
        {
          title: "Capture feedback in context",
          body: "The first release was a feedback box inside SASHA, opened to more than 200 agents in Austin. An agent could describe the problem in seconds. The note arrived with a screenshot and the session, ticket, workflow position, and steps already taken. That release produced more than 200 submissions a month.",
        },
        {
          title: "Turn observations into decisions",
          body: "Submissions were reviewed for repeated patterns and tied to handle time, resolution quality, agent effort, and development cost. Broken links, stale scripts, and confusing pages could finally move. Larger changes had to earn their place.",
        },
        {
          title: "Prototype before development",
          body: "A prototyping engine let operations staff assemble clickable support pages and the paths between them. Agents could try a proposed flow before a development cycle started. Engineers received a tested prototype and a clear requirement, not only a document.",
        },
        {
          title: "Test with the people on the calls",
          body: "Proposed changes were put in front of agents who knew the customer and the edge cases. The distance from an idea to evidence got shorter, and the frontline became part of how the product was made.",
        },
        {
          title: "Release in smaller increments",
          body: "The unfinished overhaul was broken into changes that could ship and be measured on their own. The workflow that had stalled for about two and a half years was redesigned, tested, built, and released within six months.",
        },
      ],
    },
    highlights: [
      { value: "2.5 yr → 6 mo", label: "Stalled workflow to a production release" },
      { value: "100+", label: "Product experiments" },
      { value: "50+", label: "Workflow improvements released" },
    ],
    results: {
      title: "The workflow became a product that could learn.",
      body: "Agents saw that a note could change the tool. Leaders started looking at the system instead of defaulting to adherence. Developers received requests that already carried the operational context. The first spike of more than 200 submissions a month settled near 50 once the oldest problems were cleared, and a steady stream of frontline insight remained. The work moved from link and script fixes to page redesigns, retired steps, and full workflow overhauls. Average handle time went from about 12 minutes to 10, then settled under 9, across an operation of one to two million calls a year. That was an estimated $3 million in annual Tier 1 savings. Agent satisfaction with the workflow rose 25 percent. Customer NPS and first-call resolution improved, and fewer calls transferred to Tier 2. Clearer workflows also shortened the time for a new agent to become productive, and the same approach spread across the managed Wi-Fi workflows used by more than 800 agents.",
    },
    lesson: {
      title: "A feedback loop is the product.",
      body: "Frontline notes without a priority become noise. Targets without frontline evidence become brittle software. One product role, placed where the calls met delivery, gave agents a voice, engineers a prototype, and leaders a number they could check. Understand the work. Capture it in the moment. Make the learning visible. Ship something people will actually use.",
    },
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}
