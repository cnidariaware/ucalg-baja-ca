<script>
	import facebook from '$lib/assets/bottom/facebook.svg';
	import mail from '$lib/assets/bottom/mail.svg';
	import instagram from '$lib/assets/bottom/instagram.svg';
	import linkedin from '$lib/assets/bottom/linkedin.svg';
	import gitrepo from '$lib/assets/bottom/forgejo.svg';
	import logo from '$lib/assets/logo.png';

	const date = new Date();
</script>

<footer>
	<img src={logo} alt="UCalgary Baja's logo" />
	<div>
		<div>
			<p><span>&#169;</span> {date.getFullYear()} UCalgary Baja</p>
		</div>
		<div>
			<a href="https://www.linkedin.com/company/ucalgarybaja/">
				<img src={linkedin} alt="Linkedin Logo" />
				<!-- <img src="https://www.svgrepo.com/show/521725/linkedin.svg" alt="Linkedin Logo" /> -->
			</a>
			<a href="https://www.instagram.com/ucalgarybaja/">
				<img src={instagram} alt="Intragram Logo" />
				<!-- <img src="https://www.svgrepo.com/show/521711/instagram.svg" alt="Intragram Logo" /> -->
			</a>
			<a href="https://forge.ucalgarybaja.ca/ucalgary-baja/"
				><img src={gitrepo} alt="Code Forge's logo" /></a
			>
			<a href="mailto:club@ucalgarybaja.ca?subject=Lets start something great">
				<img src={mail} alt="email us logo" />
				<!-- <img src="https://www.svgrepo.com/show/479604/mail-17.svg" alt="email us logo" /> -->
			</a>
			<a href="https://www.facebook.com/schulich.offroad/">
				<img src={facebook} alt="Facebook Logo" />
				<!-- <img src="https://www.svgrepo.com/show/521654/facebook.svg" alt="Facebook Logo" /> -->
			</a>
		</div>
	</div>
	<div>
		<a href="/contact">Contact Us</a>
		<a href="https://forge.ucalgarybaja.ca/ucalgary-baja/">Projects</a>
	</div>
	<ul style="display: none;">
		<li>Developed by:</li>
		<li>Brock</li>
		<li>Ahmad</li>
	</ul>
</footer>

<style>
	footer {
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
		align-items: center;
		padding: 10px 0svw;
		background-color: var(--BajaRed);
		color: white;
		font-family: 'BajaFont';
	}
	img {
		height: 84px;
	}
	a {
		color: inherit;
		font-size: larger;
		text-decoration: none;
	}
	a:hover {
		color: var(--BajaBlack);
	}
	div {
		display: flex;
		flex-direction: column;
		justify-content: center;
		column-gap: 2svw;
	}

	div > div {
		flex-direction: row;
		text-align: center;
	}

	a > img {
		height: 30px;
		width: 30px;
		aspect-ratio: 1;
	}
	a > img:hover {
		filter: invert();
	}

	p > span {
		font-family:
			Ubuntu,
			system-ui,
			-apple-system,
			BlinkMacSystemFont,
			'Segoe UI',
			Roboto,
			Oxygen,
			Cantarell,
			'Open Sans',
			'Helvetica Neue',
			sans-serif;
	}

	footer > div:nth-of-type(2) {
		row-gap: 4svh;
	}

	@media only screen and (max-width: 800px) {
		footer > img {
			display: none;
		}

		footer {
			flex-direction: column;
			row-gap: 4svh;
		}

		footer > div:nth-of-type(2) {
			flex-direction: row;
			justify-content: space-between;
			column-gap: 8svb;
		}
	}
</style>
