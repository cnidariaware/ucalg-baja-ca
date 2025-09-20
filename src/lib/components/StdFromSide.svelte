<script>
	let { children, backgroundColour, columnGap } = $props();
	$inspect(backgroundColour);
</script>

<div style:background-color={`var(${backgroundColour})`} style:column-gap={columnGap}>
	<div>
		{@render children?.()}
	</div>
</div>

<style>
	div {
		display: flex;
		align-items: center;
		flex-direction: column;
		padding: 1svb 0svw;
	}
	div > div {
		max-width: 80svw;
	}
</style>
