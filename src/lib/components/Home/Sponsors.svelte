<script>
	import StdFromSide from '../StdFromSide.svelte';
	import BrushStroke from '$lib/assets/TransparentBrushStroke.png';
</script>

<StdFromSide
	backgroundColour="--BajaBlack"
	textColour="--BajaWhite"
	paddingTopBottom="8svh"
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
s

<!-- <script>
	import StdFromSide from '../StdFromSide.svelte';
	import BrushStroke from '$lib/assets/TransparentBrushStroke.png';
</script>

<img src={BrushStroke} alt="" />

<StdFromSide backgroundColour="--BajaWhite" paddingTopBottom="8svh" background-image={BrushStroke}>
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
  -->
<style>
	h3 {
		border-bottom: none;
		font-size: 50px;
		margin-top: 0px;

		text-align: center;
	}

	h4 {
		font-size: 18.72px;
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
		padding: 1svh 4svw;
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
		padding: 1svh 0svw;
		row-gap: 4svh;
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
		padding-top: 2svh;
		width: inherit;
	}
</style>
