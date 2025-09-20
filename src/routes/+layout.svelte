<script>
	import favicon from "$lib/assets/favicon.ico";
	let { children } = $props();
	import "$lib/assets/global.css";
	import Top from "$lib/components/Top.svelte";
	import Bottom from "$lib/components/Bottom.svelte"
</script>

<!-- <svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>
<Top />
{@render children?.()}
<Bottom />
