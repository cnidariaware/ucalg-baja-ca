<script>
	import StdFromSide from '$lib/components/StdFromSide.svelte';
	import TopBanner from '$lib/components/TopBanner.svelte';
	import Gallery from '$lib/Gallery.svelte';
	import MemberCard from '$lib/components/memberCard.svelte';
	import SUB_TEAM_PHOTOS from './team_photos';
	import TEAM_DATA from './team_data';
</script>

<title>UCalgary Baja - Sub-teams</title>

<TopBanner
	titleText="Our Team"
	imgUrl="https://res.cloudinary.com/dpgrgsh7g/image/upload/v1771713184/_MG_5269_ub2hjh.jpg"
/>

<h2>SUBTEAMS</h2>

<StdFromSide backgroundColour="--BajaBlack" rowGap="10svh" paddingTopBottom="2rem">
	<div>
		<div>
			<h3>Suspension</h3>
			<p>
				Our subteam works on the car's handling and terrain performance. We assemble components like
				the arms, shocks, steering knuckles, and rear bearing carriers. We also perform simulations,
				calculations, and welding.
			</p>
		</div>
		<!-- <img
			alt="Welding suspension arms"
			src="https://res.cloudinary.com/dpgrgsh7g/image/upload/c_fill,w_700,h_400/v1754169379/IMG_3532_c6mnwf_asokvg.jpg"
		/> -->
		<figure><Gallery photos={SUB_TEAM_PHOTOS['suspension']} singleMode /></figure>
	</div>
	<div>
		<!-- <img
			alt="chassis in ansys stress simulation"
			src="https://res.cloudinary.com/dpgrgsh7g/image/upload/v1754167885/chassis2_gct4iq.png"
		/> -->
		<figure><Gallery photos={SUB_TEAM_PHOTOS['chassis']} singleMode /></figure>
		<div>
			<h3>Chassis</h3>
			<p>
				Our subteam designs and manufactures the skeleton of the car, incorporating all subsystems
				and ensuring driver protection. We learn manufacturing techniques like welding, tube coping
				and tube bending.
			</p>
		</div>
	</div>
	<div>
		<div>
			<h3>Ergonomics</h3>
			<p>
				Our subteam works to ensure driver comfort, increase the number of eligible drivers that can
				drive the car, and decrease driver fatigue by optimizing the seat, head rest, pedals, and
				pedal foot resets.
			</p>
		</div>
		<!-- <img
			alt="brakes and gas pedal CAD"
			src="https://res.cloudinary.com/dpgrgsh7g/image/upload/v1755915328/18HASpcxac4zjPwWZSpbQs94v0ooAX-3hmw4emI_0zO4qfnSYTO5XBMXSH7dow2E_xkngmq.png"
		/> -->
		<figure><Gallery photos={SUB_TEAM_PHOTOS['ergonomics']} singleMode /></figure>
	</div>
	<div>
		<!-- <img
			alt="Suspensions arms and steering"
			src="https://res.cloudinary.com/dpgrgsh7g/image/upload/v1755915328/19yTuNKZMp1QCQoaBz86d-zpvATvP6Rx1SaVjynMSV6RQFROM2d7anw3zAD4_nabmkg.png"
		/> -->
		<figure><Gallery photos={SUB_TEAM_PHOTOS['steering']} singleMode /></figure>
		<div>
			<h3>Steering</h3>
			<p>
				Our subteam designs the steering behaviors of the car, including turning radius, pinion and
				rack ratio. We use FEA analysis to professional CNC machining to optimize driving dynamics.
			</p>
		</div>
	</div>
	<div>
		<div>
			<h3>Powertrain</h3>
			<p>
				Our subteam transfers power to the rear wheels and driveshaft using gearbox, bevel gearbox,
				CVT, propshaft, rear axles, rear brakes, and rear hubs.
			</p>
		</div>
		<!-- <img
			alt="cvt"
			src="https://res.cloudinary.com/dpgrgsh7g/image/upload/v1755915331/cvt_zz0rgl.png"
		/> -->
		<figure><Gallery photos={SUB_TEAM_PHOTOS['powertrain']} singleMode /></figure>
	</div>
	<div>
		<!-- <img
			alt="top down shot of our brake system"
			src="https://res.cloudinary.com/dpgrgsh7g/image/upload/v1754168541/brakes-min_bgmnyc.jpg"
		/> -->
		<figure><Gallery photos={SUB_TEAM_PHOTOS['finalDrive']} singleMode /></figure>
		<div>
			<h3>Final Drive</h3>
			<p>
				Our subteam designs, tests and manufactures the 4WD system, including the differential,
				axles, hubs and brakes.
			</p>
		</div>
	</div>
	<div>
		<div>
			<h3>Telemetry</h3>
			<p>
				Our subteam is responsible for wiring sensors and transmitting real-time data from the
				vehicle, letting the team to monitor performance and diagnose issues during testing.
			</p>
		</div>
		<figure><Gallery photos={SUB_TEAM_PHOTOS['telemetry']} singleMode /></figure>
		<!-- <img
			alt="strain gauge"
			src="https://res.cloudinary.com/dpgrgsh7g/image/upload/v1755915328/12ZRS9P9XwyNLusJ59EfL98Yc_ZMpbdoYvATMAQKqnf0atoxj0ZUA2vtgQYh09a8_quphim.png"
		/> -->
	</div>
	<div>
		<!-- <img
			alt="weight scale"
			src="https://res.cloudinary.com/dpgrgsh7g/image/upload/v1755915330/scale_ccg4wg.png"
		/> -->
		<figure><Gallery photos={SUB_TEAM_PHOTOS['dataAcquisition']} singleMode /></figure>
		<div>
			<h3>Data Acquisition</h3>
			<p>
				Our subteam focuses on integrating sensors and managing the vehicle's wiring system to
				accurately collect, store, and analyze performance data for post-test evaluation.
			</p>
		</div>
	</div>
	<div>
		<div>
			<h3>Software</h3>
			<p>
				We design and built this site, handle simulation and gather data through the onboard data
				collection system and run our in club storage system.
			</p>
		</div>
		<figure><Gallery photos={SUB_TEAM_PHOTOS['software']} singleMode /></figure>
		<!-- <img
			alt="jsx code from our sponsors"
			src="https://res.cloudinary.com/dpgrgsh7g/image/upload/v1756590700/code-min_uqjr6m_c_fill_w_700_h_400_fftttm.png"
		/> -->
	</div>
	<div>
		<!-- <img
			alt="member wearing ucalgary baja t-shirt"
			src="https://res.cloudinary.com/dpgrgsh7g/image/upload/v1755915387/DSC_0432_e1pfjn.jpg"
		/> -->
		<figure><Gallery photos={SUB_TEAM_PHOTOS['businesss']} singleMode /></figure>
		<div>
			<h3>Business</h3>
			<p>
				Our subteam develops sponsorship relationships, creates content to post on social media,
				develop marketing campaigns, arrange travel bookings, handles payments, and manages team
				merch.
			</p>
		</div>
	</div>
</StdFromSide>

<section class="people-section">
	{#if TEAM_DATA.captains.length > 0}
		<h2>Captain</h2>
		<div class="members-row centered">
			{#each TEAM_DATA.captains as member}
				<MemberCard
					name={member.name}
					role={member.role}
					bio={member.bio}
					src={member.src}
					linkedin={member.linkedin}
				/>
			{/each}
		</div>
	{/if}

	{#if TEAM_DATA.subTeamLeads.length > 0}
		<h2>Sub Team Leads</h2>
		<div class="members-grid">
			{#each TEAM_DATA.subTeamLeads as member}
				<MemberCard
					name={member.name}
					role={member.role}
					bio={member.bio}
					src={member.src}
					linkedin={member.linkedin}
				/>
			{/each}
		</div>
	{/if}
</section>

<style>
	* {
		background-color: var(--BajaBlack);
		color: var(--BajaWhite);
	}

	h2 {
		font-size: 80px;
		text-align: center;
		margin: 0;
		/* border-top: 1px solid whitesmoke; */
		padding: 66px 0svw;
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
		max-width: 100%;
	}

	figure {
		margin: 0px;
	}

	figure {
		border-radius: 1rem;
		display: flex;
		max-height: 400px;
		max-width: 400px;
		height: 100%;
		width: 100%;
		object-fit: initial;
	}

	div {
		display: flex;
		/* flex-wrap: wrap; */
		column-gap: 4rem;
		justify-content: space-evenly;
		width: 100%;
		row-gap: 1rem;
	}

	div > div {
		flex-direction: column;
		justify-content: flex-start;
		max-width: 48ch;
		row-gap: 0;
		padding: 0svh 25px;
	}

	div > div:nth-child(2) {
		text-align: end;
	}

	/* ── People sections ── */
	section.people-section {
		display: block;
		width: 100%;
		padding: 4svh 4svw;
		box-sizing: border-box;
	}

	.members-row {
		display: flex;
		flex-wrap: wrap;
		gap: 4rem;
		width: 100%;
	}

	.members-row.centered {
		justify-content: center;
	}

	.members-grid {
		display: flex;
		flex-wrap: wrap;
		gap: 6rem 4rem;
		width: 100%;
		max-width: 1000px;
		justify-content: center;
		margin: 0 auto;
	}

	@media only screen and (max-width: 800px) {
		figure {
			max-width: 700px;
			width: 100%;
			max-height: 400px;
			height: auto;
		}

		div {
			row-gap: 2rem;
			justify-content: center;
			flex-wrap: wrap;
			padding: 0px;
		}

		div:nth-child(even) {
			flex-wrap: wrap-reverse;
		}

		div > div {
			/* max-width: 700px; */
			max-width: 100%;
			justify-content: center;
			padding: 0svh 0.25rem;
			box-sizing: border-box;
		}

		h2 {
			font-size: 3.25rem;
			max-width: 100%;
			padding: 1rem 0svw;
		}

		h3 {
			font-size: 2.75rem;
			text-align: center;
		}

		.members-grid {
			max-width: 600px;
		}

		.members-row {
			justify-content: center;
		}
	}

	@media only screen and (max-width: 500px) {
		.members-grid {
			max-width: 280px;
		}
	}
</style>
