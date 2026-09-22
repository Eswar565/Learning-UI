// Each constant is the live source that BOTH renders the section (through
// react-live) and feeds the code editor panel. Edit here, edit in the UI — same string.

export const navbarCode = `<nav className="nav">
  <div className="nav__brand">
    <span className="nav__mark" />
    ORACLE <span className="accent">RED BULL</span> RACING
  </div>
  <ul className="nav__links">
    <li>Drivers</li>
    <li>Achievements</li>
    <li>Car Specs</li>
  </ul>
  <button className="btn btn--race">Gives You Wings</button>
</nav>`;

export const heroCode = `<header className="hero">
  <p className="hero__kicker">FIA FORMULA ONE WORLD CHAMPIONS // MILTON KEYNES</p>
  <h1 className="hero__title">
    CHARGING AHEAD.<br /><span className="accent">DRIVEN TO WIN.</span>
  </h1>
  <p className="hero__sub">
    Oracle Red Bull Racing has redefined Formula 1 excellence with world-class engineering, relentless racecraft, and champion mindset.
  </p>
  <div className="hero__cta">
    <button className="btn btn--race">Meet The Drivers</button>
    <button className="btn btn--ghost">Team Trophies</button>
  </div>
  <div className="hero__stats">
    <div><strong>6</strong><span>Constructors' Titles</span></div>
    <div><strong>8</strong><span>Drivers' Titles</span></div>
    <div><strong>120+</strong><span>Grand Prix Wins</span></div>
    <div><strong>1.82s</strong><span>World Record Stop</span></div>
  </div>
</header>`;

export const teamCode = `<section className="section">
  <h2 className="section__title">THE <span className="accent">DRIVERS</span> &amp; CREW</h2>
  <div className="grid">
    <article className="card card--gold">
      <span className="badge badge--gold">4x World Champion</span>
      <span className="card__num">01</span>
      <h3>Max Verstappen</h3>
      <span className="card__role">Lead Driver // Netherlands</span>
      <p>Dominant 4-time consecutive World Champion (2021–2024). Holds all-time F1 records for 19 wins in a single season and 10 consecutive Grand Prix victories.</p>
      <div className="card__stats">
        <div><strong>4</strong><span>Titles</span></div>
        <div><strong>63</strong><span>Wins</span></div>
        <div><strong>111</strong><span>Podiums</span></div>
      </div>
    </article>
    <article className="card">
      <span className="badge badge--red">Vice Champion</span>
      <span className="card__num">11</span>
      <h3>Sergio Pérez</h3>
      <span className="card__role">Race Driver // Mexico</span>
      <p>Celebrated as &quot;Checo&quot; and the Master of Street Circuits. 2023 Drivers' Championship Runner-up and key pillar in Red Bull's consecutive team titles.</p>
      <div className="card__stats">
        <div><strong>6</strong><span>Wins</span></div>
        <div><strong>39</strong><span>Podiums</span></div>
        <div><strong>3</strong><span>Poles</span></div>
      </div>
    </article>
    <article className="card">
      <span className="badge">Paddock Record</span>
      <span className="card__num">PIT</span>
      <h3>Pit Crew &amp; Strategy</h3>
      <span className="card__role">Milton Keynes Tech Campus</span>
      <p>The fastest pit wall in Formula 1 history. Set the world record 1.82-second tyre change and countless DHL Fastest Pit Stop trophies.</p>
      <div className="card__stats">
        <div><strong>1.82s</strong><span>Pit Record</span></div>
        <div><strong>6x</strong><span>DHL Winner</span></div>
        <div><strong>6</strong><span>Titles</span></div>
      </div>
    </article>
  </div>
</section>`;

export const achievementsCode = `<section className="section">
  <h2 className="section__title">TEAM &amp; DRIVER <span className="accent">ACHIEVEMENTS</span></h2>
  <div className="grid">
    <article className="card card--gold">
      <span className="badge badge--gold">Team Honors</span>
      <h3>Constructors' Dominance</h3>
      <ul className="schedule">
        <li><span>6 TITLES</span><strong>World Constructors' Cups</strong><em>2010-13, 2022-23</em></li>
        <li><span>21 / 22</span><strong>Most Dominant F1 Season</strong><em>Record 95.5% Win Rate</em></li>
        <li><span>120+</span><strong>Grand Prix Victories</strong><em>Since 2005 Debut</em></li>
        <li><span>1.82s</span><strong>Fastest Pit Stop in History</strong><em>DHL World Record</em></li>
      </ul>
    </article>
    <article className="card">
      <span className="badge badge--red">Driver Records</span>
      <h3>Driver Milestones</h3>
      <ul className="schedule">
        <li><span>VER #01</span><strong>4x World Drivers' Champion</strong><em>2021, 2022, 2023, 2024</em></li>
        <li><span>VER #01</span><strong>10 Consecutive GP Wins</strong><em>All-Time F1 Record</em></li>
        <li><span>PER #11</span><strong>2023 Vice-World Champion</strong><em>Historic Red Bull 1-2</em></li>
        <li><span>PER #11</span><strong>6 Grand Prix Victories</strong><em>Baku, Monaco, Singapore</em></li>
      </ul>
    </article>
  </div>
</section>`;

// Kept for backward compatibility with any schedule imports
export const scheduleCode = achievementsCode;

export const carsCode = `<section className="section section--alt">
  <h2 className="section__title">THE <span className="accent">MACHINERY</span> // RB20</h2>
  <div className="grid">
    <article className="card card--spec">
      <span className="badge badge--gold">Championship Challenger</span>
      <h3>RB20 Race Car</h3>
      <ul>
        <li><strong>Power Unit:</strong> Honda RBPTH002 1.6L V6 Turbo Hybrid</li>
        <li><strong>Power Output:</strong> 1,000+ Horsepower @ 15,000 RPM</li>
        <li><strong>Chassis:</strong> Red Bull carbon-composite monocoque</li>
        <li><strong>Minimum Weight:</strong> 798 kg with driver</li>
      </ul>
    </article>
    <article className="card card--spec">
      <span className="badge badge--red">Historic Legend</span>
      <h3>RB19 Predecessor</h3>
      <ul>
        <li><strong>Legacy:</strong> Most successful car in F1 history</li>
        <li><strong>Season Record:</strong> 21 wins from 22 races</li>
        <li><strong>Win Rate:</strong> 95.45% historic benchmark</li>
        <li><strong>Aerodynamics:</strong> Advanced ground-effect floor</li>
      </ul>
    </article>
  </div>
</section>`;

export const footerCode = `<footer className="footer">
  <span>ORACLE <span className="accent">RED BULL</span> RACING</span>
  <span className="footer__note">Click any section to edit its JSX live.</span>
</footer>`;
