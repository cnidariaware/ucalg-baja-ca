<script>
	import { loadMerchItems } from '$lib/cookies/shopItems';
	import TopBanner from '$lib/components/Merch/MerchTopBanner.svelte';
	import ProductCard from '$lib/components/Merch/ProductCard.svelte';
</script>

<TopBanner
	titleText="All Drops"
	imgUrl="https://res.cloudinary.com/dpgrgsh7g/image/upload/v1755914996/DSC_0393_inuw2z.jpg"
/>
<div style="height: 6svh;"></div>
{#await loadMerchItems()}
	<p>Loading...</p>
{:then merchItems}
	<div class="product-grid">
		{#each merchItems as i}
			<ProductCard category={i.category} name={i.name} price={i.price} imageSrc={i.url_images[0]} />
		{/each}
	</div>
{/await}

<div style="height: 6svh;"></div>

<style>
	.product-grid {
		display: flex;
		flex-wrap: wrap;
		gap: 1svw;
		justify-content: center;
		margin: 0 auto;
		padding: 5 1svw;
		max-width: calc(1080px + 8svw);
	}

	.card {
		display: flex;
		justify-content: center;
		color: white;
	}

	/* medium screens: limit max width so only 2 columns fit */
	@media (max-width: 1100px) {
		.product-grid {
			max-width: calc(480px + 4svw); /* 2 * 240px + gap */
		}
	}

	/* small screens: single column */
	@media (max-width: 700px) {
		.product-grid {
			max-width: 100%;
			padding: 0 2svw;
			gap: 2svw;
		}
		.card {
			flex: 1 1 100%;
			max-width: 420px;
		}
	}
</style>
