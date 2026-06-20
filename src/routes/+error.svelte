<script>
	import { page } from '$app/state';

	// $inspect(page.error.message);

	const oldPages = ['contactus', 'Contact', 'About', 'Vehicles', 'OurSponsors'];

	const statusCode = page.url.pathname.replace('/', '') in oldPages ? page.status : 301;

	let countdown = $state(5);
</script>

<svelte:head>
	<title>UCalgary Baja - Home</title>
</svelte:head>

<div>
	<h1>{statusCode}</h1>
	{#if statusCode === 301}
		<p>Redirecting to Page</p>
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
