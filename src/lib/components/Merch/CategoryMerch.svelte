<script>
	import TopBanner from '$lib/components/Merch/MerchTopBanner.svelte';
	import MerchItem from '$lib/components/Merch/MerchItem.svelte';
	import { loadMerchItems, merchCategories } from '$lib/cookies/shopItems';
	import ProductCard from '$lib/components/Merch/ProductCard.svelte';
	import { page } from '$app/state';

	let categoryType = $derived(page.params.slug);

	const matchesCategory = (backendCategory, urlCategory) => {
		return backendCategory.toLowerCase().startsWith(urlCategory.toLowerCase());
	};
</script>

{#await Promise.all([loadMerchItems(), merchCategories()])}
	<p>Loading...</p>
{:then [merchList, categories]}
	{#if merchList === 0}
		<p>Could not get merch items</p>
	{:else if !categories.includes(categoryType)}
		<p>Category "{categoryType}" does not exist</p>
	{:else}
		<div>
			{#each merchList as merchItem, index}
				{#if matchesCategory(merchItem.category, categoryType)}
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
