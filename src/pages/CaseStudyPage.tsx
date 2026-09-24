import { Link, useParams } from "react-router-dom";
import { getCaseStudy } from "../content/caseStudies";

export function CaseStudyPage() {
  const { slug } = useParams();
  const study = slug ? getCaseStudy(slug) : undefined;

  if (!study) {
    return (
      <section className="shell case-hero">
        <div className="kicker">Case study</div>
        <h1>That story isn’t here.</h1>
        <p className="case-lede">The selected work lives on the home page.</p>
        <p>
          <Link className="text-link" to="/#work">
            Back to selected work
          </Link>
        </p>
      </section>
    );
  }

  return (
    <article>
      <header className="shell case-hero">
        <div className="kicker">{study.label}</div>
        <h1>{study.title}</h1>
        <p className="case-lede">{study.lede}</p>
        <div className="hero-links">
          <Link className="text-link" to="/#work">
            ← Selected work
          </Link>
          {study.siteUrl && (
            <a className="primary-link" href={study.siteUrl}>
              {study.siteLabel ?? "Visit the product"} →
            </a>
          )}
        </div>
      </header>

      <section className="impact-band" aria-label={`${study.title} outcomes`}>
        <div className="shell impact-grid case-metrics">
          {study.metrics.map((metric) => (
            <div className="impact-item" key={metric.value}>
              <div className="impact-number">{metric.value}</div>
              <p>{metric.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="shell case-panel">
        <div className="case-columns">
          <div className="case-column">
            <div className="kicker">The problem</div>
            <p>{study.problem}</p>
          </div>
          <div className="case-column">
            <div className="kicker">The solution</div>
            <p>{study.solution}</p>
          </div>
          <div className="case-column">
            <div className="kicker">What I led</div>
            <ul>
              {study.services.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="shell case-story">
        <div>
          <div className="kicker">The context</div>
          <h2>{study.contextTitle}</h2>
          <p>{study.context}</p>
        </div>
        <div>
          <div className="kicker">What we found</div>
          <h2>{study.causesTitle}</h2>
          <p>{study.causesIntro}</p>
          <div className="cause-list">
            {study.causes.map((cause, index) => (
              <div className="cause" key={cause.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{cause.title}</h3>
                  <p>{cause.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {study.quote && (
        <blockquote className="case-quote">
          <p>“{study.quote.text}”</p>
          <cite>{study.quote.attribution}</cite>
        </blockquote>
      )}

      {study.image && (
        <figure className="case-photo">
          <img src={study.image} alt={study.imageAlt ?? ""} />
        </figure>
      )}

      {study.gallery && study.gallery.length > 0 && (
        <section className="case-gallery" aria-label={`${study.title} product images`}>
          {study.gallery.map((photo) => (
            <figure key={photo.src}>
              <img src={photo.src} alt={photo.alt} />
              <figcaption>{photo.caption}</figcaption>
            </figure>
          ))}
          {study.siteUrl && (
            <p className="case-gallery-link">
              Images from{" "}
              <a href={study.siteUrl}>{study.siteLabel ?? study.siteUrl}</a>
            </p>
          )}
        </section>
      )}
    </article>
  );
}
