<script>
	import StdFromSide from '../StdFromSide.svelte';
</script>

<StdFromSide backgroundColour="--BajaWhite" paddingTopBottom="8svh">
	<h3>Current Sponsors</h3>
	<div>
		<div>
			<img
				alt="Schulich logo"
				src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj9L3ZGK6WtOmJbzxmCzRxwLXYKGC5SDcAKHb0ScfbUmbtG0IujQt6eQDaI_Pm9g4DZvc&amp;usqp=CAU"
			/>
			<h4>Schulich School of Engineering</h4>
		</div>
		<div>
			<img alt="darkicewolf50 logo" src="https://darkicewolf50.dev/favicon.ico" />
			<h4>darkicewolf50</h4>
		</div>
		<div>
			<img
				alt="Solidworks logo"
				src="https://www.3ds.com/assets/3ds-navigation/3DS_corporate-logo_solidworks.svg"
			/>
			<h4>Solidworks</h4>
		</div>
	</div>
	<div id="HomeSponsorLinks">
		<a href="/OurSponsors">See All</a><a href="/OurSponsors">Support Us</a>
	</div>
</StdFromSide>

<style>
	h3 {
		border-bottom: none;
		font-size: 50px;
		margin-top: 0;
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

	#HomeSponsorLinks {
		color: var(--BajaBlack);
		flex-direction: row;
		justify-content: center;
		padding-top: 2svh;
		width: inherit;
	}
</style>
