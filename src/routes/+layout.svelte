<script>
	import '$lib/assets/global.css';
	import Top from '$lib/components/Layout/Top.svelte';
	import Bottom from '$lib/components/Layout/Bottom.svelte';
	import 'modern-normalize/modern-normalize.css';

	let { children } = $props();
</script>

<meta
	name="keywords"
	content="university calgary baja car uofc off-road car sae ucalgary offroad club"
/>
<!-- Please add your own if you worked on this site -->
<meta name="author" content="Brock Moffat" />

<Top />
{@render children?.()}
<Bottom />
