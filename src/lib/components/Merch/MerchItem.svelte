<script>
	import { cartStore } from '$lib/cookies/cartStore.js';
	import { loadMerchItems } from '$lib/cookies/shopItems';
	let { product } = $props();

	let idx = $state(0);
	const prev = () => (idx = (idx - 1 + product.url_images.length) % product.url_images.length);
	const next = () => (idx = (idx + 1) % product.url_images.length);

	let qty = $state(1);
	const dec = () => (qty = Math.max(1, qty - 1));
	const inc = () => (qty = qty + 1);

	let selectedColour = $derived(product.colours[0] ?? '');
	let selectedSize = $derived(product.sizes_available[0] ?? '');

	let addToCartButton = $state(true);

	async function addToCart() {
		addToCartButton = false;

		addToCartButton = await cartStore.addToCart(product, qty, selectedColour, selectedSize);
	}
</script>

{#await loadMerchItems()}
	<title>UCalgary Baja - Merch - Loading</title>
	<p>Loading...</p>
{:then products}
	{#if products.length !== 0}
		<title>UCalgary Baja - Merch - {product.name}</title>

		<div class="product-page">
			<figure>
				<button type="button" aria-label="Previous image" onclick={prev}>&#8249;</button>

				<img alt={product.name} src={product.url_images[idx]} />

				<button type="button" aria-label="Next image" onclick={next}>&#8250;</button>

				<button
					type="button"
					aria-label="Open in new tab"
					onclick={() => window.open(product.url_images[idx], '_blank')}>↗</button
				>
			</figure>

			<section>
				<div>
					<div>Merch / {product.category}</div>
					<h1>{product.name}</h1>
					<div>${product.price}</div>
				</div>

				<div>
					<h3>Description</h3>
					<p>{product.description}</p>
				</div>

				{#if product.colours.length}
					<label>
						<span>Color</span>
						<select bind:value={selectedColour}>
							{#each product.colours as c}
								<option value={c}>{c}</option>
							{/each}
						</select>
					</label>
				{/if}

				{#if product.sizes_available.length}
					<label>
						<span>Size</span>
						<select bind:value={selectedSize}>
							{#each product.sizes_available as s}
								<option value={s}>{s}</option>
							{/each}
						</select>
					</label>
				{/if}

				<div>
					<div>
						<button type="button" onclick={dec} aria-label="Decrease quantity">-</button>
						<input type="number" min="1" bind:value={qty} />
						<button type="button" onclick={inc} aria-label="Increase quantity">+</button>
					</div>

					<button
						type="button"
						onclick={addToCart}
						disabled={!addToCartButton}
						style={addToCartButton ? '' : 'background-color: grey; color: var(--BajaBlack)'}
						>{addToCartButton ? 'Add to Cart' : 'Adding...'}
					</button>
				</div>

				<hr />

				<div>
					<h3>Additional Details</h3>
					<dl>
						<dt>Material</dt>
						<dd>{product.material}</dd>

						{#if product.cleaning}
							<dt>Washing / Drying</dt>
							<dd>{product.cleaning}</dd>
						{/if}

						{#if product.additional_details}
							<dt>Additional Information</dt>
							<dd>{product.additional_details}</dd>
						{/if}

						<dt>Size Guide</dt>
						<dd><a href={product.size_guide_img_url}>View size guide</a></dd>
					</dl>
				</div>
			</section>
		</div>
	{/if}
{:catch e}
	<p>An Error has occured</p>
{/await}

<style>
	.product-page {
		max-width: 1100px;
		margin: 0 auto;
		padding: 4svh;
		display: grid;
		grid-template-columns: 1.1fr 1fr;
		gap: 28px;
	}

	@media (max-width: 900px) {
		.product-page {
			grid-template-columns: 1fr;
		}
	}

	figure {
		position: relative;
		padding: 16px;

		margin: 0;
		height: fit-content;
	}

	figure > img {
		display: block;
		width: 100%;
		aspect-ratio: 1 / 1;
		border-radius: 20px;
	}

	figure > button:nth-of-type(1),
	figure > button:nth-of-type(2) {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		font-size: 26px;
		line-height: 1;
		width: 35px;
		height: 35px;
		border-radius: 10px;
		border: none;
		background: #fff;
		cursor: pointer;
	}
	/* left, */
	figure > button:nth-of-type(1) {
		left: 20px;
	}

	/* right */
	figure > button:nth-of-type(2) {
		right: 20px;
	}

	/* .gallery .icon */
	figure > button:nth-of-type(3) {
		position: absolute;
		bottom: 25px;
		left: 20px;
		line-height: 1;
		font-size: 26px;
		border: none;
		background: #fff;
		width: 35px;
		height: 35px;
		border-radius: 10px;
		cursor: pointer;
	}

	section > div:nth-of-type(1) > div:nth-of-type(1) {
		font-size: 14px;
		opacity: 0.8;
		margin-bottom: 4px;
		font-style: italic;
	}
	section > div:nth-last-of-type(1) h1 {
		margin: 0 0 6px 0;
		font-size: 35px;
	}
	section > div:nth-of-type(1) > div:nth-of-type(2) {
		font-size: 20px;
		font-weight: 600;
	}

	section > div:nth-of-type(2) {
		margin-top: 10px;
	}
	h3 {
		padding-bottom: 5px;
		font-weight: 600;
		font-size: medium;
		margin-bottom: 6px;
	}
	section > div:nth-of-type(2) > p {
		margin: 0;
		line-height: 1.5;
		font-size: medium;
	}

	label {
		display: grid;
		grid-template-columns: 120px 1fr;
		align-items: center;
		gap: 10px;
		margin-top: 14px;
		font-weight: 500;
		position: relative;
	}
	label > span {
		font-size: medium;
	}
	select {
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
		height: 44px;
		border-radius: 10px;
		border: var(--Border);
		padding: 0 44px 0 12px; /* leave room on right for arrow */
		background-color: #ffffff;
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cpath d='M5 7l5 5 5-5' stroke='%23000' stroke-width='1.8' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
		background-repeat: no-repeat;
		background-position: right 12px center;
		background-size: 18px;
		color: #000;
		font-size: 16px;
		box-sizing: border-box;
		width: 100%;
		border: 1px solid #ccc;
	}

	/* hide the native dropdown arrow in IE/Edge */
	select::-ms-expand {
		display: none;
	}

	select:focus {
		border: none;
		outline: none;
		box-shadow: 0 0 0 3px rgba(196, 18, 48, 0.12); /* subtle Baja red focus */
		border-color: rgba(196, 18, 48, 0.6);
	}

	/* style the options inside the native dropdown (limited cross-browser support) */
	select option {
		padding: 8px 12px;
		font-size: 15px;
		color: #000;
		background: #fff;
	}

	section > div:nth-of-type(3) {
		display: grid;
		grid-template-columns: auto 1fr;
		gap: 14px;
		margin-top: 16px;
		align-items: center;
	}

	section > div:nth-of-type(3) > div {
		display: inline-grid;
		grid-template-columns: 40px 56px 40px;
		gap: 8px;
	}

	section > div:nth-of-type(3) > div > button {
		height: 40px;
		border-radius: 10px;
		border: var(--Border);
		background-color: #fff;
		cursor: pointer;
		font-size: 18px;
	}
	input {
		height: 40px;
		border-radius: 10px;
		border: var(--Border);
		text-align: center;
		font-size: 16px;
		width: 56px;
	}

	section > div:nth-of-type(3) > button {
		border-radius: 10px;
		background-color: var(--BajaRed);
		border-color: transparent;
		align-items: start;
		margin: 1svh 0svw;
		padding: 1svh 0svw;
		font-size: large;
		color: #ffffff;
	}
	button:hover {
		cursor: pointer;
		background-color: var(--BajaHover) !important;
	}

	hr {
		margin: 20px 0;
		border: none;
		border-top: var(--Border);
	}

	dl {
		margin: 0;
		display: grid;
		grid-template-columns: 180px 1fr;
		row-gap: 10px;
		column-gap: 12px;
	}
	dt {
		font-weight: 600;
	}
	dd {
		margin: 0;
	}
	dl a {
		color: #000;
		text-decoration: underline;
	}
	dl a:hover {
		color: var(--BajaRed);
	}
	section {
		padding: 16px;
	}
</style>
