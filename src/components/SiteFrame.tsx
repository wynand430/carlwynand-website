import { Link } from "react-router-dom";
import type { ReactNode } from "react";

export function SiteFrame({ children }: { children: ReactNode }) {
  return (
    <div id="carl-portfolio" className="editorial image-rich">
      <header className="shell nav">
        <Link to="/#work">Work</Link>
        <Link to="/#approach">Approach</Link>
        <Link to="/#about">About</Link>
        <Link to="/#contact">Contact</Link>
      </header>
      <main>{children}</main>
      <footer className="shell footer">
        <span>© Carl Wynand du Plessis</span>
        <div className="footer-links">
          <a href="https://www.linkedin.com/in/carl-duplessis">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
}
