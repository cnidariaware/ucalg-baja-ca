<script>
	import TopBanner from '$lib/components/TopBanner.svelte';
	let sponsorInfo = $state('');
	let order = ['Diamond Tier', 'Platinum Tier', 'Gold Tier', 'Silver Tier', 'Bronze Tier'];
	let gotThing = $state(false);
	const fetchingData = async () => {
		let sponsors = await fetch('http://localhost:6526/sponsors');
		let test = await sponsors.json();

		sponsorInfo = await test;
		gotThing = true;
		$inspect(sponsorInfo);
	};

	$inspect(sponsorInfo);
</script>

<title>UCalgary Baja - Sponsors</title>

<TopBanner
	titleText="Sponsors"
	imgUrl="https://res.cloudinary.com/dpgrgsh7g/image/upload/v1755914692/IMG_6671_daaeeq.jpg"
/>
<div>
	<h4>Current sponsors</h4>
	<button onclick={fetchingData}> Press me </button>
	{#if sponsorInfo !== ''}
		<div>
			{#each order as tier}
				{#if sponsorInfo[tier]}
					<h2>{tier}</h2>
					<div>
						{#each sponsorInfo[tier] as item}
							<div>
								<img alt="Blah" src={item.LogoUrl} />
								<div>
									<h2>
										{item.SponsorName}
									</h2>
									{#if tier == order[0] || tier == order[1]}
										<h2>{item.DescriptionAboutSponsor}</h2>
									{/if}
								</div>
							</div>
						{/each}
					</div>
				{/if}
			{/each}
		</div>
	{/if}

	<h4>Sponsorship Benefits</h4>
	<p>
		Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae
		pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean
		sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa
		nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti
		sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos. Lorem ipsum dolor sit amet
		consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id
		cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar
		vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer
		nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per
		conubia nostra inceptos himenaeos.
	</p>
</div>

<style>
	div {
		background-color: var(--BajaBlack);
		padding-top: 0.33em;
		padding-bottom: 3em;
	}

	h4 {
		text-align: center;
		display: block;
		color: var(--BajaWhite);
		font-size: 3em;
	}
	img {
		display: flex;
		justify-content: left;
		align-items: center;
		background-color: gray;
		width: 150px;
		height: 150px;
		aspect-ratio: auto/1;
		object-fit: contain;
		margin: auto;
		padding: 5px;
		border-radius: 15px;
	}
	div > div {
		padding: 10px;
		border-style: none;
		border-width: 1px;
	}
	h2 {
		display: flex;
		color: var(--BajaWhite);
		justify-content: center;
		font-size: 2em;
	}
	div > div > div {
		display: flex;
		justify-content: center;
		column-gap: 50px;
		flex-wrap: wrap;

		align-items: center;
		height: 50%;
		width: 100%;
	}
	div > div > div > div {
		border-style: solid;
		min-width: 10svw;
		max-width: 70%;
		text-align: right;
		display: flex;
		justify-content: left;
		padding: 10px;
	}
	div > div > div > div > div {
		border-style: none;
		text-align: center;
		display: flex;
		justify-content: center;
		flex-direction: column;
	}
	p {
		text-align: center;
		margin-bottom: 0;
		color: var(--BajaWhite);
	}
</style>
