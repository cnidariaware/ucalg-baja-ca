<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
	href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap"
	rel="stylesheet"
/>

<section>
	<aside>
		<h2>THE</h2>
		<h1>NUMBERS</h1>
	</aside>

	<div>
		<!-- Students -->
		<article>
			<h3>STUDENTS</h3>
			<span>48</span>
			<p>
				A crew of 48 engineering students who expand their skills, test their limits, and help each
				other grow.
			</p>
		</article>

		<!-- Growth -->
		<article>
			<h3>GROWTH</h3>
			<span>200%</span>
			<p>Our team is booming this year—with more than double the size compared to last season.</p>
		</article>

		<!-- Subteams -->
		<article>
			<h3>SUBTEAMS</h3>
			<span>7</span>
			<p>
				Seven subteams let members dive deep into what they love—or challenge themselves to learn
				something new.
			</p>
		</article>

		<!-- Founded -->
		<article>
			<h3>FOUNDED</h3>
			<span>1990</span>
			<p>
				Built on decades of experience since 1990, giving students a place to spread their wings and
				see how far they can go.
			</p>
		</article>

		<!-- School Years -->
		<article>
			<h3>SCHOOL YEARS</h3>
			<span>4</span>
			<p>
				Members typically spend 4 years with us—rotating through design, manufacturing, testing, and
				operations.
			</p>
		</article>

		<!-- Competition Ranking -->
		<article>
			<h3>COMPETITION RANKING</h3>
			<span>Top 30</span>
			<p>
				Among the leading BAJA SAE teams in Canada, always pushing for higher ranks and bigger
				challenges.
			</p>
		</article>
	</div>
</section>

<style>
	:root {
		--bg: #fff;
		--ink: #0e0e0f;
		--muted: #6e6e73;
		--grid-gap: clamp(1.25rem, 2.5vw, 2rem);
		--side-pad: clamp(1rem, 4vw, 3rem);
		--maxw: 1200px;
	}

	* {
		box-sizing: border-box;
	}

	section {
		display: grid;
		grid-template-columns: minmax(220px, 1fr) minmax(0, 2fr);
		align-items: start;
		gap: clamp(2rem, 6vw, 5rem);
		max-width: var(--maxw);
		margin: 0 auto;
		padding: clamp(2rem, 6vw, 4rem) var(--side-pad) clamp(3rem, 8vw, 5rem);
		background: var(--bg);
		color: var(--ink);
		font-family:
			Inter,
			system-ui,
			-apple-system,
			Segoe UI,
			Roboto,
			Arial,
			sans-serif;
		line-height: 1.5;
	}

	/* Left “THE NUMBERS” column */
	aside {
		position: sticky;
		top: 0; /* nice effect on tall pages */
	}
	h2 {
		margin: 0;
		font-weight: 400;
		letter-spacing: 0.12em;
		font-size: clamp(1.75rem, 3vw, 2.25rem);
	}
	h1 {
		margin: 0.15em 0 0 0;
		font-weight: 300;
		letter-spacing: 0.02em;
		font-size: clamp(2.75rem, 6vw, 3.75rem);
	}

	/* Right stats grid */
	div {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: var(--grid-gap) calc(var(--grid-gap) * 1.25);
	}

	article {
		border-left: 1px solid #e9e9ec;
		padding-left: clamp(1rem, 2vw, 1.25rem);
	}

	h3 {
		margin: 0 0 0.35rem 0;
		font-size: 0.875rem;
		letter-spacing: 0.16em;
		font-weight: 600;
		color: #222;
	}

	span {
		font-family: 'Space Grotesk', Inter, system-ui, sans-serif;
		font-size: clamp(3rem, 7vw, 5rem);
		line-height: 1.05;
		font-weight: 700;
		margin: 0 0 0.5rem 0;
		letter-spacing: 0.02em;
		font-variant-numeric: tabular-nums lining-nums;
	}

	p {
		margin: 0;
		color: var(--muted);
		font-size: clamp(0.95rem, 1.4vw, 1rem);
		max-width: 52ch;
	}

	/* Make % sign and “Top 30” sit nicely */
	article:nth-child(2) > span {
		letter-spacing: 0.01em;
	}
	article:nth-child(6) > span {
		text-transform: none;
	}

	/* Responsive */
	@media (max-width: 900px) {
		section {
			grid-template-columns: 1fr;
			gap: 2.25rem;
		}
		aside {
			position: static;
			text-align: left;
		}
		div {
			grid-template-columns: 1fr;
		}
		article {
			border-left: none;
			border-top: 1px solid #eee;
			padding: clamp(1rem, 3vw, 1.25rem) 0 0 0;
		}
	}

	/* Niceties for consistent rhythm */
	article > span + p {
		margin-top: 0.15rem;
	}
</style>
