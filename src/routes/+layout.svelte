<script>
	import '$lib/assets/global.css';
	import Top from '$lib/components/Top.svelte';
	import Bottom from '$lib/components/Bottom.svelte';

	let { children } = $props();
</script>

<Top />
{@render children?.()}
<Bottom />
