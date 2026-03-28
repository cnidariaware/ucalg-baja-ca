<script>
	import facebook from '$lib/assets/bottom/facebook.svg';
	import mail from '$lib/assets/bottom/mail.svg';
	import instagram from '$lib/assets/bottom/instagram.svg';
	import linkedin from '$lib/assets/bottom/linkedin.svg';
	import logo from '$lib/assets/logo.png';

	const date = new Date();
</script>

<footer>
	<img src={logo} alt="UCalgary Baja's logo" />
	<div>
		<div>
			<p>&#169; {date.getFullYear()} UCalgary Baja</p>
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
			<a href="mailto:uofcbaja@gmail.com?subject=Lets start something great">
				<img src={mail} alt="email us logo" />
				<!-- <img src="https://www.svgrepo.com/show/479604/mail-17.svg" alt="email us logo" /> -->
			</a>
			<a href="https://www.facebook.com/schulich.offroad/">
				<img src={facebook} alt="Facebook Logo" />
				<!-- <img src="https://www.svgrepo.com/show/521654/facebook.svg" alt="Facebook Logo" /> -->
			</a>
		</div>
	</div>

	<a href="/contactus">Contact Us</a>

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
	}
	img {
		height: 84px;
	}
	a {
		color: inherit;
		font-size: larger;
	}
	div {
		display: flex;
		flex-direction: column;
		justify-content: center;
		column-gap: 2svw;
	}

	div > div {
		flex-direction: row;
	}

	a > img {
		height: 30px;
		width: 30px;
		aspect-ratio: 1;
	}
	a > img:hover {
		filter: invert();
	}
</style>
