<script>
	const handleExit = () => {
		window.location.href = '/';
	};
</script>

<title>UCalgary Baja - Order Successfully Placed</title>

<main>
	<section>
		<h1>Order Placed Successfully!</h1>
		<p>UCalgary Baja will reach out with order confrimation, further details and payment.</p>

		<button onclick={handleExit}> Exit </button>
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
		max-width: 640px;
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

	button {
		border-radius: 10px;
		background-color: var(--BajaRed);
		border-color: transparent;
		align-items: start;
		margin: 1svh 0svw;
		padding: 1svh 0svw;
		font-size: large;
		color: #ffffff;
		min-width: 15svw;
	}

	button:hover {
		background-color: var(--BajaHover);
		color: black;
	}

	@media (max-width: 600px) {
		h1 {
			font-size: 1.8rem;
		}
		p {
			font-size: 0.95rem;
		}
	}
</style>
