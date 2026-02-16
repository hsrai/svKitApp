<main class="main-content" id="top">
  
  <header class="page-header">
  <h1 class="page-header__title">The UI Laboratory</h1>
  <p class="page-header__tagline">Testing a User-Centric Design System with Svelte 5.</p>
  
  <nav class="nav-links">
    <div class="nav-links__grid">
      <a href="#typography" class="nav-links__item">1. Typography</a>
      <a href="#interact" class="nav-links__item">2. Interactions</a>
      <a href="#data" class="nav-links__item">3. Data Displays</a>
      <a href="#reading" class="nav-links__item">4. Reading Room</a>
      <a href="#code" class="nav-links__item">5. Technical</a>
    </div>
  </nav>
  </header>

  <section id="typography" class="card">
    <header class="card__header">
      <h2 class="card__title">1. Typography</h2>
      <p class="card__subtitle">Layman: How we represent the "Voice" of our brand.</p>
    </header>
    <div class="card__body">
      <p>
        Standard body text uses your selected <strong>Packing</strong> density. 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. 
        Aliquam erat volutpat. Donec et lacinia nisl.
      </p>
      <blockquote class="card__quote">
        "Design is not just what it looks like and feels like. Design is how it works."
      </blockquote>
    </div>
    <footer class="card__footer">
      <a href="#top" class="card__back-link">↑ BACK TO TOP</a>
    </footer>
  </section>

  <section id="interact" class="card">
    <header class="card__header">
      <h2 class="card__title">2. Interactions</h2>
      <p class="card__subtitle">Layman: Things that react when you touch them.</p>
    </header>
    
    <div class="interaction-group">
      <div class="button-bench">
        <p class="dashboard__label">Button Hierarchy</p>
        <div class="button-bench__list">
          <button class="btn btn--primary" type="button">Primary Action</button>
          <button class="btn btn--secondary" type="button">Secondary Task</button>
          <button class="btn btn--outline" type="button">Outline Button</button>
          <button class="btn btn--ghost" type="button">Ghost Style</button>
        </div>
      </div>

      <form class="lab-form">
        <div class="dashboard__item">
          <label class="dashboard__label" for="name-field">Your Name</label>
          <input type="text" id="name-field" class="dashboard__input" placeholder="e.g. Hardeep Rai" />
        </div>
        <div class="dashboard__item">
          <label class="dashboard__label" for="role-select">Current Role</label>
          <select id="role-select" class="dashboard__input">
            <option>Designer</option>
            <option>Developer</option>
            <option>Product Manager</option>
          </select>
        </div>
      </form>
    </div>
    <footer class="card__footer">
      <a href="#top" class="card__back-link">↑ BACK TO TOP</a>
    </footer>
  </section>

  <section id="data" class="card">
    <header class="card__header">
      <h2 class="card__title">3. Data Displays</h2>
      <p class="card__subtitle">Layman: Organizing information so it's easy to scan.</p>
    </header>

    <div class="table-container">
      <table class="table">
        <thead>
          <tr>
            <th>System Part</th>
            <th>Technology</th>
            <th>Health</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Brain</td>
            <td>Svelte 5 Runes</td>
            <td><span class="badge badge--primary">Healthy</span></td>
          </tr>
          <tr>
            <td>Skin</td>
            <td>Tailwind v4</td>
            <td><span class="badge badge--accent">Active</span></td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="badge-bench">
      <span class="badge badge--neutral">Version 1.0</span>
      <span class="badge badge--primary">Production Ready</span>
    </div>
    <footer class="card__footer">
      <a href="#top" class="card__back-link">↑ BACK TO TOP</a>
    </footer>
  </section>

  <section id="reading" class="card">
    <header class="card__header">
      <h2 class="card__title">4. The Reading Room</h2>
      <div class="reading-meta">
          <span>⏱ 2 MIN READ</span>
          <span>•</span>
          <span>THEME: USER-CENTRICITY</span>
      </div>
    </header>
    
    <div class="card__body">
      <p>
        <strong>On Digital Comfort:</strong> When you select <em>Comfortable</em> from your dashboard, we increase the whitespace. Whitespace is not "empty" space; it is a tool that allows the brain to process information without feeling overwhelmed.
      </p>
      
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida.
      </p>

      <p>
        By contrast, <em>Compact</em> mode is for efficiency. It is the "Cockpit" view for users who need to see everything at once. Our <strong>Brain</strong> logic ensures that even in this dense mode, the lines never overlap and the text remains accessible.
      </p>
    </div>
    <footer class="card__footer">
      <a href="#top" class="card__back-link">↑ BACK TO TOP</a>
    </footer>
  </section>

  <section id="code" class="card card--last">
    <header class="card__header">
      <h2 class="card__title">5. Technical Foundation</h2>
      <p class="card__subtitle">Layman: The raw code powering this experience.</p>
    </header>
    
    <pre class="code-block">
function verifySystem() &lbrace;
  const components = ["Logic", "Bridge", "Skin", "Skeleton"];
  return components.every(c => c.status === "Ready");
&rbrace;
    </pre>

    <div class="alert alert--info">
      <span class="alert__icon">💡</span>
      <div class="alert__content">
        <strong class="alert__title">Architecture Note</strong>
        <p class="alert__message">This page contains zero utility classes for colors or padding. Everything is controlled by the BEM "Skin".</p>
      </div>
    </div>
    <footer class="card__footer">
      <a href="#top" class="card__back-link">↑ BACK TO TOP</a>
    </footer>
  </section>
</main>