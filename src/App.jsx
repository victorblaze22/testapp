import "./App.css";

function App() {
  return (
    <>
      <nav className="navbar">
        <div className="nav-inner">
          <a href="#" className="nav-logo">
            Launchpad v2
          </a>
          <ul className="nav-links">
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#pricing">Pricing</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
          </ul>
          <a href="#get-started" className="btn btn-outline">
            Sign in
          </a>
        </div>
      </nav>

      <main>
        <section className="hero">
          <div className="hero-inner">
            <span className="badge">Now in public beta</span>
            <h1>
              Build faster.
              <br />
              Ship with confidence.
            </h1>
            <p className="hero-sub">
              Launchpad gives your team the tools to go from idea to production
              in record time — without the usual headaches.
            </p>
            <div className="hero-actions">
              <a href="#get-started" className="btn btn-primary">
                Get started free
              </a>
              <a href="#features" className="btn btn-ghost">
                See how it works
              </a>
            </div>
          </div>
        </section>

        <section className="features" id="features">
          <div className="section-inner">
            <h2 className="section-title">Everything you need to launch</h2>
            <p className="section-sub">
              Three pillars that power every great product.
            </p>
            <div className="cards">
              <div className="card">
                <div className="card-icon">⚡</div>
                <h3>Blazing fast</h3>
                <p>
                  Optimized build pipelines and edge delivery get your app in
                  front of users in milliseconds, anywhere on the globe.
                </p>
              </div>
              <div className="card">
                <div className="card-icon">🔒</div>
                <h3>Secure by default</h3>
                <p>
                  End-to-end encryption, role-based access controls, and
                  automated security scans ship with every project out of the
                  box.
                </p>
              </div>
              <div className="card">
                <div className="card-icon">📈</div>
                <h3>Built to scale</h3>
                <p>
                  Auto-scaling infrastructure means you pay for what you use and
                  never worry about traffic spikes taking your app offline.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-inner">
          <span className="nav-logo">Launchpad</span>
          <p>&copy; 2026 Launchpad, Inc. All rights reserved.</p>
          <ul className="footer-links">
            <li>
              <a href="#privacy">Privacy</a>
            </li>
            <li>
              <a href="#terms">Terms</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default App;
