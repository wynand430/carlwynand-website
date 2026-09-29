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
          <figcaption className="photo-caption">Leading an AI accelerator for 50+ product team members</figcaption>
        </figure>
      </section>

      <section className="roi-banner" aria-label="Return on engagement">
        <div className="shell">
          <p className="roi-headline">12 year track record of 5x ROI on every engagement</p>
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
            <div className="client-logo logo-cfa">
              <img className="brand-logo" src="/logos/chick-fil-a.svg" alt="Chick-fil-A" />
            </div>
          </div>
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
              <figcaption className="photo-caption">Facilitating 5-day Google Venture style sprint</figcaption>
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
        <article className="yukon-preview">
          <div className="yukon-preview-story">
            <div className="work-label">Enterprise Wi-Fi support</div>
            <h3>SASHA workflow</h3>
            <p>$3M estimated annual Tier 1 savings by bringing handle time from 12 minutes to under 9 on a workflow serving up to two million calls a year.</p>
            <Link className="text-link" to="/work/sasha">
              Read the case study →
            </Link>
            <figure className="yukon-preview-photo">
              <img src="/photos/sasha.png" alt="Team gathered at a wall of workflow notes" />
              <figcaption className="photo-caption">Reviewing the support workflow with the team</figcaption>
            </figure>
          </div>
          <div className="yukon-preview-card" aria-label="SASHA workflow metrics">
            <div>
              <strong>12 → &lt;9</strong>
              <span>Handle time</span>
            </div>
            <div>
              <strong>800+</strong>
              <span>Agents</span>
            </div>
            <div>
              <strong>25%</strong>
              <span>Agent satisfaction</span>
            </div>
            <div>
              <strong>$3M</strong>
              <span>Annual Tier 1 savings</span>
            </div>
          </div>
        </article>
      </section>

      <section className="shell section offer">
        <div className="offer-copy">
          <div>
            <div className="kicker">02 · The engagement</div>
            <p>I step into a funded software initiative, create clarity and momentum with the team already in place, and transfer a durable operating system to an internal product leader.</p>
          </div>
          <div className="kicker">If two or more sound familiar, let’s talk.</div>
        </div>
        <div className="offer-board">
          <h2>Need to deliver results within year?</h2>
          <div className="offer-grid">
            <article className="offer-cell">
              <p className="offer-label">Good fit</p>
              <h3>High-use workflow</h3>
              <p className="offer-lead">A high-use workflow is creating friction, and leadership is already aligned on the business outcome.</p>
              <p className="offer-detail">We start with a prioritized workflow and measurable potential business impact.</p>
            </article>
            <article className="offer-cell">
              <p className="offer-label">Immediate start</p>
              <h3>30 days</h3>
              <p className="offer-lead">The initiative is funded—but progress has stalled.</p>
              <p className="offer-detail">Executive kickoff, process mapping, and an execution plan designed to deliver 5x ROI.</p>
            </article>
            <article className="offer-cell">
              <p className="offer-label">Approved outcomes</p>
              <h3>100%</h3>
              <p className="offer-lead">Teams are busy, but the impact is not yet approved.</p>
              <p className="offer-detail">Outcomes approved by finance and operations based on workflow automation impact.</p>
            </article>
            <article className="offer-cell">
              <p className="offer-label">Structure</p>
              <h3>8–12 months</h3>
              <p className="offer-lead">The work needs durable ownership—not another short-lived push.</p>
              <p className="offer-detail">30-day guarantee, planned handoff, and bi-weekly executive updates.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="about" id="about">
        <div className="shell about-grid">
          <figure className="about-photo">
            <img src="/photos/first-place.jpg" alt="Carl jumping in the snow, holding a first-place sign" />
            <figcaption className="photo-caption">Running in Colorado and setting a half-marathon PR</figcaption>
          </figure>
          <div className="about-copy">
            <div className="kicker">03 · Workflows outside the office</div>
            <p>My friends say that when I’m around they “lock in” with energy to accomplish goals they’ve been excited about. Maybe it’s because I always ask about why they’re doing what they’re doing, or maybe it’s because I always have a hobby that I’m passionate about. Both share something about how I operate as a person.</p>
            <p>Once I get excited about something, I always try to get good at it. World class kind of good. This requires committing fully and deeply understanding what I’m doing. This is how I learned to code, how I learned to build products and led to:</p>
            <ul className="about-list">
              <li>3hr marathon trail runner</li>
              <li>v7 rock climber</li>
              <li>Grade 5 jazz pianist</li>
              <li>3+ languages above B1 fluency</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="shell contact" id="contact">
        <div className="contact-copy">
          <div className="kicker">04 · Contact</div>
          <p>Tell me what you’re trying to accomplish. A short followup conversation should be enough to determine if it’s a good fit!</p>
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
