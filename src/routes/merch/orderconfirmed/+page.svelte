<script>
	const handleExit = () => {
		window.location.href = '/';
	};
</script>

<title>UCalgary Baja - Order Successfully Placed</title>

<main class="order-success-page">
	<section class="order-card">
		<h1>Order Placed Successfully!</h1>
		<p>UCalgary Baja will reach out with order confrimation, further details and payment.</p>

		<button class="exit-btn" onclick={handleExit}> Exit </button>
	</section>
</main>

<style>
	.order-success-page {
		min-height: 100vh;
		background: #ffffff;
		color: #000000;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 4svh 4svw;
	}

	.order-card {
		text-align: center;
		max-width: 640px;
	}

	.order-card h1 {
		font-size: 3rem;
		margin-bottom: 1rem;
	}

	.order-card p {
		font-size: 1.5rem;
		line-height: 1.5;
		margin-bottom: 3rem;
	}

	.exit-btn {
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

	.exit-btn:hover {
		background-color: var(--BajaHover);
		border-color: var(--BajaBlack);
		color: black;
	}

	@media (max-width: 600px) {
		.order-card h1 {
			font-size: 1.8rem;
		}
		.order-card p {
			font-size: 0.95rem;
		}
	}
</style>
