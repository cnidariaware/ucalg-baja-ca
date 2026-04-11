<script>
	import CompetitionInfo from '$lib/components/History/CompetitionInfo.svelte';
	import StdFromSide from '$lib/components/StdFromSide.svelte';
	import TopBanner from '$lib/components/TopBanner.svelte';

	let historyTimeLineInfo = [
		{
			year: '2024-2025',
			competitionCarImg:
				'https://res.cloudinary.com/dpgrgsh7g/image/upload/ar_1:1,c_fill,g_auto,w_400/v1754759943/DSCN7262_ithpcq.jpg',
			competitions: [
				{ location: 'Arizona', placement: '38th' },
				{ location: 'Maryland', placement: '62nd' }
			]
		},
		{
			year: '2023-2024',
			competitionCarImg:
				'https://res.cloudinary.com/dpgrgsh7g/image/upload/ar_1:1,c_fill,g_auto,w_400/v1758999837/tan_car_mqpwq8.jpg',
			competitions: [
				{ location: 'Gorman', placement: '36th' },
				{ location: 'Williamsport', placement: '65th' }
			]
		},
		{
			year: '2020-2022',
			competitionCarImg:
				'https://static.wixstatic.com/media/5824fc_128f7d18ed2f44c6883cc5b86cc1b2c2~mv2.jpg/v1/fill/w_732,h_675,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_20230504_084347041.jpg',
			competitions: [
				{ location: 'California', placement: '26th' },
				{ location: 'Williamsport', placement: '65th' }
			]
		},
		{
			year: '2019',
			competitionCarImg:
				'https://static.wixstatic.com/media/5824fc_7a03429a7efb4ca2978176a9e9f7d9e3~mv2.jpg/v1/fill/w_732,h_675,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/MVIMG_20190615_145709_edited.jpg',
			competitions: [
				{ location: 'Rochester', placement: '8th' },
				{ location: 'Gorman', placement: '49th' }
			]
		},
		{
			year: '2018',
			competitionCarImg:
				'https://static.wixstatic.com/media/5824fc_b2388960e7d44459abe5db3499b8ecc0~mv2.jpg/v1/fill/w_732,h_675,fp_0.50_0.36,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/7.jpg',
			competitions: [{ location: 'Portland', placement: '26th' }]
		},
		{
			year: '2017',
			competitionCarImg:
				'https://static.wixstatic.com/media/5824fc_7ee01b6e4cdf416c8affff42cc19637e~mv2.jpg/v1/fill/w_732,h_675,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_0430.jpg',
			competitions: [{ location: 'Illinois', placement: '41th' }]
		}
	];
</script>

<TopBanner
	titleText="History"
	imgUrl="https://res.cloudinary.com/dj4xevuvs/image/upload/v1774733758/IMG_20260328_150403570_pg70yi.jpg"
/>
<title>UCalgary Baja - History</title>
<StdFromSide backgroundColour="--BajaBlack" rowGap="2svb" paddingTopBottom="2svb">
	<div>
		<h2>A look at our past vehicles and competition results.</h2>
		<p>
			Each result showcases the dedication and growth of our team, highlighting the countless hours
			of design, testing, and collaboration that drive us forward.
		</p>

		<a href="/about"> Learn More </a>
	</div>

	<table>
		<tbody>
			<tr>
				<td class="symbol" id="HistoryJoin" colSpan={3}>
					<div>Where You Join!</div>
				</td>
			</tr>
			{#each historyTimeLineInfo as yearInfo, yearIndex}
				<tr key={yearIndex}>
					{#if yearIndex % 2 === 0}
						<td>
							<img src={yearInfo.competitionCarImg} alt={yearInfo.year + "'s Car"} />
						</td>
						<td class="symbol">
							<span class="dot">
								<!-- {/* Star or circle spot */} -->
							</span>
						</td>
						<td>
							<CompetitionInfo year={yearInfo.year} competitions={yearInfo.competitions} />
						</td>
					{:else}
						<td>
							<CompetitionInfo year={yearInfo.year} competitions={yearInfo.competitions} />
						</td>

						<td class="symbol">
							<span class="dot">
								<!-- {/* Star or circle spot */} -->
							</span>
						</td>
						<td>
							<img src={yearInfo.competitionCarImg} alt={yearInfo.year + "'s Car"} />
						</td>
					{/if}
				</tr>
			{/each}
		</tbody>
	</table>
</StdFromSide>

<style>
	* {
		background-color: var(--BajaBlack);
		font-size: larger;
	}

	div {
		display: flex;
		flex-direction: column;
		align-items: center;
		align-self: center;
		/* border-radius: 1rem; */
		padding: 2svh 2svw;
		row-gap: 2svh;
		text-align: center;
		color: var(--BajaWhite);
	}

	h2 {
		font-size: 30px;
		margin: 0;
		padding: 4svh 0svw 0svh;
	}

	p {
		font-size: larger;
		margin: 0;
		padding: 0;
	}

	a {
		background-color: var(--BajaRed);
		border: none;
		border-radius: 15px;
		font-size: large;
		margin-top: 4svh;
		padding: 2svb 14svw;
		text-decoration: none;
		color: inherit;
	}

	a:hover {
		background-color: var(--BajaHover);
	}

	/* #History {
		display: flex;
		flex-direction: column;
		padding: 4svh 4svw;
		row-gap: 4svh;
		background-color: var(--BajaBlack);
		color: white;
		font-size: larger;
	} */

	table {
		border-collapse: collapse;
		width: auto;
		margin: 0svh auto;
	}

	tbody {
		color: inherit;
	}

	tr {
		position: relative;
		margin: 4svh 0svw;
	}

	tr td {
		max-width: 400px;
		max-height: 400px;
		vertical-align: middle;
	}

	img {
		aspect-ratio: 1;
		width: 100%;
		height: 400px;
		margin: 0svh auto;
		border-radius: 1rem;
		display: block;
	}

	@media only screen and (max-width: 1025px) {
		img {
			height: inherit;
		}
	}

	td > div {
		width: 100%;
		/* width: fit-content; */
		box-sizing: border-box;
	}

	.symbol {
		position: relative;
		/* width: 10px; */
		text-align: center;
		padding: 0svh 2svw;
		min-width: 40px;
		max-height: none;
	}

	.symbol::before {
		content: '';
		position: absolute;
		top: 0;
		bottom: 0;
		left: 50%;
		width: 2px;
		background-color: rgb(120, 120, 120);
		transform: translateX(-50%);
		z-index: 0;
		offset-anchor: 100px;
	}

	.dot {
		/* display: inline-block; */
		background-color: rgb(120, 120, 120);
		border-radius: 50%;
		transform: translate(-50%, -50%);
		width: 20px;
		height: 20px;
		/* max-width: 20px; */
		line-height: 20px;
		font-size: 12px;
		font-weight: bold;
		position: relative;
		z-index: 2;
		position: absolute;
		top: 50%;
		left: 50%;
	}

	tr:first-child .symbol::before {
		top: 50%;
	}

	#HistoryJoin {
		position: relative;
		padding: 0;
		text-align: center;
	}

	#HistoryJoin div {
		text-wrap: nowrap;
		position: relative;
		background-color: black;
		z-index: 2; /* above line */
		width: fit-content;
		margin: 0svh auto;
		margin-bottom: 4svh;
		border-radius: var(--BajaRadius);
		font-size: 19.2px;
		font-family: 'BajaFont';
	}

	@media only screen and (max-width: 800px) {
		table tr td {
			max-width: 100px;
			max-width: fit-content;
		}

		img {
			margin: 0px;
		}

		.symbol {
			width: 10px;
			padding: 0px;
		}

		.dot {
			width: 10px;
			height: 10px;
		}
	}
</style>
