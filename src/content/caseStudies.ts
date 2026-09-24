export type CaseStudy = {
  slug: string;
  label: string;
  title: string;
  lede: string;
  image?: string;
  imageAlt?: string;
  metrics: { value: string; label: string }[];
  problem: string;
  solution: string;
  services: string[];
  contextTitle: string;
  context: string;
  causesTitle: string;
  causesIntro: string;
  causes: { title: string; body: string }[];
  quote?: { text: string; attribution: string };
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "yukon",
    label: "Enterprise product leadership",
    title: "Project Yukon",
    lede: "A unified seller experience that turns any address into a clear path to a deal.",
    image: "/photos/yukon.jpg",
    imageAlt: "Project Yukon team collaborating during a workshop",
    metrics: [
      { value: "12 → 1", label: "Seller tools consolidated into one primary experience" },
      { value: "83%", label: "Reduction in deal-entry time" },
      { value: "5,000", label: "Sellers reached through nationwide rollout" },
      { value: "20%", label: "Improvement in qualified lead volume and quality" },
      { value: "$12M", label: "Estimated business benefit" },
    ],
    problem:
      "B2B sellers depended on 12 disconnected tools, conflicting eligibility data, and a Salesforce process that could take approximately an hour to complete.",
    solution:
      "A single Salesforce-powered experience that turned an address into authoritative eligibility, installation timing, relevant product options, and a ready-to-create deal.",
    services: [
      "Product strategy and service design",
      "Enterprise systems integration",
      "Custom Salesforce development",
      "Seller tools consolidated into one primary experience",
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
    slug: "tessa",
    label: "Product strategy and delivery",
    title: "Tessa",
    lede: "An ambient AI companion that helps families stay close to an aging loved one without taking over the home.",
    metrics: [
      { value: "6 mo", label: "From concept to live home pilots" },
      { value: "25", label: "Families wait-listed for the alpha" },
      { value: "152+", label: "Household sounds the prototype can recognize" },
      { value: "1", label: "Family app for the signals that matter" },
    ],
    problem:
      "Families are placed into caregiving overnight—after an incident, a diagnosis, or a shift where independence turns into concern. They want to know a loved one is okay without calling constantly or installing something that feels like surveillance.",
    solution:
      "Tessa listens for meaningful events in the home, summarizes what changed, and shares that through a family app. Families choose how much detail they see. Privacy stays intact, and independence stays the point.",
    services: [
      "Product strategy for an AI-native care product",
      "Pilot design with families already in the home",
      "Signal design: urgent alerts, pattern changes, and longer-term context",
      "A care intelligence view families can actually use",
    ],
    contextTitle: "The product had to earn trust before it earned features.",
    context:
      "Tessa started as a venture inside Fyve Labs and became Fyve Health. The early work was not a feature list. It was conversations with families who wanted a steady signal that someone was okay, and a prototype simple enough to live in a real home. I helped take that from concept to active home trials in six months.",
    causesTitle: "What the pilots had to prove",
    causesIntro:
      "The near-term bar was reliability, clarity, and caregiver trust: fewer alerts, more meaning, and effortless control.",
    causes: [
      {
        title: "Useful in a real day",
        body: "End-to-end prototype testing in active homes, so the team could see what families actually checked.",
      },
      {
        title: "A signal, not a feed",
        body: "Sleep changes, missed routines, or distress—summarized, not streamed.",
      },
      {
        title: "Privacy as a product decision",
        body: "Families set the level of detail. Independence is protected on purpose.",
      },
      {
        title: "A path past the prototype",
        body: "Mobile app, off-the-shelf hardware, and an API ready for a larger beta cohort.",
      },
    ],
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}
