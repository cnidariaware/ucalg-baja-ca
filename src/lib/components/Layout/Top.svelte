<script>
	import logo from '$lib/assets/logo.png';
	import { page } from '$app/stores';
</script>

<header>
	<a href="/"> <img src={logo} alt="UCalgary Baja's Logo" /></a>
	<nav>
		<ul>
			<li>
				<a href="/" class:active={$page.url.pathname === '/'}>HOME</a>
			</li>
			<li>
				<a href={'/about'} class:active={$page.url.pathname === '/about'}>ABOUT</a>
			</li>
			<li>
				<a href={'/team'} class:active={$page.url.pathname === '/team'}>TEAM</a>
			</li>
			<li>
				<a href={'/history'} class:active={$page.url.pathname === '/history'}>HISTORY</a>
			</li>
			<li>
				<a href={'/sponsors'} class:active={$page.url.pathname === '/sponsors'}>SPONSORS</a>
			</li>
			<li>
				<a href={'/contactus'} class:active={$page.url.pathname === '/contactus'}>CONTACT US</a>
			</li>
			<li>
				<a href={'/merch'} class:active={$page.url.pathname === '/merch'}>MERCH</a>
			</li>
		</ul>
	</nav>
	<div></div>
</header>

<style>
	header {
		display: flex;
		flex-direction: row;
		height: 84px;
		padding-right: 0.5svw;
		background-color: var(--BajaBlack);
	}
	a {
		cursor: pointer;
		flex: 1;
		height: inherit;
	}
	div {
		flex: 1;
	}
	img {
		height: inherit;
		padding: 0svh 0.15rem;
		margin-left: 3svw;
	}
	nav {
		flex-grow: 1;
		height: inherit;
	}
	ul {
		flex-flow: row wrap;
		justify-content: center;
		column-gap: 2svw;
		height: inherit;
		align-items: center;
		display: flex;
		margin: 0px;
		padding: 0px;
		list-style: none;
	}
	nav a {
		text-decoration: none;
		cursor: pointer;
		background-color: var(--BajaBlack);
		color: whitesmoke;
		font-size: larger;
	}
	nav a:hover {
		color: var(--BajaRed);
	}
	@media only screen and (max-width: 800px) {
		nav ul {
			justify-content: space-evenly;
		}
	}

	.active {
		color: var(--BajaRed);
		border-bottom: 2px solid var(--BajaRed);
	}
</style>
