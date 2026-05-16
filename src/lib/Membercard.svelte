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
			<a href={linkedin} target="_blank" rel="noopener noreferrer" class="overlay">
				<img src={linkedin_img} alt="LinkedIn" class="linkedin-icon" />
			</a>
		{/if}
	</div>
	<p class="name">{name}</p>
	<p class="role">{role}</p>
	<p class="bio">{bio}</p>
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

	.overlay {
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

	.overlay:hover {
		opacity: 1;
	}

	.overlay-text {
		color: white;
		font-size: 14px;
		font-weight: 500;
		letter-spacing: 0.03em;
		text-align: center;
		background: transparent;
	}

	.name {
		font-size: 22px;
		font-weight: 500;
		margin: 0;
		text-align: center;
		color: var(--BajaWhite);
		background: transparent;
	}

	.role {
		font-size: 20px;
		margin: 0 0 0.5rem 0;
		text-align: center;
		color: var(--BajaWhite);
		background: transparent;
	}

	.bio {
		font-size: 16px;
		color: rgba(255, 255, 255, 0.6);
		text-align: center;
		margin: 0;
		background: transparent;
	}

	.linkedin-icon {
		width: 32px;
		height: 32px;
		object-fit: contain;
	}
</style>
