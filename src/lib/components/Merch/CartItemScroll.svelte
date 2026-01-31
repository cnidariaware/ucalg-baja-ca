<script>
	import { cartStore } from '$lib/cookies/cartStore.js';

	const total = cartStore.formatted_subtotal;
</script>

<div class="cart-body">
	<main>
		{#if $cartStore.length === 0}
			<p>Your cart is empty.</p>
		{:else}
			{#each $cartStore as item, index}
				<div key={item + index}>
					<img src={item.imageSrc} alt={item.name + ' picture'} />

					<div>
						<p>
							{item.name}
						</p>
						<div>
							<span>({item.colour})</span>
							<p>Size: {item.itemSize}</p>
						</div>
					</div>

					<div>
						<div>
							<button
								type="button"
								onclick={() => cartStore.dec(index)}
								aria-label="Decrease quantity"
							>
								-
							</button>

							<input type="number" min="1" bind:value={item.quantity} />

							<button
								type="button"
								onclick={() => cartStore.inc(index)}
								aria-label="Increase quantity"
							>
								+
							</button>
						</div>

						<button
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
		<span>Subtotal:</span>
		<div>
			<span>${$total}</span>
			<span>(Before Shipping)</span>
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

	footer > div {
		display: flex;
		align-items: baseline;
		gap: 6px;
	}

	footer > div > span:nth-of-type(2) {
		font-style: italic;
		font-weight: 400;
		opacity: 0.6;
		font-size: 0.85rem;
	}

	/* scroll area */
	main {
		flex: 1;
		overflow-y: auto;
		padding: 1rem;
	}

	main > p {
		color: #666;
	}

	/* individual cart item */
	main > div {
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

	main > div > img {
		width: 80px;
		height: 80px;
		object-fit: cover;
		border-radius: 4px;
	}

	main > div > div > div {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	main > div > div > p {
		font-weight: 600;
		margin: 0;
		color: #111;
		width: 12ch;
	}

	main > div > div > div > span {
		font-weight: 400;
	}

	main > div > div:nth-of-type(2) {
		display: flex;
		align-items: center;
		gap: 8px;
		justify-content: flex-end;
	}

	main > div > div:nth-of-type(2) > div {
		display: inline-grid;
		grid-template-columns: 40px 56px 40px;
		gap: 8px;
	}

	button {
		height: 40px;
		border-radius: 10px;
		border: var(--Border);
		background: #fff;
		cursor: pointer;
		font-size: 18px;
		aspect-ratio: 1;
	}

	button:hover {
		background-color: var(--BajaHover);
	}

	input {
		height: 40px;
		border-radius: 10px;
		border: var(--Border);
		text-align: center;
		font-size: 16px;
		width: 56px;
	}

	main > div > div > button {
		background: transparent;
		border: none;
		font-size: 1.25rem;
		cursor: pointer;
		color: var(--BajaRed);
		padding: 4px;
	}
</style>
