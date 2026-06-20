<script>
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import { untrack } from 'svelte';

	// old pages mapped to new page
	const oldPages = {
		'/contactus': '/contact',
		'/Contact': '/contact',
		'/About': '/about',
		'/Vehicles': '/history',
		'/OurSponsors': '/sponsors'
	};

	const pathname = page.url.pathname;

	// Normalize casing if needed (optional but recommended)
	const normalized = pathname.toLowerCase();
	const redirectTo = oldPages[pathname] || oldPages[normalized];

	const statusCode = redirectTo ? 301 : page.status || 404;

	// const statusCode = oldPages[page.url.pathname] ? page.status : 301;

	let countdown = $state(5);

	const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

	$effect(() => {
		if (statusCode !== 301) return;
		(async () => {
			// Copy state to a local, non-reactive variable
			let localCount = countdown;

			for (let i = localCount; i > 0; i--) {
				await sleep(1000);
				localCount -= 1;
				countdown = localCount; // Update the UI state safely

				if (countdown === 0) {
					await goto(oldPages[pathname]);
				}
			}
		})();
	});
</script>

<svelte:head>
	<title>UCalgary Baja - {statusCode} Error</title>
</svelte:head>

<div>
	<h1>{statusCode}</h1>
	{#if statusCode === 301}
		<p>This page has moved</p>
		<p>Redirecting to desired page</p>
		<h2>{countdown}</h2>
	{:else}
		<p>{page.error.message}</p>
	{/if}
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		row-gap: 10px;

		background-color: white;
		min-height: 76svh;
	}

	h1 {
		background-color: inherit;
		margin: 0px;
	}

	p {
		background-color: inherit;
		margin: 0px;
	}

	h2 {
		margin: 0px;
		margin-top: 40px;
	}
</style>
