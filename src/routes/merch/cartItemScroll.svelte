<script>
	// import { cartStore, subtotal, formatPrice, removeItem, inc, dec } from './cartStore.svelte.js';
	import { cartStore } from '$lib/cookies/cartStore.js';
	// const formatPrice = (price) => `$${price.toFixed(2)}`;

	// reactive subtotal: sum of price * quantity
	// let subtotal = $derived($cartStore.reduce((sum, item) => sum + item.price * item.quantity, 0));
</script>

<div class="cart-body">
	<main class="items">
		{#if $cartStore.length === 0}
			<p class="empty">Your cart is empty.</p>
		{:else}
			{#each $cartStore as item, index}
				<div class="cart-item" key={item + index}>
					<img class="item-image" src={item.imageSrc} alt={item.name + ' picture'} />

					<div>
						<p class="item-name">
							{item.name}
						</p>
						<div class="item-details">
							<span class="item-color">({item.colour})</span>
							<p class="item-size">Size: {item.itemSize}</p>
						</div>
					</div>

					<div id="itemmanipulation">
						<div class="qty">
							<button
								type="button"
								class="square"
								onclick={() => cartStore.dec(index)}
								aria-label="Decrease quantity"
							>
								-
							</button>

							<input class="count" type="number" min="1" bind:value={item.quantity} />

							<button
								type="button"
								class="square"
								onclick={() => cartStore.inc(index)}
								aria-label="Increase quantity"
							>
								+
							</button>
						</div>

						<button
							class="remove-btn"
							type="button"
							aria-label="Remove item from cart"
							onclick={() => cartStore.removeItem(index)}
						>
							🗑
						</button>
					</div>
				</div>
			{/each}
		{/if}
	</main>

	<footer>
		<span class="label">Subtotal:</span>
		<div class="subtotal-value">
			<span>${$cartStore.formatted_subtotal}</span>
			<span class="beforetax">(Before Taxes and Shipping)</span>
		</div>
	</footer>
</div>

<style>
	.cart-body {
		display: flex;
		flex-direction: column;
		height: 100%;
	}

	footer {
		padding-top: 2svh;
		border-top: 1px solid #eee;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 0.75rem;
		font-weight: 600;
	}

	.subtotal-value {
		display: flex;
		align-items: baseline;
		gap: 6px;
	}

	.beforetax {
		font-style: italic;
		font-weight: 400;
		opacity: 0.6;
		font-size: 0.85rem;
	}

	/* scroll area */
	.items {
		flex: 1;
		overflow-y: auto;
		padding: 1rem;
	}

	.empty {
		color: #666;
	}

	/* individual cart item */
	.cart-item {
		display: grid;
		grid-template-columns: 80px 1fr auto; /* image | details | manipulation */
		align-items: center;
		padding: 0.75rem 0;
		border-bottom: 1px solid #eee;
		border-top: 1px solid #eee;
		gap: 1rem;
		max-width: 950px; /* center whole row on large screens */
		margin: 0 auto; /* centers the row */
	}

	.item-image {
		width: 80px;
		height: 80px;
		object-fit: cover;
		border-radius: 4px;
	}

	.item-details {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.item-name {
		font-weight: 600;
		margin: 0;
		color: #111;
		width: 12ch;
	}

	.item-color {
		font-weight: 400;
	}

	#itemmanipulation {
		display: flex;
		align-items: center;
		gap: 10px;
		justify-content: flex-end;
	}

	.qty {
		display: inline-grid;
		grid-template-columns: 40px 56px 40px;
		gap: 8px;
	}

	.square {
		height: 40px;
		border-radius: 10px;
		border: var(--Border);
		background: #fff;
		cursor: pointer;
		font-size: 18px;
	}

	.square:hover {
		background-color: var(--BajaHover);
	}

	.count {
		height: 40px;
		border-radius: 10px;
		border: var(--Border);
		text-align: center;
		font-size: 16px;
		width: 56px;
	}

	.remove-btn {
		background: transparent;
		border: none;
		font-size: 1.25rem;
		cursor: pointer;
		color: var(--BajaRed);
		padding: 4px;
	}
</style>
