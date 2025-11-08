<script>
	let {
		photos = [
			'https://media.timeout.com/images/106150176/image.jpg',
			'https://upload.wikimedia.org/wikipedia/commons/e/e7/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg',
			'https://www.wildnatureimages.com/images/640/070620-014-The-Tetons.jpg',
			'https://cdn.britannica.com/98/263098-138-87DCA742/why-are-mountains-so-tall.jpg?w=800&h=450&c=crop',
			'https://pictures.altai-travel.com/1920x1040/mount-everest-aerial-view-himalayas-istock-3745.jpg'
		]
	} = $props();

	let current_index = $state(0);
	let dialogOpen = $state(false);
	let selected = $state(null);

	function nextSet() {
		current_index = (current_index + 1) % photos.length;
	}

	function prevSet() {
		current_index = (current_index - 1 + photos.length) % photos.length;
	}

	function openDialog(image) {
		selected = image;
		dialogOpen = true;
		document.body.style.overflow = 'hidden';
	}

	function closeDialog() {
		dialogOpen = false;
		selected = null;
		document.body.style.overflow = '';
	}

	setInterval(() => {
		current_index = (current_index + 1) % photos.length;
	}, 5000);
</script>

<div class="gallery-container">
	<div class="gallery-row">
		<img
			src={photos[(current_index - 1 + photos.length) % photos.length]}
			alt=""
			class="main-photo"
			on:click={() => openDialog(photos[(current_index - 1 + photos.length) % photos.length])}
		/>
		<img
			src={photos[current_index]}
			alt="Gallery Image"
			class="main-photo"
			on:click={() => openDialog(photos[current_index])}
		/>
		<img
			src={photos[(current_index + 1) % photos.length]}
			alt="Gallery Image"
			class="main-photo"
			on:click={() => openDialog(photos[(current_index + 1) % photos.length])}
		/>
	</div>

	<div class="button-container">
		{#each photos as _, index}
			<button class:selected={index === current_index} on:click={() => (current_index = index)}
			></button>
		{/each}
	</div>
</div>

{#if dialogOpen}
	<dialog open class="image-dialog" on:click={closeDialog}>
		<div class="dialog-content" on:click|stopPropagation>
			<button class="close-btn" on:click={closeDialog}>✕</button>
			<img src={selected} alt="Full View" class="full-image" />
		</div>
	</dialog>
{/if}

<style>
	.gallery-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 16px;
		padding: 32px;
		border-radius: 20px;
	}

	.gallery-row {
		display: flex;
		justify-content: center;
		gap: 16px;
		width: 400px;
		height: 300px;
	}

	img {
		width: 400px;
		height: 300px;
		border-radius: 16px;
		object-fit: cover;
		margin-right: 10px;
	}

	.button-container {
		display: flex;
		gap: 12px;
		margin-top: 16px;
	}

	.button-container button {
		width: 20px;
		height: 20px;
		border-radius: 50%;
		border: 1px solid #ccc;
		background-color: #888;
		cursor: pointer;
		padding: 0;
	}

	.button-container button.selected {
		background-color: white;
		border-color: #888;
	}

	dialog.image-dialog {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.8);
		padding: 0;
		margin: 0;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.dialog-content {
		position: fixed;
		max-width: 90%;
		max-height: 90%;
	}

	.full-image {
		max-width: 100%;
		max-height: 100%;
		border-radius: 10px;
	}

	.close-btn {
		position: absolute;
		top: 0px;
		right: 0px;
		color: rgb(0, 0, 0);
		font-size: 18px;
		cursor: pointer;
		background: none;
		border: none;
		justify-content: right;
		margin-right: 10px;
	}
</style>
