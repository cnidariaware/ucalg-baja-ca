<script>
	import '$lib/assets/global.css';
	import TopBanner from '$lib/components/TopBanner.svelte';
	let { children } = $props();
</script>

<header>
<div></div>
<nav>
	<ul>
		<li>
			<a href={"/merch"}>ALL DROPS</a>
		</li>
		<li>
			<a href={"/merch/heavy"}>HEAVY WEAR</a>
		</li>
		<li>
			<a href={"/merch/soft"}>SOFT WEAR</a>
		</li>
		<li>
			<a href={"/merch/accesories"}>ACCESORIES</a>
		</li>
	</ul>
</nav>
<a href="/merch/checkout">
	<img
		src={"https://www.svgrepo.com/show/470579/cart.svg"}
		alt="Cart Logo"
	/></a>
</header>


<style>

	
header {
	display: flex;
	height: 84px;
	padding-right: 0.5svw;
	background-color: var(--BajaBlack);
}
a {
	cursor: pointer;
	flex: 1;
	height: inherit;
	display: flex;
	align-items: center;
	justify-content: center;
}
div {
	flex: 1;
}
img {
	aspect-ratio: 1;
	height: 8svh;
	padding: 0svh 0.15rem;
	margin-left: 3svw;
	filter: invert();

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
</style>

{@render children?.()}
