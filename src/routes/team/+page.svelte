<script>
	import StdFromSide from '$lib/components/StdFromSide.svelte';
</script>

<h2>SUBTEAMS</h2>

<StdFromSide backgroundColour="--BajaBlack" columnGap="2svh">
	<div>
		<div>
			<h3>Suspension</h3>
			<p>
				Our subteam works on the car's handling and terrain performance. We assemble components like
				the arms, shocks, steering knuckles, and rear bearing carriers. We also perform simulations,
				calculations, and welding.
			</p>
		</div>
		<img
			alt="Welding suspension arms"
			src="https://res.cloudinary.com/dpgrgsh7g/image/upload/c_fill,w_700,h_400/v1754169379/IMG_3532_c6mnwf_asokvg.jpg"
		/>
	</div>
	<div>
		<img
			alt="chassis in ansys stress simulation"
			src="https://res.cloudinary.com/dpgrgsh7g/image/upload/v1754167885/chassis2_gct4iq.png"
		/>
		<div>
			<h3>Chassis</h3>
			<p>
				Our subteam designs and manufactures the skeleton of the car, incorporating all subsystems
				and ensuring driver protection. We learn manufacturing techniques like welding, tube coping
				and tube bending.
			</p>
		</div>
	</div>
</StdFromSide>

<style>
	* {
		background-color: var(--BajaBlack);
		color: #fff;
	}

	h2 {
		font-size: 80px;
		text-align: center;
		margin: 0;
		border-top: 1px solid whitesmoke;
	}

	h3 {
		font-size: 50px;
		margin: 0;
		padding: 2svh 0svw;
	}

	p {
		color: inherit;
		font-size: 22px;
		margin: 0;
		padding: 0;
	}

	div {
		display: flex;
		column-gap: 2svw;
	}

	div > div {
		flex-direction: column;
		justify-content: flex-start;
		max-width: 48ch;
		row-gap: 0;
	}
</style>
