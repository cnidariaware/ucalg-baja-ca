<script>
	let { titleText, imgUrl, subtitleText } = $props();
</script>

<div style="background-image: url({imgUrl})">
	<div>
		<h1>{titleText}</h1>
		<h2>{subtitleText}</h2>
	</div>
</div>

<style>
	:root {
		--fade-starts-at-bottom: 90%;
		--fade-starts-at-top: 96%;
		--banner-text-background: rgba(31, 31, 31, 0.8);
		--banner-text-padding: 2svh 2svw;
		--banner-text-rounding: 1rem;
	}

	div {
		height: 100svh;
		width: 100%;
		display: flex;
		justify-content: flex-end;

		z-index: 0;
		top: 0;
		left: 0;
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
	}

	/* Fix later */
	/* div::after {
		content: '';
		position: absolute;
		inset: 0;
		background: linear-gradient(
			to bottom,
			rgba(0, 0, 0, 0) var(--fade-starts-at-bottom, 70%),
			#1f1f1f 100%
		);
		pointer-events: none; 
		z-index: 1;
	} */

	/* used to postiion title and sub title */
	div > div {
		height: fit-content;
		padding-top: 35svh;
		margin-left: auto;
		margin-right: 4svw;
		/* padding-left: 60svw; */
		/* text-align: end; */
		background: initial;
	}

	div > div::after {
		content: initial;
		pointer-events: initial;
		z-index: initial;
		position: initial;
		inset: initial;
		background: initial;
	}

	h1 {
		font-size: 100px; /* todo make larger */
		font-weight: normal;
		text-align: end;
		width: 11ch;
		height: initial;
		color: var(--BajaWhite);
		/* background-color: var(--banner-text-background); */
		padding: var(--banner-text-padding);
		margin: 0px;
		border-radius: var(--banner-text-rounding);
		font-weight: bolder;
	}

	h2 {
		width: fit-content;

		font-size: xx-large;
		font-weight: normal;

		color: var(--BajaWhite);
		/* background-color: var(--banner-text-background); */
		padding: var(--banner-text-padding);
		border-radius: var(--banner-text-rounding);
	}
</style>
