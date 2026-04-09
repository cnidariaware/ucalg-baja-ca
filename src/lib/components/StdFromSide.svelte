<script>
	let {
		children,
		backgroundColour,
		rowGap,
		paddingTopBottom,
		textColour = 'revert',
		backgroundImage
	} = $props();
</script>

<div
	style:background-color={`var(${backgroundColour})`}
	style:background-image={backgroundImage ? `url(${backgroundImage})` : 'none'}
	style="padding: {paddingTopBottom} 0svw;"
>
	<div style:row-gap={rowGap} style:color={'var(' + textColour + ')'}>
		{@render children?.()}
	</div>
</div>

<style>
	div {
		display: flex;
		align-items: center;
		flex-direction: column;

		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
	}

	div > div {
		max-width: 96svw;
		padding-top: 2rem;
		padding-bottom: 1rem;
		display: flex;
		align-items: center;
		flex-direction: column;

		position: relative;
		z-index: 1;
	}
</style>
