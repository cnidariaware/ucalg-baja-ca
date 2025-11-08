<script>
	let photos = [
		'https://media.timeout.com/images/106150176/image.jpg',
		'https://upload.wikimedia.org/wikipedia/commons/e/e7/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg',
		'https://www.wildnatureimages.com/images/640/070620-014-The-Tetons.jpg',
		'https://cdn.britannica.com/98/263098-138-87DCA742/why-are-mountains-so-tall.jpg?w=800&h=450&c=crop',
		'https://pictures.altai-travel.com/1920x1040/mount-everest-aerial-view-himalayas-istock-3745.jpg'
	];

	let current_index = $state(0);
	let selected = $derived(photos[current_index]); //the displayed image

	function nextset() {
		current_index += 1;
	}

	function lastset() {
		current_index -= 1;
	}
</script>

<div class="gallery-container">
	<div class="gallery-row">
		{#each photos.slice(current_index, current_index + 3) as photo, index}
			<img src={selected} alt="Selected thing" class="main-photo" />
		{/each}
	</div>

	<div>
		<button
			onclick={() => {
				current_index = index;
			}}
		></button>
	</div>

	<div class="button-container">
		<button onclick={prevSet}>prev</button>
		<button onclick={nextSet}>next</button>
	</div>
</div>

<div class="gallery-container">
	<div class="gallery-row">
		{#each photos.slice(currentIndex, currentIndex + 3) as photo}
			<img
				src={photo}
				alt="Gallery photo"
				class:selected={photo === selected}
				onclick={() => selectPhoto(photo)}
			/>
		{/each}
	</div>

	<div class="button-container">
		<button on:click={prevSet}>prev</button>
		<button on:click={nextSet}>next</button>
	</div>
</div>

<style>
	.gallery-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 32px;
		padding: 64px;
		background-color: 32px;
		border-radius: 20px;
	}

	.main-photo {
		width: 680px;
		height: 368px;
		border-radius: 16px;
		object-fit: cover;
		display: block;
		margin: 0 auto;
	}

	.button-container {
		display: flex;
		justify-content: center;
		gap: 8px;
		margin-top: 8px;
	}

	button {
		width: 30px;
		height: 30px;
		border: 2px;
		border-radius: 50%;
		cursor: pointer;
		font-weight: 600;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
