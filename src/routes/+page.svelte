<script>
	import Sponsors from '$lib/components/Home/Sponsors.svelte';
	import StdFromSide from '$lib/components/StdFromSide.svelte';
	import TopBanner from '$lib/components/TopBanner.svelte';
	import Gallery from '$lib/Gallery.svelte';

	//Adding the photos from assets, in the gallery folder
	import photo1 from '$lib/assets/gallery/photo1.jpg';
	import photo2 from '$lib/assets/gallery/photo2.jpg';
	import photo3 from '$lib/assets/gallery/photo3.jpg';
	import photo4 from '$lib/assets/gallery/photo4.jpg';
	import photo5 from '$lib/assets/gallery/photo5.jpg';

	let photos = [
		{ src: photo1, alt: 'enter description of photo 1' },
		{ src: photo2, alt: 'enter description of photo 2' },
		{ src: photo3, alt: 'enter description of photo 3' },
		{ src: photo4, alt: 'enter description of photo 4' },
		{ src: photo5, alt: 'enter description of photo 5' }
	];
</script>

<title>UCalgary Baja - Home</title>

<TopBanner
	titleText="UCalgary Baja"
	imgUrl="https://res.cloudinary.com/dpgrgsh7g/image/upload/v1754170619/DSC_0766-min-2_j7sxoz.jpg"
/>
<StdFromSide backgroundColour="--BajaBlack" rowGap="2rem" paddingTopBottom="2rem">
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

<StdFromSide backgroundColour="--BajaBlack" rowGap="2rem" paddingTopBottom="2rem">
	<Gallery {photos} />
	<div>
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
</StdFromSide>

<style>
	* {
		background-color: var(--BajaBlack);
		color: var(--BajaWhite);
	}

	h3 {
		/*
			border-bottom: 3px solid var(--BajaWhite);
		*/
		font-size: var(--BajaTitleFontSize);
		/* margin-bottom: 2svh; */
		margin-bottom: 0px;
		margin-top: 0px;
		/* padding-bottom: 0.5svh; */
		text-align: center;
	}

	p {
		font-size: larger;
		margin: 1.5svh 0svw;
		min-width: 0px;
		padding: 0svh 0svw;
		text-align: center;
	}

	a {
		background-color: var(--BajaRed);
		border-radius: 1rem;
		color: inherit;
		font-size: large;
		margin: 2rem 8svw 0svh;
		padding: 10px;
		text-align: center;
		text-decoration: none;
	}

	a:hover {
		/* color: var(--BajaBlack); */
		background-color: var(--BajaHover);
	}

	img {
		align-self: center;
		aspect-ratio: 1;
		border-radius: 1rem;
		max-height: 300px;
		max-width: 400px;
		box-sizing: border-box;
	}

	div {
		display: flex;
		flex-wrap: wrap-reverse;
		justify-content: space-evenly;
		column-gap: 2svw;
		row-gap: 2rem;
	}

	div:nth-child(2) {
		flex-wrap: wrap;
	}

	div > div {
		flex-direction: column;
		max-width: 700px;
		padding: 0 1svw;
		row-gap: 0px;
	}

	@media only screen and (max-width: 800px) {
		div {
			padding: 0svh 4svw;
		}

		img {
			max-width: 700px;
			width: 100%;
			max-height: 400px;
			height: auto;
		}
	}
</style>
