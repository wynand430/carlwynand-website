export type CaseStudy = {
  slug: string;
  label: string;
  title: string;
  lede: string;
  image?: string;
  imageAlt?: string;
  gallery?: { src: string; alt: string; caption: string }[];
  siteUrl?: string;
  siteLabel?: string;
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
    lede: "Audio-only urgent alerts for aging parents. No pendant, no button, no camera.",
    image: "/photos/tessa/urgent-protection-hero.webp",
    imageAlt: "Family caregiver on the phone after receiving an urgent alert",
    siteUrl: "https://www.tessalistens.com/",
    siteLabel: "tessalistens.com",
    gallery: [
      {
        src: "/photos/tessa/listener_home.webp",
        alt: "Tessa Listener plugged in on a bookshelf",
        caption: "Plug-in Listener",
      },
      {
        src: "/photos/tessa/device_app_home.webp",
        alt: "Tessa Listener beside the Tessa Family app",
        caption: "Listener and family app",
      },
      {
        src: "/photos/tessa/tessa_notification.png",
        alt: "Example Tessa urgent alert call and notification",
        caption: "Urgent alert",
      },
      {
        src: "/photos/tessa/family_xl.webp",
        alt: "Family caring together",
        caption: "The family who gets the call",
      },
      {
        src: "/photos/tessa/Woman_checking_phone_xl.webp",
        alt: "Family caregiver checking a phone update",
        caption: "A check-in, not a feed",
      },
      {
        src: "/photos/tessa/urgent-protection-secondary.webp",
        alt: "Older parent at home with a blurred urgent phone notification in the foreground",
        caption: "Heard, not watched",
      },
    ],
    metrics: [
      { value: "Audio", label: "No camera, ever. No pendant and no button to press." },
      { value: "15 min", label: "Alerts are typically sent within 15 minutes of an event." },
      { value: "5 min", label: "Guided setup in the app. A parent does not need a smartphone." },
      { value: "$99.99", label: "Plans start here each month, with Tessa Listeners included." },
      { value: "30 days", label: "Free trial. Month-to-month, cancel anytime." },
    ],
    problem:
      "If something happens at 2am, the family often finds out too late. Pendants get left on the nightstand, wearables are uncharged, and a button still has to be pressed. Typical medical alerts also miss scam calls and distress in the room.",
    solution:
      "A plug-in Tessa Listener sits in the home and listens for falls, calls for help, and possible scam calls. The family gets a clear urgent alert in the Tessa Family app, with an optional phone call if they are not in the app. Tessa does not replace 911.",
    services: [
      "Product strategy for an audio-only safety product",
      "The Listener: included hardware, no battery, no camera",
      "Urgent alerts for falls, distress, and scam calls",
      "The Tessa Family app, where the people who can check in are notified",
    ],
    contextTitle: "Families needed a heads-up that still left dignity intact.",
    context:
      "Tessa Listens is built for the moment a parent is home alone and something is wrong. The product had to work whether or not they remembered to wear a device, and it had to refuse the obvious shortcut: a camera. Audio is not a live feed. Event audio is shared only with permission, and data is removed within 30 days.",
    causesTitle: "Three situations families act on.",
    causesIntro:
      "Not every sound becomes an alert. These are the moments the product is designed to catch, then hand to the family.",
    causes: [
      {
        title: "Possible fall",
        body: "A sharp impact, and whether the parent calls for help or the room goes quiet. The alert says when it happened and what Tessa noticed.",
      },
      {
        title: "Possible scam call",
        body: "Pressure patterns and unusual caller behavior, not a transcript of the conversation. The family can check in. No one is listening live.",
      },
      {
        title: "Call for help",
        body: "Cries, shouts, or distress in the room become an urgent alert with enough context to decide whether to call or visit.",
      },
      {
        title: "Heard, not watched",
        body: "No camera. Consent is required. The parent keeps privacy, and the family stays informed without a permanent record of life at home.",
      },
    ],
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}
