<script>
	let name = '';
	let email = '';
	let message = '';
	let isButtonDisabled = false;
	let submitText = 'Submit';
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
			isButtonDisabled = false;
			submitText = 'Submit';
		}
	}
</script>

<form on:submit|preventDefault={(e) => formSubmit(e)}>
	<label>Name</label>
	<input name="Name" bind:value={name} required />

	<label>Email</label>
	<input name="Email" type="email" bind:value={email} required />

	<label>Message</label>
	<textarea name="Message" bind:value={message} required></textarea>

	<span></span>

	<button id="ContactUsSubmit" type="submit" disabled={isButtonDisabled}>
		{submitText}
	</button>
</form>

<style>
	/* ROOT VARIABLES */
	:root {
		--card-background-color: rgba(38, 38, 38, 0.5);
		--card-border-radius: 0.5rem;
	}

	/* FORM ELEMENT STYLING */
	label {
		margin: 0svh 0.25svw;
	}

	/* Inputs */
	input {
		background-color: var(--card-background-color);
		border-radius: var(--card-border-radius);
		border-color: rgba(245, 245, 245, 0.5);
		border-width: 2px;
		padding: 1svh 1ch;
		margin: 1svh 0svw;
		color: inherit;
		align-items: start;
	}

	/* Textareas */
	textarea {
		background-color: var(--card-background-color);
		border-radius: var(--card-border-radius);
		border-color: rgba(245, 245, 245, 0.4);
		border-width: 2px;
		padding: 1svh 1ch;
		margin: 1svh 0svw;
		color: inherit;
		align-items: start;
		min-height: 15svh;
	}

	/* Submit button */
	button {
		border-radius: var(--card-border-radius);
		color: inherit;
		background-color: var(--BajaRed);
		border-color: transparent;
		align-items: start;
		margin: 1svh 0svw;
		padding: 1svh 0svw;
		font-size: large;
	}
	button:hover {
		cursor: pointer;
		background-color: var(--BajaHover);
	}

	/* Spacer element */
	span {
		background-color: var(--card-background-color);
		border-radius: var(--card-border-radius);
		border-color: rgba(245, 245, 245, 0.5);
		border-width: 2px;
		padding: 1svh 0.25svw;
		margin: 1svh 0.5svw;
		color: inherit;
		align-items: start;
	}
</style>
