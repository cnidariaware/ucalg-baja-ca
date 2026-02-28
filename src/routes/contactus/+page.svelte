<script>
	import Contact from '$lib/components/Contact.svelte';
	import TopBanner from '$lib/components/TopBanner.svelte';
</script>

<title>UCalgary Baja - Contact</title>

<TopBanner
	titleText="Contact Us"
	imgUrl="https://res.cloudinary.com/dpgrgsh7g/image/upload/v1755914996/DSC_0393_inuw2z.jpg"
/>
<div>
	<div>
		<div>
			<h2>Get in Touch.</h2>
			<p>
				Fill out the form for questions, opportunities, or if you just want to connect. You could
				also email us at <a href="mailto:uofcbaja@gmail.com">uofcbaja@gmail.com</a>.
			</p>
		</div>
		<Contact />
	</div>

	<div>
		<div>
			<img
				src="https://static.wixstatic.com/media/5824fc_7b1be3e69c074f669945ecdbd23ce4ce~mv2.jpg/v1/fill/w_482,h_1068,fp_0.38_0.50,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/_MG_1822_edited.jpg"
				alt="Team members bending a tube"
			/>
			<img
				src="https://static.wixstatic.com/media/5824fc_b83d649723274d5aa1455380f96e35c3~mv2.jpg/v1/fill/w_482,h_1068,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/20240203_155632.jpg"
				alt="Team member filing"
			/>
			<img
				src="https://static.wixstatic.com/media/5824fc_065658fda1d94a7b8b620a7ce43a503d~mv2.jpg/v1/fill/w_482,h_1068,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/_MG_1830_edited.jpg"
				alt="Team member welding"
			/>
		</div>

		<div>
			<h1>Hours of Operation</h1>
			<ul>
				<li>Wednesday: 6pm - 8pm</li>
				<li>Saturday: 10am - 4pm</li>
			</ul>
			<h4>Send us an email.</h4>
			<a href="mailto:uofcbaja@gmail.com">
				<h4>uofcbaja@gmail.com</h4>
			</a>
		</div>
	</div>
</div>

<style>
	/* GLOBAL RESET & BASE STYLES */
	a {
		text-decoration: none;
		color: inherit;
	}
	ul {
		list-style-type: none;
		padding: 0px;
		margin: 0px;
	}
	li {
		margin: 1svh 0svw;
	}
	h1,
	h4,
	p {
		margin: 1svh 0svw;
		text-wrap: wrap;
	}

	/* HOURS OF OPERATION SECTION */
	div > div:nth-child(2) {
		display: flex;
		flex-flow: row wrap-reverse;
		align-items: center;
		justify-content: center;
		row-gap: 2svh;
		column-gap: 4svw;
		background: #fff;
		padding: 8svh 0svw;
	}
	div > div:nth-child(2) > div {
		background-color: white;
	}
	div > div:nth-child(2) > div:first-child {
		margin: 0svh 2svw;
	}
	div > div:nth-child(2) > div:first-child img {
		width: 300px;
		height: 600px;
	}
	div > div:nth-child(2) > div:last-child {
		display: flex;
		flex-direction: column;
		margin: 0;
		font-size: 30px;
	}
	div > div:nth-child(2) > div:last-child h1 {
		margin: 2svh 0svw;
		font-size: 40px;
		width: inherit;
		border-bottom: 3px solid var(--BajaBlack);
	}

	/* Email hover styles */
	div > div:nth-child(2) > h4 {
		font-weight: normal;
	}
	div > div:nth-child(2) > a h4 {
		font-weight: bold;
	}
	div > div:nth-child(2) > a:hover {
		color: var(--BajaRed);
	}

	/* RESPONSIVE STYLES */
	@media (max-width: 800px) {
		div > div:nth-child(2) > div:first-child {
			display: flex;
			flex-direction: column;
			justify-content: center;
		}
		div > div:nth-child(2) > div:first-child img {
			margin: 1svh 0svw;
		}
	}
	@media (max-width: 1025px) {
		div > div:nth-child(2) > div:first-child > img:nth-child(1),
		div > div:nth-child(2) > div:first-child > img:nth-child(2) {
			display: none;
		}
		div > div:nth-child(2) > div:last-child {
			font-size: large;
		}
	}
	@media (max-width: 550px) {
		div > div:nth-child(2) > div:first-child > img:nth-child(3) {
			display: none;
		}
	}

	/* ROOT VARIABLES */
	:root {
		--card-background-color: rgba(38, 38, 38, 0.5);
		--card-border-radius: 0.5rem;
	}

	/* CONTACT FORM SECTION */
	div > div:nth-child(1) {
		display: flex;
		flex-flow: row wrap;
		row-gap: 4svh;
		min-height: 60svh;
		padding: 4svh 0svw;
		justify-content: space-evenly;
		color: white;
		background-color: var(--BajaBlack);
	}

	/* Contact form container */
	div > div:first-child > div {
		display: flex;
		flex-grow: 1;
		background-color: var(--card-background-color) !important;
		border-radius: var(--card-border-radius);
		flex-direction: column !important;
		justify-content: center;
		margin: 2svh 0.5svw !important;
		padding: 2svh 1svw !important;
		max-width: 600px !important;
		height: inherit !important;
	}

	/* Form text styling */
	div > div:first-child > h2,
	div > div:first-child > p {
		padding: 0svh 2svw;
		margin: 1svh 0svw;
	}
	div > div:first-child > p {
		font-size: larger;
		margin: 2svh 0svw;
		padding: 0svh 0svw;
	}

	/* Links inside form paragraph */
	div > div:first-child > p a:hover {
		color: var(--BajaRed);
	}
</style>
