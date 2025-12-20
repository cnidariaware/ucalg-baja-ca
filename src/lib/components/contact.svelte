<script>
	import { resolve } from '$app/paths';

	let name = $state('');
	let email = $state('');
	let message = $state('');
	let isButtonDisabled = $state(false);
	let submitText = $state('Submit');
	/**
	 * @param e Event
	 * @return none
	 * @description Handles form submission by sending the form data to a Discord webhook. Disables the submit button while processing and resets the form after submission.
	 * @author Siddharth Engineer <siddharthengineer24@gmail.com>
	 */
	async function formSubmit(e) {
		e.preventDefault();
		isButtonDisabled = true;
		submitText = 'Loading..';
		const payload = {
			content:
				`***New Message***\n` +
				`*Name*: ${name}\n` +
				`*Email*: [${email}](mailto:${email})\n` +
				`*Message*: ${message}`
		};
		try {
			await fetch(
				'https://discord.com/api/webhooks/1393689764888182794/1pLu0Kup643V9wetwb9jzo-QIkoy4qqY5ES_LwwCZrDugLGO5Xaj2F7Ioy39qNIz1XYo',
				{
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify(payload)
				}
			);
		} finally {
			await new Promise((resolve) => setTimeout(resolve, 5000)).then(() => {
				name = '';
				email = '';
				message = '';
			});
			isButtonDisabled = false;
			submitText = 'Submit';
		}
	}
</script>

<form onsubmit={(e) => formSubmit(e)}>
	<label for="Name">Name</label>
	<input name="Name" bind:value={name} required />

	<label for="Email">Email</label>
	<input name="Email" type="email" bind:value={email} required />

	<label for="Message">Message</label>
	<textarea name="Message" bind:value={message} required></textarea>

	<input type="hidden" name="redirect" value={resolve('/thank-you')} />

	<span></span>

	<button type="submit" disabled={isButtonDisabled}>
		{submitText}
	</button>
</form>

<style>
	form {
		display: flex;
		flex-direction: column;
		align-items: start;
		justify-content: center;
		background-color: var(--BajaBlack);
		margin-left: auto;
		margin-right: auto;
		width: 600px;
	}

	/* FORM ELEMENT STYLING */
	label {
		margin: 0svh 0.25svw;
		color: var(--BajaWhite);
	}

	/* Inputs */
	input {
		background-color: var(--card-background-color);
		border-radius: var(--card-border-radius);
		border-color: rgba(245, 245, 245, 0.5);
		border-width: 2px;
		padding: 1svh 1ch;
		margin: 1svh 0svw;
		color: var(--BajaWhite);
		align-items: start;
		width: 100%;
		box-sizing: border-box;
	}

	/* Textareas */
	textarea {
		background-color: var(--card-background-color);
		border-radius: var(--card-border-radius);
		border-color: rgba(245, 245, 245, 0.4);
		border-width: 2px;
		padding: 1svh 1ch;
		margin: 1svh 0svw;
		color: var(--BajaWhite);
		align-items: start;
		min-height: 15svh;
		width: 100%;
		box-sizing: border-box;
	}

	/* Submit button */
	button {
		border-radius: var(--card-border-radius);
		color: var(--BajaWhite);
		background-color: var(--BajaRed);
		border-color: transparent;
		align-items: start;
		margin: 1svh 0svw;
		padding: 1svh 0svw;
		font-size: large;
		width: 100%;
	}
	button:hover {
		cursor: pointer;
		background-color: var(--BajaHover);
	}

	/* Spacer element */
	span {
		border-radius: var(--card-border-radius);
		border-color: rgba(245, 245, 245, 0.5);
		border-width: 2px;
		padding: 1svh 0.25svw;
		margin: 1svh 0.5svw;
		color: inherit;
		align-items: start;
	}
</style>
