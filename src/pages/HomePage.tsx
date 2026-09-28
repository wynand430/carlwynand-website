import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { InquiryForm } from "../components/InquiryForm";

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
            Du plessis
          </h1>
          <p className="hero-statement">
            I help enterprise leaders deliver million dollar outcomes on high-visibility, multi-team software initiatives. I’ve built software as a team of one, lead a team of 10, and managed product organizations delivering 100’s millions in revenue.
          </p>
        </div>
        <figure className="hero-photo">
          <img src="/photos/workshop.jpg" alt="Carl facilitating a product workshop with a cross-functional team" />
          <figcaption className="photo-caption">Facilitating a user-experience and product synthesis workshop</figcaption>
        </figure>
      </section>

      <section className="roi-banner" aria-label="Return on engagement">
        <div className="shell">
          <p className="roi-headline">12 year track record of 5x ROI on every engagement</p>
          <div className="roi-card">
            <div className="roi-callout">
              <div className="impact-number">$20M</div>
              <p>
                <strong>Budget allocated across six organizations</strong> by driving OKRs, executive workshops, and market research to prioritize more than $100M in potential impact.
              </p>
            </div>
            <div className="roi-callout">
              <div className="impact-number">$33M</div>
              <p>
                <strong>Recognized value for SMB sellers</strong> by reaching twice as many leads with 75% greater confidence in qualification through a $3.5M Salesforce initiative.
              </p>
            </div>
            <div className="roi-callout">
              <div className="impact-number">$3M</div>
              <p>
                <strong>Business impact from service improvements</strong> including a two-minute reduction in average handle time and a 25% improvement in resolution rate.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="shell section" id="work">
        <div className="work-intro">
          <div className="kicker">01 · Selected work</div>
          <p>3M impact within 9 months in complex environments.</p>
        </div>
        <article className="yukon-preview">
          <div className="yukon-preview-story">
            <div className="work-label">Enterprise product leadership</div>
            <h3>Project Yukon</h3>
            <p>$34M finance-approved benefit within 9-months for a Salesforce backed seller workflow.</p>
            <Link className="text-link" to="/work/yukon">
              Read the case study →
            </Link>
            <figure className="yukon-preview-photo">
              <img src="/photos/yukon.jpg" alt="Project Yukon team collaborating during a workshop" />
            </figure>
          </div>
          <div className="yukon-preview-card" aria-label="Project Yukon metrics">
            <div>
              <strong>12 → 1</strong>
              <span>Tools</span>
            </div>
            <div>
              <strong>5,000</strong>
              <span>Sellers</span>
            </div>
            <div>
              <strong>83%</strong>
              <span>Deal time reduction</span>
            </div>
            <div>
              <strong>$34M</strong>
              <span>Finance-approved benefit</span>
            </div>
          </div>
        </article>
      </section>

      <section className="shell section offer">
        <div className="offer-copy">
          <div className="kicker">02 · The engagement</div>
          <p>I step into a funded software initiative, create clarity and momentum with the team already in place, and transfer a durable operating system to an internal product leader.</p>
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
                <img className="brand-logo" src="/logos/chick-fil-a.svg" alt="" />
                <span>Chick-fil-A</span>
              </div>
            </div>
          </div>
        </div>
        <div className="offer-list">
          <div className="offer-item">
            <strong>Good fit</strong>
            <p>Projects must have a high-usage workflow that is prioritized with potential business impact. Leadership must be aligned on the business outcomes desired.</p>
          </div>
          <div className="offer-item">
            <strong>Immediate start</strong>
            <p>30-days to deliver outcomes, executive kick off call, process mapping, and execution plan to deliver 5x ROI</p>
          </div>
          <div className="offer-item">
            <strong>Approved outcomes</strong>
            <p>100% approved outcomes from finance and operations teams based on workflow automation impact</p>
          </div>
          <div className="offer-item">
            <strong>Structure</strong>
            <p>8-12 month engagement including 30-day guarantee, planned handoff, and bi-weekly executive updates</p>
          </div>
        </div>
      </section>

      <section className="about" id="about">
        <div className="shell about-grid">
          <figure className="about-photo">
            <img src="/photos/slackline.jpg" alt="Carl balancing on a slackline outdoors with a colleague" />
          </figure>
          <div className="about-copy">
            <div className="kicker">03 · Beyond the title</div>
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
          <div className="kicker">04 · Contact</div>
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
