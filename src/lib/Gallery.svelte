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
		]
	} = $props();

	let current_index = $state(0);
	let dialogOpen = $state(false);
	let selected = $state(0);

	// function nextSet() {
	// 	current_index = (current_index + 1) % photos.length;
	// }

	// function prevSet() {
	// 	current_index = (current_index - 1 + photos.length) % photos.length;
	// }

	function changeSet(step) {
		current_index = (current_index + step + photos.length) % photos.length;
	}

	function openDialog(image) {
		selected = image;
		dialogOpen = true;
		clearTimeout(rotateTimer);
	}

	function closeDialog() {
		dialogOpen = false;
		selected = 0;
		startTimer();
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
</script>

<div class="gallery-container">
	<div class="gallery-row">
		<img
			src={photos[(current_index - 1 + photos.length) % photos.length].src}
			class="main-photo"
			alt={photos[(current_index - 1 + photos.length) % photos.length].alt}
			onclick={() => openDialog(photos[(current_index - 1 + photos.length) % photos.length].src)}
		/>
		<img
			src={photos[current_index].src}
			class="main-photo"
			alt={photos[current_index].alt}
			onclick={() => openDialog(photos[current_index].src)}
		/>
		<img
			src={photos[(current_index + 1) % photos.length].src}
			class="main-photo"
			alt={photos[(current_index + 1) % photos.length].alt}
			onclick={() => openDialog(photos[(current_index + 1) % photos.length].src)}
		/>
	</div>

	<div>
		{#each photos as _, index}
			<button
				class:selected={index === current_index}
				onclick={() => {
					current_index = index;
					startTimer();
				}}
			></button>
		{/each}
	</div>
</div>

{#if dialogOpen}
	<dialog open onclick={closeDialog}>
		<div>
			<button onclick={closeDialog}>✕</button>
			<img id="window-image" src={selected} alt="Full View" class="full-image" />
		</div>
	</dialog>
{/if}

<style>
	div:first-of-type {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 16px;
		padding: 32px;
		border-radius: 20px;
	}

	div:first-of-type > div:first-child {
		display: flex;
		justify-content: center;
		flex-direction: row;
		gap: 16px;
		width: 400px;
		height: 300px;
	}

	div:first-of-type > div:first-child > img {
		width: 400px;
		height: 300px;
		border-radius: 16px;
		object-fit: cover;
		margin-right: 10px;
	}

	div div:nth-child(2) {
		display: flex;
		gap: 12px;
		margin-top: 16px;
	}

	div div:nth-child(2) button {
		width: 25px;
		height: 25px;
		border-radius: 50%;
		border: 2px solid #ccc;
		background-color: var(--BajaBlack);
		cursor: pointer;
		padding: 0;
	}

	div div:nth-child(2) .selected {
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
	}

	dialog div {
		position: fixed;
		max-width: 90%;
		max-height: 90%;
	}

	dialog #window-image {
		height: 80svh;
		width: 120svh;
		border-radius: 10px;
	}

	dialog button {
		position: absolute;
		top: 32px;
		right: 32px;
		color: rgb(0, 0, 0);
		font-size: 20px;
		cursor: pointer;
		border: none;
		justify-content: right;
		background-color: rgb(240, 255, 255, 0.3);
		border-radius: 50%;
	}
</style>
