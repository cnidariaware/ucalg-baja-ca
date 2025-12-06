import { browser } from '$app/environment';

const STORAGE_KEY = 'UCalgaryBajaMerchItems';

export async function loadMerchItems() {
	if (!browser) return []; // skip during SSR

	// Check sessionStorage first
	const stored = sessionStorage.getItem(STORAGE_KEY);
	if (stored) {
		return JSON.parse(stored);
	}

	// Fetch from backend if not in localStorage
	try {
		const res = await fetch('http://localhost:6526/shop/merch');
		if (!res.ok) throw new Error('Failed to fetch merch items');

		const data = await res.json();
		sessionStorage.setItem(STORAGE_KEY, JSON.stringify(data)); // cache for next time
		return data;
	} catch (err) {
		console.error('Error loading merch items:', err);
		return [];
	}
}

export async function merchCategories() {
	if (!browser) return [];

	const merchList = await loadMerchItems();

	// Extract the category of each item
	const categories = merchList.map((item) => item.category);
	// Return unique categories
	return Array.from(new Set(categories));
}

/*
<script>
  import { loadMerchItems } from '$lib/merch';
</script>

{#await loadMerchItems()}
  <!-- Loading state -->
  <p>Loading merchandise...</p>
{:then merchItems}
  <!-- Content state -->
  {#if merchItems.length === 0}
    <p>No merchandise available.</p>
  {:else}
    <ul>
      {#each merchItems as item}
        <li>{item.name} - ${item.price}</li>
      {/each}
    </ul>
  {/if}
{:catch error}
  <!-- Error state -->
  <p>Error loading merchandise: {error.message}</p>
{/await}
*/
