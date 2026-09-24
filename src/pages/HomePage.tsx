import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { InquiryForm } from "../components/InquiryForm";

const methods = [
  ["01", "OKRs", "Translate the business case into measurable outcomes, ownership, and a clear definition of success."],
  ["02", "Service blueprint", "Connect the customer experience to the people, processes, systems, and policies that make it possible."],
  ["03", "End-to-end system mapping", "Make workflows, dependencies, data movement, decisions, and handoffs visible across the organization."],
  ["04", "Workshops / PI Planning", "Bring leaders and delivery teams together to resolve uncertainty, make commitments, and sequence the work."],
  ["05", "Architecture documents", "Capture technical decisions, interfaces, constraints, and tradeoffs in a form the whole team can use."],
  ["06", "Product dashboard", "Show outcomes, progress, risks, and learning in one decision-ready view."],
  ["07", "Bi-weekly executive readouts", "Keep leadership aligned on results, decisions, blockers, and the next highest-leverage move."],
];

export function HomePage() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    document.querySelector(hash)?.scrollIntoView();
  }, [hash]);

  return (
    <>
      <section className="shell hero">
        <div className="hero-copy">
          <h1>
            Carl Wynand
            <br />
            du Plessis
          </h1>
          <div className="hero-role">Interim Technical Product Lead</div>
          <p className="hero-statement">
            I help deliver funded, high-visibility software initiatives by aligning the story, guiding the team, and staying accountable to leadership-selected business outcomes.
          </p>
          <p className="hero-evidence">
            I’ve built software as a team of one, led a team of 10, and managed multidisciplinary organizations of more than 50 people.
          </p>
          <div className="hero-links">
            <a className="primary-link" href="#contact">
              Start a conversation →
            </a>
            <a className="text-link" href="#work">
              See selected work ↓
            </a>
          </div>
        </div>
        <figure className="hero-photo">
          <img src="/photos/workshop.jpg" alt="Carl facilitating a product workshop with a cross-functional team" />
          <figcaption className="photo-caption">Facilitating a user-experience and product synthesis workshop</figcaption>
        </figure>
      </section>

      <section className="impact-band" aria-label="Selected project impact">
        <div className="shell impact-grid">
          <div className="impact-item">
            <div className="impact-number">$20M</div>
            <p>
              <strong>Budget allocated across six organizations</strong> by driving OKRs, executive workshops, and market research to prioritize more than $100M in potential impact.
            </p>
          </div>
          <div className="impact-item">
            <div className="impact-number">$33M</div>
            <p>
              <strong>Recognized value for SMB sellers</strong> by reaching twice as many leads with 75% greater confidence in qualification through a $3.5M Salesforce initiative.
            </p>
          </div>
          <div className="impact-item">
            <div className="impact-number">$3M</div>
            <p>
              <strong>Business impact from service improvements</strong> including a two-minute reduction in average handle time and a 25% improvement in resolution rate.
            </p>
          </div>
        </div>
      </section>

      <section className="shell section" id="work">
        <div className="section-header">
          <div className="kicker">01 · Selected work</div>
          <div>
            <h2>Selected work</h2>
            <p>Complex initiatives where product direction, technical fluency, and alignment across business and delivery teams changed what became possible.</p>
          </div>
        </div>
        <div className="work-grid">
          <article className="work-card work-card-yukon">
            <figure className="work-image">
              <img src="/photos/yukon.jpg" alt="Project Yukon team collaborating during a workshop" />
            </figure>
            <div className="work-copy">
              <div className="work-label">Enterprise product leadership</div>
              <h3>Project Yukon</h3>
              <p>A complex enterprise initiative brought into focus through end-to-end workflow mapping, executive alignment, and a product operating system the organization could act on.</p>
              <Link className="text-link" to="/work/yukon">
                Read the case study →
              </Link>
            </div>
          </article>
          <article className="work-card work-card-tessa">
            <figure className="tessa-device">
              <img src="/photos/tessa/listener_home.webp" alt="Tessa Listener plugged in on a bookshelf" />
            </figure>
            <div className="tessa-content">
              <div className="work-label">Product strategy and delivery</div>
              <h3>Tessa</h3>
              <p>Audio-only urgent alerts for aging parents. No pendant, no button, and no camera — the family hears about a fall, a call for help, or a possible scam in the Tessa Family app.</p>
              <Link className="text-link" to="/work/tessa">
                Read the case study →
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section className="image-method" id="approach">
        <div className="shell section">
          <div className="section-header">
            <div className="kicker">02 · How I work</div>
            <div>
              <h2>I create the structure that lets the team deliver.</h2>
              <p>These are the practical tools and operating rhythms I use to turn an important initiative into coordinated, measurable work.</p>
            </div>
          </div>
          <div className="how-list">
            {methods.map(([index, title, body]) => (
              <div className="how-item" key={index}>
                <span className="how-index">{index}</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="shell section offer">
        <div className="offer-copy">
          <div className="kicker">03 · The engagement</div>
          <h2>Interim leadership for one critical initiative.</h2>
          <p>I step into a funded software initiative, create clarity and momentum with the team already in place, and transfer a durable operating system to an internal product leader.</p>
        </div>
        <div className="offer-list">
          <div className="offer-item">
            <strong>Good fit</strong>
            <p>The initiative is valuable and visible, but ownership is fragmented or the implementation path remains unclear.</p>
          </div>
          <div className="offer-item">
            <strong>I lead</strong>
            <p>Outcomes, story, operating cadence, executive decisions, software delivery, measurement, and cross-functional alignment.</p>
          </div>
          <div className="offer-item">
            <strong>We finish</strong>
            <p>With measurable momentum, an aligned delivery system, and an internal owner prepared to carry the work forward.</p>
          </div>
          <div className="offer-item">
            <strong>Structure</strong>
            <p>Designed for an 8–12 month engagement, organized in four-month phases with clear decision points and a planned handoff.</p>
          </div>
        </div>
        <div className="client-proof">
          <div className="client-proof-label">Experience includes work with teams at</div>
          <div className="client-logos" aria-label="Selected organizations">
            <div className="client-logo logo-hilton" aria-label="Hilton">
              <span className="brand-icon" aria-hidden="true" style={{ ["--brand-mask" as string]: "url('https://cdn.jsdelivr.net/npm/simple-icons@16.32.0/icons/hiltonhotelsandresorts.svg')" }} />
              <span>HILTON</span>
            </div>
            <div className="client-logo logo-att" aria-label="AT&T">
              <span className="brand-icon" aria-hidden="true" style={{ ["--brand-mask" as string]: "url('https://cdn.jsdelivr.net/npm/simple-icons@16.32.0/icons/atandt.svg')" }} />
              <span>AT&T</span>
            </div>
            <div className="client-logo logo-southwest" aria-label="Southwest Airlines">
              <span className="brand-icon" aria-hidden="true" style={{ ["--brand-mask" as string]: "url('https://cdn.jsdelivr.net/npm/simple-icons@16.32.0/icons/southwestairlines.svg')" }} />
              <span>Southwest</span>
            </div>
            <div className="client-logo logo-cfa" aria-label="Chick-fil-A">
              Chick-fil-A
            </div>
          </div>
        </div>
      </section>

      <section className="about" id="about">
        <div className="shell about-grid">
          <figure className="about-photo">
            <img src="/photos/slackline.jpg" alt="Carl balancing on a slackline outdoors with a colleague" />
          </figure>
          <div className="about-copy">
            <div className="kicker">04 · Beyond the title</div>
            <h2>Goal-oriented leadership goes beyond the desk.</h2>
            <p>My excitement for goal-oriented leadership goes beyond the desk. I’m a trail runner, rock climber, and aspiring pianist.</p>
            <p>Each practice rewards the same things I value in product leadership: a clear goal, steady learning, honest feedback, and the patience to keep moving forward.</p>
            <div className="about-tags" aria-label="Interests and working preferences">
              <span className="about-tag">Trail running</span>
              <span className="about-tag">Rock climbing</span>
              <span className="about-tag">Piano</span>
            </div>
          </div>
        </div>
      </section>

      <section className="shell contact" id="contact">
        <div>
          <div className="kicker">05 · Contact</div>
          <h2>Tell me what you’re trying to deliver.</h2>
          <p>A short conversation should be enough to determine whether the initiative needs an interim product lead—and whether I am the right one.</p>
          <p>
            <a className="text-link" href="mailto:carl@deadpointhq.com">
              Email Carl →
            </a>
          </p>
        </div>
        <InquiryForm />
      </section>
    </>
  );
}
