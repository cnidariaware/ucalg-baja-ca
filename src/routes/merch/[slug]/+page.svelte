<script>
	import { page } from '$app/state';
	import { loadMerchItems } from '$lib/cookies/shopItems';
	import MerchItem from '$lib/components/Merch/MerchItem.svelte';

	let merchItemName = $derived(page.params.slug);

	const findProduct = (merchList, merchName) => {
		// console.log('Finding:', merchName);
		// console.log('Merch list:', merchList);
		return merchList.find((item) => item.name === merchName);
	};
</script>

{#await loadMerchItems()}
	<p>Loading...</p>
{:then merchItems}
	{#if merchItems.length === 0}
		<p>Product not found: {merchItemName}</p>
	{:else}
		<!-- <p>{merchItemName}</p>
		<p>{JSON.stringify(product)}</p> -->

		{@const product = findProduct(merchItems, merchItemName)}

		{#if product}
			<MerchItem {product} />
		{:else}
			<p>Product not found: {merchItemName}</p>
		{/if}
	{/if}
{:catch e}
	<p>An error has occured</p>
{/await}
