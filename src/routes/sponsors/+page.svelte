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
								<a href={item.Url}>
									<img alt="{item.SponsorName}'s Logo" src={item.LogoUrl} />
									{#if tier == order[0] || tier == order[1] || tier == order[2]}
										<div>
											<h2>
												{item.SponsorName}
											</h2>

											{#if tier == order[0] || tier == order[1]}
												<p>{item.DescriptionAboutSponsor}</p>
											{/if}
										</div>
									{/if}
								</a>
							</div>
						{/each}
					</div>
				{/if}
			{/each}
		</div>
	{/if}
	<img
		src="https://res.cloudinary.com/dqr21nexg/image/upload/v1763606815/SponsorShip_package_fyb9uv.png"
		alt="Sponsorship Package"
	/>
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
	a {
		text-decoration: none;
	}
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
		margin-top: 20px;
		margin-right: 10px;
		margin-left: 10px;
		margin-bottom: 10px;
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
		margin-top: 10px;
		margin-bottom: 10px;
		margin-left: 20px;
		font-size: 2em;
	}
	div > div > div {
		display: flex;
		justify-content: center;
		column-gap: 65px;
		flex-wrap: wrap;
		align-items: center;
		height: 50%;
		max-width: 100%;
	}
	div > div > div > div > a {
		text-decoration: none;
		border: solid 1px var(--BajaBlack);
		min-width: auto;
		max-width: 900px;
		text-align: right;
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
		justify-content: left;
		margin: 10px;
		border-radius: 15px;
	}
	div > div > div > div > a > div {
		border-style: none;
		text-align: center;
		display: flex;
		flex-wrap: wrap;
		min-width: 0px;
		max-width: 500px;
		padding-bottom: 0%;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}
	p {
		text-align: left;
		margin-bottom: 0;
		color: var(--BajaWhite);
		padding-top: -10px;
		padding-left: 10%;
		padding-right: 10%;
		padding-bottom: 25px;
	}
</style>
