<script>
	import CategoryMerch from '$lib/components/Merch/CategoryMerch.svelte';
	import TopBanner from '$lib/components/TopBanner.svelte';
	import { page } from '$app/state';

	let categoryType = $derived(
		page.params.slug
			.replace('-', ' ')
			.split(' ')
			.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
			.join(' ')
	);
</script>

<TopBanner
	titleText={categoryType}
	imgUrl="https://res.cloudinary.com/dpgrgsh7g/image/upload/v1755914996/DSC_0393_inuw2z.jpg"
/>

<CategoryMerch />
