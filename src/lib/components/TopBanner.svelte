<script>
	let { titleText, imgUrl, subtitleText } = $props();
	let titleLines = $derived(titleText.split(' '));
</script>

<div
	style={`background-image: linear-gradient(to bottom, rgba(0,0,0,0) 65%, #1f1f1f 100%), url(${imgUrl});`}
>
	<div>
		{#each titleLines as word, i}
			<h1 style={'margin-right: ${i * 2}rem animation-delay: ${i * 0.1}s;'}>
				{word}
			</h1>
		{/each}

		{#if subtitleText}
			<h2>{subtitleText}</h2>
		{/if}
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
		justify-content: flex-start;
		align-items: flex-start;
		padding: 6svh;

		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
	}

	/* title/subtitle wrapper */
	div > div {
		display: flex;
		flex-direction: column;
		align-items: flex-end;
	}

	h1 {
		/* font-size: 100px; */
		font-size: 7.5rem;
		font-weight: bolder;
		text-align: right;
		color: var(--BajaWhite);
		margin: 0;
		letter-spacing: -0.02em;
		line-height: 1.05;

		text-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);

		opacity: 0;
		animation: fadeSlide 0.6s ease-out forwards;
	}

	h2 {
		margin-top: 1rem;
		font-size: xx-large;
		font-weight: normal;
		color: var(--BajaWhite);
		text-align: right;

		opacity: 0.9;
		text-shadow: 0 2px 10px rgba(0, 0, 0, 0, 4);
	}

	@keyframes fadeSlide {
		from {
			opacity: 0;
			transform: translateY(-10px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@media only screen and (max-width: 800px) {
		h1 {
			font-size: 3.5rem;
		}

		div > div {
			margin-right: 1rem;
		}
	}
</style>
