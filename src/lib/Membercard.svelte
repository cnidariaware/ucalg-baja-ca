<script>
	export let name = 'Name';
	export let role = 'Role';
	export let bio = 'Lorem ipsum dolor sit amet.';
	export let src = 'https://media.timeout.com/images/106150176/image.jpg';
	export let linkedin = '';
	import linkedin_img from '$lib/assets/bottom/linkedin.svg';
</script>

<div class="member-card">
	<div class="photo-wrap">
		<img {src} alt={name} />
		{#if linkedin}
			<a href={linkedin} target="_blank" rel="noopener noreferrer">
				<img src={linkedin_img} alt="LinkedIn" />
			</a>
		{/if}
	</div>
	<p>{name}</p>
	<p>{role}</p>
	<p>{bio}</p>
</div>

<style>
	.member-card {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		max-width: 280px;
		width: 100%;
		background: transparent;
	}

	.photo-wrap {
		position: relative;
		width: 160px;
		height: 160px;
		border-radius: 50%;
		overflow: hidden;
		margin-bottom: 1rem;
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
		background: transparent;
	}

	a {
		position: absolute;
		inset: 0;
		background: rgba(0, 0, 0, 0.6);
		display: flex;
		align-items: center;
		justify-content: center;
		opacity: 0;
		transition: opacity 0.2s ease;
		text-decoration: none;
	}

	a:hover {
		opacity: 1;
	}

	p:first-of-type {
		font-size: 22px;
		font-weight: 500;
		margin: 0;
		text-align: center;
		color: var(--BajaWhite);
		background: transparent;
	}

	p:nth-of-type(2) {
		font-size: 20px;
		margin: 0 0 0.5rem 0;
		text-align: center;
		color: var(--BajaWhite);
		background: transparent;
	}

	p:nth-of-type(3) {
		font-size: 16px;
		color: rgba(255, 255, 255, 0.6);
		text-align: center;
		margin: 0;
		background: transparent;
	}

	a > img {
		width: 32px;
		height: 32px;
		object-fit: contain;
		background: transparent;
	}
</style>
