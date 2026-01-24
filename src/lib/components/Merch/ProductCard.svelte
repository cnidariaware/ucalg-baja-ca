<script>
	export let category = '';
	export let name = '';
	export let price = '';
	export let imageSrc = '';
	export let imageAlt = name ? `${name} picture` : 'Item picture';
</script>

<a href={'/merch/' + name}>
	<img src={imageSrc} alt={imageAlt} width="200" height="200" />
	<div>
		<p>{category}</p>
		<p>{name}</p>
		<p>${price}</p>
	</div>
</a>

<style>
	a {
		display: flex;
		flex-direction: column;

		justify-content: center;
		/* justify-content: space-between; */

		text-decoration: none;
		color: var(--BajaWhite);
		background-color: var(--BajaRed);
		box-shadow:
			0 4px 8px 0 rgba(0, 0, 0, 0.2),
			0 6px 20px 0 rgba(0, 0, 0, 0.19);
		border-radius: 1rem;
		padding: 1svw;
		padding-bottom: 3svh;
		/* margin: 4svh 2svw; */
		transition:
			transform 0.3s ease,
			box-shadow 0.3s ease;
		min-width: 240px;
		width: fit-content;

		&:hover {
			color: var(--BajaBlack);
			transform: scale(1.05);
			box-shadow:
				0 6px 16px rgba(0, 0, 0, 0.25),
				0 10px 28px rgba(0, 0, 0, 0.22);
		}

		p {
			margin: 0px;
			padding: 0px;
			text-decoration: none;
			color: inherit;
		}

		div {
			margin-top: 1svh;
			text-align: center;
		}

		img {
			display: block;
			width: 230px;
			height: 230px;
			object-fit: contain;
			background-color: grey;
			border-radius: 0.5rem;
			margin: 10px auto;
		}
	}

	/* small screens: single column */
	@media (max-width: 700px) {
		a {
			flex: 1 1 100%;
			max-width: 420px;
		}
	}
</style>
