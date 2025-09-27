<script>
	let { children, backgroundColour, rowGap, paddingTopBottom } = $props();
</script>

<div style:background-color={`var(${backgroundColour})`} style="padding: {paddingTopBottom} 0svw;">
	<div style:row-gap={rowGap}>
		{@render children?.()}
	</div>
</div>

<style>
	div {
		display: flex;
		align-items: center;
		flex-direction: column;
	}
	div > div {
		max-width: 96svw;
		padding: 1svb 0svw;
	}
</style>
