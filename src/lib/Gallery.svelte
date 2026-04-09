<script>
	let {
		photos = [
			{
				src: 'https://media.timeout.com/images/106150176/image.jpg',
				alt: 'enter description of photo 1'
			},
			{
				src: 'https://upload.wikimedia.org/wikipedia/commons/e/e7/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg',
				alt: 'enter description of photo 2'
			},
			{
				src: 'https://www.wildnatureimages.com/images/640/070620-014-The-Tetons.jpg',
				alt: 'enter description of photo 3'
			},
			{
				src: 'https://cdn.britannica.com/98/263098-138-87DCA742/why-are-mountains-so-tall.jpg?w=800&h=450&c=crop',
				alt: 'enter description of photo 4'
			},
			{
				src: 'https://pictures.altai-travel.com/1920x1040/mount-everest-aerial-view-himalayas-istock-3745.jpg',
				alt: 'enter description of photo 5'
			}
		],
		singleMode = false,
		forcedRatio = false,
		contained = false
	} = $props();

	let current_index = $state(0);
	let dialogOpen = $state(false);
	let selected = $state(0);

	function changeSet(step) {
		current_index = (current_index + step + photos.length) % photos.length;
	}

	function toggleDialog(image) {
		dialogOpen = !dialogOpen;
		if (dialogOpen === true) {
			selected = image;
			clearTimeout(rotateTimer);
		} else {
			selected = 0;
			startTimer();
		}
	}

	let rotateTimer;

	function startTimer() {
		clearTimeout(rotateTimer);
		rotateTimer = setTimeout(() => {
			changeSet(1);
			startTimer();
		}, 5000);
	}

	startTimer();

	let touchstart_horizontal = 0;
	let touchend_horizontal = 0;

	function handleTouchStart(event) {
		touchstart_horizontal = event.touches[0].clientX;
	}

	function handleTouchMove(event) {
		touchend_horizontal = event.touches[0].clientX;
	}

	function handleTouchEnd() {
		const horizontal_change = touchend_horizontal - touchstart_horizontal;
		if (Math.abs(horizontal_change) > 30) {
			changeSet(horizontal_change < 0 ? 1 : -1);
			startTimer();
		}
	}
</script>

<div
	role="region"
	aria-label="Image gallery, swipe left or right to navigate images"
	class:contained
	ontouchstart={handleTouchStart}
	ontouchmove={handleTouchMove}
	ontouchend={handleTouchEnd}
>
	<div
		class:single-mode={singleMode}
		class:multi-mode={!singleMode}
		style={forcedRatio ? `aspect-ratio: ${forcedRatio}; height: auto;` : ''}
	>
		{#if !singleMode}
			<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
			<!-- svelte-ignore a11y_click_events_have_key_events -->
			<img
				class="side-image"
				src={photos[(current_index - 1 + photos.length) % photos.length].src}
				alt={photos[(current_index - 1 + photos.length) % photos.length].alt}
				onclick={() =>
					toggleDialog(photos[(current_index - 1 + photos.length) % photos.length].src)}
			/>
		{/if}

		<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
		<!-- svelte-ignore a11y_click_events_have_key_events -->
		<img
			class="main-image"
			src={photos[current_index].src}
			alt={photos[current_index].alt}
			onclick={() => toggleDialog(photos[current_index].src)}
		/>

		{#if !singleMode}
			<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
			<!-- svelte-ignore a11y_click_events_have_key_events -->
			<img
				class="side-image"
				src={photos[(current_index + 1) % photos.length].src}
				alt={photos[(current_index + 1) % photos.length].alt}
				onclick={() => toggleDialog(photos[(current_index + 1) % photos.length].src)}
			/>
		{/if}
	</div>

	{#if photos.length > 1}
		<div>
			{#each photos as _, index}
				<button
					class:selected={index === current_index}
					onclick={() => {
						current_index = index;
						startTimer();
					}}>x</button
				>
			{/each}
		</div>
	{/if}
</div>

{#if dialogOpen}
	<dialog open onclick={() => toggleDialog()}>
		<!-- svelte-ignore a11y_click_events_have_key_events -->
		<!-- svelte-ignore a11y_no_static_element_interactions -->
		<div
			onclick={(e) => {
				e.stopPropagation();
			}}
		>
			<button
				class="close-btn"
				onclick={(e) => {
					e.preventDefault();
					e.stopPropagation();
					toggleDialog();
				}}>✕</button
			>
			<img src={selected} alt="Full View" class="full-image" />
		</div>
	</dialog>
{/if}

<style>
	/* ── Default (standalone) mode ── */
	div:first-of-type {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 16px;
		padding: 5px;
		border-radius: 20px;
		width: 100%;
		box-sizing: border-box;
	}

	div:first-of-type > div:first-child {
		display: flex;
		justify-content: center;
		flex-direction: row;
		gap: 16px;
		width: 100%;
		max-width: 400px;
	}

	div:first-of-type > div:first-child.single-mode {
		max-width: 100%;
	}

	div:first-of-type > div:first-child.multi-mode {
		max-width: 400px;
	}

	@media (min-width: 950px) {
		div:first-of-type > div:first-child.single-mode {
			max-width: 1200px;
		}

		div:first-of-type > div:first-child.multi-mode {
			max-width: 1200px;
		}

		div:first-of-type > div:first-child.multi-mode > img.main-image {
			flex: 0 0 32%;
			max-width: 32%;
		}

		div:first-of-type > div:first-child.multi-mode > img.side-image {
			flex: 0 0 32%;
			max-width: 32%;
		}
	}

	div:first-of-type.contained {
		padding: 0;
		gap: 6px;
		height: 100%;
	}

	div:first-of-type.contained > div:first-child {
		width: 100%;
		max-width: 100%;
		height: auto;
		flex: 1 1 0;
		min-height: 0;
	}
	div:first-of-type.contained > div:first-child > img.main-image {
		width: 100%;
	}

	div:first-of-type > div:first-child[style] {
		width: 100%;
		max-width: 100%;
		height: auto;
		flex: 0 0 auto;
	}

	div:first-of-type > div:first-child > img {
		max-width: 100%;
		height: 100%;
		border-radius: 16px;
		object-fit: cover;
	}

	div:first-of-type > div:first-child > img.main-image {
		flex: 0 0 100%;
		width: 100%;
		max-width: 100%;
	}

	div:first-of-type > div:first-child > img.side-image {
		flex: 0 0 15%;
		max-width: 15%;
		opacity: 0.8;
	}

	div:nth-child(2) {
		display: flex;
		gap: 12px;
		margin-top: 4px;
		flex-shrink: 0;
	}

	div:nth-child(2) button {
		width: 25px;
		height: 25px;
		color: rgba(0, 0, 0, 0);
		border-radius: 50%;
		border: 2px solid #ccc;
		background-color: transparent;
		cursor: pointer;
		padding: 0;
	}

	div:nth-child(2) .selected {
		background-color: rgba(255, 255, 255, 0.7);
		border-color: #888;
	}

	dialog {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.5);
		padding: 0;
		margin: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		border: none;
	}

	dialog::backdrop {
		background: rgba(0, 0, 0, 0.6);
	}

	dialog div {
		display: flex;
		position: relative;
		max-width: 80%;
		max-height: 80vh;
		margin: auto;
		text-align: center;
		align-items: center;
		justify-content: center;
	}

	dialog > div > img {
		max-height: 80vh;
		max-width: 100%;
		border-radius: 10px;
		object-fit: contain;
	}

	dialog button {
		position: absolute;
		top: -16px;
		right: -16px;
		width: 32px;
		height: 32px;
		color: rgb(0, 0, 0);
		font-size: 16px;
		cursor: pointer;
		border: none;
		background-color: rgba(240, 255, 255, 0.8);
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 10;
	}

	@media (max-width: 950px) {
		dialog div {
			max-width: 90svw;
		}

		dialog img {
			width: 100%;
			height: auto;
		}

		.side-image {
			display: none;
		}
	}
</style>
