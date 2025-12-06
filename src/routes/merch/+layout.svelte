<script>
	import TopBanner from '$lib/components/TopBanner.svelte';
	import CartItemScroll from '$lib/components/Merch/CartItemScroll.svelte';
	import { merchCategories } from '$lib/cookies/shopItems';
	import { browser } from '$app/environment';
	import { cartStore } from '$lib/cookies/cartStore.js';
	let { children } = $props();
	let { showCart } = $state({ showCart: false });

	// let disableCheckout = $derived(() => {
	// 	if (cartStore.formatted_subtotal <= 0) {
	// 		return true;
	// 	} else {
	// 		false;
	// 	}
	// });

	let disableCheckout = $derived(parseFloat(cartStore.formatted_subtotal) <= 0);

	const categories = merchCategories();

	// prevent background scroll when cart is open
	$effect(() => {
		if (typeof document === 'undefined') return;
		const prev = document.body.style.overflow;
		document.body.style.overflow = showCart ? 'hidden' : '';
		return () => (document.body.style.overflow = prev);
	});
</script>

<header>
	<div id="headerdiv"></div>
	<nav>
		<ul>
			<li>
				<a href={'/merch'}>ALL DROPS</a>
			</li>
			{#await merchCategories() then categories}
				{#if categories.length === 0}
					<p>Failed to get merch Items</p>
				{:else}
					{#each categories as cat, index}
						<li key={index}>
							<a href={'/merch/category/' + cat}>{cat.toUpperCase()}</a>
						</li>
					{/each}
				{/if}
			{:catch}
				<p>An Error occured</p>
			{/await}

			<!-- <li>
				<a href={'/merch/category/heavy'}>HEAVY WEAR</a>
			</li>
			<li>
				<a href={'/merch/category/soft'}>SOFT WEAR</a>
			</li>
			<li>
				<a href={'/merch/category/accesories'}>ACCESORIES</a>
			</li> -->
		</ul>
	</nav>
	<button class="cart-btn" onclick={() => (showCart = true)} aria-label="Open cart">
		<img src={'https://www.svgrepo.com/show/470579/cart.svg'} alt="Cart Logo" />
	</button>
</header>

<div
	class="cart-overlay"
	class:visible={showCart}
	role="button"
	tabindex="0"
	onclick={() => (showCart = false)}
	onkeydown={(e) => (e.key === 'Enter' || e.key === ' ') && (showCart = false)}
></div>

<aside class="side-cart" class:open={showCart} aria-hidden={!showCart}>
	<header>
		<h3 id="topheader">Shopping Cart</h3>
		<button class="close" onclick={() => (showCart = false)} aria-label="Close">&times;</button>
	</header>
	<main class="items">
		<CartItemScroll />
	</main>
	<footer>
		<a
			href="/merch/checkout"
			class="checkout-btn"
			id="checkout"
			onclick={(e) => {
				if (disableCheckout) {
					event.preventDefault(); // stops navigation
				} else {
					showCart = false;
				}
			}}
			style={disableCheckout ? 'background-color:grey; cursor: default;' : ''}
		>
			Checkout
		</a>
	</footer>
</aside>

{@render children?.()}

<style>
	/* header css */
	header {
		display: flex;
		height: 84px;
		padding-right: 0.5svw;
		background-color: var(--BajaBlack);
	}
	button {
		cursor: pointer;
		flex: 1;
		height: inherit;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	#headerdiv {
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
	
	/* cart pop-up css */
	.cart-btn {
		background: transparent;
		border: none;
		padding: 0;
		margin-left: 0.5rem;
		display: flex;
		align-items: center;
		cursor: pointer;
	}

	.cart-overlay {
		position: fixed;
		inset: 0;
		background: rgba(0, 0, 0, 0.45);
		opacity: 0;
		pointer-events: none;
		transition: opacity 0.25s ease;
		z-index: 50;
	}
	.cart-overlay.visible {
		opacity: 1;
		pointer-events: auto;
	}

	.side-cart {
		position: fixed;
		top: 0;
		right: 0;
		height: 100vh;
		width: min(470px, 90vw);
		background: white;
		color: #111;
		box-shadow: -10px 0 30px rgba(0, 0, 0, 0.3);
		transform: translateX(100%);
		transition: transform 0.28s cubic-bezier(0.2, 0.9, 0.3, 1);
		z-index: 60;
		display: flex;
		flex-direction: column;
	}
	.side-cart.open {
		transform: translateX(0);
	}
	.side-cart header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 1rem;
		border-bottom: 1px solid #eee;
	}
	.side-cart header h3 {
		margin: 0;
		font-size: 1.1rem;
	}
	.side-cart .close {
		background: transparent;
		border: none;
		font-size: 1.5rem;
		line-height: 1;
		cursor: pointer;
		width: 2px;
		height: 5svh;
		color: white;
		justify-content: right;
	}
	#topheader {
		color: white;
	}

	.side-cart .items {
		flex: 1;
		overflow-y: auto;
		padding: 1rem;
	}

	.side-cart footer {
		padding: 1rem;
	}

	.checkout-btn {
		display: inline-block;
		width: 100%;
		text-align: center;
		padding: 0.8rem 1rem;
		background: var(--BajaRed);
		color: white;
		font-weight: bolder;
		text-decoration: none;
		border-radius: 3px;
	}
	#checkout:hover {
		background: var(--BajaHover);
	}
	#checkout {
		background: var(--BajaRed);
		width: 26svw;
		justify-content: center;
		margin: 0 auto;
		display: block;
	}

	@media only screen and (max-width: 800px) {
		nav ul {
			justify-content: space-evenly;
		}
		.side-cart {
			width: 100vw;
		}
	}
</style>
