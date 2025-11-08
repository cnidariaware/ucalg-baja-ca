<script>
	import TopBanner from '$lib/components/TopBanner.svelte';
	let sponsorInfo = $state('');
	let gotThing = $state(false);
	const fetchingData = async () => {
		let sponsors = await fetch('http://localhost:6526/sponsors');
		// sponsorInfo = await sponsors.json();
		let test = await sponsors.json();

		// Iterate through each tier
		// for (let tier in test) {
		// 	console.log('Tier:', tier);

		// 	// Iterate through each sponsor in that tier
		// 	for (let i = 0; i < test[tier].length; i++) {
		// 		console.log(test[tier][i].SponsorName);
		// 	}
		// }

		sponsorInfo = await test;
		gotThing = true;
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
		{#each Object.keys(sponsorInfo) as tier, index}
			<h2>{tier}</h2>
			{#each sponsorInfo[tier] as item, i}
				<img alt="Blah" src={item.LogoUrl} />
				<div>
					<h4>
						{item.DescriptionAboutSponsor}
					</h4>
				</div>
			{/each}
		{/each}
	</div>
{/if}

<h4>Sponsorship Benefits</h4>
<p1>
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
</p1>

<style>
	h4 {
		text-align: center;
		display: block;
		color: #000;
		font-family: 'Times New Roman', Times, serif;
		font-size: 1.5em;
		margin-top: 1.33em;
		margin-bottom: 1.33em;
		margin-left: 0;
		margin-right: 0;
	}
	img {
		display: flex;
		justify-content: center;
		width: 150px;
	}
	div > div {
		text-align: left;
		display: flex;
	}
</style>
