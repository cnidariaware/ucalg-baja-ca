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
	<h4>Sponsorship Benefits</h4>
	<table class="sponsor-table">
		<thead>
			<tr>
				<th></th>
				<th>Bronze<br />&gt;$250</th>
				<th>Silver<br />$1,000</th>
				<th>Gold<br />$2,500</th>
				<th>Platinum<br />$5,000</th>
				<th>Diamond<br />$10,000</th>
			</tr>
		</thead>
		<tbody>
			<!-- Logo on Website -->
			<tr>
				<th>Logo On<br />Website</th>
				<td
					><img
						class="cross"
						src="https://www.svgrepo.com/show/491212/cross.svg"
						alt="Included"
					/></td
				>
				<td
					><img
						class="cross"
						src="https://www.svgrepo.com/show/491212/cross.svg"
						alt="Included"
					/></td
				>
				<td
					><img
						class="cross"
						src="https://www.svgrepo.com/show/491212/cross.svg"
						alt="Included"
					/></td
				>
				<td
					><img
						class="cross"
						src="https://www.svgrepo.com/show/491212/cross.svg"
						alt="Included"
					/></td
				>
				<td
					><img
						class="cross"
						src="https://www.svgrepo.com/show/491212/cross.svg"
						alt="Included"
					/></td
				>
			</tr>

			<!-- Social Media Exposure -->
			<tr>
				<th>Social Media<br />Exposure</th>
				<td></td>
				<td
					><img
						class="cross"
						src="https://www.svgrepo.com/show/491212/cross.svg"
						alt="Included"
					/></td
				>
				<td
					><img
						class="cross"
						src="https://www.svgrepo.com/show/491212/cross.svg"
						alt="Included"
					/></td
				>
				<td
					><img
						class="cross"
						src="https://www.svgrepo.com/show/491212/cross.svg"
						alt="Included"
					/></td
				>
				<td
					><img
						class="cross"
						src="https://www.svgrepo.com/show/491212/cross.svg"
						alt="Included"
					/></td
				>
			</tr>

			<!-- Shop Tour / Introduction -->
			<tr>
				<th>Shop Tour /<br />Introduction</th>
				<td></td>
				<td></td>
				<td
					><img
						class="cross"
						src="https://www.svgrepo.com/show/491212/cross.svg"
						alt="Included"
					/></td
				>
				<td
					><img
						class="cross"
						src="https://www.svgrepo.com/show/491212/cross.svg"
						alt="Included"
					/></td
				>
				<td
					><img
						class="cross"
						src="https://www.svgrepo.com/show/491212/cross.svg"
						alt="Included"
					/></td
				>
			</tr>

			<!-- Social Media Feature -->
			<tr>
				<th>Social Media<br />Feature</th>
				<td></td>
				<td></td>
				<td></td>
				<td
					><img
						class="cross"
						src="https://www.svgrepo.com/show/491212/cross.svg"
						alt="Included"
					/></td
				>
				<td
					><img
						class="cross"
						src="https://www.svgrepo.com/show/491212/cross.svg"
						alt="Included"
					/></td
				>
			</tr>

			<!-- Logo on Vehicle -->
			<tr>
				<th>Logo On<br />Vehicle</th>
				<td>Small</td>
				<td>Small</td>
				<td>Medium</td>
				<td>Large</td>
				<td>Full Body<br />Panel</td>
			</tr>
		</tbody>
	</table>
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
<div>
	<!-- Contact form -->
</div>

<style>
	td > img {
		margin: auto;
		filter: invert();
	}
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
	a > img {
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
	table {
		margin-top: 75px;
		border-collapse: collapse;
		width: 100%;
		max-width: 900px;
		color: var(--BajaWhite);
		border-style: hidden;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 75px;
	}

	.sponsor-table th,
	.sponsor-table td {
		border: 3px solid var(--BajaWhite);
		border-radius: 100%;
		padding: 16px;
		text-align: center;
		vertical-align: middle;
		font-size: 18px;
	}

	.sponsor-table thead th {
		font-size: 22px;
		font-weight: 600;
	}

	.sponsor-table th:first-child {
		text-align: left;
		width: 30%;
	}

	.sponsor-table .cross {
		width: 40px;
		height: 40px;
		object-fit: contain;
	}
</style>
