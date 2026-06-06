<script>
	import StdFromSide from '../StdFromSide.svelte';
	import BrushStroke from '$lib/assets/TransparentBrushStroke.png';
	import { browser } from '$app/environment';

	let width = $state(0);

	$effect(() => {
		width = typeof window !== 'undefined' ? window.innerWidth : 800;
	});

	let paddingValue = $derived(width <= 800 ? '0svh' : '3rem');
</script>

<StdFromSide
	backgroundColour="--BajaBlack"
	paddingTopBottom={paddingValue}
	backgroundImage={BrushStroke}
>
	<h3>Current Sponsors</h3>
	<div>
		<div>
			<img alt="Schulich logo" src="./schulich-logo.svg" />
			<h4>Schulich School of Engineering</h4>
		</div>
		<div>
			<img alt="Bilstein logo" src="https://bilstein-ymm.apacatapult.com/theme/assets/logo.png" />
			<h4>Bilstein</h4>
		</div>
		<div>
			<img
				alt="Solidworks logo"
				src="https://www.3ds.com/assets/3ds-navigation/3DS_corporate-logo_solidworks.svg"
			/>
			<h4>Solidworks</h4>
		</div>
	</div>
	<div class="HomeSponsorLinks">
		<a href="/sponsors">See All</a><a href="/sponsors">Support Us</a>
	</div>
</StdFromSide>

<style>
	h3 {
		border-bottom: none;
		/* font-size: 50px; */
		font-size: var(--BajaTitleFontSize);
		margin-top: 1.5rem;

		text-align: center;
	}

	h4 {
		font-size: 18.72px;
		margin: 0.5rem 0svw;
	}

	a {
		background-color: var(--BajaRed);
		border-radius: 1rem;
		color: inherit;
		font-size: large;
		text-align: center;
		text-decoration: none;
		text-wrap: nowrap;
		color: var(--BajaWhite);
		margin: 0 2svw;
		padding: 0.5rem 1.5rem;
	}

	a:hover {
		background-color: var(--BajaHover);
		color: var(--BajaBlack);
	}

	img {
		align-self: center;
		border-radius: 1rem;
		max-height: 80px;
		max-width: inherit;
		min-height: 0;
		min-width: 200px;
		object-fit: contain;
		width: auto;
	}

	div {
		column-gap: 6svw;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		padding: 0.5rem 0svw;
		row-gap: 1rem;
		text-align: center;
	}

	div > div {
		align-items: center;
		flex-direction: column;
		row-gap: 0;
	}

	.HomeSponsorLinks {
		flex-direction: row;
		justify-content: center;
		/* padding-top: 1rem; */
		padding: 0px;
		width: inherit;
	}

	@media only screen and (max-width: 800px) {
		h3 {
			margin-top: 11rem;
		}

		div {
			margin-bottom: 4.5rem;
		}

		div > div {
			margin-bottom: 0px;
		}
	}
</style>
