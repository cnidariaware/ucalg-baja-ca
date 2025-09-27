<script>
	let { year, competitions } = $props();
</script>

<div key={year + competitions}>
	<h2>{year}</h2>
	<h4>Overall Competition Results</h4>
	<table>
		<tbody>
			{#each competitions as comp, index}
				<tr key={comp + index}>
					<td key="{index + 'location'}}">{comp.location}</td>
					<td key={index + 'place'}>{comp.placement}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<style>
	* {
		color: var(--BajaWhite);
		font-size: 19.2px;
	}

	@media only screen and (max-width: 800px) {
		ul {
			flex-direction: column !important;
			column-gap: 0svw !important;
			align-items: center !important;
			margin: 1svh 0svw;
		}
	}

	div {
		display: block;
		text-align: center;
		padding: 10svh 0svw;

		border: 1px solid white;
		border-radius: 1rem;
	}

	h2,
	h4 {
		margin: 2svh 2svw;
		text-align: center;
	}

	h2 {
		font-size: 28.8px;
	}

	table {
		display: flex;
		flex-direction: column;
		margin: 0 auto;
		align-items: center;
	}

	tr {
		/* list-style-type: none; */
		/* display: flex; */
		flex-wrap: wrap;
		justify-content: space-evenly;
		column-gap: 1svw;
		padding: 0px;
		margin: 0.5svh 0svw;
	}

	ul li:nth-child(odd) {
		text-align: start;
	}

	ul li:nth-child(even) {
		text-align: end;
	}
</style>
