<script>
	import '$lib/assets/global.css';
	import Top from '$lib/components/Layout/Top.svelte';
	import Bottom from '$lib/components/Layout/Bottom.svelte';

	let { children } = $props();
</script>

<Top />
{@render children?.()}
<Bottom />
