<script>
	import { loadMerchItems } from '$lib/cookies/shopItems';
	import ProductCard from '$lib/components/Merch/ProductCard.svelte';
	import TopBanner from '$lib/components/TopBanner.svelte';
</script>

<TopBanner
	titleText="All Drops"
	imgUrl="https://res.cloudinary.com/dpgrgsh7g/image/upload/v1755915387/DSC_0432_e1pfjn.jpg"
/>
<span style="height: 6svh;"></span>
{#await loadMerchItems()}
	<p>Loading...</p>
{:then merchItems}
	<div class="product-grid">
		{#each merchItems as i}
			<ProductCard category={i.category} name={i.name} price={i.price} imageSrc={i.url_images[0]} />
		{/each}
	</div>
{/await}

<span style="height: 6svh;"></span>

<style>
	div {
		display: flex;
		flex-wrap: wrap;
		gap: 1svw;
		justify-content: center;
		margin: 0 auto;
		padding: 5 1svw;
		max-width: calc(1080px + 8svw);
	}

	span {
		display: block;
		height: 6svh;
	}

	/* medium screens: limit max width so only 2 columns fit */
	@media (max-width: 1100px) {
		div {
			max-width: calc(480px + 4svw); /* 2 * 240px + gap */
		}
	}

	/* small screens: single column */
	@media (max-width: 700px) {
		div {
			max-width: 100%;
			padding: 0 2svw;
			gap: 2svw;
		}
	}
</style>
