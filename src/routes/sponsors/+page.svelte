<script>
	import TopBanner from '$lib/components/TopBanner.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import bronze from '$lib/assets/sponsor_backgrounds/bronze.jpg';
	import diamond from '$lib/assets/sponsor_backgrounds/diamond.avif';
	import platinum from '$lib/assets/sponsor_backgrounds/platinum.webp';
	// import platinum from '$lib/assets/sponsor_backgrounds/emerald.jpg'; New Emerald tier
	// import platinum from '$lib/assets/sponsor_backgrounds/ruby.jpg'; New Ruby tier
	import silver from '$lib/assets/sponsor_backgrounds/silver.avif';
	import gold from '$lib/assets/sponsor_backgrounds/gold.jpg';

	let sponsorPromise = $state(null);
	const order = ['Diamond Tier', 'Platinum Tier', 'Gold Tier', 'Silver Tier', 'Bronze Tier'];

	const backgrounds = {
		'Diamond Tier': diamond,
		'Platinum Tier': platinum,
		'Gold Tier': gold,
		'Silver Tier': silver,
		'Bronze Tier': bronze
	};

	const getSponsors = async () => {
		let sponsors = await fetch('https://api.ucalgarybaja.ca/sponsors');
		return sponsors;
	};

	$effect(async () => {
		sponsorPromise = (async () => {
			let res = await getSponsors();
			if (!res.ok) {
				return null;
			}
			return await res.json();
		})();
	});
</script>

<title>UCalgary Baja - Sponsors</title>

<TopBanner
	titleText="Sponsors"
	imgUrl="https://res.cloudinary.com/dpgrgsh7g/image/upload/v1755914692/IMG_6671_daaeeq.jpg"
/>
<div>
	<h4>Current sponsors</h4>
	{#await sponsorPromise}
		<p>Loading sponsors...</p>
	{:then data}
		{#if data !== null}
			<div>
				{#each order as tier}
					{#if data[tier]}
						<div class={tier.split(' ')} style="background-image: url({backgrounds[tier]})">
							<h2 class={tier.split(' ')}>{tier}</h2>
						</div>
						<div>
							{#each data[tier] as item}
								<div>
									<a href={item.Url} class={tier.split(' ')}>
										<img alt="{item.SponsorName}'s Logo" src={item.LogoUrl} />
										{#if tier == order[0] || tier == order[1] || tier == order[2]}
											<div>
												<h5>
													{item.SponsorName}
												</h5>
												{#if tier == order[0] || tier == order[1]}
													{#if item.DescriptionAboutSponsor != null}
														<h6 class="default-font">{item.DescriptionAboutSponsor}</h6>
													{/if}
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
	{:catch error}
		<p>Error loading sponsors: {error.message}</p>
	{/await}

	<h3>Sponsorship Benefits</h3>
	<div class="table-wrapper">
		<table class="sponsor-table">
			<thead>
				<tr>
					<th></th>
					<th>Bronze $250</th>
					<th>Silver $1,000</th>
					<th>Gold $2,500</th>
					<th>Platinum $5,000</th>
					<th>Diamond $10,000</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<th>Logo On<br />Website</th>
					<td><img src="./gold_checkmark.svg" alt="Included Perk" /></td>
					<td><img src="./gold_checkmark.svg" alt="Included Perk" /></td>
					<td><img src="./gold_checkmark.svg" alt="Included Perk" /></td>
					<td><img src="./gold_checkmark.svg" alt="Included Perk" /></td>
					<td><img src="./gold_checkmark.svg" alt="Included Perk" /></td>
				</tr>
				<tr>
					<th>Social Media<br />Exposure</th>
					<td></td>
					<td><img src="./gold_checkmark.svg" alt="Included Perk" /></td>
					<td><img src="./gold_checkmark.svg" alt="Included Perk" /></td>
					<td><img src="./gold_checkmark.svg" alt="Included Perk" /></td>
					<td><img src="./gold_checkmark.svg" alt="Included Perk" /></td>
				</tr>
				<tr>
					<th>Shop Tour /<br />Introduction</th>
					<td></td>
					<td></td>
					<td><img src="./gold_checkmark.svg" alt="Included Perk" /></td>
					<td><img src="./gold_checkmark.svg" alt="Included Perk" /></td>
					<td><img src="./gold_checkmark.svg" alt="Included Perk" /></td>
				</tr>
				<tr>
					<th>Social Media<br />Feature</th>
					<td></td>
					<td></td>
					<td></td>
					<td><img src="./gold_checkmark.svg" alt="Included Perk" /></td>
					<td><img src="./gold_checkmark.svg" alt="Included Perk" /></td>
				</tr>
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
	</div>
	<p>
		Our sponsors are the backbone of UCalgary Baja's success, providing support that allows our
		members to gain hands-on engineering experience as part of their education. Our team is entirely
		student-run, allowing members to develop skills beyond engineering, including design,
		fundraising, sourcing materials, team management, and project coordination. We deeply value the
		partnership with our sponsors, as their support makes every project and competition possible. If
		you're interested in sponsoring UCalgary Baja, please contact our team captain at
		<a href="mailto:club@ucalgarybaja.ca"><strong>club@ucalgarybaja.ca</strong></a>. Below, you can
		find our sponsorship package detailing the opportunities available.
	</p>
	<h4>Sponsor Us</h4>
	<div class="contact-container">
		<Contact />
	</div>
</div>

<style>
	.contact-container {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-bottom: 50px;
	}
	th {
		width: 12ch;
		text-align: center;
	}
	td > img {
		width: 40px;
		height: 40px;
		object-fit: contain;
	}
	a {
		text-decoration: none;
		color: inherit;
		border-radius: 15px;
	}
	a:hover {
		cursor: pointer;
		scale: 1.05;
	}
	a.Diamond:hover {
		box-shadow: 4px 1px 14px rgb(73, 200, 255);
	}
	a.Platinum:hover {
		box-shadow: 4px 1px 14px #d9d9d9;
	}
	a.Gold:hover {
		box-shadow: 4px 1px 14px #f5bd02;
	}
	a.Silver:hover {
		box-shadow: 4px 1px 14px rgba(192, 192, 192);
	}
	a.Bronze:hover {
		box-shadow: 4px 1px 14px rgba(205, 127, 50);
	}

	div {
		background-color: var(--BajaBlack);
		padding-top: 0.33em;
		padding-bottom: 3em;
		overflow-x: hidden;
	}
	h3,
	h4 {
		text-align: center;
		display: block;
		color: var(--BajaWhite);
		font-size: 4rem;
		margin: 0px;
		margin-top: 8svh;
	}

	a > img {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		background-color: gray;
		width: 250px;
		height: 150px;
		object-fit: contain;
		margin-top: 10px;
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
		display: block;
		color: var(--BajaWhite);
		background-color: var(--BajaBlack);
		justify-content: center;
		margin-top: 0px;
		margin-bottom: 0px;
		height: 100%;
		border: 8px solid var(--BajaBlack);
		min-width: 15ch;
		font-size: 3em;
		text-align: center;
	}
	.Tier {
		padding: 0px;
	}

	div.Diamond {
		background-color: rgba(185, 242, 255);
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		position: relative;
		overflow: hidden;
	}

	div.Platinum {
		background-color: #d9d9d9;
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		position: relative;
		overflow: hidden;
	}

	div.Gold {
		background-color: #f5bd02;
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		position: relative;
		overflow: hidden;
	}

	div.Silver {
		background-color: rgba(192, 192, 192);
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		position: relative;
		overflow: hidden;
	}

	div.Bronze {
		background-color: rgba(205, 127, 50);
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		position: relative;
		overflow: hidden;
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
		justify-content: center;
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
		text-align: center;
		color: var(--BajaWhite);
		font-size: 1.5em;
		padding-top: 10px;
		padding-left: 10%;
		padding-right: 10%;
		padding-bottom: 25px;
		margin: auto;
	}
	table {
		margin-top: 50px;
		border-collapse: collapse;
		width: 100%;
		max-width: 900px;
		color: var(--BajaWhite);
		border-style: hidden;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 40px;
	}
	.table-wrapper {
		overflow-x: auto;
		width: 100%;
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
	h5 {
		display: flex;
		flex-wrap: wrap;
		color: var(--BajaWhite);
		justify-content: center;
		margin: 0px;
		margin-left: 20px;
		font-size: 2em;
	}
	h6 {
		display: flex;
		flex-wrap: wrap;
		color: var(--BajaWhite);
		justify-content: center;
		margin-top: 10px;
		margin-bottom: 10px;
		margin-left: 20px;
		font-size: 1em;
	}

	@media only screen and (max-width: 800px) {
		h4 {
			font-size: 3.25rem;
		}

		h2 {
			font-size: 1.5rem;
			box-sizing: border-box;
		}

		h5 {
			font-size: 1.5rem;
			margin: 0px;
		}

		h3 {
			font-size: 2.5rem;
			margin-top: 4svh;
		}

		div > div {
			row-gap: 1svh;
			padding: 4px;
		}
	}
</style>
