<script>
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet">
</svelte:head>

<title>UCalgary Baja - About</title>
<section class="wrap">
  <aside class="hero">
    <h2 class="eyebrow">THE</h2>
    <h1 class="title">NUMBERS</h1>
  </aside>

  <div class="grid">
    <!-- Students -->
    <article class="stat">
      <h3 class="label">STUDENTS</h3>
      <div class="value">48</div>
      <p class="desc">
        A crew of 48 engineering students who expand their skills, test their limits, and help each other grow.
      </p>
    </article>

    <!-- Growth -->
    <article class="stat">
      <h3 class="label">GROWTH</h3>
      <div class="value">200%</div>
      <p class="desc">
        Our team is booming this year—with more than double the size compared to last season.
      </p>
    </article>

    <!-- Subteams -->
    <article class="stat">
      <h3 class="label">SUBTEAMS</h3>
      <div class="value">7</div>
      <p class="desc">
        Seven subteams let members dive deep into what they love—or challenge themselves to learn something new.
      </p>
    </article>

    <!-- Founded -->
    <article class="stat">
      <h3 class="label">FOUNDED</h3>
      <div class="value">1990</div>
      <p class="desc">
        Built on decades of experience since 1990, giving students a place to spread their wings and see how far they can go.
      </p>
    </article>

    <!-- School Years -->
    <article class="stat">
      <h3 class="label">SCHOOL YEARS</h3>
      <div class="value">4</div>
      <p class="desc">
        Members typically spend 4 years with us—rotating through design, manufacturing, testing, and operations.
      </p>
    </article>

    <!-- Competition Ranking -->
    <article class="stat">
      <h3 class="label">COMPETITION RANKING</h3>
      <div class="value">Top 30</div>
      <p class="desc">
        Among the leading BAJA SAE teams in Canada, always pushing for higher ranks and bigger challenges.
      </p>
    </article>
  </div>
</section>

<style>
  :root{
    --bg: #fff;
    --ink: #0e0e0f;
    --muted: #6e6e73;
    --grid-gap: clamp(1.25rem, 2.5vw, 2rem);
    --side-pad: clamp(1rem, 4vw, 3rem);
    --maxw: 1200px;
  }

  * { box-sizing: border-box; }

  section.wrap{
    display: grid;
    grid-template-columns: minmax(220px, 1fr) minmax(0, 2fr);
    align-items: start;
    gap: clamp(2rem, 6vw, 5rem);
    max-width: var(--maxw);
    margin: 0 auto;
    padding: clamp(2rem, 6vw, 4rem) var(--side-pad) clamp(3rem, 8vw, 5rem);
    background: var(--bg);
    color: var(--ink);
    font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
    line-height: 1.5;
  }

  /* Left “THE NUMBERS” column */
  .hero{
    position: sticky;
    top: 0; /* nice effect on tall pages */
  }
  .eyebrow{
    margin: 0;
    font-weight: 400;
    letter-spacing: .12em;
    font-size: clamp(1.75rem, 3vw, 2.25rem);
  }
  .title{
    margin: .15em 0 0 0;
    font-weight: 300;
    letter-spacing: .02em;
    font-size: clamp(2.75rem, 6vw, 3.75rem);
  }

  /* Right stats grid */
  .grid{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--grid-gap) calc(var(--grid-gap) * 1.25);
  }

  .stat{
    border-left: 1px solid #e9e9ec;
    padding-left: clamp(1rem, 2vw, 1.25rem);
  }

  .label{
    margin: 0 0 .35rem 0;
    font-size: .875rem;
    letter-spacing: .16em;
    font-weight: 600;
    color: #222;
  }

  .value{
    font-family: "Space Grotesk", Inter, system-ui, sans-serif;
    font-size: clamp(3rem, 7vw, 5rem);
    line-height: 1.05;
    font-weight: 700;
    margin: 0 0 .5rem 0;
    letter-spacing: .02em;
    font-variant-numeric: tabular-nums lining-nums;
  }

  .desc{
    margin: 0;
    color: var(--muted);
    font-size: clamp(.95rem, 1.4vw, 1rem);
    max-width: 52ch;
  }

  /* Make % sign and “Top 30” sit nicely */
  .stat:nth-child(2) .value { letter-spacing: 0.01em; }
  .stat:nth-child(6) .value { text-transform: none; }

  /* Responsive */
  @media (max-width: 900px){
    section.wrap{
      grid-template-columns: 1fr;
      gap: 2.25rem;
    }
    .hero{
      position: static;
      text-align: left;
    }
    .grid{
      grid-template-columns: 1fr;
    }
    .stat{
      border-left: none;
      border-top: 1px solid #eee;
      padding: clamp(1rem, 3vw, 1.25rem) 0 0 0;
    }
  }

  /* Small niceties for consistent rhythm */
  .stat .value + .desc { margin-top: .15rem; }
</style>
