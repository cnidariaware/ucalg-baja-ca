<script>
	import logo from '$lib/assets/logo.png';
	import favicon from "$lib/assets/favicon.ico";
	let { children } = $props();
	const date = new Date();
	import "$lib/assets/global.css"
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<header>
<a href="/">
	<img
		id="logo"
		src={logo}
		alt="UCalgary Baja's Logo"
	/></a>
<nav>
	<ul>
		<li>
			<a href={"/"}>HOME</a>
		</li>

		<li>
			<a href={"/about"}>ABOUT</a>
		</li>

		<li>
			<a href={"/team"}>TEAM</a>
		</li>

		<li>
			<a href={"/history"}>HISTORY</a>
		</li>

		<li>
			<a href={"/sponsors"}>SPONSORS</a>
		</li>
		<li>
			<a href={"/contactus"}>CONTACT US</a>
		</li>
	</ul>
</nav>
<div></div>
</header>
{@render children?.()}
<footer id="ender">
			<div>
				<p>&#169; {date.getFullYear()} UCalgary Baja </p>
			</div>
			<div>
				<a href="https://www.linkedin.com/company/schulich-off-road/">
					<img
						src="https://www.svgrepo.com/show/521725/linkedin.svg"
						alt="Linkedin Logo"
					/>
				</a>
				<a href="https://www.instagram.com/uofcbaja/">
					<img
						src="https://www.svgrepo.com/show/521711/instagram.svg"
						alt="Intragram Logo"
					/>
				</a>

				<a href="mailto:uofcbaja@gmail.com?subject=Lets start something great">
					<img
						style={{ filter: `invert()` }}
						src="https://www.svgrepo.com/show/390657/email-envelope-letter-mail-message-communication.svg"
						alt="email us logo"
					/>
				</a>
				<a href="https://www.facebook.com/schulich.offroad/">
					<img
						style={{ filter: `invert()` }}
						src="https://www.svgrepo.com/show/521654/facebook.svg"
						alt="Facebook Logo"
					/>
				</a>
			</div>
			<ul class="hidden">
				<li>Developed by:</li>
				<li>Brock</li>
			</ul>
		</footer>
<style>
/* header */
img {
	object-fit: cover;
	object-position: center;
}

header {
	display: flex;
	flex-direction: row;
	height: 84px;
	margin: 0%;
	padding-right: 0.5svw;

	align-items: center;
	justify-content: space-between;
	background-color: var(--BajaBlack);
	/* position: absolute; */
	z-index: 1;
	top: 0;
	left: 0;
	right: 0;
}

header a {
	text-decoration: none;
	color: inherit;
	cursor: pointer;
	flex: 1;
	height: inherit;
}

header div button {
	cursor: pointer;
	height: 3rem;
	width: 3rem;
	justify-content: end;
	background-color: inherit;
	border: solid 2px gray;
	border-radius: 1rem;
}

header div button img {
	height: 2rem;
}

header div {
	display: flex;
	justify-content: flex-end;
	align-items: center;
	flex: 1;
}

#logo {
	height: inherit;
	/* width: 10svw; */
	padding: 0svh 0.15rem;
	margin-left: 3svw;
}

/* naviagation section */

nav {
	flex-grow: 1;
	height: inherit;
}

nav ul {
	display: flex;
	flex-flow: row wrap;
	justify-content: center;
	list-style: none;
	margin: 0px;
	padding: 0px;
	column-gap: 2svw;
	height: inherit;
	align-items: center;
}

nav a {
	text-decoration: none;
	color: inherit;
	cursor: pointer;
	background-color: var(--BajaBlack);
	color: whitesmoke;

	font-size: larger;

	/* border-left: solid 2px white; */
}
/* removes first divider */
/* can be removed if no borders from above */
nav a:first-child {
	border-left: none;
}

nav a li:hover {
	color: var(--BajaRed);
}
nav ul {
	display: flex;
	flex-direction: row;

	list-style: none;
	margin: 0px;
	padding: 0px;
}

@media only screen and (max-width: 800px) {
	nav ul {
		justify-content: space-evenly;
	}
	#BannerHeader h1 {
		font-size: 5rem !important;
		width: auto !important;
	}
}

nav li {
	text-wrap: nowrap;
	text-align: center;
}

/* correct colour of as in dark mode */
.darkmode nav a li::hover {
	filter: hue-rotate(180deg);
}

/* creates drop downs */
/* makes it so that the tags look the same whist having removing browser error */
.DropDownHeader {
	display: inline-block;
	background-color: white;
	padding: 0.5rem;
	border: solid 1px gray;
}

.DropDownHeader:hover {
	background-color: gray;
}

.Hide {
	display: none;
}

.DropDown {
	position: relative;
}

.DropDown a {
	cursor: default;
}

/* makes dropdown visible */
.DropDown:hover .Hide {
	display: block;
	position: absolute;
	width: 100%;
	text-align: center;
}

/* For Banner */

#BannerHeader {
	height: 100svh;
	width: 100%;
	display: flex;

	position: relative;
	z-index: 0;
	top: 0;
	left: 0;
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;

	/* -webkit-mask-image: linear-gradient(
		to bottom,
		black var(--fade-starts-at-bottom),
		transparent
	);
	mask-image: linear-gradient(
		to bottom,
		black var(--fade-starts-at-bottom),
		transparent
	); */
}

#BannerHeader::after {
	content: "";
	position: absolute;
	inset: 0;
	background: linear-gradient(
		to bottom,
		rgba(0, 0, 0, 0) var(--fade-starts-at-bottom, 70%),
		#1f1f1f 100%
	);
	pointer-events: none;
	z-index: 1;
}

:root {
	--fade-starts-at-bottom: 90%;
	--fade-starts-at-top: 96%;
	--banner-text-background: rgba(31, 31, 31, 0.8);
	--banner-text-padding: 2svh 2svw;
	--banner-text-rounding: 1rem;
}

/* #BannerHeader img {
	position: relative;
	height: 100svh;
	width: inherit;
	top: 0;
	left: 0;
	background-size: cover;
	background-position: center;

	z-index: -2;
} */

/* used to postiion title and sub title */
#BannerHeader div {
	margin-top: 35svh;
	margin-left: auto;
	margin-right: 4svw;
	/* padding-left: 60svw; */
	/* text-align: end; */
}

#BannerHeader h1 {
	font-size: 100px; /* todo make larger */
	font-weight: normal;
	text-align: end;
	width: 11ch;
	color: white;
	/* background-color: var(--banner-text-background); */
	padding: var(--banner-text-padding);
	margin: 0px;
	border-radius: var(--banner-text-rounding);
	font-weight: bolder;
}

#BannerHeader h2 {
	display: flex;
	width: fit-content;

	font-size: xx-large;
	font-weight: normal;

	color: white;
	/* background-color: var(--banner-text-background); */
	padding: var(--banner-text-padding);
	border-radius: var(--banner-text-rounding);
}

/* for dark mode */

.darkmode {
	filter: invert(95%) hue-rotate(180deg);
	background-color: white;
}

#root.darkmode #logo.logoAfterDark {
	filter: hue-rotate(180deg);
}

#root.darkmode #darkModeToggle {
	filter: hue-rotate(180deg);
}

/* footer */
#ender {
	display: flex;
	flex-direction: column;
	padding-top: 10px;
	padding-bottom: 10px;
	justify-content: center;
	background-color: var(--BajaRed);
	color: white;
}

#pointerCursor {
	cursor: pointer;
}

#ender div {
	display: flex;
	flex-direction: row;
	justify-content: center;
	column-gap: 2svw;
}

/* #ender p {
	padding-left: 2%;
} */

#ender .hidden {
	display: flex;
	flex-direction: row;
	justify-content: center;
	display: none;
}

#ender .hidden li {
	list-style-type: none;
	padding-right: 2%;
}

#ender a img {
	height: 30px;
	width: 30px;
	aspect-ratio: 1;
	filter: invert();
}
</style>