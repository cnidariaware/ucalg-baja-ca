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
								<img alt="Sponsor Logo" src={item.LogoUrl} />
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
		flex-wrap: wrap;
		justify-content: left;
		align-items: center;
		background-color: gray;
		width: 250px;
		height: 150px;
		object-fit: contain;
		margin-right: 10px;
		margin-left: 10px;
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
		flex-wrap: wrap;
		color: var(--BajaWhite);
		justify-content: center;
		font-size: 2em;
	}
	div > div > div {
		display: flex;
		justify-content: center;
		column-gap: 5px;
		flex-wrap: wrap;
		align-items: center;
		height: 50%;
		max-width: 100%;
	}
	div > div > div > div {
		border-style: solid;
		min-width: 500px;
		max-width: 900px;
		text-align: right;
		display: flex;
		flex-direction: row;
		justify-content: left;
		padding: 10px;
		border-radius: 15px;
	}
	div > div > div > div > div {
		border-style: none;
		text-align: center;
		display: flex;
		flex-wrap: wrap;
		min-width: auto;
		max-width: 500px;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}
	p {
		text-align: center;
		margin-bottom: 0;
		color: var(--BajaWhite);
	}
</style>
