<script>
	import TopBanner from '$lib/components/Merch/MerchTopBanner.svelte';
	import MerchItem from '$lib/components/Merch/MerchItem.svelte';
	import { loadMerchItems } from '$lib/cookies/shopItems';
	import ProductCard from '$lib/components/Merch/ProductCard.svelte';
</script>

<TopBanner
	titleText="Heavy Wear"
	imgUrl="https://res.cloudinary.com/dpgrgsh7g/image/upload/v1755914996/DSC_0393_inuw2z.jpg"
/>

{#await loadMerchItems()}
	<p>Loading...</p>
{:then merchList}
	{#if merchList === 0}
		<p>Could not get merch items</p>
	{:else}
		{console.log(merchList)}
		<div>
			{#each merchList as merchItem, index}
				{#if merchItem.category === 'heavy-wear'}
					<ProductCard
						category={merchItem.category}
						name={merchItem.name}
						price={merchItem.price}
						imageSrc={merchItem.url_images[0]}
					/>
				{/if}
			{/each}
		</div>
	{/if}
{:catch}
	<p>An Error has occured</p>
{/await}

<!-- <MerchItem /> -->

<style>
	div {
		display: flex;
		justify-content: space-evenly;
		flex-wrap: wrap;
		padding: 4svh 2svw;
		row-gap: 4svh;
		column-gap: 2svw;
	}
</style>
