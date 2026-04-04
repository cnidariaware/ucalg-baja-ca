<!-- <script>
	let { children, backgroundColour, rowGap, paddingTopBottom, textColour = 'revert' } = $props();
	import BrushStroke from '$lib/assets/TransparentBrushStroke.png';
</script>

<img src={BrushStroke} alt="" />

<div
	style:background-color={`var(${backgroundColour})`}
	style:background-image={BrushStroke}
	style="padding: {paddingTopBottom} 0svw;"
>
	<div style:row-gap={rowGap} style:color={textColour}>
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

	img {
		background-color: var(--BajaBlack);
		width: 95rem;
		height: 60rem;
		max-width: 100%;
	}
</style> -->

<script>
	// Accept the new backgroundImage prop
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
	class="bg-wrapper"
	style:background-color={`var(${backgroundColour})`}
	style:background-image={backgroundImage ? `url(${backgroundImage})` : 'none'}
	style="padding: {paddingTopBottom} 0svw;"
>
	<div class="content" style:row-gap={rowGap} style:color={`var(${textColour}, ${textColour})`}>
		{@render children?.()}
	</div>
</div>

<style>
	.bg-wrapper {
		display: flex;
		align-items: center;
		flex-direction: column;

		/* These ensure the brush stroke acts as a proper backdrop */
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover; /* Change to 'contain' if you don't want it to stretch */
	}

	.content {
		max-width: 96svw;
		padding: 1svb 0svw;
		display: flex;
		align-items: center;
		flex-direction: column;

		/* Forces the content to sit on top of the background */
		position: relative;
		z-index: 1;
	}
</style>
