<script>
	const date = new Date();
</script>

<footer>
	<div>
		<p>&#169; {date.getFullYear()} UCalgary Baja</p>
	</div>
	<div>
		<a href="https://www.linkedin.com/company/schulich-off-road/">
			<img src="https://www.svgrepo.com/show/521725/linkedin.svg" alt="Linkedin Logo" />
		</a>
		<a href="https://www.instagram.com/ucalgarybaja/">
			<img src="https://www.svgrepo.com/show/521711/instagram.svg" alt="Intragram Logo" />
		</a>
		<a href="mailto:uofcbaja@gmail.com?subject=Lets start something great">
			<img src="https://www.svgrepo.com/show/479604/mail-17.svg" alt="email us logo" />
		</a>
		<a href="https://www.facebook.com/schulich.offroad/">
			<img src="https://www.svgrepo.com/show/521654/facebook.svg" alt="Facebook Logo" />
		</a>
	</div>
	<ul style="display: none;">
		<li>Developed by:</li>
		<li>Brock</li>
		<li>Ahmad</li>
	</ul>
</footer>

<style>
	footer {
		padding: 10px 0svw;
		background-color: var(--BajaRed);
		color: white;
	}
	div {
		display: flex;
		justify-content: center;
		column-gap: 2svw;
	}
	img {
		height: 30px;
		width: 30px;
		aspect-ratio: 1;
		filter: invert();
	}
	img:hover {
		filter: none;
	}
</style>
