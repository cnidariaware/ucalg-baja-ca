<script>
	import Sponsors from '$lib/components/Home/Sponsors.svelte';
	import StdFromSide from '$lib/components/StdFromSide.svelte';
</script>

<!-- <h1>Welcome home</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p> -->
<title>UCalgary Baja - Home</title>
<StdFromSide backgroundColour="--BajaBlack" rowGap="2svh" paddingTopBottom="4svh">
	<div>
		<img
			alt="member angle grinding top of baja car"
			src="https://res.cloudinary.com/dpgrgsh7g/image/upload/c_fill,w_400,h_400/v1754168551/PXL_20250501_043345191-min_avprss.jpg"
		/>
		<div>
			<h3>What We Do</h3>
			<p>
				UCalgary Baja is a student organization which designs, builds, and races an off-road vehicle
				in the Baja SAE competition organized by the Society of Automotive Engineers (SAE) every
				year.
			</p>
			<p>
				In UCalgary Baja, we gain practical experience in design and manufacturing by constructing
				various car components. Our work combines mechanical design, project management, and
				hands-on manufacturing experience. This involves using CAD technology like SolidWorks and
				FEA simulations.
			</p>
			<a href="/about">Learn More</a>
		</div>
	</div>
	<div>
		<div>
			<h3>Who We Are</h3>
			<p>
				We are a team of engineering and business students who strive to expand our horizons by
				getting real world, hands-on experience. Our members achieve this by being a part of one of
				our 10 sub-teams: Suspension, Chassis, Ergonomics, Steering, Powertrain, Final Drive,
				Telemetry, Data Acquisition, Software, and Business.
			</p>
			<p>
				Each subteam handles a specific component, working with other members through the design
				process. After building the vehicle, we attend competitions in the United States, where our
				hard work is put to the test against the teams from all across the world.
			</p>
			<a href="/history">Learn More</a>
		</div>
		<img
			alt="possibly a montage mainly showcasing team members working"
			src="https://res.cloudinary.com/dpgrgsh7g/image/upload/c_fill,w_400,h_400/v1754168541/DSC_0004-min_irsgkt.jpg"
		/>
	</div>
</StdFromSide>

<Sponsors />

<StdFromSide backgroundColour="--BajaBlack" rowGap="6svh" paddingTopBottom="4svh">
	<div>
		<img
			alt="Our Car waiting in line for endurance"
			src="https://res.cloudinary.com/dpgrgsh7g/image/upload/c_fill,w_400,h_400/v1755376324/PXL_20250503_154645931-min_gi8qlf.jpg"
		/>
		<div>
			<h3>Sponsor Us</h3>
			<p>
				We appreciate all the help we get from sponsors, as it helps fund our Baja team with
				essential parts, materials, manufacturing support, and ability to go to competitions. From
				donated components to financial backing, our sponsors are a key part of what drives our team
				forward.
			</p>
			<a href="/sponsors">Learn More</a>
		</div>
	</div>
	<div id="HomeBottomGallery">
		<img
			alt="The Baja Car doing a massive jump"
			src="https://res.cloudinary.com/dpgrgsh7g/image/upload/v1756589650/DSC_0970-min_telnpf_c_fill_w_780_h_400_o4vqdc.jpg"
		/>
	</div>
</StdFromSide>

<style>
	* {
		background-color: var(--BajaBlack);
		color: var(--BajaWhite);
	}

	h3 {
		border-bottom: 3px solid var(--BajaWhite);
		font-size: 36px;
		margin-bottom: 2svh;
		padding-bottom: 0.5svh;
	}

	p {
		font-size: larger;
		margin: 1.5svh 0svw;
		min-width: 0px;
		padding: 0svh 0svw;
	}

	a {
		background-color: var(--BajaRed);
		border-radius: 1rem;
		color: inherit;
		font-size: large;
		margin: 2svh 8svw 0svh;
		padding: 10px;
		text-align: center;
		text-decoration: none;
	}

	img {
		align-self: center;
		aspect-ratio: 1;
		border-radius: 1rem;
		height: 400px;
		width: 400px;
	}

	div {
		display: flex;
		column-gap: 2svw;
	}

	div > div {
		flex-direction: column;
		max-width: 700px;
		padding: 0 1svw;
	}

	#HomeBottomGallery {
		height: 400px;
		width: 780px;
	}

	#HomeBottomGallery img {
		width: inherit;
		height: inherit;
	}

	@media only screen and (max-width: 800px) {
		div {
			padding: 0svh 4svw;
		}
		/* .HomePageLayout div img {
		width: 275px;
		height: 275px;
	} */

		#HomeBottomGallery {
			width: 80svw;
			height: 60svh;
		}
	}
</style>
