<script>
	import '$lib/assets/global.css';
	import Top from '$lib/components/Layout/Top.svelte';
	import Bottom from '$lib/components/Layout/Bottom.svelte';

	import { fly } from 'svelte/transition';
	import { page } from '$app/stores';
	import { beforeNavigate } from '$app/navigation';

	let { children } = $props();

	const routes = [
		{ name: 'home', href: '/' },
		{ name: 'about', href: '/about' },
		{ name: 'team', href: '/team' },
		{ name: 'history', href: '/history' },
		{ name: 'sponsors', href: '/sponsors' },
		{ name: 'contact us', href: '/contact' }
	];

	let slideDirection = $state(100); // 100 means sliding from right, -100 from left

	beforeNavigate((navigation) => {
		const fromPath = navigation.from?.url.pathname;
		const toPath = navigation.to?.url.pathname;

		if (fromPath && toPath) {
			// Use findIndex to match the href inside your route objects
			const fromIndex = routes.findIndex((route) => route.href === fromPath);
			const toIndex = routes.findIndex((route) => route.href === toPath);

			// If both pages are found in our routes array, compare their positions
			if (fromIndex !== -1 && toIndex !== -1) {
				// Moving to a higher index page = slide from right (100)
				// Moving to a lower index page = slide from left (-100)
				slideDirection = toIndex > fromIndex ? 100 : -100;
			}
		}
	});
</script>

<svelte:head>
	<meta
		name="keywords"
		content="university calgary baja car uofc off-road car sae ucalgary offroad club"
	/>
	<meta name="author" content="Brock Moffat" />
	<meta name="author" content="Siddharth Engineer" />
	<meta name="author" content="Aarsh Trivedi" />
	<meta name="author" content="Muhammad Ahmad" />
</svelte:head>

<Top {routes} />
<main>
	{#key $page.url.pathname}
		<div
			class="page-container"
			in:fly={{ x: `${slideDirection}vw`, duration: 600 }}
			out:fly={{ duration: 0 }}
		>
			{@render children?.()}
		</div>
	{/key}
</main>
<Bottom />

<style>
	main {
		background-color: #1f1f1f;
		overflow-x: hidden;
		width: 100%;
	}
</style>
