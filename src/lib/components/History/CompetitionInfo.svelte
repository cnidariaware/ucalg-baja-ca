<script>
	let { year, competitions } = $props();
</script>

<figure key={year + competitions}>
	<figcaption>
		<h2>
			{year}
		</h2>
		<h4>Overall Competition Results</h4>
	</figcaption>
	<ul>
		{#each competitions as comp, index}
			<li key={index + 'location'}>
				{comp.location}
			</li>
			<li key={index + 'placement'}>
				{comp.placement}
			</li>
			<!-- <tr key={comp + index}>
				<td key="{index + 'location'}}">{comp.location}</td>
				<td key={index + 'place'}>{comp.placement}</td>
			</tr> -->
		{/each}
	</ul>
</figure>

<style>
	* {
		color: var(--BajaWhite);
		font-size: 19.2px;
	}

	figure {
		display: block;
		text-align: center;
		padding: 10svh 0svw;

		border: 1px solid white;
		border-radius: 1rem;
		margin: 0px;
	}

	h2,
	h4 {
		margin: 2svh 2svw;
		text-align: center;
	}

	h2 {
		font-size: 28.8px;
	}

	ul {
		display: grid;
		grid-template-columns: 1fr 1fr;
		margin: 0 auto;
		align-items: center;
		justify-content: center;
		margin: 0px;
		box-sizing: content-box;
		padding: 0px 1%;
		row-gap: 10px;
		list-style-type: none;
	}

	li {
		display: grid;
		column-gap: 10px;
		width: 100%;

		justify-content: space-evenly;
		margin: 0.5svh 0svw;
	}

	@media only screen and (max-width: 800px) {
		figure {
			padding: 1svh 0svw;
		}

		h2 {
			font-size: 20px;
		}

		h4 {
			line-break: loose;
			font-size: 14px;
		}

		h2,
		h4 {
			margin: 2svh 0svw;
		}
	}
</style>
