<script>
	import { fly } from 'svelte/transition';
	let { titleText, imgUrl, subtitleText } = $props();
	let titleLines = $derived(titleText.split(' '));
</script>

<div
	style={`background-image: linear-gradient(to bottom, rgba(0,0,0,0) 70%, #1f1f1f 100%), url('${imgUrl}')`}
>
	<div>
		{#each titleLines as word, i}
			<h1 style={`margin-right: ${i * 2}rem;`} in:fly={{ y: -10, duration: 100, delay: i * 100 }}>
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
		--banner-text-padding: none;
		--banner-text-rounding: 1rem;
	}

	div {
		position: relative; /* anchor for children if needed */
		height: 100svh;
		width: 100%;
		display: flex;
		justify-content: flex-end;
		/* align-items: flex-start; */
		background:
        /* top layer: the fade */
			linear-gradient(to bottom, rgba(0, 0, 0, 0) var(--fade-starts-at-bottom, 70%), #1f1f1f 100%),
			/* bottom layer: the image */ no-repeat center / cover;
		/* (equivalent to background-image + size/pos/repeat for both layers) */

		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
	}

	/* title/subtitle wrapper */
	div > div {
		height: fit-content;
		margin-top: 12svh;
		width: fit-content;
		margin-right: 2svw;
		border-radius: 1rem;
		background: initial;
		/* background-color: rgba(0, 0, 0, 0.1); */
		flex-direction: column;
	}

	h1 {
		/* font-size: 100px; */
		font-size: 8.5rem;
		font-weight: bolder;
		text-align: end;
		color: var(--BajaWhite);
		margin: var(--banner-text-padding);
		border-radius: var(--banner-text-rounding);
		text-shadow: rgba(0, 0, 0, 0.8);
		max-width: 100%;

		opacity: 0;
		animation: fadeSlide 0.6s ease-out 0.3s forwards;
	}

	h2 {
		width: fit-content;
		font-size: xx-large;
		font-weight: normal;
		color: var(--BajaWhite);
		margin: var(--banner-text-padding);
		border-radius: var(--banner-text-rounding);

		opacity: 0.9;
		text-shadow: 0 2px 10px rgba(black, 3);
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
			font-size: 3.25rem;
		}

		div > div {
			margin-right: 1rem;
		}
	}
</style>
