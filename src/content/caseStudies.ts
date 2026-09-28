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
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}
