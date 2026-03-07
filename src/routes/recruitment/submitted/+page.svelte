<script>
	const handleExit = () => {
		window.location.href = '/';
	};
</script>

<title>UCalgary Baja - Form Sucessfully Submitted</title>

<main>
	<section>
		<h1>Your Response has been Submitted!</h1>
		<p>Check your email for a confirmation and UCalgary Baja will reach out for further details!</p>

		<button onclick={handleExit}> Return to Homepage </button>
	</section>
</main>

<style>
	main {
		min-height: 100vh;
		background: #ffffff;
		color: #000000;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 4svh 4svw;
	}

	section {
		text-align: center;
	}

	h1 {
		font-size: 3rem;
		margin-bottom: 1rem;
	}

	p {
		font-size: 1.5rem;
		line-height: 1.5;
		margin-bottom: 3rem;
	}
	h1,
	p {
		white-space: nowrap;
	}
	button {
		border-radius: 10px;
		background-color: var(--BajaRed);
		border-color: transparent;
		margin: 1svh 0svw;
		padding: 1svh 1svw;
		font-size: large;
		color: #ffffff;
		min-width: 15svw;
	}

	button:hover {
		background-color: var(--BajaHover);
		color: black;
	}

	@media (max-width: 800px) {
		h1 {
			font-size: 1.8rem;
		}

		p {
			font-size: 0.95rem;
		}

		h1,
		p {
			white-space: normal;
		}
	}
</style>
