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
							<img alt="Blah" src={item.LogoUrl} width="35px" />
							<div>
								<h4>
									{item.SponsorName}
								</h4>
								{#if tier == order[0] || tier == order[1]}
									<h5>{item.DescriptionAboutSponsor}</h5>
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
	pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed
	diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl
	malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad
	litora torquent per conubia nostra inceptos himenaeos. Lorem ipsum dolor sit amet consectetur
	adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi
	pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus
	fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc
	posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia
	nostra inceptos himenaeos.
</p>

<style>
	div {
		background-color: gray;
	}
	h4 {
		text-align: center;
		display: block;
		color: #000;
		font-size: 1.5em;
		margin-top: 1.33em;
		margin-bottom: 1.33em;
		margin-left: 0;
		margin-right: 0;
	}
	img {
		display: flex;
		justify-content: left;
		align-items: center;
		width: 20%;
		height: 20%;
		margin: auto;
		padding: 5px;
	}
	div {
		padding: 10px;
		border-style: none;
		border-width: 1px;
	}
	h2 {
		display: flex;
		justify-content: center;
	}
	div > div {
		display: flex;
		justify-content: center;
		column-gap: 50px;
		flex-wrap: wrap;

		align-items: center;
		height: 50%;
		width: 100%;
	}
	div > div > div {
		border-style: solid;
		min-width: 10svw;
		max-width: 70%;
		text-align: right;
		display: flex;
		justify-content: left;
		padding: 10px;
	}
	div > div > div > div {
		border-style: none;
		text-align: center;
		display: flex;
		justify-content: center;
		flex-direction: column;
	}
</style>
