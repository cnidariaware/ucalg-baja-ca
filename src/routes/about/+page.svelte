<script>
	import Competitions from '$lib/components/About/Competitions.svelte';
	import Stats from '$lib/components/About/Stats.svelte';
	import StdFromSide from '$lib/components/StdFromSide.svelte';
	import TopBanner from '$lib/components/TopBanner.svelte';
</script>

<title>UCalgary Baja - About</title>
<TopBanner titleText="About Us" imgUrl="./about_us_banner.png" />
<Stats />
<StdFromSide backgroundColour="--BajaBlack" textColour="var(--BajaWhite)">
	<section>
		<div>
			<h2>Our Mission</h2>
			<p>
				UCalgary Baja is a student organization that allows students to design, build, and race an
				off-road vehicle to participate in the Baja SAE competition organized by the Society of
				Automotive Engineers (SAE) every year.
			</p>
			<p>
				Our members are given opportunities to gain hands-on experience working on the car, which
				allows them to both learn new skills and techniques, such as using Solidworks, Ansys,
				machining, and welding, as well as utilizing knowledge learned from classrooms. This is done
				with practical projects, allowing members to build skills and knowledge that employers are
				looking for.
			</p>
		</div>

		<img
			src="https://res.cloudinary.com/dpgrgsh7g/image/upload/v1755914383/IMG-20230521-WA0004_lzabyt.jpg"
			alt="Car without body panels"
		/>
	</section>

	<section>
		<img src="./front_view_car.png" alt="Baja Car driving down track" />
		<div class="text-content">
			<h2>The Competition</h2>
			<p>
				Every year, we take our car to the United States to compete against other teams from all
				across the globe. Teams from universities design, build, and race these vehicles capable of
				going through a series of rough courses. In addition, teams discuss their findings, such as
				cost reports and design choices. All of this is done in a series of dynamic and static
				events. On top of this, we also get the chance to connect with students and sponsors from
				all over the world.
			</p>
		</div>
	</section>
	<Competitions />
</StdFromSide>

<style>
	/* General Section Styling */
	/* .about-section {
		display: flex;
		flex-direction: column;
		padding: 4svh 2svw;
		justify-content: center;
		align-items: center;
		background-color: var(--BajaBlack);
		color: white;
		font-size: larger;
	}
	.about-section p {
		margin: 1.5svh 0;
	} */
	h2 {
		padding-bottom: 0.5svh;
		font-size: 36px;
		margin-bottom: 2svh;
		border-bottom: solid 3px white;
		color: var(--BajaWhite);
	}

	/* Section Layout */
	section {
		display: flex;
		flex-flow: row wrap;
		justify-content: center;
		column-gap: 2svw;
		padding: 2svh 2svw;
	}
	/* .section-block */
	section > img {
		width: 400px;
		aspect-ratio: 1;
		border-radius: 1rem;
		object-fit: cover;
	}
	section > div {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		padding: 0 1svw;
		max-width: 40%;
	}

	@media only screen and (max-width: 800px) {
		section > div {
			max-width: 800px;
		}
		section > img {
			max-width: 100%;
			width: revert;

			max-height: 600px;
		}

		section:nth-child(2) {
			flex-wrap: wrap-reverse;
		}
	}
	p {
		color: var(--BajaWhite);
	}

	/* Responsive */
	/* @media only screen and (max-width: 800px) {
		.section-block img {
			width: 300px;
		}
	} */
</style>
