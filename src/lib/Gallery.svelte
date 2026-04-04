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

	/**
	 * @param {number} step - the number of positions to move the gallery
	 * @returns {null} - This funcion doesn't return a value, itupdates current index
	 * @description Updates the current index based on the provided step and wraps around if it reaches the max, positive moves right and negative is left
	 * @author Aarsh Trivedi <aarshtrivedi07@gmail.com>
	 */
	function changeSet(step) {
		// changes the current index according to the direction inputted, the + photos.length
		// makes sure its positive and the % photos.length makes sure it wraps around
		current_index = (current_index + step + photos.length) % photos.length;
	}

	/**
	 * @param {string} image - the image URL to display when opening the image
	 * @returns {null} - does not return anything
	 * @description - Opens or closses the dialog, stops the timer when the dialog is open, starts it back up when its closed
	 * @author Aarsh Trivedi <aarshtrivedi07@gmail.com>
	 */
	function toggleDialog(image) {
		// sets to not open
		dialogOpen = !dialogOpen;
		// if the image is opened, it will clear out the timer, making sure the images dont rotate
		if (dialogOpen === true) {
			selected = image;
			clearTimeout(rotateTimer);
			// similarly this will make sure that the timer starts back up when the dialog is closed
		} else {
			selected = 0;
			startTimer();
		}
	}

	let rotateTimer;

	/**
	 * @param {event} event - does not take in an input
	 * @returns {null} - This funcion doesn't return anything
	 * @description - Starts the timer again, clearing any previous timers
	 * @author Aarsh Trivedi <aarshtrivedi07@gmail.com>
	 */
	function startTimer() {
		// stops any timer running prior
		clearTimeout(rotateTimer);
		// sets a new timer when the images are moved, and restart the timer
		rotateTimer = setTimeout(() => {
			changeSet(1);
			startTimer();
		}, 5000);
	}

	startTimer();

	let touchstart_horizontal = 0;
	let touchend_horizontal = 0;

	/**
	 * @param {event} event - takes the starting value when the screen is touched
	 * @returns {null} - This funcion doesn't return anything
	 * @description - records the starting horizontal position for swipe detection
	 * @author Aarsh Trivedi <aarsh.trivedi@ucalgary.ca>
	 */
	function handleTouchStart(event) {
		// stores the starting position of the swipe
		touchstart_horizontal = event.touches[0].clientX;
	}

	/**
	 * @param {event} event - takes the event at which the finger mves across the screen
	 * @returns {null} - This funcion doesn't return anything
	 * @description - tracks the finger movement during the swipe to calculate distance
	 * @author Aarsh Trivedi <aarsh.trivedi@ucalgary.ca>
	 */
	function handleTouchMove(event) {
		// stores the swipe distance
		touchend_horizontal = event.touches[0].clientX;
	}

	/**
	 * @param {null} - This function does not take in an input
	 * @returns {null} - This funcion doesn't return anything
	 * @description - runs after the user lifts their finger, if the distance is greater than
	 * the set amoutn it counts it as a swipe and moves the images left or right, then resets the timer
	 * @author Aarsh Trivedi <aarsh.trivedi@ucalgary.ca>
	 */
	function handleTouchEnd() {
		// finds the difference between the start and end positions, giving the direction
		const horizontal_change = touchend_horizontal - touchstart_horizontal;
		// makes sure it only works if it is a proper swipe and not an accidental swipe
		if (Math.abs(horizontal_change) > 30) {
			// using the deirection, it will move left or right
			changeSet(horizontal_change < 0 ? 1 : -1);
			// resets the timer
			startTimer();
		}
	}
</script>

<div
	role="region"
	aria-label="Image gallery, swipe left or right to navigate images"
	ontouchstart={handleTouchStart}
	ontouchmove={handleTouchMove}
	ontouchend={handleTouchEnd}
>
	<div>
		<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
		<!-- svelte-ignore a11y_click_events_have_key_events -->

		<img
			src={photos[(current_index - 1 + photos.length) % photos.length].src}
			alt={photos[(current_index - 1 + photos.length) % photos.length].alt}
			onclick={() => toggleDialog(photos[(current_index - 1 + photos.length) % photos.length].src)}
		/>

		<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
		<!-- svelte-ignore a11y_click_events_have_key_events -->
		<img
			src={photos[current_index].src}
			alt={photos[current_index].alt}
			onclick={() => toggleDialog(photos[current_index].src)}
		/>

		<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
		<!-- svelte-ignore a11y_click_events_have_key_events -->
		<img
			src={photos[(current_index + 1) % photos.length].src}
			alt={photos[(current_index + 1) % photos.length].alt}
			onclick={() => toggleDialog(photos[(current_index + 1) % photos.length].src)}
		/>
	</div>

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
</div>

{#if dialogOpen}
	<dialog open onclick={() => toggleDialog()}>
		<a
			href="/"
			onclick={(e) => {
				e.preventDefault();
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
		</a>
	</dialog>
{/if}

<style>
	div:first-of-type {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 16px;
		padding: 5px;
		border-radius: 20px;
	}

	div:first-of-type > div:first-child {
		display: flex;
		justify-content: center;
		flex-direction: row;
		gap: 16px;
		overflow: hidden;
		width: 100%;
		max-width: 400px;
		height: 300px;
	}

	div:first-of-type > div:first-child > img {
		flex: 0 0 90%;
		max-width: 100%;
		height: 100%;
		border-radius: 16px;
		object-fit: cover;
	}

	div:first-of-type > div:first-child > img:nth-child(odd) {
		flex: 0 0 15%;
		max-width: 15%;
		opacity: 0.8;
	}

	@media (min-width: 950px) {
		div:first-of-type > div:first-child > img {
			flex: 0 0 33%;
			max-width: 33%;
		}

		div:first-of-type > div:first-child > img:nth-child(odd) {
			flex: 0 0 33%;
			max-width: 33%;
			opacity: 1;
		}

		div:first-of-type > div:first-child {
			max-width: 1200px;
		}
	}

	div:nth-child(2) {
		display: flex;
		gap: 12px;
		margin-top: 16px;
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
		background: rgba(
			0,
			0,
			0,
			0.6
		); /* or higher opacity like 0.7–0.8 to hide footer better visually */
	}

	dialog a {
		display: block;
		position: fixed;
		max-width: 80%;
		height: 80%;
		margin: auto;
		margin-bottom: 5svh;
		text-align: center;
	}

	dialog > a > img {
		max-height: 100%;
		max-width: 100%;
		border-radius: 10px;
		object-fit: contain;
		box-sizing: content-box;
		background-repeat: no-repeat;
		background-size: cover;
	}

	@media (max-width: 950px) {
		dialog button {
			max-height: 90svw;
			max-width: 90svw;
		}

		dialog img {
			width: 100%;
			height: auto;
		}

		dialog a {
			height: revert;
		}

		dialog button {
			top: 11%;
			right: 11%;
			font-size: 16px;
		}
	}

	dialog button {
		position: absolute;
		top: 3%;
		right: 2%;
		color: rgb(0, 0, 0);
		font-size: 18px;
		cursor: pointer;
		border: none;
		justify-content: right;
		background-color: rgb(240, 255, 255, 0.3);
		border-radius: 50%;
	}
</style>
